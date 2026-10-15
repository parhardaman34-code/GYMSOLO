const firebaseConfig = {
  apiKey: "AIzaSyC4j9HL682tsaJPvGK8fsqzJIMyUVrmhy8",
  authDomain: "gymsolo-52cc3.firebaseapp.com",
  projectId: "gymsolo-52cc3",
  storageBucket: "gymsolo-52cc3.firebasestorage.app",
  messagingSenderId: "345501487641",
  appId: "1:345501487641:web:de1454345918c02a805088",
  measurementId: "G-S1L5GFTN20"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
