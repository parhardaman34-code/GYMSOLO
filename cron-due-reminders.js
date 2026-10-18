// Vercel Serverless Function: Automated 2-Day Due WhatsApp Cron Daemon
// Triggered automatically by Vercel Cron daily at 04:00 UTC (09:30 AM IST)
// Or manually invoked via GET /api/cron-due-reminders

const FIREBASE_PROJECT_ID = 'gymsolo-52cc3';
const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

// Helper: Convert Firestore REST typed object into normal JS object
function unwrapFirestoreFields(fields) {
    if (!fields) return {};
    const obj = {};
    for (const key of Object.keys(fields)) {
        const val = fields[key];
        if ('stringValue' in val) obj[key] = val.stringValue;
        else if ('integerValue' in val) obj[key] = parseInt(val.integerValue, 10);
        else if ('doubleValue' in val) obj[key] = parseFloat(val.doubleValue);
        else if ('booleanValue' in val) obj[key] = val.booleanValue;
        else if ('mapValue' in val) obj[key] = unwrapFirestoreFields(val.mapValue.fields);
        else if ('arrayValue' in val) obj[key] = (val.arrayValue.values || []).map(v => Object.values(v)[0]);
        else obj[key] = null;
    }
    return obj;
}

module.exports = async (req, res) => {
    // Enable CORS for testing from admin portal
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const now = Date.now();
    const todayStr = new Date().toISOString().slice(0, 10);
    const executionLogs = [];

    try {
        // 1. Fetch Gym Branding & Gateway Settings from Firestore
        let gymBranding = {
            gymName: 'Target Gym',
            gymUpi: '',
            defaultFee: 1500,
            autoPilotEnabled: true,
            gatewayProvider: 'greenapi',
            greenApiInstance: '',
            greenApiToken: '',
            metaPhoneId: '',
            metaAccessToken: '',
            autoWhatsAppInstance: '',
            autoWhatsAppToken: ''
        };

        try {
            const brandingRes = await fetch(`${FIRESTORE_BASE}/gym_settings/branding`);
            if (brandingRes.ok) {
                const brandingDoc = await brandingRes.json();
                if (brandingDoc && brandingDoc.fields) {
                    gymBranding = Object.assign(gymBranding, unwrapFirestoreFields(brandingDoc.fields));
                }
            }
        } catch (e) {
            executionLogs.push(`Warning: Could not fetch branding doc, using defaults: ${e.message}`);
        }

        const gymName = gymBranding.gymName || 'Target Gym';

        if (gymBranding.autoPilotEnabled === false) {
            return res.status(200).json({
                success: true,
                message: 'Auto-Pilot is currently toggled OFF in gym settings.',
                timestamp: new Date().toISOString()
            });
        }

        // 2. Fetch Client Roster from Firestore
        let clientsList = [];
        try {
            const clientsRes = await fetch(`${FIRESTORE_BASE}/clients?pageSize=300`);
            if (clientsRes.ok) {
                const clientsData = await clientsRes.json();
                if (clientsData && clientsData.documents) {
                    clientsList = clientsData.documents.map(doc => {
                        const unwrapped = unwrapFirestoreFields(doc.fields);
                        unwrapped._docId = doc.name.split('/').pop();
                        return unwrapped;
                    });
                }
            }
        } catch (e) {
            executionLogs.push(`Warning: Could not query clients collection: ${e.message}`);
        }

        // If Firestore had 0 clients (demo fallback), simulate check
        if (clientsList.length === 0) {
            clientsList = [
                {
                    name: 'Rahul Sharma (Demo)',
                    phone: '919876543210',
                    membershipFee: 1500,
                    membershipStart: now - (28 * 24 * 60 * 60 * 1000),
                    membershipDuration: 30
                }
            ];
        }

        // 3. Filter Members Due in <= 2 Days
        const dueClients = [];
        for (const client of clientsList) {
            const start = client.membershipStart || (now - (28 * 24 * 60 * 60 * 1000));
            const dur = client.membershipDuration || 30;
            const expiryMs = start + (dur * 24 * 60 * 60 * 1000);
            const daysLeft = Math.ceil((expiryMs - now) / (24 * 60 * 60 * 1000));

            // Isolation criteria: due in 2 days, 1 day, 0 days, or grace period up to 2 days overdue
            if (daysLeft <= 2 && daysLeft >= -2) {
                dueClients.push({
                    client,
                    daysLeft,
                    expiryDateStr: new Date(expiryMs).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                });
            }
        }

        // 4. Dispatch Automated WhatsApp Reminders
        const dispatches = [];

        for (const item of dueClients) {
            const client = item.client;
            const daysLeft = item.daysLeft;
            const cleanPhone = (client.phone || '').replace(/\D/g, '') || '919876543210';
            const fee = client.membershipFee || client.fee || gymBranding.defaultFee || 1500;
            const upi = gymBranding.gymUpi || '';
            const upiIntent = upi 
                ? `upi://pay?pa=${encodeURIComponent(upi)}&pn=${encodeURIComponent(gymName)}&am=${fee}&cu=INR&tn=${encodeURIComponent(client.name + ' Gym Renewal')}`
                : '';

            const body = `🏋️ *${gymName.toUpperCase()} — 2-DAY MEMBERSHIP NOTICE* 🏋️\n\n` +
                         `Hi ${client.name}! 👋\n` +
                         `Friendly reminder: Your gym membership expires in *${daysLeft} DAY${daysLeft === 1 ? '' : 'S'}* (on *${item.expiryDateStr}*).\n\n` +
                         `Avoid any workout interruption by renewing in advance:\n` +
                         (upi ? `📲 *1-Tap Quick Pay (PhonePe/GPay/Paytm):*\n👉 ${upiIntent}\n\n💳 *Or Pay to UPI ID:* ${upi}\n💰 *Amount:* ₹${fee}\n\n` : `💰 *Renewal Amount:* ₹${fee}\n\n`) +
                         `🧾 *Instant Digital Receipt:* Once paid, reply *PAID* or share your payment screenshot to instantly generate your digital receipt.\n\n` +
                         `Have an awesome session today! 🚀💪\n— *${gymName} Desk*`;

            let dispatchStatus = { success: false, mode: 'WhatsApp Cloud Gateway', client: client.name, phone: cleanPhone };
            const instance = gymBranding.greenApiInstance || gymBranding.autoWhatsAppInstance;
            const token = gymBranding.greenApiToken || gymBranding.autoWhatsAppToken;
            if (instance && token) {
                try {
                    const cleanInst = instance.replace(/\D/g, '');
                    const endpoint = `https://api.green-api.com/waInstance${cleanInst}/sendMessage/${token}`;
                    const waRes = await fetch(endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chatId: `${cleanPhone}@c.us`,
                            message: body
                        })
                    });
                    const waData = await waRes.json();
                    dispatchStatus = {
                        success: true,
                        mode: 'WhatsApp Cloud Gateway',
                        client: client.name,
                        phone: cleanPhone,
                        apiResponse: waData
                    };
                } catch (e) {
                    dispatchStatus = { success: false, mode: 'WhatsApp Cloud', error: e.message, client: client.name };
                }
            } else {
                dispatchStatus = { success: false, mode: 'WhatsApp Cloud', error: 'WhatsApp Gateway credentials (idInstance & apiTokenInstance) not configured in gym settings.', client: client.name };
            }

            dispatches.push(dispatchStatus);
        }

        return res.status(200).json({
            success: true,
            status: 'Serverless Cron Executed Successfully 🚀',
            timestamp: new Date().toISOString(),
            date: todayStr,
            gymName: gymName,
            provider: provider,
            totalMembersChecked: clientsList.length,
            dueMembersCount: dueClients.length,
            dispatches: dispatches,
            executionLogs: executionLogs
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            stack: err.stack,
            timestamp: new Date().toISOString()
        });
    }
};
