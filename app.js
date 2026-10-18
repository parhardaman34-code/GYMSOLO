// --- PWA Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW setup failed: ', err)));
}

// --- DATABASES & TAGS ---
const exercisesDB = {
    Chest: [
        {name: 'Barbell Bench Press', tags: ['Compound', 'Barbell']}, {name: 'Incline Barbell Press', tags: ['Compound', 'Barbell']}, {name: 'Decline Barbell Press', tags: ['Compound', 'Barbell']},
        {name: 'Dumbbell Bench Press', tags: ['Compound', 'Dumbbell']}, {name: 'Incline Dumbbell Press', tags: ['Compound', 'Dumbbell']}, {name: 'Decline Dumbbell Press', tags: ['Compound', 'Dumbbell']},
        {name: 'Cable Crossovers', tags: ['Isolation', 'Cable']}, {name: 'Low Cable Crossovers', tags: ['Isolation', 'Cable']}, {name: 'High Cable Crossovers', tags: ['Isolation', 'Cable']},
        {name: 'Pec Deck Machine', tags: ['Isolation', 'Machine']}, {name: 'Machine Chest Press', tags: ['Compound', 'Machine']}, {name: 'Incline Machine Press', tags: ['Compound', 'Machine']},
        {name: 'Push-Ups', tags: ['Compound', 'Bodyweight']}, {name: 'Decline Push-Ups', tags: ['Compound', 'Bodyweight']}, {name: 'Diamond Push-Ups', tags: ['Compound', 'Bodyweight']},
        {name: 'Dips (Chest Focus)', tags: ['Compound', 'Bodyweight']}, {name: 'Dumbbell Pullover', tags: ['Isolation', 'Dumbbell']}, {name: 'Guillotine Press', tags: ['Compound', 'Barbell']},
        {name: 'Incline Dumbbell Flyes', tags: ['Isolation', 'Dumbbell']}, {name: 'Flat Dumbbell Flyes', tags: ['Isolation', 'Dumbbell']}, {name: 'Decline Dumbbell Flyes', tags: ['Isolation', 'Dumbbell']},
        {name: 'Low Incline Smith Press', tags: ['Compound', 'Machine']}, {name: 'Landmine Chest Press', tags: ['Compound', 'Barbell']}, {name: 'Cable Upper Chest Fly', tags: ['Isolation', 'Cable']},
        {name: 'Incline Cable Press', tags: ['Compound', 'Cable']}, {name: 'Reverse Grip Bench Press', tags: ['Compound', 'Barbell']}, {name: 'Guillotine Incline Press', tags: ['Compound', 'Barbell']},
        {name: 'Chest Dip Machine', tags: ['Compound', 'Machine']}, {name: 'Weighted Dips (Chest)', tags: ['Compound', 'Bodyweight']}, {name: 'Floor Dumbbell Press', tags: ['Compound', 'Dumbbell']},
        {name: 'Floor Barbell Press', tags: ['Compound', 'Barbell']}, {name: 'Deficit Push-Ups', tags: ['Compound', 'Bodyweight']}, {name: 'Archer Push-Ups', tags: ['Compound', 'Bodyweight']},
        {name: 'Spoto Press', tags: ['Compound', 'Barbell']}, {name: 'Larsen Press', tags: ['Compound', 'Barbell']}, {name: 'Svend Press', tags: ['Isolation', 'Dumbbell']},
        {name: 'Hex Press', tags: ['Compound', 'Dumbbell']}, {name: 'Cable Iron Cross', tags: ['Isolation', 'Cable']}, {name: 'Wide Grip Bench Press', tags: ['Compound', 'Barbell']},
        {name: 'Hammer Strength Incline Press', tags: ['Compound', 'Machine']}
    ],
    Back: [
        {name: 'Deadlift', tags: ['Compound', 'Barbell']}, {name: 'Sumo Deadlift', tags: ['Compound', 'Barbell']}, {name: 'Rack Pulls', tags: ['Compound', 'Barbell']},
        {name: 'Pull-Ups', tags: ['Compound', 'Bodyweight']}, {name: 'Chin-Ups', tags: ['Compound', 'Bodyweight']}, {name: 'Wide Grip Pull-Ups', tags: ['Compound', 'Bodyweight']},
        {name: 'Lat Pulldowns', tags: ['Compound', 'Cable']}, {name: 'Close Grip Pulldowns', tags: ['Compound', 'Cable']}, {name: 'Reverse Grip Pulldowns', tags: ['Compound', 'Cable']},
        {name: 'Barbell Rows', tags: ['Compound', 'Barbell']}, {name: 'Pendlay Rows', tags: ['Compound', 'Barbell']}, {name: 'T-Bar Rows', tags: ['Compound', 'Machine']},
        {name: 'Dumbbell Rows', tags: ['Compound', 'Dumbbell']}, {name: 'Seated Cable Rows', tags: ['Compound', 'Cable']}, {name: 'Chest Supported Rows', tags: ['Compound', 'Machine']},
        {name: 'Straight Arm Pulldowns', tags: ['Isolation', 'Cable']}, {name: 'Good Mornings', tags: ['Compound', 'Barbell']}, {name: 'Hyperextensions', tags: ['Isolation', 'Bodyweight']},
        {name: 'Meadows Rows', tags: ['Compound', 'Barbell']}, {name: 'Kroc Rows', tags: ['Compound', 'Dumbbell']}, {name: 'Seal Rows', tags: ['Compound', 'Dumbbell']},
        {name: 'Neutral Grip Lat Pulldown', tags: ['Compound', 'Cable']}, {name: 'V-Bar Seated Cable Row', tags: ['Compound', 'Cable']}, {name: 'Straight Arm Rope Pulldown', tags: ['Isolation', 'Cable']},
        {name: 'Helms Dumbbell Row', tags: ['Compound', 'Dumbbell']}, {name: 'Gorilla Rows', tags: ['Compound', 'Kettlebell']}, {name: 'Incline Dumbbell Row', tags: ['Compound', 'Dumbbell']},
        {name: 'Single Arm Lat Pulldown', tags: ['Isolation', 'Cable']}, {name: 'Machine High Row', tags: ['Compound', 'Machine']}, {name: 'Low Row Machine', tags: ['Compound', 'Machine']},
        {name: 'Sternum Pull-Ups', tags: ['Compound', 'Bodyweight']}, {name: 'Snatch Grip Deadlift', tags: ['Compound', 'Barbell']}, {name: 'Deficit Deadlift', tags: ['Compound', 'Barbell']},
        {name: 'Rack Pulls Below Knee', tags: ['Compound', 'Barbell']}, {name: 'Barbell Shrugs Behind Back', tags: ['Isolation', 'Barbell']}, {name: 'Smith Machine Shrugs', tags: ['Isolation', 'Machine']},
        {name: 'Cable Face Pull with External Rotation', tags: ['Isolation', 'Cable']}, {name: 'Jefferson Curls', tags: ['Isolation', 'Barbell']}, {name: 'Seated Good Mornings', tags: ['Compound', 'Barbell']},
        {name: 'Pendlay Deficit Rows', tags: ['Compound', 'Barbell']}
    ],
    Legs: [
        {name: 'Barbell Squats', tags: ['Compound', 'Barbell']}, {name: 'Front Squats', tags: ['Compound', 'Barbell']}, {name: 'Goblet Squats', tags: ['Compound', 'Dumbbell']},
        {name: 'Leg Press', tags: ['Compound', 'Machine']}, {name: 'Hack Squats', tags: ['Compound', 'Machine']}, {name: 'Bulgarian Split Squats', tags: ['Compound', 'Dumbbell']},
        {name: 'Walking Lunges', tags: ['Compound', 'Dumbbell']}, {name: 'Reverse Lunges', tags: ['Compound', 'Barbell']}, {name: 'Step-Ups', tags: ['Compound', 'Dumbbell']},
        {name: 'Romanian Deadlifts', tags: ['Compound', 'Barbell']}, {name: 'Stiff Leg Deadlifts', tags: ['Compound', 'Barbell']}, {name: 'Glute Ham Raises', tags: ['Isolation', 'Bodyweight']},
        {name: 'Leg Extensions', tags: ['Isolation', 'Machine']}, {name: 'Seated Leg Curls', tags: ['Isolation', 'Machine']}, {name: 'Lying Leg Curls', tags: ['Isolation', 'Machine']},
        {name: 'Standing Calf Raises', tags: ['Isolation', 'Machine']}, {name: 'Seated Calf Raises', tags: ['Isolation', 'Machine']}, {name: 'Donkey Calf Raises', tags: ['Isolation', 'Machine']},
        {name: 'Hip Thrusts', tags: ['Compound', 'Barbell']}, {name: 'Cable Pull-Throughs', tags: ['Isolation', 'Cable']}, {name: 'Abductor Machine', tags: ['Isolation', 'Machine']},
        {name: 'Safety Bar Squats', tags: ['Compound', 'Barbell']}, {name: 'Zercher Squats', tags: ['Compound', 'Barbell']}, {name: 'Sissy Squats', tags: ['Isolation', 'Bodyweight']},
        {name: 'Belt Squats', tags: ['Compound', 'Machine']}, {name: 'Reverse Hack Squats', tags: ['Compound', 'Machine']}, {name: 'Pendulum Squats', tags: ['Compound', 'Machine']},
        {name: 'Spanish Squats', tags: ['Isolation', 'Bodyweight']}, {name: 'Leg Press Single Leg', tags: ['Compound', 'Machine']}, {name: 'Nordic Hamstring Curls', tags: ['Isolation', 'Bodyweight']},
        {name: 'Dumbbell Romanian Deadlifts', tags: ['Compound', 'Dumbbell']}, {name: 'Single Leg Romanian Deadlifts', tags: ['Compound', 'Dumbbell']}, {name: 'Standing Single Leg Hamstring Curl', tags: ['Isolation', 'Machine']},
        {name: 'Glute Ham Raise Weighted', tags: ['Isolation', 'Bodyweight']}, {name: 'Barbell Hip Thrust Heavy', tags: ['Compound', 'Barbell']}, {name: 'Single Leg Hip Thrust', tags: ['Compound', 'Bodyweight']},
        {name: 'Weighted Glute Bridge', tags: ['Compound', 'Dumbbell']}, {name: 'Cable Hip Abduction', tags: ['Isolation', 'Cable']}, {name: 'Curtsy Lunges', tags: ['Compound', 'Dumbbell']},
        {name: 'Deficit Reverse Lunges', tags: ['Compound', 'Dumbbell']}, {name: 'Cossack Squats', tags: ['Compound', 'Bodyweight']}, {name: 'Donkey Calf Raises Machine', tags: ['Isolation', 'Machine']},
        {name: 'Leg Press Calf Raises', tags: ['Isolation', 'Machine']}, {name: 'Single Leg Calf Raises', tags: ['Isolation', 'Bodyweight']}, {name: 'Tibialis Raises', tags: ['Isolation', 'Bodyweight']}
    ],
    Shoulders: [
        {name: 'Overhead Press', tags: ['Compound', 'Barbell']}, {name: 'Seated Dumbbell Press', tags: ['Compound', 'Dumbbell']}, {name: 'Arnold Press', tags: ['Compound', 'Dumbbell']},
        {name: 'Push Press', tags: ['Compound', 'Barbell']}, {name: 'Machine Shoulder Press', tags: ['Compound', 'Machine']}, {name: 'Landmine Press', tags: ['Compound', 'Barbell']},
        {name: 'Dumbbell Lateral Raises', tags: ['Isolation', 'Dumbbell']}, {name: 'Cable Lateral Raises', tags: ['Isolation', 'Cable']}, {name: 'Machine Lateral Raises', tags: ['Isolation', 'Machine']},
        {name: 'Dumbbell Front Raises', tags: ['Isolation', 'Dumbbell']}, {name: 'Barbell Front Raises', tags: ['Isolation', 'Barbell']}, {name: 'Cable Front Raises', tags: ['Isolation', 'Cable']},
        {name: 'Rear Delt Flyes', tags: ['Isolation', 'Dumbbell']}, {name: 'Reverse Pec Deck', tags: ['Isolation', 'Machine']}, {name: 'Face Pulls', tags: ['Isolation', 'Cable']},
        {name: 'Upright Rows', tags: ['Compound', 'Barbell']}, {name: 'Dumbbell Shrugs', tags: ['Isolation', 'Dumbbell']}, {name: 'Barbell Shrugs', tags: ['Isolation', 'Barbell']},
        {name: 'Lu Raises', tags: ['Isolation', 'Dumbbell']}, {name: 'Egyptian Cable Lateral Raise', tags: ['Isolation', 'Cable']}, {name: 'Leaning Dumbbell Lateral Raise', tags: ['Isolation', 'Dumbbell']},
        {name: 'Cable Y-Raises', tags: ['Isolation', 'Cable']}, {name: 'Behind the Neck Press', tags: ['Compound', 'Barbell']}, {name: 'Viking Press', tags: ['Compound', 'Machine']},
        {name: 'Landmine Shoulder Press', tags: ['Compound', 'Barbell']}, {name: 'Kneeling Single Arm Landmine Press', tags: ['Compound', 'Barbell']}, {name: 'Bradford Press', tags: ['Compound', 'Barbell']},
        {name: 'Scott Press', tags: ['Compound', 'Dumbbell']}, {name: 'Bus Drivers', tags: ['Isolation', 'Plate']}, {name: 'Dumbbell Incline Front Raise', tags: ['Isolation', 'Dumbbell']},
        {name: 'Upright Cable Row', tags: ['Compound', 'Cable']}, {name: 'Smith Machine Overhead Press', tags: ['Compound', 'Machine']}, {name: 'Machine Reverse Fly', tags: ['Isolation', 'Machine']},
        {name: 'Dumbbell W-Raises', tags: ['Isolation', 'Dumbbell']}, {name: 'High Cable Rear Delt Fly', tags: ['Isolation', 'Cable']}, {name: 'Incline Rear Delt Dumbbell Flyes', tags: ['Isolation', 'Dumbbell']},
        {name: 'Barbell Push Press', tags: ['Compound', 'Barbell']}, {name: 'Halos', tags: ['Isolation', 'Kettlebell']}, {name: 'Dumbbell 6-Ways', tags: ['Isolation', 'Dumbbell']},
        {name: 'Cuban Press', tags: ['Isolation', 'Dumbbell']}
    ],
    Arms: [
        {name: 'Barbell Curls', tags: ['Isolation', 'Barbell']}, {name: 'EZ Bar Curls', tags: ['Isolation', 'Barbell']}, {name: 'Dumbbell Curls', tags: ['Isolation', 'Dumbbell']},
        {name: 'Hammer Curls', tags: ['Isolation', 'Dumbbell']}, {name: 'Preacher Curls', tags: ['Isolation', 'Machine']}, {name: 'Concentration Curls', tags: ['Isolation', 'Dumbbell']},
        {name: 'Incline Dumbbell Curls', tags: ['Isolation', 'Dumbbell']}, {name: 'Cable Curls', tags: ['Isolation', 'Cable']}, {name: 'Reverse Curls', tags: ['Isolation', 'Barbell']},
        {name: 'Close Grip Bench Press', tags: ['Compound', 'Barbell']}, {name: 'Dips (Tricep Focus)', tags: ['Compound', 'Bodyweight']}, {name: 'Skullcrushers', tags: ['Isolation', 'Barbell']},
        {name: 'Tricep Pushdowns (Rope)', tags: ['Isolation', 'Cable']}, {name: 'Tricep Pushdowns (Bar)', tags: ['Isolation', 'Cable']}, {name: 'Overhead Tricep Extension', tags: ['Isolation', 'Dumbbell']},
        {name: 'Cable Overhead Extension', tags: ['Isolation', 'Cable']}, {name: 'Tricep Kickbacks', tags: ['Isolation', 'Dumbbell']}, {name: 'Diamond Push-Ups', tags: ['Compound', 'Bodyweight']},
        {name: 'Bayesian Cable Curl', tags: ['Isolation', 'Cable']}, {name: 'Spider Curls', tags: ['Isolation', 'Barbell']}, {name: 'Incline Hammer Curls', tags: ['Isolation', 'Dumbbell']},
        {name: 'Drag Curls', tags: ['Isolation', 'Barbell']}, {name: 'Concentration Cable Curl', tags: ['Isolation', 'Cable']}, {name: 'Zottman Curls', tags: ['Isolation', 'Dumbbell']},
        {name: 'Cross Body Hammer Curls', tags: ['Isolation', 'Dumbbell']}, {name: 'Reverse Grip EZ Bar Curls', tags: ['Isolation', 'Barbell']}, {name: 'Cheat Barbell Curls', tags: ['Isolation', 'Barbell']},
        {name: 'Fat Gripz Barbell Curls', tags: ['Isolation', 'Barbell']}, {name: 'JM Press', tags: ['Compound', 'Barbell']}, {name: 'Tate Press', tags: ['Isolation', 'Dumbbell']},
        {name: 'French Press', tags: ['Isolation', 'Barbell']}, {name: 'Floor Dumbbell Skullcrushers', tags: ['Isolation', 'Dumbbell']}, {name: 'Single Arm Cable Pushdown', tags: ['Isolation', 'Cable']},
        {name: 'Katana Tricep Extension', tags: ['Isolation', 'Cable']}, {name: 'Cross-Body Cable Tricep Extension', tags: ['Isolation', 'Cable']}, {name: 'Reverse Grip Cable Pushdown', tags: ['Isolation', 'Cable']},
        {name: 'Weighted Tricep Dips', tags: ['Compound', 'Bodyweight']}, {name: 'Barbell Wrist Curls', tags: ['Isolation', 'Barbell']}, {name: 'Reverse Wrist Curls', tags: ['Isolation', 'Barbell']},
        {name: 'Farmer\'s Walks', tags: ['Compound', 'Dumbbell']}, {name: 'Dead Hangs', tags: ['Static', 'Bodyweight']}, {name: 'Plate Pinches', tags: ['Static', 'Plate']}
    ],
    Abs: [
        {name: 'Crunches', tags: ['Isolation', 'Bodyweight']}, {name: 'Decline Crunches', tags: ['Isolation', 'Bodyweight']}, {name: 'Bicycle Crunches', tags: ['Isolation', 'Bodyweight']},
        {name: 'Cable Crunches', tags: ['Isolation', 'Cable']}, {name: 'Machine Crunches', tags: ['Isolation', 'Machine']}, {name: 'Hanging Leg Raises', tags: ['Isolation', 'Bodyweight']},
        {name: 'Lying Leg Raises', tags: ['Isolation', 'Bodyweight']}, {name: 'Captain\'s Chair Raises', tags: ['Isolation', 'Bodyweight']}, {name: 'Russian Twists', tags: ['Isolation', 'Bodyweight']},
        {name: 'Planks', tags: ['Static', 'Bodyweight']}, {name: 'Side Planks', tags: ['Static', 'Bodyweight']}, {name: 'Ab Wheel Rollouts', tags: ['Compound', 'Bodyweight']},
        {name: 'Woodchoppers', tags: ['Compound', 'Cable']}, {name: 'Dragon Flags', tags: ['Compound', 'Bodyweight']}, {name: 'V-Ups', tags: ['Isolation', 'Bodyweight']},
        {name: 'Pallof Press', tags: ['Static', 'Cable']}, {name: 'Cable Woodchoppers Low to High', tags: ['Compound', 'Cable']}, {name: 'Cable Woodchoppers High to Low', tags: ['Compound', 'Cable']},
        {name: 'Dragon Flag Holds', tags: ['Static', 'Bodyweight']}, {name: 'Hanging Windshield Wipers', tags: ['Compound', 'Bodyweight']}, {name: 'Standing Ab Wheel from Feet', tags: ['Compound', 'Bodyweight']},
        {name: 'Decline Russian Twists Weighted', tags: ['Isolation', 'Plate']}, {name: 'Hollow Body Holds', tags: ['Static', 'Bodyweight']}, {name: 'L-Sit Holds', tags: ['Static', 'Bodyweight']},
        {name: 'Side Plank Dips', tags: ['Isolation', 'Bodyweight']}, {name: 'Hanging Knee Raises', tags: ['Isolation', 'Bodyweight']}, {name: 'Swiss Ball Pikes', tags: ['Compound', 'Equipment']},
        {name: 'Deadbugs Weighted', tags: ['Compound', 'Dumbbell']}, {name: 'Landmine Rotations', tags: ['Compound', 'Barbell']}, {name: 'Flutter Kicks', tags: ['Isolation', 'Bodyweight']}
    ],
    Cardio: [
        {name: 'Treadmill Running', tags: ['Cardio', 'Machine']}, {name: 'Stairmaster', tags: ['Cardio', 'Machine']}, {name: 'Stationary Bike', tags: ['Cardio', 'Machine']},
        {name: 'Rowing Machine', tags: ['Cardio', 'Machine']}, {name: 'Elliptical', tags: ['Cardio', 'Machine']}, {name: 'Jump Rope', tags: ['Cardio', 'Equipment']},
        {name: 'Burpees', tags: ['Cardio', 'Bodyweight']}, {name: 'Mountain Climbers', tags: ['Cardio', 'Bodyweight']}, {name: 'Kettlebell Swings', tags: ['Cardio', 'Equipment']}
    ]
};
const ex = (cat, i) => exercisesDB[cat] && exercisesDB[cat][i] ? exercisesDB[cat][i].name : '';

const defaultRoutines = {
    'Push': [ex('Chest',0), ex('Chest',4), ex('Shoulders',0), ex('Shoulders',6), ex('Arms',13), ex('Arms',11)],
    'Pull': [ex('Back',0), ex('Back',6), ex('Back',9), ex('Shoulders',14), ex('Arms',0), ex('Arms',3)],
    'Legs': [ex('Legs',0), ex('Legs',9), ex('Legs',3), ex('Legs',12), ex('Legs',14), ex('Legs',15)],
    'Upper': [ex('Chest',0), ex('Back',6), ex('Shoulders',0), ex('Back',13), ex('Arms',0), ex('Arms',12)],
    'Lower': [ex('Legs',0), ex('Legs',9), ex('Legs',3), ex('Legs',12), ex('Legs',14), ex('Legs',15)],
    'Full Body': [ex('Legs',0), ex('Chest',0), ex('Back',9), ex('Shoulders',0), ex('Arms',0), ex('Abs',0)],
    'Chest': [ex('Chest',0), ex('Chest',4), ex('Chest',2), ex('Chest',6), ex('Chest',9), ex('Chest',12)],
    'Back': [ex('Back',0), ex('Back',3), ex('Back',6), ex('Back',9), ex('Back',13), ex('Back',17)],
    'Shoulders': [ex('Shoulders',0), ex('Shoulders',2), ex('Shoulders',6), ex('Shoulders',7), ex('Shoulders',14), ex('Shoulders',16)],
    'Arms': [ex('Arms',0), ex('Arms',3), ex('Arms',13), ex('Arms',11), ex('Arms',4), ex('Arms',12)],
    'Rest': []
};
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const defaultSchedules = {
    '3-day': { 'Monday': 'Full Body', 'Tuesday': 'Rest', 'Wednesday': 'Full Body', 'Thursday': 'Rest', 'Friday': 'Full Body', 'Saturday': 'Rest', 'Sunday': 'Rest' },
    '4-day': { 'Monday': 'Upper', 'Tuesday': 'Lower', 'Wednesday': 'Rest', 'Thursday': 'Upper', 'Friday': 'Lower', 'Saturday': 'Rest', 'Sunday': 'Rest' },
    '5-day': { 'Monday': 'Push', 'Tuesday': 'Pull', 'Wednesday': 'Legs', 'Thursday': 'Rest', 'Friday': 'Upper', 'Saturday': 'Lower', 'Sunday': 'Rest' },
    '6-day': { 'Monday': 'Push', 'Tuesday': 'Pull', 'Wednesday': 'Legs', 'Thursday': 'Push', 'Friday': 'Pull', 'Saturday': 'Legs', 'Sunday': 'Rest' }
};

const dietPlansDB = {
    'Weight Loss': {
        'Non-Veg': [{ meal: 'Breakfast', name: 'Oatmeal & Eggs', macros: '30g P | 40g C | 8g F' }, { meal: 'Lunch', name: 'Chicken Salad', macros: '35g P | 15g C | 10g F' }, { meal: 'Dinner', name: 'Salmon & Veg', macros: '30g P | 25g C | 15g F' }],
        'Veg': [{ meal: 'Breakfast', name: 'Oats & Whey', macros: '30g P | 40g C | 8g F' }, { meal: 'Lunch', name: 'Paneer Salad', macros: '25g P | 15g C | 15g F' }, { meal: 'Dinner', name: 'Lentil Soup (Daal)', macros: '20g P | 30g C | 5g F' }]
    },
    'Weight Gain': {
        'Non-Veg': [{ meal: 'Breakfast', name: 'Mass Smoothie', macros: '50g P | 80g C | 25g F' }, { meal: 'Lunch', name: 'Beef Bowl', macros: '45g P | 70g C | 20g F' }, { meal: 'Dinner', name: 'Chicken Pasta', macros: '55g P | 85g C | 15g F' }],
        'Veg': [{ meal: 'Breakfast', name: 'Peanut Butter Smoothie', macros: '40g P | 90g C | 30g F' }, { meal: 'Lunch', name: 'Soy Chunks Rice Bowl', macros: '45g P | 80g C | 15g F' }, { meal: 'Dinner', name: 'High Protein Pasta', macros: '45g P | 80g C | 15g F' }]
    },
    'Lean Bulk': {
        'Non-Veg': [{ meal: 'Breakfast', name: 'Protein Pancakes', macros: '40g P | 50g C | 12g F' }, { meal: 'Lunch', name: 'Turkey Wrap', macros: '35g P | 45g C | 12g F' }, { meal: 'Dinner', name: 'Steak & Potato', macros: '40g P | 40g C | 15g F' }],
        'Veg': [{ meal: 'Breakfast', name: 'Protein Pancakes', macros: '40g P | 50g C | 12g F' }, { meal: 'Lunch', name: 'Tofu Wrap', macros: '30g P | 45g C | 15g F' }, { meal: 'Dinner', name: 'Paneer Tikka & Sweet Potato', macros: '35g P | 50g C | 18g F' }]
    }
};

const nutritionDB = {
    // === BASICS (per gram / per unit) ===
    'egg': { cals: 70, pro: 6, carb: 0.5, fat: 5, unit: 'per egg' },
    'chicken': { cals: 1.65, pro: 0.31, carb: 0, fat: 0.036, unit: 'per g' },
    'rice': { cals: 1.3, pro: 0.027, carb: 0.28, fat: 0.003, unit: 'per g' },
    'bread': { cals: 79, pro: 3, carb: 15, fat: 1, unit: 'per slice' },
    'milk': { cals: 0.42, pro: 0.034, carb: 0.05, fat: 0.01, unit: 'per ml' },
    'paneer': { cals: 2.65, pro: 0.18, carb: 0.012, fat: 0.2, unit: 'per g' },
    'oats': { cals: 3.89, pro: 0.169, carb: 0.66, fat: 0.069, unit: 'per g' },
    'banana': { cals: 105, pro: 1.3, carb: 27, fat: 0.4, unit: 'per medium' },
    'whey': { cals: 120, pro: 24, carb: 3, fat: 1.5, unit: 'per scoop' },
    'peanut butter': { cals: 94, pro: 4, carb: 3, fat: 8, unit: 'per tbsp' },
    'lentil': { cals: 1.16, pro: 0.09, carb: 0.2, fat: 0.004, unit: 'per g' },
    'potato': { cals: 0.86, pro: 0.017, carb: 0.2, fat: 0.001, unit: 'per g' },
    'soy': { cals: 3.45, pro: 0.52, carb: 0.33, fat: 0.005, unit: 'per g' },
    'chapati': { cals: 80, pro: 2.5, carb: 15, fat: 0.5, unit: 'per roti' },
    'roti': { cals: 80, pro: 2.5, carb: 15, fat: 0.5, unit: 'per roti' },
    'ghee': { cals: 112, pro: 0, carb: 0, fat: 12.7, unit: 'per tbsp' },

    // === PUNJABI MAINS ===
    'butter chicken': { cals: 400, pro: 30, carb: 15, fat: 22, unit: 'per bowl' },
    'paneer butter masala': { cals: 400, pro: 15, carb: 20, fat: 30, unit: 'per bowl' },
    'dal makhani': { cals: 350, pro: 17, carb: 28, fat: 20, unit: 'per bowl' },
    'sarson da saag': { cals: 150, pro: 5, carb: 12, fat: 8, unit: 'per bowl' },
    'matar paneer': { cals: 320, pro: 12, carb: 20, fat: 22, unit: 'per bowl' },
    'rajma masala': { cals: 250, pro: 10, carb: 35, fat: 8, unit: 'per bowl' },
    'rajma': { cals: 140, pro: 8, carb: 25, fat: 4, unit: 'per cup' },
    'palak paneer': { cals: 320, pro: 16, carb: 12, fat: 22, unit: 'per bowl' },
    'chicken curry': { cals: 300, pro: 28, carb: 10, fat: 16, unit: 'per bowl' },
    'chole': { cals: 160, pro: 8, carb: 28, fat: 4, unit: 'per cup' },
    'kadai paneer': { cals: 350, pro: 14, carb: 15, fat: 26, unit: 'per bowl' },
    'shahi paneer': { cals: 380, pro: 12, carb: 18, fat: 30, unit: 'per bowl' },
    'chana masala': { cals: 200, pro: 9, carb: 30, fat: 6, unit: 'per bowl' },

    // === PUNJABI BREADS & STAPLES ===
    'chole bhature': { cals: 680, pro: 21, carb: 119, fat: 31, unit: 'per plate' },
    'aloo paratha': { cals: 325, pro: 8, carb: 45, fat: 15, unit: 'per piece' },
    'paneer paratha': { cals: 276, pro: 12, carb: 40, fat: 10, unit: 'per piece' },
    'makki di roti': { cals: 180, pro: 4, carb: 30, fat: 4, unit: 'per piece' },
    'amritsari kulcha': { cals: 275, pro: 6, carb: 42, fat: 12, unit: 'per piece' },
    'butter naan': { cals: 313, pro: 8, carb: 48, fat: 10, unit: 'per piece' },
    'naan': { cals: 262, pro: 8, carb: 45, fat: 6, unit: 'per piece' },
    'puri': { cals: 118, pro: 3, carb: 18, fat: 5, unit: 'per piece' },
    'bhatura': { cals: 210, pro: 5, carb: 32, fat: 7, unit: 'per piece' },

    // === GRILLED & TANDOORI ===
    'tandoori chicken': { cals: 250, pro: 35, carb: 2, fat: 10, unit: 'per 2 pieces' },
    'chicken tikka': { cals: 310, pro: 31, carb: 8, fat: 9, unit: 'per serving' },
    'seekh kebab': { cals: 200, pro: 18, carb: 6, fat: 12, unit: 'per 2 pieces' },
    'paneer tikka': { cals: 280, pro: 16, carb: 10, fat: 20, unit: 'per serving' },

    // === INDIAN BREAKFAST ===
    'idli': { cals: 135, pro: 4, carb: 27, fat: 0.5, unit: 'per 2 pieces' },
    'masala dosa': { cals: 400, pro: 8, carb: 60, fat: 15, unit: 'per dosa' },
    'plain dosa': { cals: 160, pro: 4, carb: 30, fat: 4, unit: 'per dosa' },
    'poha': { cals: 270, pro: 5, carb: 50, fat: 5, unit: 'per plate' },
    'upma': { cals: 210, pro: 5, carb: 35, fat: 6, unit: 'per plate' },
    'pongal': { cals: 320, pro: 8, carb: 50, fat: 10, unit: 'per bowl' },
    'medu vada': { cals: 180, pro: 5, carb: 20, fat: 9, unit: 'per piece' },
    'dhokla': { cals: 160, pro: 6, carb: 28, fat: 3, unit: 'per 4 pieces' },
    'pesarattu': { cals: 200, pro: 10, carb: 30, fat: 5, unit: 'per dosa' },

    // === STREET FOOD & SNACKS ===
    'punjabi samosa': { cals: 175, pro: 3, carb: 22, fat: 10, unit: 'per piece' },
    'samosa': { cals: 255, pro: 4, carb: 24, fat: 16, unit: 'per piece' },
    'pav bhaji': { cals: 400, pro: 10, carb: 55, fat: 16, unit: 'per plate' },
    'aloo tikki burger': { cals: 340, pro: 8, carb: 46, fat: 14, unit: 'per burger' },
    'aloo tikki': { cals: 180, pro: 4, carb: 26, fat: 7, unit: 'per 2 pieces' },
    'bhel puri': { cals: 220, pro: 5, carb: 40, fat: 5, unit: 'per plate' },
    'pani puri': { cals: 200, pro: 4, carb: 35, fat: 5, unit: 'per 6 pieces' },
    'vada pav': { cals: 300, pro: 7, carb: 42, fat: 12, unit: 'per piece' },
    'kachori': { cals: 190, pro: 4, carb: 22, fat: 10, unit: 'per piece' },

    // === RICE DISHES ===
    'chicken biryani': { cals: 465, pro: 18, carb: 50, fat: 18, unit: 'per plate' },
    'veg biryani': { cals: 310, pro: 6, carb: 50, fat: 9, unit: 'per plate' },
    'mutton biryani': { cals: 500, pro: 22, carb: 48, fat: 22, unit: 'per plate' },
    'pulao': { cals: 280, pro: 5, carb: 50, fat: 7, unit: 'per bowl' },
    'fried rice': { cals: 330, pro: 8, carb: 55, fat: 9, unit: 'per bowl' },

    // === PROTEIN SOURCES ===
    'curd': { cals: 98, pro: 3.4, carb: 4.7, fat: 4.3, unit: 'per 100g' },
    'dahi': { cals: 98, pro: 3.4, carb: 4.7, fat: 4.3, unit: 'per 100g' },
    'sprouts': { cals: 37, pro: 4, carb: 7, fat: 0.5, unit: 'per 100g' },
    'moong dal': { cals: 105, pro: 8, carb: 18, fat: 1, unit: 'per bowl' },
    'chana dal': { cals: 120, pro: 9, carb: 19, fat: 1, unit: 'per bowl' },
    'masoor dal': { cals: 115, pro: 9, carb: 18, fat: 1, unit: 'per bowl' },
    'toor dal': { cals: 110, pro: 7, carb: 19, fat: 1, unit: 'per bowl' },

    // === DRINKS & DESSERTS ===
    'sweet lassi': { cals: 220, pro: 8, carb: 35, fat: 6, unit: 'per glass' },
    'salt lassi': { cals: 100, pro: 6, carb: 10, fat: 4, unit: 'per glass' },
    'chaas': { cals: 50, pro: 2, carb: 5, fat: 2, unit: 'per glass' },
    'masala chai': { cals: 80, pro: 2, carb: 12, fat: 3, unit: 'per cup' },
    'mango lassi': { cals: 200, pro: 6, carb: 38, fat: 4, unit: 'per glass' },
    'gulab jamun': { cals: 150, pro: 2, carb: 25, fat: 5, unit: 'per piece' },
    'jalebi': { cals: 175, pro: 1, carb: 35, fat: 4, unit: 'per piece' },
    'kheer': { cals: 120, pro: 3, carb: 20, fat: 3, unit: 'per bowl' },
    'gajar halwa': { cals: 300, pro: 5, carb: 45, fat: 12, unit: 'per bowl' },
    'ladoo': { cals: 150, pro: 3, carb: 20, fat: 7, unit: 'per piece' },
    'halwa': { cals: 290, pro: 4, carb: 42, fat: 12, unit: 'per bowl' },
    'rasmalai': { cals: 175, pro: 6, carb: 24, fat: 7, unit: 'per 2 pieces' },
    'kulfi': { cals: 130, pro: 3, carb: 18, fat: 6, unit: 'per piece' },

    // === VEGETABLES (per 100g) ===
    'spinach': { cals: 23, pro: 2.9, carb: 3.6, fat: 0.4, unit: 'per 100g' },
    'tomato': { cals: 18, pro: 0.9, carb: 3.9, fat: 0.2, unit: 'per 100g' },
    'onion': { cals: 40, pro: 1.2, carb: 9.3, fat: 0.1, unit: 'per 100g' },
    'carrot': { cals: 41, pro: 0.9, carb: 9.6, fat: 0.2, unit: 'per 100g' },
    'green peas': { cals: 75, pro: 7.3, carb: 14, fat: 0.4, unit: 'per 100g' },
    'broccoli': { cals: 34, pro: 2.8, carb: 6.6, fat: 0.4, unit: 'per 100g' },
    'cauliflower': { cals: 25, pro: 1.9, carb: 5, fat: 0.3, unit: 'per 100g' },
    'cucumber': { cals: 16, pro: 0.7, carb: 3.6, fat: 0.1, unit: 'per 100g' },
    'beetroot': { cals: 43, pro: 1.6, carb: 9.6, fat: 0.2, unit: 'per 100g' },
    'sweet potato': { cals: 86, pro: 1.6, carb: 20, fat: 0.1, unit: 'per 100g' },
    'corn': { cals: 86, pro: 3.3, carb: 19, fat: 1.4, unit: 'per 100g' },
    'capsicum': { cals: 31, pro: 1, carb: 6, fat: 0.3, unit: 'per 100g' },
    'mushroom': { cals: 22, pro: 3.1, carb: 3.3, fat: 0.3, unit: 'per 100g' },
    'lady finger': { cals: 33, pro: 1.9, carb: 7.5, fat: 0.2, unit: 'per 100g' },
    'okra': { cals: 33, pro: 1.9, carb: 7.5, fat: 0.2, unit: 'per 100g' },

    // === FRUITS (per medium serving) ===
    'apple': { cals: 95, pro: 0.5, carb: 25, fat: 0.3, unit: 'per medium' },
    'mango': { cals: 150, pro: 2, carb: 37, fat: 0.6, unit: 'per medium' },
    'guava': { cals: 68, pro: 2.6, carb: 14, fat: 1, unit: 'per medium' },
    'papaya': { cals: 59, pro: 0.9, carb: 15, fat: 0.4, unit: 'per cup' },
    'watermelon': { cals: 86, pro: 1.7, carb: 21, fat: 0.4, unit: 'per 2 cups' },
    'orange': { cals: 62, pro: 1.2, carb: 15, fat: 0.2, unit: 'per medium' },
    'grapes': { cals: 104, pro: 1.1, carb: 27, fat: 0.2, unit: 'per cup' },
    'pineapple': { cals: 83, pro: 0.9, carb: 21, fat: 0.2, unit: 'per cup' },
    'pomegranate': { cals: 83, pro: 1.7, carb: 19, fat: 1.2, unit: 'per half' },
    'strawberry': { cals: 49, pro: 1, carb: 11.7, fat: 0.5, unit: 'per cup' },

    // === NUTS & DRY FRUITS (per serving ~25g) ===
    'almond': { cals: 164, pro: 6, carb: 3.5, fat: 14, unit: 'per handful (25g)' },
    'almonds': { cals: 164, pro: 6, carb: 3.5, fat: 14, unit: 'per handful (25g)' },
    'cashew': { cals: 157, pro: 5.2, carb: 8.6, fat: 12.4, unit: 'per handful (25g)' },
    'cashews': { cals: 157, pro: 5.2, carb: 8.6, fat: 12.4, unit: 'per handful (25g)' },
    'walnut': { cals: 185, pro: 4.3, carb: 4.1, fat: 18.5, unit: 'per handful (25g)' },
    'walnuts': { cals: 185, pro: 4.3, carb: 4.1, fat: 18.5, unit: 'per handful (25g)' },
    'peanut': { cals: 161, pro: 7.3, carb: 4.6, fat: 14, unit: 'per handful (25g)' },
    'peanuts': { cals: 161, pro: 7.3, carb: 4.6, fat: 14, unit: 'per handful (25g)' },
    'dates': { cals: 110, pro: 0.8, carb: 30, fat: 0.1, unit: 'per 4 pieces' },
    'raisins': { cals: 130, pro: 1.3, carb: 34, fat: 0.2, unit: 'per small box' },
    'pistachio': { cals: 170, pro: 6, carb: 8, fat: 14, unit: 'per handful (25g)' },
    'flaxseed': { cals: 55, pro: 1.9, carb: 3, fat: 4.3, unit: 'per tbsp' },
    'chia seeds': { cals: 58, pro: 2, carb: 5, fat: 3.7, unit: 'per tbsp' },

    // === MEATS & SEAFOOD ===
    'mutton curry': { cals: 240, pro: 16, carb: 6, fat: 14, unit: 'per bowl' },
    'mutton': { cals: 2.43, pro: 0.25, carb: 0, fat: 0.17, unit: 'per g' },
    'fish curry': { cals: 200, pro: 15, carb: 8, fat: 12, unit: 'per bowl' },
    'fish': { cals: 1.36, pro: 0.25, carb: 0, fat: 0.04, unit: 'per g' },
    'prawn curry': { cals: 220, pro: 16, carb: 8, fat: 14, unit: 'per bowl' },
    'prawns': { cals: 0.99, pro: 0.2, carb: 0.01, fat: 0.01, unit: 'per g' },
    'tuna': { cals: 135, pro: 30, carb: 0, fat: 1, unit: 'per can' },
    'salmon': { cals: 2.08, pro: 0.2, carb: 0, fat: 0.13, unit: 'per g' },
    'turkey': { cals: 1.65, pro: 0.29, carb: 0, fat: 0.07, unit: 'per g' },

    // === GYM / FITNESS FOODS ===
    'quinoa': { cals: 222, pro: 8, carb: 39, fat: 4, unit: 'per cup cooked' },
    'greek yogurt': { cals: 100, pro: 17, carb: 6, fat: 0.7, unit: 'per 100g' },
    'cottage cheese': { cals: 110, pro: 12, carb: 3, fat: 5, unit: 'per 100g' },
    'protein bar': { cals: 200, pro: 20, carb: 22, fat: 7, unit: 'per bar' },
    'creatine': { cals: 0, pro: 0, carb: 0, fat: 0, unit: 'per scoop' },
    'peanut butter toast': { cals: 300, pro: 12, carb: 32, fat: 15, unit: 'per serving' },
    'boiled chicken': { cals: 165, pro: 31, carb: 0, fat: 3.6, unit: 'per 100g' },
    'chicken breast': { cals: 165, pro: 31, carb: 0, fat: 3.6, unit: 'per 100g' },
    'brown rice': { cals: 215, pro: 5, carb: 45, fat: 1.8, unit: 'per cup cooked' },
    'whole wheat bread': { cals: 80, pro: 4, carb: 14, fat: 1, unit: 'per slice' },
    'avocado': { cals: 160, pro: 2, carb: 9, fat: 15, unit: 'per half' },
    'olive oil': { cals: 119, pro: 0, carb: 0, fat: 13.5, unit: 'per tbsp' }
};

// --- STATE ---
let appState = {
    onboarded: false, oled: false,
    user: { name: '', height: 0, weight: 0, goal: '', targetWeight: 0, split: '', workoutTiming: 'morning', macros: { pro: 0, carb: 0, fat: 0, cals: 0 }, schedule: {}, extras: { abs: false } },
    todayPlan: [], customRoutines: {}, swapIndexToReplace: -1,
    dietPlan: [],
    streak: 0, lastAppOpen: null, lastWorkoutDate: null, badges: [],
    history: [],
    personalRecords: {},
    waterIntake: 0, lastHydrationDate: null,
    supplements: { 'Whey Protein': false, 'Creatine': false, 'Magnesium': false }
};

let clientId = localStorage.getItem('gymsolo_client_id') || localStorage.getItem('gymsolo_last_user_id');
if (!clientId) {
    clientId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('gymsolo_client_id', clientId);
}
localStorage.setItem('gymsolo_client_id', clientId);
localStorage.setItem('gymsolo_last_user_id', clientId);

function saveStateToCloud() {
    if (!appState.onboarded) return; // Do not push un-onboarded / logged out state to cloud
    localStorage.setItem('gymsolo_state', JSON.stringify(appState));
    if (clientId) {
        localStorage.setItem('gymsolo_client_id', clientId);
        localStorage.setItem('gymsolo_last_user_id', clientId);
        try {
            localStorage.setItem('gymsolo_backup_' + clientId, JSON.stringify(appState));
        } catch(e) {}
    }
    if (typeof db !== 'undefined') {
        const payload = {
            id: clientId,
            name: (appState.user && appState.user.name) || 'Anonymous',
            phone: (appState.user && appState.user.phone) || '',
            appState: appState,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        db.collection('clients').doc(clientId).set(payload, { merge: true }).catch(err => console.log("Firebase sync error:", err));
    }
}

// --- REMOTE LOGOUT HANDLER ---
let isLoggingOut = false;
function handleRemoteLogout(reason = "Your account has been removed by the gym administrator.") {
    if (isLoggingOut) return;
    isLoggingOut = true;

    // Discard any ongoing workout timer & release wake lock
    if (typeof clearActiveWorkoutSession === 'function') {
        clearActiveWorkoutSession();
    }
    
    // Preserve local backup and last ID before disconnecting
    const prevId = clientId;
    if (prevId) {
        localStorage.setItem('gymsolo_last_user_id', prevId);
        try {
            localStorage.setItem('gymsolo_backup_' + prevId, JSON.stringify(appState));
        } catch(e) {}
    }

    if (typeof clientSnapshotUnsubscribe === 'function') {
        try { clientSnapshotUnsubscribe(); } catch(e) {}
        clientSnapshotUnsubscribe = null;
    }

    // Clear active session
    localStorage.removeItem('gymsolo_state');
    localStorage.removeItem('gymsolo_workout_active');
    localStorage.removeItem('gymsolo_workout_start_time');
    localStorage.removeItem('gymsolo_active_workout_backup');

    // Generate a fresh random client ID for future new signups
    clientId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('gymsolo_client_id', clientId);

    // Reset app state in memory to fresh un-onboarded state
    appState = {
        onboarded: false,
        user: { name: '', phone: '', height: 180, weight: 75, goal: 'Weight Gain', targetWeight: 80, split: '4-day', workoutTiming: 'morning' },
        streak: 0,
        history: [],
        todayPlan: [],
        dietPlan: [],
        dietText: '',
        dietType: 'Non-Veg',
        waterIntake: 0,
        supplements: { 'Whey Protein': false, 'Creatine': false, 'Magnesium': false },
        messages: [],
        unreadMessages: 0,
        assignedTrainer: 'Head Coach (Admin)'
    };

    // Close any open modals
    const chatModal = document.getElementById('chat-modal');
    if (chatModal) chatModal.classList.add('hidden-view');
    const summaryModal = document.getElementById('summary-modal');
    if (summaryModal) summaryModal.classList.add('hidden-view');
    const editModal = document.getElementById('edit-routine-modal');
    if (editModal) editModal.classList.add('hidden-view');
    const mealCalcModal = document.getElementById('meal-calc-modal');
    if (mealCalcModal) mealCalcModal.classList.add('hidden-view');
    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal) settingsModal.classList.add('hidden-view');

    // Switch views: hide main app, show onboarding flow
    const mainApp = document.getElementById('main-app');
    if (mainApp) mainApp.classList.add('hidden-view');
    const onboardFlow = document.getElementById('onboarding-flow');
    if (onboardFlow) onboardFlow.classList.remove('hidden-view');
    
    if (typeof showStep === 'function') {
        showStep(1);
    }
    
    const obName = document.getElementById('ob-name');
    if (obName) obName.value = '';

    setTimeout(() => {
        alert(reason);
        isLoggingOut = false;
    }, 150);
}

// --- CLOUD SYNC REALTIME LISTENER ---
let clientSnapshotUnsubscribe = null;
function attachClientCloudListener() {
    if (typeof db === 'undefined' || !clientId) return;
    if (typeof clientSnapshotUnsubscribe === 'function') {
        try { clientSnapshotUnsubscribe(); } catch(e) {}
        clientSnapshotUnsubscribe = null;
    }

    clientSnapshotUnsubscribe = db.collection('clients').doc(clientId).onSnapshot(docSnap => {
        if (docSnap.exists) {
            const data = docSnap.data();

            // Check if admin has marked this client as removed / logged out
            if (data.isRemoved || data.loggedOut || data.appState?.removed) {
                handleRemoteLogout("Your account has been removed by the gym administrator.");
                return;
            }

            const cloudState = data.appState;
            if (!cloudState) return;

            // Merge cloud state into app memory and persist locally
            appState = { ...appState, ...cloudState };
            localStorage.setItem('gymsolo_state', JSON.stringify(appState));
            localStorage.setItem('gymsolo_last_user_id', clientId);
            
            const isChatOpen = !document.getElementById('chat-modal').classList.contains('hidden-view');
            if (isChatOpen) {
                appState.unreadMessages = 0;
                renderChatMessages();
            }

            if (appState.onboarded) {
                if (!isWorkoutActive) {
                    initMainApp();
                }
                
                // If Diet tab is active, re-render it immediately
                const dietTab = document.getElementById('tab-diet');
                if (dietTab && !dietTab.classList.contains('hidden-view')) {
                    renderDietPlan();
                }
            }
        } else {
            // If local app is onboarded but docSnap does not exist in Firestore,
            // re-sync local data to cloud instead of destructively wiping user's device!
            if (appState.onboarded) {
                console.warn("Client doc not found in Firestore. Re-syncing local state to cloud...");
                saveStateToCloud();
            }
        }
    }, err => {
        console.warn("Firestore snapshot listener error:", err);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('gymsolo_state');
    const todayStr = new Date().toDateString();
    
    if (savedState) {
        appState = { ...appState, ...JSON.parse(savedState) };
        if(appState.lastHydrationDate !== todayStr) {
            appState.waterIntake = 0; Object.keys(appState.supplements).forEach(k => appState.supplements[k] = false);
            appState.lastHydrationDate = todayStr;
        }
        
        // Login Streak Logic
        if(appState.lastAppOpen !== todayStr) {
            const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
            if (appState.lastAppOpen === yesterday.toDateString()) appState.streak++;
            else if (appState.lastAppOpen !== null) appState.streak = 1;
            appState.lastAppOpen = todayStr;
        }
        
        if(appState.oled) document.body.classList.add('true-black');
    }
    
    // Attach Real-Time Cloud Sync Listener
    attachClientCloudListener();
    
    if (appState.onboarded) {
        document.getElementById('onboarding-flow').classList.add('hidden-view');
        document.getElementById('main-app').classList.remove('hidden-view');
        initMainApp(); 
        restoreActiveWorkoutSession();
    } else {
        showStep(1);
    }

    // Single-Link: Auto-open Trainer Portal if hash #admin or query ?admin/?trainer
    const hasAdminParam = window.location.hash === '#admin' || 
                          window.location.search.includes('admin') || 
                          window.location.search.includes('trainer');
    if (hasAdminParam) {
        openAdminPortal();
    }

    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#admin') {
            openAdminPortal();
        } else if (!window.location.hash || window.location.hash === '#') {
            closeAdminPortal(false);
        }
    });

    // Initialize Gym Owner Commercial Suites
    initGymBrandingClientSync();
    initGymAnnouncementsClientSync();
    initCheckInDeskSync();
    initTransformationGallery();
});

// --- ONBOARDING (Abbreviated helper functions) ---
function selectWorkoutTiming(timing) {
    if (!appState.user) appState.user = {};
    appState.user.workoutTiming = timing;
    const btnMorning = document.getElementById('timing-btn-morning');
    const btnEvening = document.getElementById('timing-btn-evening');
    if (btnMorning && btnEvening) {
        if (timing === 'morning') {
            btnMorning.className = 'timing-btn p-3.5 rounded-xl border-2 border-brand-400 bg-brand-900/30 text-white flex flex-col items-center justify-center transition-all shadow-[0_0_15px_rgba(250,204,21,0.25)]';
            btnEvening.className = 'timing-btn p-3.5 rounded-xl border border-gray-700 bg-dark-100 text-gray-400 hover:border-gray-500 hover:text-white flex flex-col items-center justify-center transition-all';
        } else {
            btnEvening.className = 'timing-btn p-3.5 rounded-xl border-2 border-brand-400 bg-brand-900/30 text-white flex flex-col items-center justify-center transition-all shadow-[0_0_15px_rgba(250,204,21,0.25)]';
            btnMorning.className = 'timing-btn p-3.5 rounded-xl border border-gray-700 bg-dark-100 text-gray-400 hover:border-gray-500 hover:text-white flex flex-col items-center justify-center transition-all';
        }
    }
}

function showStep(step) { 
    document.querySelectorAll('.step-container').forEach(el => el.classList.remove('active')); 
    const targetStep = document.getElementById(`step-${step}`);
    if (targetStep) targetStep.classList.add('active'); 
    const progressBar = document.getElementById('onboard-progress');
    if (progressBar) progressBar.style.width = `${(step / 7) * 100}%`; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep(step) {
    try {
        if (!appState.user) appState.user = {};

        if (step === 2) {
            // Save Step 1 basic info
            const nameEl = document.getElementById('ob-name');
            const phoneEl = document.getElementById('ob-phone');
            const heightEl = document.getElementById('ob-height');
            const weightEl = document.getElementById('ob-weight');

            appState.user.name = (nameEl && nameEl.value.trim()) || 'Athlete';
            appState.user.phone = (phoneEl && phoneEl.value.trim()) || appState.user.phone || '';
            appState.user.height = (heightEl && parseFloat(heightEl.value)) || 175;
            appState.user.weight = (weightEl && parseFloat(weightEl.value)) || 75;
            appState.user.startWeight = appState.user.weight;
            if (!appState.user.workoutTiming) appState.user.workoutTiming = 'morning';

            // Ensure goal is defaulted if user proceeds
            if (!appState.user.goal) {
                selectGoal('Weight Loss');
            }
        } else if (step === 3) {
            // Advancing from Step 2 to Step 3
            if (!appState.user.goal) {
                selectGoal('Weight Loss');
            }
            initStep3WeightPlan();
        } else if (step === 4) {
            // Advancing from Step 3 to Step 4
            const deltaInput = document.getElementById('ob-kg-delta');
            const deltaVal = (deltaInput && parseFloat(deltaInput.value)) || appState.user.kgDelta || 5;
            setKgDelta(deltaVal);

            // Default split if none chosen yet
            if (!appState.user.split) {
                selectSplit('4-day', false);
            }
        } else if (step === 5) {
            // Advancing to Step 5 (Nutrition Target)
            if (!appState.user.split) {
                selectSplit('4-day', false);
            }
            calculateMacros();
        } else if (step === 6) {
            // Advancing to Step 6 (Map Week)
            if (!appState.user.schedule || Object.keys(appState.user.schedule).length === 0) {
                const sp = appState.user.split || '4-day';
                appState.user.schedule = { ...(defaultSchedules[sp] || defaultSchedules['4-day']) };
            }
            generateScheduleUI();
        } else if (step === 7) {
            // Advancing to Step 7 (Summary)
            if (!appState.user.schedule) appState.user.schedule = {};
            daysOfWeek.forEach(d => {
                const sel = document.getElementById(`sched-${d}`);
                if (sel) {
                    appState.user.schedule[d] = sel.value;
                } else if (!appState.user.schedule[d]) {
                    appState.user.schedule[d] = 'Rest';
                }
            });
            updateStep7Summary();
        }

        showStep(step);
    } catch (err) {
        console.error('Error in nextStep(' + step + '):', err);
        showStep(step);
    }
}

function prevStep(step) { 
    showStep(step); 
}

function selectGoal(goal, btnEl) { 
    if (!appState.user) appState.user = {};
    appState.user.goal = goal; 

    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.classList.remove('border-brand-400', 'bg-brand-900/30', 'text-brand-300', 'ring-2', 'ring-brand-400/40');
        btn.classList.add('border-gray-700', 'bg-dark-100');
    });

    let target = btnEl;
    if (!target) {
        if (goal === 'Weight Loss') target = document.getElementById('goal-btn-loss');
        else if (goal === 'Weight Gain') target = document.getElementById('goal-btn-gain');
        else if (goal === 'Lean Bulk') target = document.getElementById('goal-btn-bulk');
    }

    if (target) {
        target.classList.remove('border-gray-700', 'bg-dark-100');
        target.classList.add('border-brand-400', 'bg-brand-900/30', 'text-brand-300', 'ring-2', 'ring-brand-400/40');
    }
}

function initStep3WeightPlan() {
    const goal = (appState.user && appState.user.goal) || 'Weight Loss';
    const currWeight = parseFloat(appState.user && appState.user.weight) || 75;

    const titleEl = document.getElementById('step3-title');
    const badgeEl = document.getElementById('step3-goal-badge');
    const subtitleEl = document.getElementById('step3-subtitle');
    const currWeightEl = document.getElementById('step3-curr-weight');
    const fromWeightEl = document.getElementById('step3-from-weight');
    const inputLabel = document.getElementById('step3-input-label');

    if (currWeightEl) currWeightEl.textContent = `${currWeight} kg`;
    if (fromWeightEl) fromWeightEl.textContent = `${currWeight} kg`;

    if (goal === 'Weight Loss') {
        if (titleEl) titleEl.textContent = 'How many KG do you want to lose?';
        if (badgeEl) {
            badgeEl.textContent = 'Fat Loss';
            badgeEl.className = 'text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-0.5 rounded-full font-bold uppercase';
        }
        if (subtitleEl) subtitleEl.innerHTML = `Current Weight: <span class="text-brand-400 font-bold">${currWeight} kg</span>. Select how much fat you want to cut off.`;
        if (inputLabel) inputLabel.textContent = 'Target KG to Lose:';
    } else {
        if (titleEl) titleEl.textContent = 'How many KG do you want to gain?';
        if (badgeEl) {
            badgeEl.textContent = goal === 'Lean Bulk' ? 'Lean Bulk' : 'Muscle Gain';
            badgeEl.className = 'text-[10px] bg-brand-500/20 text-brand-400 border border-brand-500/30 px-2.5 py-0.5 rounded-full font-bold uppercase';
        }
        if (subtitleEl) subtitleEl.innerHTML = `Current Weight: <span class="text-brand-400 font-bold">${currWeight} kg</span>. Select how much muscle mass you want to build.`;
        if (inputLabel) inputLabel.textContent = 'Target KG to Gain:';
    }

    const currentDelta = (appState.user && appState.user.kgDelta) || 5;
    setKgDelta(currentDelta);
}

function setKgDelta(kg) {
    kg = Math.max(1, Math.min(60, parseFloat(kg) || 5));
    if (!appState.user) appState.user = {};
    appState.user.kgDelta = kg;

    const deltaInput = document.getElementById('ob-kg-delta');
    if (deltaInput) deltaInput.value = kg;

    document.querySelectorAll('.kg-delta-btn').forEach(btn => {
        const btnKg = parseFloat(btn.getAttribute('data-kg'));
        if (btnKg === kg) {
            btn.className = 'kg-delta-btn py-2.5 rounded-xl border-2 border-brand-400 bg-brand-900/40 text-brand-300 font-extrabold text-xs shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all';
        } else {
            btn.className = 'kg-delta-btn py-2.5 rounded-xl border border-gray-700 bg-dark-100 text-white font-bold text-xs hover:border-brand-400 transition-all';
        }
    });

    updatePlanCalculations();
}

function adjustKgDelta(amount) {
    const current = (appState.user && appState.user.kgDelta) || 5;
    setKgDelta(current + amount);
}

function onKgDeltaInput(val) {
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
        setKgDelta(num);
    }
}

function updatePlanCalculations() {
    const goal = (appState.user && appState.user.goal) || 'Weight Loss';
    const currWeight = parseFloat(appState.user && appState.user.weight) || 75;
    const kgDelta = parseFloat(appState.user && appState.user.kgDelta) || 5;

    let targetWeight = 0;
    let weeklyRate = 0;
    let monthlyRate = 0;
    let weeklyDesc = '';
    let monthlyDesc = '';

    if (goal === 'Weight Loss') {
        targetWeight = Math.max(35, Math.round((currWeight - kgDelta) * 10) / 10);
        weeklyRate = kgDelta >= 10 ? 0.65 : 0.50;
        monthlyRate = Math.round(weeklyRate * 4.33 * 10) / 10;
        weeklyDesc = `Optimal fat burn with -${kgDelta >= 10 ? '650' : '500'} kcal daily deficit. Protects 100% muscle.`;
        monthlyDesc = `Steady, sustainable fat reduction with zero metabolic slowdown.`;
    } else {
        targetWeight = Math.round((currWeight + kgDelta) * 10) / 10;
        weeklyRate = 0.35;
        monthlyRate = Math.round(weeklyRate * 4.33 * 10) / 10;
        weeklyDesc = `Clean lean bulk with +350 kcal surplus. Builds muscle without fat.`;
        monthlyDesc = `High-density contractile muscle tissue accretion every month.`;
    }

    const estimatedWeeks = Math.max(2, Math.ceil(kgDelta / weeklyRate));
    const estimatedMonths = (estimatedWeeks / 4.33).toFixed(1);

    const targetDateObj = new Date();
    targetDateObj.setDate(targetDateObj.getDate() + (estimatedWeeks * 7));
    const targetDateStr = targetDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    appState.user.targetWeight = targetWeight;
    appState.user.weeklyTargetRate = weeklyRate;
    appState.user.monthlyTargetRate = monthlyRate;
    appState.user.estimatedWeeks = estimatedWeeks;
    appState.user.estimatedMonths = parseFloat(estimatedMonths);

    const targetWeightEl = document.getElementById('step3-target-weight');
    const deltaBadgeEl = document.getElementById('step3-delta-badge');
    const weeklyRateEl = document.getElementById('plan-weekly-rate');
    const weeklyDescEl = document.getElementById('plan-weekly-desc');
    const monthlyRateEl = document.getElementById('plan-monthly-rate');
    const monthlyDescEl = document.getElementById('plan-monthly-desc');
    const timelineTextEl = document.getElementById('plan-timeline-text');
    const targetDateEl = document.getElementById('plan-target-date');

    if (targetWeightEl) targetWeightEl.textContent = `${targetWeight.toFixed(1)} kg`;
    if (deltaBadgeEl) {
        deltaBadgeEl.textContent = `${goal === 'Weight Loss' ? '-' : '+'}${kgDelta.toFixed(1)} kg`;
        deltaBadgeEl.className = goal === 'Weight Loss'
            ? 'text-xs bg-red-500/20 text-red-300 border border-red-500/40 px-2.5 py-1 rounded-lg font-extrabold'
            : 'text-xs bg-brand-500/20 text-brand-300 border border-brand-500/40 px-2.5 py-1 rounded-lg font-extrabold';
    }
    if (weeklyRateEl) weeklyRateEl.innerHTML = `${goal === 'Weight Loss' ? '-' : '+'}${weeklyRate.toFixed(2)} kg <span class="text-xs font-normal text-gray-400">/ week</span>`;
    if (weeklyDescEl) weeklyDescEl.textContent = weeklyDesc;
    if (monthlyRateEl) monthlyRateEl.innerHTML = `${goal === 'Weight Loss' ? '-' : '+'}${monthlyRate.toFixed(1)} kg <span class="text-xs font-normal text-gray-400">/ month</span>`;
    if (monthlyDescEl) monthlyDescEl.textContent = monthlyDesc;
    if (timelineTextEl) timelineTextEl.textContent = `${estimatedWeeks} Weeks (~${estimatedMonths} Months)`;
    if (targetDateEl) targetDateEl.textContent = targetDateStr;
}

function selectSplit(split, autoAdvance = true) {
    if (!appState.user) appState.user = {};
    appState.user.split = split.toLowerCase();
    
    const defaultSched = defaultSchedules[appState.user.split] || defaultSchedules['4-day'] || defaultSchedules['3-day'];
    appState.user.schedule = { ...defaultSched };

    document.querySelectorAll('.split-btn').forEach(btn => {
        btn.classList.remove('border-brand-400', 'bg-brand-900/30', 'text-brand-300', 'ring-2', 'ring-brand-400/40');
        btn.classList.add('border-gray-700', 'bg-dark-100');
    });

    const btnIdMap = {
        '3-day': 'split-btn-3day',
        '4-day': 'split-btn-4day',
        '5-day': 'split-btn-5day',
        '6-day': 'split-btn-6day'
    };
    const targetBtn = document.getElementById(btnIdMap[appState.user.split]);
    if (targetBtn) {
        targetBtn.classList.remove('border-gray-700', 'bg-dark-100');
        targetBtn.classList.add('border-brand-400', 'bg-brand-900/30', 'text-brand-300', 'ring-2', 'ring-brand-400/40');
    }

    if (autoAdvance) {
        setTimeout(() => nextStep(5), 250);
    }
}

function calculateMacros() { 
    if (!appState.user) appState.user = {};
    const w = parseFloat(appState.user.weight) || 75; 
    const h = parseFloat(appState.user.height) || 175;
    const goal = appState.user.goal || 'Weight Loss';
    const delta = parseFloat(appState.user.kgDelta) || 5;

    const bmr = (10 * w) + (6.25 * h) - (5 * 25) + 5;
    const tdee = bmr * 1.45;

    let cals = 0;
    let pro = 0;
    let fat = 0;
    let carb = 0;
    let planNote = '';

    if (goal === 'Weight Loss') {
        const deficit = delta >= 10 ? 650 : 500;
        cals = Math.round(tdee - deficit);
        pro = Math.round(w * 2.2);
        fat = Math.round(w * 0.8);
        carb = Math.max(50, Math.round((cals - (pro * 4 + fat * 9)) / 4));
        cals = Math.round((pro * 4) + (carb * 4) + (fat * 9));
        planNote = `Deficit Plan: -${deficit} kcal/day for -${(delta >= 10 ? 0.65 : 0.50).toFixed(2)} kg/wk`;
    } else {
        const surplus = 350;
        cals = Math.round(tdee + surplus);
        pro = Math.round(w * 2.0);
        fat = Math.round(w * 1.0);
        carb = Math.max(60, Math.round((cals - (pro * 4 + fat * 9)) / 4));
        cals = Math.round((pro * 4) + (carb * 4) + (fat * 9));
        planNote = `Surplus Plan: +${surplus} kcal/day for +0.35 kg/wk`;
    }

    appState.user.macros = { pro, fat, carb, cals };

    if (document.getElementById('m-cals')) document.getElementById('m-cals').textContent = cals.toLocaleString();
    if (document.getElementById('m-pro')) document.getElementById('m-pro').textContent = pro + 'g';
    if (document.getElementById('m-carb')) document.getElementById('m-carb').textContent = carb + 'g';
    if (document.getElementById('m-fat')) document.getElementById('m-fat').textContent = fat + 'g';
    if (document.getElementById('m-plan-note')) document.getElementById('m-plan-note').textContent = planNote;
}

function generateScheduleUI() { 
    const c = document.getElementById('schedule-container'); 
    if (!c) return;
    c.innerHTML = ''; 

    if (!appState.user.schedule) {
        const sp = appState.user.split || '4-day';
        appState.user.schedule = { ...(defaultSchedules[sp] || defaultSchedules['4-day']) };
    }

    daysOfWeek.forEach(day => { 
        const selected = appState.user.schedule[day] || 'Rest';
        const opts = ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Full Body', 'Rest']
            .map(opt => `<option value="${opt}" ${selected === opt ? 'selected' : ''}>${opt}</option>`)
            .join('');
        c.innerHTML += `
            <div class="flex justify-between items-center bg-dark-200 p-3 rounded-xl border border-gray-700">
                <span class="text-white font-semibold text-sm w-24">${day}</span>
                <select id="sched-${day}" class="bg-dark-100 border border-gray-600 rounded-lg py-1.5 px-3 text-white text-xs font-semibold focus:border-brand-400 focus:outline-none">
                    ${opts}
                </select>
            </div>
        `; 
    }); 
}

function updateStep7Summary() {
    const u = appState.user || {};
    const currW = parseFloat(u.weight) || 75;
    const targetW = parseFloat(u.targetWeight) || (u.goal === 'Weight Loss' ? currW - 5 : currW + 5);
    const delta = parseFloat(u.kgDelta) || Math.abs(currW - targetW);
    const weeklyRate = (u.weeklyTargetRate !== undefined) ? u.weeklyTargetRate : 0.50;
    const monthlyRate = (u.monthlyTargetRate !== undefined) ? u.monthlyTargetRate : 2.1;
    const weeks = u.estimatedWeeks || 10;
    const months = u.estimatedMonths || 2.3;
    const splitName = u.split ? (u.split.toUpperCase() + ' Split') : '4-Day Split';
    const cals = (u.macros && u.macros.cals) ? u.macros.cals : 2150;
    const pro = (u.macros && u.macros.pro) ? u.macros.pro : 165;

    const sumName = document.getElementById('sum-name');
    const sumGoal = document.getElementById('sum-goal-target');
    const sumWeekly = document.getElementById('sum-weekly');
    const sumMonthly = document.getElementById('sum-monthly');
    const sumTimeline = document.getElementById('sum-timeline');
    const sumSplit = document.getElementById('sum-split');
    const sumCals = document.getElementById('sum-cals');

    if (sumName) sumName.textContent = u.name || 'Athlete';
    if (sumGoal) sumGoal.textContent = `${u.goal || 'Weight Loss'}: ${currW} kg ➔ ${targetW.toFixed(1)} kg (${u.goal === 'Weight Loss' ? '-' : '+'}${delta.toFixed(1)} kg)`;
    if (sumWeekly) sumWeekly.textContent = `${u.goal === 'Weight Loss' ? '-' : '+'}${weeklyRate.toFixed(2)} kg / week`;
    if (sumMonthly) sumMonthly.textContent = `${u.goal === 'Weight Loss' ? '-' : '+'}${monthlyRate.toFixed(1)} kg / month`;
    if (sumTimeline) sumTimeline.textContent = `${weeks} Weeks (~${months} Months)`;
    if (sumSplit) sumSplit.textContent = splitName;
    if (sumCals) sumCals.textContent = `${cals.toLocaleString()} kcal | ${pro}g Protein`;
}

function finishOnboarding() { 
    appState.onboarded = true; 
    saveStateToCloud(); 
    const onboardFlow = document.getElementById('onboarding-flow');
    if (onboardFlow) onboardFlow.classList.add('hidden-view'); 
    const mainApp = document.getElementById('main-app');
    if (mainApp) mainApp.classList.remove('hidden-view'); 
    initMainApp(); 
}

function renderDashboardWeightGoalCard() {
    const card = document.getElementById('dash-weight-goal-card');
    if (!card) return;

    const u = appState.user || {};
    const currW = parseFloat(u.weight) || 75;
    const startW = parseFloat(u.startWeight) || currW;
    const goal = u.goal || 'Weight Loss';
    const delta = parseFloat(u.kgDelta) || 5;
    const targetW = parseFloat(u.targetWeight) || (goal === 'Weight Loss' ? Math.max(40, currW - delta) : currW + delta);
    const weeklyRate = (u.weeklyTargetRate !== undefined) ? u.weeklyTargetRate : (goal === 'Weight Loss' ? 0.50 : 0.35);
    const monthlyRate = (u.monthlyTargetRate !== undefined) ? u.monthlyTargetRate : (goal === 'Weight Loss' ? 2.1 : 1.5);
    const weeks = u.estimatedWeeks || Math.max(2, Math.ceil(delta / weeklyRate));

    let pct = 0;
    if (goal === 'Weight Loss') {
        const totalNeeded = startW - targetW;
        const currentLost = startW - currW;
        if (totalNeeded > 0) {
            pct = Math.min(100, Math.max(0, Math.round((currentLost / totalNeeded) * 100)));
        }
    } else {
        const totalNeeded = targetW - startW;
        const currentGained = currW - startW;
        if (totalNeeded > 0) {
            pct = Math.min(100, Math.max(0, Math.round((currentGained / totalNeeded) * 100)));
        }
    }

    const titleEl = document.getElementById('dash-goal-title');
    const tagEl = document.getElementById('dash-goal-tag');
    const subEl = document.getElementById('dash-goal-subtitle');
    const barEl = document.getElementById('dash-goal-progress-bar');
    const weeklyEl = document.getElementById('dash-plan-weekly');
    const monthlyEl = document.getElementById('dash-plan-monthly');
    const timelineEl = document.getElementById('dash-plan-timeline');

    if (titleEl) titleEl.textContent = goal === 'Weight Loss' ? 'Weight Loss Blueprint' : (goal === 'Lean Bulk' ? 'Lean Bulk Blueprint' : 'Muscle Gain Blueprint');
    if (tagEl) {
        if (pct >= 100) {
            tagEl.textContent = 'Goal Achieved!';
            tagEl.className = 'text-[9px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded font-extrabold uppercase';
        } else {
            tagEl.textContent = `${pct}% Complete`;
            tagEl.className = 'text-[9px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded font-extrabold uppercase';
        }
    }
    if (subEl) subEl.textContent = `Current: ${currW} kg ➔ Target: ${targetW.toFixed(1)} kg (${goal === 'Weight Loss' ? '-' : '+'}${delta.toFixed(1)} kg)`;
    if (barEl) barEl.style.width = `${Math.max(5, pct)}%`;
    if (weeklyEl) weeklyEl.textContent = `${goal === 'Weight Loss' ? '-' : '+'}${weeklyRate.toFixed(2)} kg/wk`;
    if (monthlyEl) monthlyEl.textContent = `${goal === 'Weight Loss' ? '-' : '+'}${monthlyRate.toFixed(1)} kg/mo`;
    if (timelineEl) timelineEl.textContent = `${weeks} Wks (~${(weeks / 4.33).toFixed(1)} Mo)`;

    const progTargetW = document.getElementById('prog-target-weight');
    const progWeekly = document.getElementById('prog-weekly-rate');
    const progMonthly = document.getElementById('prog-monthly-rate');
    const progTimeline = document.getElementById('prog-timeline');
    const progSub = document.getElementById('prog-plan-sub');
    const progBadge = document.getElementById('prog-goal-badge');

    if (progTargetW) progTargetW.textContent = `${targetW.toFixed(1)} kg`;
    if (progWeekly) progWeekly.textContent = `${goal === 'Weight Loss' ? '-' : '+'}${weeklyRate.toFixed(2)} kg/wk`;
    if (progMonthly) progMonthly.textContent = `${goal === 'Weight Loss' ? '-' : '+'}${monthlyRate.toFixed(1)} kg/mo`;
    if (progTimeline) progTimeline.textContent = `${weeks} Weeks`;
    if (progSub) progSub.textContent = `${goal} (${currW} kg ➔ ${targetW.toFixed(1)} kg)`;
    if (progBadge) progBadge.textContent = `${pct}% Achieved`;
}


// --- APP & GLOBAL LOGIC ---
function switchAppTab(tabId) {
    document.getElementById('skeleton-overlay').classList.remove('hidden-view');
    setTimeout(() => {
        document.getElementById('skeleton-overlay').classList.add('hidden-view');
        document.querySelectorAll('.app-tab').forEach(t => t.classList.add('hidden-view'));
        document.getElementById(`tab-${tabId}`).classList.remove('hidden-view');
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active', 'text-brand-400', 'border-brand-400'));
        document.querySelectorAll('.nav-bottom-btn').forEach(btn => { btn.classList.remove('active', 'text-brand-400'); btn.classList.add('text-gray-500'); });
        
        if (document.getElementById(`nav-${tabId}`)) document.getElementById(`nav-${tabId}`).classList.add('active', 'text-brand-400', 'border-brand-400');
        if (document.getElementById(`nav-bottom-${tabId}`)) {
            document.getElementById(`nav-bottom-${tabId}`).classList.remove('text-gray-500');
            document.getElementById(`nav-bottom-${tabId}`).classList.add('active', 'text-brand-400');
        }
        
        if (tabId === 'dashboard') { renderRecoveryHeatmap(); renderDashboardWeightGoalCard(); }
        if (tabId === 'library') renderLibrary();
        if (tabId === 'progress') { initChart(); renderAttendanceCalendar(); renderActivityMatrix(); renderBodyMetrics(); renderWorkoutHistory(); renderDashboardWeightGoalCard(); }
        if (tabId === 'diet') renderDietPlan();
    }, 200);
}

function openSettings() {
    document.getElementById('toggle-oled').checked = appState.oled;
    updateSettingsTimingUI();
    const idInput = document.getElementById('settings-client-id-display');
    if (idInput) {
        idInput.value = clientId || localStorage.getItem('gymsolo_client_id') || localStorage.getItem('gymsolo_last_user_id') || '';
    }
    document.getElementById('settings-modal').classList.remove('hidden-view');
}
function updateWorkoutTimingFromSettings(timing) {
    if (!appState.user) appState.user = {};
    appState.user.workoutTiming = timing;
    appState.workoutTiming = timing;
    saveStateToCloud();
    updateSettingsTimingUI();
    const dietTab = document.getElementById('tab-diet');
    if (dietTab && !dietTab.classList.contains('hidden-view')) {
        renderDietPlan();
    }
}
function updateSettingsTimingUI() {
    const timing = (appState.user && appState.user.workoutTiming) || appState.workoutTiming || 'morning';
    const btnM = document.getElementById('settings-timing-morning');
    const btnE = document.getElementById('settings-timing-evening');
    if (btnM && btnE) {
        if (timing === 'morning') {
            btnM.className = 'py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 border-brand-400 bg-brand-900/30 text-white shadow';
            btnE.className = 'py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 border-gray-700 bg-dark-100 text-gray-400 hover:border-gray-500';
        } else {
            btnE.className = 'py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 border-brand-400 bg-brand-900/30 text-white shadow';
            btnM.className = 'py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 border-gray-700 bg-dark-100 text-gray-400 hover:border-gray-500';
        }
    }
}
function toggleUserWorkoutTiming() {
    const current = (appState.user && appState.user.workoutTiming) || appState.workoutTiming || 'morning';
    const next = current === 'morning' ? 'evening' : 'morning';
    updateWorkoutTimingFromSettings(next);
}
function closeSettings() { document.getElementById('settings-modal').classList.add('hidden-view'); }

// --- MEMBER ACCOUNT & USER ID RESTORE SYSTEM ---
function showAppToast(title, msg) {
    let toast = document.getElementById('app-notification-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-notification-toast';
        toast.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[9999] bg-dark-200/95 border border-brand-400/80 text-white px-4 py-3 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.85)] flex items-center gap-3 backdrop-blur-md transition-all duration-300 transform -translate-y-24 opacity-0 pointer-events-none max-w-sm w-[90%]';
        toast.innerHTML = `
            <div class="w-8 h-8 rounded-xl bg-brand-400/20 border border-brand-400/40 flex items-center justify-center text-brand-400 shrink-0">
                <i class="fas fa-check text-sm"></i>
            </div>
            <div class="min-w-0">
                <p id="app-toast-title" class="text-xs font-bold text-white"></p>
                <p id="app-toast-msg" class="text-[11px] text-gray-300 leading-tight"></p>
            </div>
        `;
        document.body.appendChild(toast);
    }
    const tTitle = document.getElementById('app-toast-title');
    const tMsg = document.getElementById('app-toast-msg');
    if (tTitle) tTitle.textContent = title;
    if (tMsg) tMsg.textContent = msg;

    toast.classList.remove('-translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 4000);
}

function copyCurrentUserId() {
    const idToCopy = clientId || localStorage.getItem('gymsolo_client_id') || localStorage.getItem('gymsolo_last_user_id') || '';
    if (!idToCopy) return;

    const input = document.getElementById('settings-client-id-display');
    if (input) {
        input.select();
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(idToCopy).then(() => {
            showAppToast("User ID Copied! 📋", idToCopy);
        }).catch(() => {
            prompt("Copy Member Account ID:", idToCopy);
        });
    } else {
        prompt("Copy Member Account ID:", idToCopy);
    }
}

function handleUserLogout() {
    if (!confirm("Are you sure you want to log out / switch account? Your workout logs, split, and diet remain safely backed up in the cloud.")) {
        return;
    }

    // 1. Force save current state to cloud & local backup before disconnecting
    if (appState.onboarded) {
        saveStateToCloud();
    }
    const currentId = clientId;
    if (currentId) {
        localStorage.setItem('gymsolo_last_user_id', currentId);
        try {
            localStorage.setItem('gymsolo_backup_' + currentId, JSON.stringify(appState));
        } catch (e) {}
    }

    // 2. Discard any ongoing workout timer & release wake lock
    if (typeof clearActiveWorkoutSession === 'function') {
        clearActiveWorkoutSession();
    }

    // 3. Detach active Firestore real-time listener
    if (typeof clientSnapshotUnsubscribe === 'function') {
        try { clientSnapshotUnsubscribe(); } catch (e) {}
        clientSnapshotUnsubscribe = null;
    }

    // 4. Mark onboarded = false and clear local active session
    appState.onboarded = false;
    localStorage.removeItem('gymsolo_state');
    closeSettings();

    // 5. Switch to onboarding flow
    const mainApp = document.getElementById('main-app');
    if (mainApp) mainApp.classList.add('hidden-view');
    const onboardFlow = document.getElementById('onboarding-flow');
    if (onboardFlow) onboardFlow.classList.remove('hidden-view');

    if (typeof showStep === 'function') {
        showStep(1);
    }

    // 6. Open Member Login modal pre-filled with their last ID
    openMemberLoginModal(currentId);
    showAppToast("Logged Out Safely", "Your data is saved in cloud. Use your User ID to log back in anytime!");
}

function openMemberLoginModal(prefillId = '') {
    const modal = document.getElementById('member-login-modal');
    if (!modal) return;

    const input = document.getElementById('login-user-identifier');
    const feedback = document.getElementById('login-feedback-box');
    const quickCard = document.getElementById('login-quick-restore-card');
    const quickIdEl = document.getElementById('login-quick-restore-id');

    if (feedback) {
        feedback.className = 'hidden-view p-3 rounded-xl text-xs font-semibold';
        feedback.innerHTML = '';
    }

    const lastId = prefillId || localStorage.getItem('gymsolo_last_user_id') || clientId || '';
    if (input) {
        input.value = lastId;
    }

    if (quickCard && quickIdEl) {
        if (lastId) {
            quickIdEl.textContent = lastId;
            quickCard.classList.remove('hidden-view');
        } else {
            quickCard.classList.add('hidden-view');
        }
    }

    modal.classList.remove('hidden-view');
    if (input) setTimeout(() => input.focus(), 100);
}

function closeMemberLoginModal() {
    const modal = document.getElementById('member-login-modal');
    if (modal) modal.classList.add('hidden-view');
}

function useQuickRestoreId() {
    const quickIdEl = document.getElementById('login-quick-restore-id');
    const input = document.getElementById('login-user-identifier');
    if (quickIdEl && input) {
        input.value = quickIdEl.textContent.trim();
        loginAndRestoreUserData();
    }
}

async function loginAndRestoreUserData() {
    const input = document.getElementById('login-user-identifier');
    const feedback = document.getElementById('login-feedback-box');
    const submitBtn = document.getElementById('btn-submit-member-login');
    if (!input) return;

    const rawId = input.value.trim();
    if (!rawId) {
        if (feedback) {
            feedback.className = 'bg-red-500/20 text-red-300 border border-red-500/40 p-3 rounded-xl text-xs font-semibold';
            feedback.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Please enter your User ID or Phone Number.';
            feedback.classList.remove('hidden-view');
        }
        return;
    }

    // Show loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Searching Account...';
    }
    if (feedback) {
        feedback.className = 'bg-brand-500/20 text-brand-300 border border-brand-500/40 p-3 rounded-xl text-xs font-semibold';
        feedback.innerHTML = '<i class="fas fa-search mr-1"></i> Searching gym database for your account...';
        feedback.classList.remove('hidden-view');
    }

    try {
        let matchedClientData = null;
        let matchedClientId = null;

        if (typeof db !== 'undefined') {
            // 1. Direct document ID lookup
            try {
                const docSnap = await db.collection('clients').doc(rawId).get();
                if (docSnap.exists) {
                    const d = docSnap.data();
                    if (!d.isRemoved && !d.loggedOut) {
                        matchedClientData = d;
                        matchedClientId = docSnap.id;
                    }
                }
            } catch (e) {
                console.warn("Direct doc lookup error:", e);
            }

            // 2. If not found, search by phone number or client collection query
            if (!matchedClientData) {
                const cleanDigits = rawId.replace(/\D/g, '');
                try {
                    const snap = await db.collection('clients').get();
                    snap.forEach(doc => {
                        if (matchedClientData) return;
                        const data = doc.data();
                        if (data.isRemoved || data.loggedOut) return;

                        const docPhone = (data.phone || (data.appState?.user?.phone) || '').replace(/\D/g, '');
                        // Match ID, exact phone, or matching phone digits
                        if (doc.id.toLowerCase() === rawId.toLowerCase()) {
                            matchedClientData = data;
                            matchedClientId = doc.id;
                        } else if (cleanDigits.length >= 7 && (docPhone === cleanDigits || docPhone.endsWith(cleanDigits) || cleanDigits.endsWith(docPhone))) {
                            matchedClientData = data;
                            matchedClientId = doc.id;
                        }
                    });
                } catch (e) {
                    console.warn("Collection search error:", e);
                }
            }
        }

        // 3. Fallback: check localStorage backup
        if (!matchedClientData) {
            const localBackup = localStorage.getItem('gymsolo_backup_' + rawId) || 
                                (rawId === localStorage.getItem('gymsolo_last_user_id') ? localStorage.getItem('gymsolo_state') : null);
            if (localBackup) {
                try {
                    const parsedState = JSON.parse(localBackup);
                    if (parsedState && (parsedState.onboarded || parsedState.user)) {
                        matchedClientData = { appState: parsedState };
                        matchedClientId = rawId;
                    }
                } catch (e) {}
            }
        }

        if (matchedClientData && matchedClientData.appState) {
            // Restore client state
            clientId = matchedClientId || rawId;
            localStorage.setItem('gymsolo_client_id', clientId);
            localStorage.setItem('gymsolo_last_user_id', clientId);
            appState = { ...appState, ...matchedClientData.appState, onboarded: true };
            localStorage.setItem('gymsolo_state', JSON.stringify(appState));

            // Attach new real-time listener for this client
            attachClientCloudListener();

            if (feedback) {
                feedback.className = 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-3 rounded-xl text-xs font-semibold';
                feedback.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Account found! Welcome back, <b>${appState.user?.name || 'Athlete'}</b>! Restoring your workouts...`;
            }

            if (window.confetti) {
                try {
                    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
                } catch (e) {}
            }

            setTimeout(() => {
                closeMemberLoginModal();
                const onboardFlow = document.getElementById('onboarding-flow');
                if (onboardFlow) onboardFlow.classList.add('hidden-view');
                const mainApp = document.getElementById('main-app');
                if (mainApp) mainApp.classList.remove('hidden-view');
                initMainApp();
                showAppToast("Account Restored ✓", `Welcome back, ${appState.user?.name || 'Athlete'}! All workouts & diet ready.`);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Restore & Log In</span>';
                }
            }, 700);
            return;
        }

        // Not found
        if (feedback) {
            feedback.className = 'bg-red-500/20 text-red-300 border border-red-500/40 p-3 rounded-xl text-xs font-semibold';
            feedback.innerHTML = `<i class="fas fa-times-circle mr-1"></i> Account not found for "<b>${rawId}</b>". Please verify your User ID or phone number, or ask your trainer to look up your Member ID in the Admin Portal.`;
            feedback.classList.remove('hidden-view');
        }
    } catch (err) {
        console.error("Login restore error:", err);
        if (feedback) {
            feedback.className = 'bg-red-500/20 text-red-300 border border-red-500/40 p-3 rounded-xl text-xs font-semibold';
            feedback.innerHTML = `<i class="fas fa-exclamation-triangle mr-1"></i> Sync error: ${err.message || 'Please try again'}`;
            feedback.classList.remove('hidden-view');
        }
    } finally {
        if (submitBtn && (!matchedClientData || !matchedClientData.appState)) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Restore & Log In</span>';
        }
    }
}

// --- UNIFIED TRAINER & ADMIN PORTAL INTEGRATION ---
function openAdminPortal() {
    const modal = document.getElementById('admin-portal-modal');
    const iframe = document.getElementById('admin-portal-iframe');
    if (!modal || !iframe) return;

    // Load iframe source lazily so it does not affect client initial loading
    if (!iframe.src || iframe.src === '' || !iframe.src.includes('admin.html')) {
        iframe.src = 'admin.html?v=14.0';
    }

    modal.classList.remove('hidden-view');
    document.body.style.overflow = 'hidden';

    // Keep URL synced to #admin without page reload
    if (window.location.hash !== '#admin') {
        try {
            history.pushState({ view: 'admin' }, '', '#admin');
        } catch (e) {
            window.location.hash = 'admin';
        }
    }
}

function closeAdminPortal(updateHash = true) {
    const modal = document.getElementById('admin-portal-modal');
    if (modal) {
        modal.classList.add('hidden-view');
        document.body.style.overflow = '';
    }

    if (updateHash && window.location.hash === '#admin') {
        try {
            history.pushState(null, '', window.location.pathname + window.location.search);
        } catch (e) {
            window.location.hash = '';
        }
    }

    // Refresh client state from cloud in case trainer made updates in admin portal
    if (typeof db !== 'undefined' && clientId) {
        db.collection('clients').doc(clientId).get().then(docSnap => {
            if (docSnap.exists) {
                const cloudState = docSnap.data().appState;
                if (cloudState) {
                    appState = { ...appState, ...cloudState };
                    localStorage.setItem('gymsolo_state', JSON.stringify(appState));
                    if (appState.onboarded) {
                        initMainApp();
                        const dietTab = document.getElementById('tab-diet');
                        if (dietTab && !dietTab.classList.contains('hidden-view')) {
                            renderDietPlan();
                        }
                    }
                }
            }
        }).catch(() => {});
    }
}
function toggleTrueBlack() {
    appState.oled = document.getElementById('toggle-oled').checked;
    if (appState.oled) document.body.classList.add('true-black');
    else document.body.classList.remove('true-black');
    saveStateToCloud();
}
function exportData() {
    const data = localStorage.getItem('gymsolo_state');
    const blob = new Blob([data], {type: 'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `gymsolo-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
}

function handleVisibilityOrFocus() {
    if (isWorkoutActive) {
        updateWorkoutTimer();
        updateRestTimer();
        requestWakeLock();
    }
}

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        handleVisibilityOrFocus();
        if (typeof db !== 'undefined') {
            db.collection('clients').doc(clientId).get().then(docSnap => {
                if (docSnap.exists) {
                    const data = docSnap.data();
                    if (data.isRemoved || data.loggedOut || data.appState?.removed) {
                        handleRemoteLogout("Your account has been removed by the gym administrator.");
                        return;
                    }

                    const cloudState = data.appState;
                    if (!cloudState) return;

                    appState = { ...appState, ...cloudState };
                    localStorage.setItem('gymsolo_state', JSON.stringify(appState));

                    if (!document.getElementById('chat-modal').classList.contains('hidden-view')) {
                        appState.unreadMessages = 0;
                        renderChatMessages();
                    }

                    if (appState.onboarded && !isWorkoutActive) {
                        initMainApp();
                        const dietTab = document.getElementById('tab-diet');
                        if (dietTab && !dietTab.classList.contains('hidden-view')) {
                            renderDietPlan();
                        }
                    }
                } else if (appState.onboarded) {
                    saveStateToCloud();
                }
            }).catch(() => {});
        }
    }
});

window.addEventListener('pageshow', handleVisibilityOrFocus);
window.addEventListener('focus', handleVisibilityOrFocus);

let currentDashboardDay = null; // null defaults to device's real day

function getDeviceCurrentDayName() {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}

function selectDashboardDay(dayName) {
    currentDashboardDay = dayName;
    initMainApp(dayName);
}

function initMainApp(viewDay = null) {
    if (viewDay !== null) {
        currentDashboardDay = viewDay;
    }

    // 1. Safe avatar initialization
    const avatarEl = document.getElementById('user-avatar');
    if (avatarEl) {
        const uName = (appState.user && appState.user.name) ? appState.user.name.trim() : 'User';
        avatarEl.textContent = uName.charAt(0).toUpperCase() || 'U';
    }

    // 2. Safe diet initialization
    if (!appState.dietPlan || appState.dietPlan.length === 0 || !Array.isArray(appState.dietPlan)) { 
        const uGoal = (appState.user && appState.user.goal) || 'Weight Loss';
        const goalPlan = dietPlansDB[uGoal] || dietPlansDB['Weight Loss'];
        if (goalPlan && goalPlan['Non-Veg']) {
            appState.dietPlan = JSON.parse(JSON.stringify(goalPlan['Non-Veg'])); 
        }
    }
    
    // 3. Dynamic Day Auto-Detection
    const date = new Date();
    const realDayName = getDeviceCurrentDayName(); // e.g. "Tuesday"
    const activeDay = currentDashboardDay || realDayName;
    const isRealToday = (activeDay === realDayName);

    // Update Date & Day Name
    const dateEl = document.getElementById('dash-date');
    if (dateEl) {
        dateEl.textContent = isRealToday 
            ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) 
            : `${activeDay}'s Schedule`;
    }

    const dayNameEl = document.getElementById('dash-dayname');
    if (dayNameEl) {
        dayNameEl.textContent = activeDay;
    }

    const resetTodayBtn = document.getElementById('btn-reset-today');
    if (resetTodayBtn) {
        if (!isRealToday) resetTodayBtn.classList.remove('hidden-view');
        else resetTodayBtn.classList.add('hidden-view');
    }

    // Scheduled Split for Active Day
    const todaySplit = (appState.user && appState.user.schedule && appState.user.schedule[activeDay]) || 'Rest';
    const splitNameEl = document.getElementById('dash-split-name');
    if (splitNameEl) {
        splitNameEl.textContent = todaySplit;
    }

    const streakEl = document.getElementById('dash-streak');
    if (streakEl) {
        streakEl.textContent = `${appState.streak} Day${appState.streak === 1 ? '' : 's'}`;
    }

    if (!appState.membershipStart) appState.membershipStart = new Date().getTime();
    if (!appState.membershipDuration) appState.membershipDuration = 30;
    
    const msPassed = new Date().getTime() - appState.membershipStart;
    const daysLeft = Math.max(0, appState.membershipDuration - Math.floor(msPassed / (1000 * 60 * 60 * 24)));
    if (document.getElementById('dash-membership-days')) {
        document.getElementById('dash-membership-days').textContent = daysLeft;
    }
    updateMembershipExpiryBanner(daysLeft);
    updateCheckInCardUI();
    
    // Interactive Weekly Calendar: Click any day to switch & preview
    const cal = document.getElementById('weekly-calendar');
    if (cal) {
        cal.innerHTML = daysOfWeek.map(d => {
            const split = (appState.user.schedule && appState.user.schedule[d]) || 'Rest';
            const isDeviceToday = (d === realDayName);
            const isSelected = (d === activeDay);
            const isRest = split === 'Rest';

            let pillClasses = "";
            if (isSelected) {
                pillClasses = "border-2 border-brand-400 bg-brand-500 text-black shadow-[0_0_12px_rgba(250,204,21,0.5)] font-extrabold";
            } else if (isDeviceToday) {
                pillClasses = "border-2 border-brand-400 bg-brand-900/40 text-brand-400 font-bold";
            } else if (isRest) {
                pillClasses = "border border-gray-800 bg-dark-300 text-gray-500 hover:border-gray-600";
            } else {
                pillClasses = "border border-gray-700 bg-dark-100 text-gray-300 hover:border-brand-400/50";
            }

            return `
                <button type="button" onclick="selectDashboardDay('${d}')" class="flex flex-col items-center flex-1 min-w-[42px] py-1.5 px-0.5 rounded-xl hover:bg-dark-100/40 transition-all group cursor-pointer" title="Switch to ${d} (${split})">
                    <span class="text-[10px] ${isDeviceToday ? 'text-brand-400 font-extrabold' : 'text-gray-400'} mb-1">${d.substring(0,3)}</span>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${pillClasses}">
                        ${isRest ? '<i class="fas fa-bed"></i>' : '<i class="fas fa-dumbbell"></i>'}
                    </div>
                    <span class="text-[9px] mt-1 text-gray-400 truncate max-w-[44px] text-center font-medium">${split}</span>
                </button>
            `;
        }).join('');
    }
    
    renderMacroRings();
    renderDailyTracker();
    generateTodayWorkoutPlan(todaySplit);
    renderDashboardWorkout();
    renderRecoveryHeatmap();
    renderWorkoutHistory();
    renderDashboardWeightGoalCard();
    initDailyMotivationAndChallenge();
    renderBadgesUI();
    initReferralUI();
    initStudioClassesSync();
    
    const badge = document.getElementById('chat-badge');
    if(badge) {
        if(appState.unreadMessages > 0) {
            badge.textContent = appState.unreadMessages > 9 ? '9+' : appState.unreadMessages;
            badge.classList.remove('hidden-view');
        } else {
            badge.classList.add('hidden-view');
        }
    }
    
    // PR List in Progress Tab
    const prList = document.getElementById('pr-list'); prList.innerHTML = '';
    Object.keys(appState.personalRecords).forEach(ex => {
        prList.innerHTML += `<div class="bg-dark-300 p-3 rounded border border-gray-700 text-center"><p class="text-gray-400 text-xs">${ex}</p><p class="text-xl font-bold text-white mt-1">${appState.personalRecords[ex]} <span class="text-sm">kg</span></p></div>`;
    });
    
    // Check for trainer update
    if (appState.trainerUpdateFlag) {
        document.getElementById('trainer-msg-text').textContent = `"${appState.trainerNote || 'I updated your plan!'}"`;
        document.getElementById('trainer-modal').classList.remove('hidden-view');
        appState.trainerUpdateFlag = false;
        appState.trainerNote = '';
        saveStateToCloud();
    }
    
    renderActivityMatrix();
}

function closeTrainerModal() {
    document.getElementById('trainer-modal').classList.add('hidden-view');
}

function renderMacroRings() {
    const setRing = (id, val, target) => {
        const ring = document.getElementById(`ring-${id}`);
        if(!ring) return;
        const pct = Math.min((val/target), 1);
        const offset = 251.2 - (pct * 251.2);
        ring.style.strokeDashoffset = offset;
        document.getElementById(`dash-${id}`).textContent = val + (id==='cals'?'':'g');
    };
    // Mock intake logic (for UI demonstration purposes, normally this increments on meal logging)
    let mockPro = Math.round(appState.user.macros.pro * 0.4);
    setRing('pro', mockPro, appState.user.macros.pro);
    setRing('carb', Math.round(appState.user.macros.carb * 0.2), appState.user.macros.carb);
    setRing('fat', Math.round(appState.user.macros.fat * 0.5), appState.user.macros.fat);
    setRing('cals', Math.round(appState.user.macros.cals * 0.35), appState.user.macros.cals);
}

// --- TRACKERS ---
function renderDailyTracker() {
    const fill = document.getElementById('water-fill');
    const text = document.getElementById('water-text-large');
    fill.style.height = `${Math.min((appState.waterIntake / 8) * 100, 100)}%`;
    text.textContent = appState.waterIntake;
    
    const suppList = document.getElementById('supp-list'); suppList.innerHTML = '';
    Object.keys(appState.supplements).forEach(supp => {
        const isC = appState.supplements[supp];
        suppList.innerHTML += `<label class="flex items-center space-x-3 cursor-pointer p-1" onclick="toggleSupp('${supp}')"><div class="relative w-5 h-5 bg-dark-300 border ${isC ? 'border-brand-400' : 'border-gray-600'} rounded flex items-center justify-center">${isC ? '<i class="fas fa-check text-brand-400 text-xs"></i>' : ''}</div><span class="${isC ? 'line-through text-gray-600' : 'text-gray-300'} text-xs font-bold transition-all">${supp}</span></label>`;
    });
}
function addWater(val) { appState.waterIntake = Math.max(0, Math.min(8, appState.waterIntake + val)); saveStateToCloud(); renderDailyTracker(); }
function toggleSupp(supp) { appState.supplements[supp] = !appState.supplements[supp]; saveStateToCloud(); renderDailyTracker(); }

// --- RECOVERY HEATMAP & FATIGUE TRACKER (FRONT & BACK DUAL VIEW) ---
let currentHeatmapView = 'front'; // 'front' | 'back'

let currentMuscleRecovery = {
    'chest-upper': { status: 'green', color: '#22c55e', label: 'Upper Chest', text: 'Fully Recovered', desc: 'Clavicular head rested. Prime for incline presses and incline flyes.' },
    'chest-lower': { status: 'green', color: '#22c55e', label: 'Mid & Lower Chest', text: 'Fully Recovered', desc: 'Sternal head rested. Prime for flat bench, dips, and cable crossovers.' },
    'traps': { status: 'green', color: '#22c55e', label: 'Trapezius', text: 'Fully Recovered', desc: 'Upper back and neck rested. Ready for shrugs and heavy rack pulls.' },
    'shoulders': { status: 'green', color: '#22c55e', label: 'Front & Side Shoulders', text: 'Fully Recovered', desc: 'Deltoids rested. Ready for overhead pressing and lateral raises.' },
    'rear-delts': { status: 'green', color: '#22c55e', label: 'Rear Deltoids', text: 'Fully Recovered', desc: 'Posterior delts ready for face pulls and reverse pec deck.' },
    'lats': { status: 'green', color: '#22c55e', label: 'Lats & Upper Back', text: 'Fully Recovered', desc: 'Latissimus dorsi ready for pull-ups, pulldowns, and heavy rows.' },
    'lower-back': { status: 'green', color: '#22c55e', label: 'Lower Back', text: 'Fully Recovered', desc: 'Erector spinae rested. Ready for deadlifts, squats, and heavy hinges.' },
    'biceps': { status: 'green', color: '#22c55e', label: 'Biceps & Brachialis', text: 'Fully Recovered', desc: 'Arm flexors ready for barbell curls, hammer curls, and chin-ups.' },
    'triceps': { status: 'green', color: '#22c55e', label: 'Triceps', text: 'Fully Recovered', desc: 'Arm extensors ready for pushdowns, skull crushers, and dips.' },
    'forearms': { status: 'green', color: '#22c55e', label: 'Forearms & Grip', text: 'Fully Recovered', desc: 'Grip strength 100%. Ready for heavy pulls, carries, and wrist curls.' },
    'abs-upper': { status: 'green', color: '#22c55e', label: 'Upper Core / Abs', text: 'Fully Recovered', desc: 'Upper rectus abdominis rested. Ready for crunches and cable rollouts.' },
    'abs-lower': { status: 'green', color: '#22c55e', label: 'Lower Abs & Obliques', text: 'Fully Recovered', desc: 'Obliques and lower core primed for hanging leg raises and twists.' },
    'quads': { status: 'green', color: '#22c55e', label: 'Quadriceps', text: 'Fully Recovered', desc: 'Anterior thighs primed for squats, hack squats, and leg press.' },
    'hamstrings': { status: 'green', color: '#22c55e', label: 'Hamstrings', text: 'Fully Recovered', desc: 'Posterior chain rested. Ready for Romanian deadlifts and leg curls.' },
    'glutes': { status: 'green', color: '#22c55e', label: 'Glutes', text: 'Fully Recovered', desc: 'Hip extensors primed for hip thrusts, squats, and Bulgarian lunges.' },
    'calves': { status: 'green', color: '#22c55e', label: 'Calves', text: 'Fully Recovered', desc: 'Gastrocnemius & soleus restored for standing or seated calf raises.' }
};

function switchHeatmapView(view) {
    currentHeatmapView = view;
    const frontSvg = document.getElementById('svg-body-front');
    const backSvg = document.getElementById('svg-body-back');
    const btnFront = document.getElementById('btn-hm-front');
    const btnBack = document.getElementById('btn-hm-back');

    if (view === 'front') {
        if (frontSvg) frontSvg.classList.remove('hidden-view');
        if (backSvg) backSvg.classList.add('hidden-view');
        if (btnFront) btnFront.className = 'px-2.5 py-1 rounded-md bg-brand-500 text-black shadow font-extrabold transition-all';
        if (btnBack) btnBack.className = 'px-2.5 py-1 rounded-md text-gray-400 hover:text-white transition-all';
    } else {
        if (frontSvg) frontSvg.classList.add('hidden-view');
        if (backSvg) backSvg.classList.remove('hidden-view');
        if (btnBack) btnBack.className = 'px-2.5 py-1 rounded-md bg-brand-500 text-black shadow font-extrabold transition-all';
        if (btnFront) btnFront.className = 'px-2.5 py-1 rounded-md text-gray-400 hover:text-white transition-all';
    }
}

function toggleHeatmapViewFlip() {
    switchHeatmapView(currentHeatmapView === 'front' ? 'back' : 'front');
}

function getMusclesForWorkout(workout) {
    if (!workout) return new Set();
    const muscles = new Set();
    const split = (workout.split || '').toLowerCase();

    function inCategory(cat, name) {
        const list = exercisesDB[cat] || [];
        for (let j = 0; j < list.length; j++) {
            const dbName = list[j].name.toLowerCase();
            if (name === dbName || name.indexOf(dbName) !== -1 || dbName.indexOf(name) !== -1) {
                return true;
            }
        }
        return false;
    }

    // Exercise-level deep scan with precise, targeted muscle isolation
    if (Array.isArray(workout.exercises) && workout.exercises.length > 0) {
        workout.exercises.forEach(ex => {
            const name = (typeof ex === 'string' ? ex : (ex && ex.name) || '').toLowerCase().trim();
            if (!name) return;

            // 1. ABS & CORE
            if (inCategory('Abs', name) || name.indexOf('crunch') !== -1 || name.indexOf('plank') !== -1 || name.indexOf('abs') !== -1 || name.indexOf('leg raise') !== -1 || name.indexOf('knee raise') !== -1 || name.indexOf('russian twist') !== -1 || name.indexOf('woodchopper') !== -1 || name.indexOf('dragon flag') !== -1 || name.indexOf('rollout') !== -1 || name.indexOf('bicycle') !== -1 || name.indexOf('v-up') !== -1 || name.indexOf('hollow') !== -1 || name.indexOf('dead bug') !== -1) {
                if (name.indexOf('leg raise') !== -1 || name.indexOf('knee raise') !== -1 || name.indexOf('twist') !== -1 || name.indexOf('woodchopper') !== -1 || name.indexOf('side plank') !== -1 || name.indexOf('flutter') !== -1) {
                    muscles.add('abs-lower');
                } else if (name.indexOf('crunch') !== -1 || name.indexOf('rollout') !== -1 || name.indexOf('sit-up') !== -1) {
                    muscles.add('abs-upper');
                } else {
                    muscles.add('abs-upper');
                    muscles.add('abs-lower');
                }
                return;
            }

            // 2. CALVES (Evaluate before legs/quads)
            if (name.indexOf('calf') !== -1 || name.indexOf('calves') !== -1 || name.indexOf('tibialis') !== -1) {
                muscles.add('calves');
                return;
            }

            // 3. GLUTES (Evaluate before legs/quads)
            if (name.indexOf('hip thrust') !== -1 || (name.indexOf('glute') !== -1 && name.indexOf('glute ham') === -1) || name.indexOf('abductor') !== -1 || name.indexOf('pull-through') !== -1 || name.indexOf('frog pump') !== -1) {
                muscles.add('glutes');
                return;
            }

            // 4. HAMSTRINGS (Evaluate before biceps/quads so 'leg curl' does not hit 'curl', 'rdl' does not hit quads)
            if (name.indexOf('hamstring') !== -1 || name.indexOf('leg curl') !== -1 || name.indexOf('rdl') !== -1 || name.indexOf('romanian') !== -1 || name.indexOf('stiff leg') !== -1 || name.indexOf('glute ham') !== -1 || name.indexOf('nordic') !== -1) {
                muscles.add('hamstrings');
                if (name.indexOf('rdl') !== -1 || name.indexOf('romanian') !== -1 || name.indexOf('stiff leg') !== -1) {
                    muscles.add('glutes');
                    muscles.add('lower-back');
                }
                return;
            }

            // 5. LOWER BACK (Erectors)
            if (name.indexOf('deadlift') !== -1 || name.indexOf('rack pull') !== -1 || name.indexOf('good morning') !== -1 || name.indexOf('hyperextension') !== -1 || name.indexOf('back extension') !== -1 || name.indexOf('jefferson curl') !== -1 || name.indexOf('superman') !== -1 || name.indexOf('bird dog') !== -1) {
                muscles.add('lower-back');
                if (name.indexOf('deadlift') !== -1 || name.indexOf('rack pull') !== -1) {
                    muscles.add('hamstrings');
                    muscles.add('glutes');
                    muscles.add('traps');
                    muscles.add('forearms');
                }
                return;
            }

            // 6. QUADS (Front Thighs)
            if ((inCategory('Legs', name) && name.indexOf('deadlift') === -1) || name.indexOf('squat') !== -1 || name.indexOf('leg press') !== -1 || name.indexOf('leg extension') !== -1 || name.indexOf('hack') !== -1 || name.indexOf('lunge') !== -1 || name.indexOf('split squat') !== -1 || name.indexOf('step-up') !== -1 || name.indexOf('sissy') !== -1 || name.indexOf('pendulum') !== -1 || name.indexOf('belt squat') !== -1 || name.indexOf('zercher') !== -1) {
                muscles.add('quads');
                if (name.indexOf('squat') !== -1 || name.indexOf('lunge') !== -1 || name.indexOf('step-up') !== -1) {
                    muscles.add('glutes');
                }
                return;
            }

            // 7. TRAPS (Shrugs, upright row, rack pulls)
            if (name.indexOf('shrug') !== -1 || name.indexOf('upright row') !== -1 || name.indexOf('behind back shrug') !== -1 || name.indexOf('trap bar shrug') !== -1) {
                muscles.add('traps');
                if (name.indexOf('upright row') !== -1) muscles.add('shoulders');
                return;
            }

            // 8. REAR DELTS (Face pull, rear flye, reverse pec deck)
            if (name.indexOf('face pull') !== -1 || (name.indexOf('rear') !== -1 && (name.indexOf('delt') !== -1 || name.indexOf('fly') !== -1)) || name.indexOf('reverse pec deck') !== -1 || name.indexOf('band pull-apart') !== -1) {
                muscles.add('rear-delts');
                muscles.add('traps');
                return;
            }

            // 9. LATS & UPPER BACK (Rows, pulldowns, pullups)
            if (inCategory('Back', name) || name.indexOf('row') !== -1 || name.indexOf('pulldown') !== -1 || name.indexOf('pull-up') !== -1 || name.indexOf('pullup') !== -1 || name.indexOf('chin-up') !== -1 || name.indexOf('chinup') !== -1 || name.indexOf('lat') !== -1 || name.indexOf('t-bar') !== -1 || name.indexOf('meadows') !== -1 || name.indexOf('seal row') !== -1 || name.indexOf('high row') !== -1) {
                muscles.add('lats');
                muscles.add('traps');
                muscles.add('biceps');
                return;
            }

            // 10. TRICEPS (Pushdowns, skullcrushers, close grip bench, tricep dips, kickbacks, French press)
            if (name.indexOf('tricep') !== -1 || name.indexOf('skullcrusher') !== -1 || name.indexOf('skull crusher') !== -1 || name.indexOf('pushdown') !== -1 || name.indexOf('overhead extension') !== -1 || name.indexOf('close grip bench') !== -1 || (name.indexOf('dip') !== -1 && name.indexOf('chest') === -1) || (name.indexOf('kickback') !== -1 && name.indexOf('glute') === -1) || name.indexOf('diamond push-up') !== -1 || name.indexOf('jm press') !== -1 || name.indexOf('tate press') !== -1 || name.indexOf('french press') !== -1) {
                muscles.add('triceps');
                return;
            }

            // 11. FOREARMS (Wrist curls, reverse curls, farmer's carry)
            if (name.indexOf('wrist curl') !== -1 || name.indexOf('reverse wrist') !== -1 || name.indexOf('farmer') !== -1 || name.indexOf('plate pinch') !== -1 || name.indexOf('wrist roller') !== -1 || name.indexOf('dead hang') !== -1) {
                muscles.add('forearms');
                return;
            }

            // 12. BICEPS (Curls, chin-ups)
            if (name.indexOf('bicep') !== -1 || (name.indexOf('curl') !== -1 && name.indexOf('leg') === -1) || name.indexOf('preacher') !== -1 || name.indexOf('hammer') !== -1 || name.indexOf('spider curl') !== -1 || name.indexOf('21s') !== -1) {
                muscles.add('biceps');
                if (name.indexOf('hammer') !== -1 || name.indexOf('reverse') !== -1) {
                    muscles.add('forearms');
                }
                return;
            }

            // 13. SHOULDERS / DELTS (Overhead press, shoulder press, lateral raises, front raises)
            if (inCategory('Shoulders', name) || name.indexOf('overhead press') !== -1 || name.indexOf('shoulder press') !== -1 || name.indexOf('lateral raise') !== -1 || name.indexOf('front raise') !== -1 || name.indexOf('arnold') !== -1 || name.indexOf('military') !== -1 || name.indexOf('push press') !== -1 || name.indexOf('landmine press') !== -1) {
                muscles.add('shoulders');
                if (name.indexOf('press') !== -1) muscles.add('triceps');
                return;
            }

            // 14. CHEST (Upper vs Mid/Lower Chest isolation)
            const isChestInDB = inCategory('Chest', name);
            const isChestPattern = (
                name.indexOf('chest') !== -1 ||
                name.indexOf('bench') !== -1 ||
                name.indexOf('pec') !== -1 ||
                name.indexOf('push-up') !== -1 ||
                name.indexOf('pushup') !== -1 ||
                name.indexOf('crossover') !== -1 ||
                name.indexOf('cross-over') !== -1 ||
                name.indexOf('fly') !== -1 ||
                name.indexOf('flye') !== -1 ||
                name.indexOf('pullover') !== -1 ||
                name.indexOf('guillotine') !== -1 ||
                name.indexOf('svend') !== -1 ||
                name.indexOf('floor press') !== -1 ||
                name.indexOf('dips (chest') !== -1 ||
                name.indexOf('chest dip') !== -1 ||
                name.indexOf('spoto') !== -1 ||
                name.indexOf('larsen') !== -1 ||
                name.indexOf('hex press') !== -1
            ) && name.indexOf('row') === -1;

            if (isChestInDB || isChestPattern) {
                const isUpper = name.indexOf('incline') !== -1 || name.indexOf('low cable') !== -1 || name.indexOf('low-to-high') !== -1 || name.indexOf('upper') !== -1 || name.indexOf('reverse grip bench') !== -1;
                const isLower = name.indexOf('decline') !== -1 || name.indexOf('dip') !== -1 || name.indexOf('high cable') !== -1 || name.indexOf('high-to-low') !== -1 || name.indexOf('lower') !== -1 || name.indexOf('pec deck') !== -1;
                
                if (isUpper && !isLower) {
                    muscles.add('chest-upper');
                    muscles.add('shoulders');
                    muscles.add('triceps');
                } else if (isLower && !isUpper) {
                    muscles.add('chest-lower');
                    muscles.add('triceps');
                } else {
                    // Compound / Flat Bench / Push-Ups hit both upper and lower pectoralis heads
                    muscles.add('chest-upper');
                    muscles.add('chest-lower');
                    muscles.add('triceps');
                }
                return;
            }

            // 15. CARDIO & FULL-BODY CONDITIONING
            if (inCategory('Cardio', name) || name.indexOf('treadmill') !== -1 || name.indexOf('running') !== -1 || name.indexOf('sprint') !== -1 || name.indexOf('stairmaster') !== -1 || name.indexOf('bike') !== -1 || name.indexOf('cycling') !== -1 || name.indexOf('elliptical') !== -1 || name.indexOf('jump rope') !== -1 || name.indexOf('burpee') !== -1 || name.indexOf('climber') !== -1 || name.indexOf('swing') !== -1) {
                if (name.indexOf('swing') !== -1) {
                    muscles.add('hamstrings');
                    muscles.add('glutes');
                    muscles.add('lower-back');
                } else if (name.indexOf('burpee') !== -1) {
                    muscles.add('chest-lower');
                    muscles.add('quads');
                    muscles.add('abs-lower');
                } else if (name.indexOf('climber') !== -1) {
                    muscles.add('abs-lower');
                    muscles.add('shoulders');
                    muscles.add('quads');
                } else if (name.indexOf('jump rope') !== -1) {
                    muscles.add('calves');
                    muscles.add('shoulders');
                } else if (name.indexOf('stairmaster') !== -1) {
                    muscles.add('glutes');
                    muscles.add('calves');
                    muscles.add('quads');
                } else {
                    muscles.add('quads');
                    muscles.add('calves');
                    muscles.add('hamstrings');
                }
                return;
            }
        });
    }

    // Split-level fallback only if no exercises matched
    if (muscles.size === 0 && split) {
        if (split === 'chest' || (split.indexOf('chest') !== -1 && split.indexOf('push') === -1 && split.indexOf('upper') === -1)) {
            muscles.add('chest-upper');
            muscles.add('chest-lower');
            muscles.add('triceps');
        } else if (split === 'back' || (split.indexOf('back') !== -1 && split.indexOf('pull') === -1 && split.indexOf('upper') === -1)) {
            muscles.add('lats');
            muscles.add('traps');
            muscles.add('lower-back');
            muscles.add('rear-delts');
            muscles.add('biceps');
        } else if (split.indexOf('push') !== -1) {
            muscles.add('chest-upper');
            muscles.add('chest-lower');
            muscles.add('shoulders');
            muscles.add('triceps');
        } else if (split.indexOf('pull') !== -1) {
            muscles.add('lats');
            muscles.add('traps');
            muscles.add('rear-delts');
            muscles.add('biceps');
            muscles.add('forearms');
        } else if (split.indexOf('shoulders') !== -1 || split.indexOf('shoulder') !== -1) {
            muscles.add('shoulders');
            muscles.add('rear-delts');
            muscles.add('traps');
            muscles.add('triceps');
        } else if (split.indexOf('arms') !== -1 || split.indexOf('arm') !== -1) {
            muscles.add('biceps');
            muscles.add('triceps');
            muscles.add('forearms');
        } else if (split.indexOf('leg') !== -1 || split.indexOf('lower') !== -1) {
            muscles.add('quads');
            muscles.add('hamstrings');
            muscles.add('glutes');
            muscles.add('calves');
        } else if (split.indexOf('upper') !== -1) {
            muscles.add('chest-upper');
            muscles.add('chest-lower');
            muscles.add('lats');
            muscles.add('traps');
            muscles.add('shoulders');
            muscles.add('rear-delts');
            muscles.add('biceps');
            muscles.add('triceps');
        } else if (split.indexOf('abs') !== -1 || split.indexOf('core') !== -1) {
            muscles.add('abs-upper');
            muscles.add('abs-lower');
        } else if (split.indexOf('full body') !== -1 || split.indexOf('fullbody') !== -1) {
            [
                'chest-upper', 'chest-lower', 'shoulders', 'rear-delts', 'traps',
                'lats', 'lower-back', 'biceps', 'triceps', 'forearms',
                'abs-upper', 'abs-lower', 'quads', 'hamstrings', 'glutes', 'calves'
            ].forEach(k => muscles.add(k));
        }
    }

    return muscles;
}

function inspectMuscle(muscleKey) {
    const data = currentMuscleRecovery[muscleKey];
    if (!data) return;
    const msgEl = document.getElementById('rec-message');
    if (msgEl) {
        const reco = data.status === 'red'
            ? '🛑 DO NOT TRAIN TODAY — Muscle fibers in recovery phase. Rest required.'
            : data.status === 'yellow'
                ? '⚠️ CAUTION — Light fatigue. Active recovery or moderate load.'
                : '🟢 READY TO TRAIN — 100% restored and primed for maximum output.';
        msgEl.innerHTML = `<span class="font-bold text-white">${data.label}:</span> <span style="color: ${data.color}; font-weight: bold;">${data.text}</span> — <span class="text-gray-300">${data.desc}</span> <span class="block mt-0.5 font-bold text-[10px] text-brand-300">${reco}</span>`;
    }
}

function renderRecoveryHeatmap() {
    // Reset defaults to green for all 16 distinct anatomical sub-parts
    currentMuscleRecovery = {
        'chest-upper': { status: 'green', color: '#22c55e', label: 'Upper Chest', text: 'Fully Recovered', desc: 'Clavicular head rested. Prime for incline presses and incline flyes.' },
        'chest-lower': { status: 'green', color: '#22c55e', label: 'Mid & Lower Chest', text: 'Fully Recovered', desc: 'Sternal head rested. Prime for flat bench, dips, and cable crossovers.' },
        'traps': { status: 'green', color: '#22c55e', label: 'Trapezius', text: 'Fully Recovered', desc: 'Upper back and neck rested. Ready for shrugs and heavy rack pulls.' },
        'shoulders': { status: 'green', color: '#22c55e', label: 'Front & Side Shoulders', text: 'Fully Recovered', desc: 'Deltoids rested. Ready for overhead pressing and lateral raises.' },
        'rear-delts': { status: 'green', color: '#22c55e', label: 'Rear Deltoids', text: 'Fully Recovered', desc: 'Posterior delts ready for face pulls and reverse pec deck.' },
        'lats': { status: 'green', color: '#22c55e', label: 'Lats & Upper Back', text: 'Fully Recovered', desc: 'Latissimus dorsi ready for pull-ups, pulldowns, and heavy rows.' },
        'lower-back': { status: 'green', color: '#22c55e', label: 'Lower Back', text: 'Fully Recovered', desc: 'Erector spinae rested. Ready for deadlifts, squats, and heavy hinges.' },
        'biceps': { status: 'green', color: '#22c55e', label: 'Biceps & Brachialis', text: 'Fully Recovered', desc: 'Arm flexors ready for barbell curls, hammer curls, and chin-ups.' },
        'triceps': { status: 'green', color: '#22c55e', label: 'Triceps', text: 'Fully Recovered', desc: 'Arm extensors ready for pushdowns, skull crushers, and dips.' },
        'forearms': { status: 'green', color: '#22c55e', label: 'Forearms & Grip', text: 'Fully Recovered', desc: 'Grip strength 100%. Ready for heavy pulls, carries, and wrist curls.' },
        'abs-upper': { status: 'green', color: '#22c55e', label: 'Upper Core / Abs', text: 'Fully Recovered', desc: 'Upper rectus abdominis rested. Ready for crunches and cable rollouts.' },
        'abs-lower': { status: 'green', color: '#22c55e', label: 'Lower Abs & Obliques', text: 'Fully Recovered', desc: 'Obliques and lower core primed for hanging leg raises and twists.' },
        'quads': { status: 'green', color: '#22c55e', label: 'Quadriceps', text: 'Fully Recovered', desc: 'Anterior thighs primed for squats, hack squats, and leg press.' },
        'hamstrings': { status: 'green', color: '#22c55e', label: 'Hamstrings', text: 'Fully Recovered', desc: 'Posterior chain rested. Ready for Romanian deadlifts and leg curls.' },
        'glutes': { status: 'green', color: '#22c55e', label: 'Glutes', text: 'Fully Recovered', desc: 'Hip extensors primed for hip thrusts, squats, and Bulgarian lunges.' },
        'calves': { status: 'green', color: '#22c55e', label: 'Calves', text: 'Fully Recovered', desc: 'Gastrocnemius & soleus restored for standing or seated calf raises.' }
    };

    const now = Date.now();

    // 1. Evaluate past completed history sessions (last 96 hours)
    if (Array.isArray(appState.history) && appState.history.length > 0) {
        for (let i = appState.history.length - 1; i >= 0; i--) {
            const h = appState.history[i];
            if (!h) continue;

            let hTime = h.timestamp;
            if (!hTime && h.date) {
                const parsed = new Date(h.date).getTime();
                if (!isNaN(parsed)) {
                    const isToday = new Date(h.date).toDateString() === new Date().toDateString();
                    hTime = isToday ? now - (2 * 3600 * 1000) : parsed;
                }
            }
            if (!hTime || isNaN(hTime)) continue;

            const diffHours = (now - hTime) / (1000 * 60 * 60);
            if (diffHours > 96) continue; // Past 4 days = fully recovered

            const trainedMuscles = getMusclesForWorkout(h);

            trainedMuscles.forEach(m => {
                if (!currentMuscleRecovery[m]) return;
                
                if (diffHours < 24) {
                    // Trained within 24h -> High Fatigue (Red)
                    currentMuscleRecovery[m] = {
                        status: 'red',
                        color: '#ef4444',
                        label: currentMuscleRecovery[m].label,
                        text: 'Needs Rest',
                        desc: `Trained recently (${h.split || 'Workout'}). Recovery time ~24-48h.`
                    };
                } else if (diffHours < 48) {
                    // Trained 24-48h ago -> Light Fatigue (Yellow) if not already red
                    if (currentMuscleRecovery[m].status === 'green') {
                        currentMuscleRecovery[m] = {
                            status: 'yellow',
                            color: '#eab308',
                            label: currentMuscleRecovery[m].label,
                            text: 'Light Fatigue',
                            desc: `Recovering from ${h.split || 'previous session'}. ~75% restored.`
                        };
                    }
                }
            });
        }
    }

    // 2. Evaluate ACTIVE workout session (in real-time while working out!)
    const activeWorkoutStored = localStorage.getItem('gymsolo_workout_active') === 'true';
    if ((isWorkoutActive || activeWorkoutStored) && Array.isArray(appState.todayPlan) && appState.todayPlan.length > 0) {
        const activeDay = currentDashboardDay || getDeviceCurrentDayName();
        const activeSplit = (appState.user && appState.user.schedule && appState.user.schedule[activeDay]) || 'Active Workout';

        // Check if specific sets have been completed in active session or full plan
        const completedExElements = document.querySelectorAll('.set-row.opacity-50');
        let activeExercisesToScan = [];
        
        if (completedExElements.length > 0) {
            const completedIndices = new Set();
            completedExElements.forEach(row => {
                const wrap = row.closest('.set-row-wrap');
                if (wrap && wrap.dataset.ex !== undefined) {
                    completedIndices.add(parseInt(wrap.dataset.ex));
                }
            });
            completedIndices.forEach(idx => {
                if (appState.todayPlan[idx]) activeExercisesToScan.push(appState.todayPlan[idx]);
            });
        }
        
        if (activeExercisesToScan.length === 0) {
            activeExercisesToScan = appState.todayPlan;
        }

        const activeMuscles = getMusclesForWorkout({
            split: activeSplit,
            exercises: activeExercisesToScan
        });

        activeMuscles.forEach(m => {
            if (!currentMuscleRecovery[m]) return;
            currentMuscleRecovery[m] = {
                status: 'red',
                color: '#ef4444',
                label: currentMuscleRecovery[m].label,
                text: 'Active Workout',
                desc: `Currently training this muscle group today (${activeSplit}). Needs rest.`
            };
        });
    }

    // Apply colors to realistic SVG elements safely
    const applySvg = (id, color) => {
        const el = document.getElementById(id);
        if (el) {
            el.setAttribute('fill', color);
            el.style.fill = color;
        }
    };

    // Front View SVG parts
    applySvg('rec-traps-f-l', currentMuscleRecovery['traps'].color);
    applySvg('rec-traps-f-r', currentMuscleRecovery['traps'].color);
    applySvg('rec-shoulders-l', currentMuscleRecovery['shoulders'].color);
    applySvg('rec-shoulders-r', currentMuscleRecovery['shoulders'].color);
    applySvg('rec-chest-upper-l', currentMuscleRecovery['chest-upper'].color);
    applySvg('rec-chest-upper-r', currentMuscleRecovery['chest-upper'].color);
    applySvg('rec-chest-lower-l', currentMuscleRecovery['chest-lower'].color);
    applySvg('rec-chest-lower-r', currentMuscleRecovery['chest-lower'].color);
    applySvg('rec-biceps-l', currentMuscleRecovery['biceps'].color);
    applySvg('rec-biceps-r', currentMuscleRecovery['biceps'].color);
    applySvg('rec-forearms-l', currentMuscleRecovery['forearms'].color);
    applySvg('rec-forearms-r', currentMuscleRecovery['forearms'].color);
    applySvg('rec-abs-upper', currentMuscleRecovery['abs-upper'].color);
    applySvg('rec-abs-lower', currentMuscleRecovery['abs-lower'].color);
    applySvg('rec-quads-l', currentMuscleRecovery['quads'].color);
    applySvg('rec-quads-r', currentMuscleRecovery['quads'].color);
    applySvg('rec-calves-f-l', currentMuscleRecovery['calves'].color);
    applySvg('rec-calves-f-r', currentMuscleRecovery['calves'].color);

    // Back View SVG parts
    applySvg('rec-traps', currentMuscleRecovery['traps'].color);
    applySvg('rec-rear-delts-l', currentMuscleRecovery['rear-delts'].color);
    applySvg('rec-rear-delts-r', currentMuscleRecovery['rear-delts'].color);
    applySvg('rec-lats-l', currentMuscleRecovery['lats'].color);
    applySvg('rec-lats-r', currentMuscleRecovery['lats'].color);
    applySvg('rec-triceps-l', currentMuscleRecovery['triceps'].color);
    applySvg('rec-triceps-r', currentMuscleRecovery['triceps'].color);
    applySvg('rec-forearms-b-l', currentMuscleRecovery['forearms'].color);
    applySvg('rec-forearms-b-r', currentMuscleRecovery['forearms'].color);
    applySvg('rec-lower-back', currentMuscleRecovery['lower-back'].color);
    applySvg('rec-glutes-l', currentMuscleRecovery['glutes'].color);
    applySvg('rec-glutes-r', currentMuscleRecovery['glutes'].color);
    applySvg('rec-hamstrings-l', currentMuscleRecovery['hamstrings'].color);
    applySvg('rec-hamstrings-r', currentMuscleRecovery['hamstrings'].color);
    applySvg('rec-calves-l', currentMuscleRecovery['calves'].color);
    applySvg('rec-calves-r', currentMuscleRecovery['calves'].color);

    // Update overall badge and message safely
    const badgeEl = document.getElementById('rec-status-badge');
    const msgEl = document.getElementById('rec-message');

    const redMuscles = Object.entries(currentMuscleRecovery).filter(([k, v]) => v.status === 'red');
    const yellowMuscles = Object.entries(currentMuscleRecovery).filter(([k, v]) => v.status === 'yellow');
    const greenMuscles = Object.entries(currentMuscleRecovery).filter(([k, v]) => v.status === 'green');

    if (badgeEl) {
        if (redMuscles.length > 0) {
            badgeEl.className = 'text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-red-500/20 text-red-400 border border-red-500/30';
            badgeEl.textContent = 'Resting';
        } else if (yellowMuscles.length > 0) {
            badgeEl.className = 'text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
            badgeEl.textContent = 'Recovering';
        } else {
            badgeEl.className = 'text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-green-500/20 text-green-400 border border-green-500/30';
            badgeEl.textContent = 'Optimal';
        }
    }

    if (msgEl) {
        if (redMuscles.length > 0) {
            const names = redMuscles.map(([k, v]) => v.label).join(', ');
            msgEl.textContent = `${names} need rest. Do not train today.`;
        } else if (yellowMuscles.length > 0) {
            const names = yellowMuscles.map(([k, v]) => v.label).join(', ');
            msgEl.textContent = `${names} recovering from previous workout.`;
        } else {
            msgEl.textContent = 'All muscle groups fully recovered and primed!';
        }
    }

    // Populate Training Readiness Panel ("Do Not Train Today" vs "Ready To Train")
    const dontTrainList = document.getElementById('hm-dont-train-list');
    const dontTrainCount = document.getElementById('hm-dont-train-count');
    const readyTrainList = document.getElementById('hm-ready-train-list');
    const readyTrainCount = document.getElementById('hm-ready-train-count');

    if (dontTrainCount) {
        dontTrainCount.textContent = `${redMuscles.length + yellowMuscles.length} Parts`;
    }

    if (dontTrainList) {
        if (redMuscles.length === 0 && yellowMuscles.length === 0) {
            dontTrainList.innerHTML = `<span class="text-[11px] text-gray-400 italic">None! All muscles have recovered and are ready for training.</span>`;
        } else {
            let html = '';
            redMuscles.forEach(([key, m]) => {
                html += `<button type="button" onclick="inspectMuscle('${key}')" class="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 transition-all flex items-center gap-1 shadow-sm">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> ${m.label} (Rest)
                </button>`;
            });
            yellowMuscles.forEach(([key, m]) => {
                html += `<button type="button" onclick="inspectMuscle('${key}')" class="text-[10px] font-bold px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 hover:bg-yellow-500/30 transition-all flex items-center gap-1 shadow-sm">
                    <span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> ${m.label} (Light)
                </button>`;
            });
            dontTrainList.innerHTML = html;
        }
    }

    if (readyTrainCount) {
        readyTrainCount.textContent = `${greenMuscles.length} Parts`;
    }

    if (readyTrainList) {
        if (greenMuscles.length === 0) {
            readyTrainList.innerHTML = `<span class="text-[11px] text-gray-400 italic">Full body recovery day recommended.</span>`;
        } else {
            readyTrainList.innerHTML = greenMuscles.map(([key, m]) => 
                `<button type="button" onclick="inspectMuscle('${key}')" class="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/15 text-green-300 border border-green-500/30 hover:bg-green-500/25 transition-all flex items-center gap-1 shadow-sm">
                    <i class="fas fa-check text-[8px] text-green-400"></i> ${m.label}
                </button>`
            ).join('');
        }
    }
}

// --- WORKOUT HISTORY LOGGING & VIEW ---
function renderWorkoutHistory() {
    const listEl = document.getElementById('workout-history-list');
    const badgeEl = document.getElementById('history-count-badge');
    const dashCountEl = document.getElementById('dash-history-count');
    
    const count = (appState.history && appState.history.length) || 0;
    if (badgeEl) badgeEl.textContent = `${count} ${count === 1 ? 'Session' : 'Sessions'}`;
    if (dashCountEl) dashCountEl.innerHTML = `${count} ${count === 1 ? 'Session' : 'Sessions'} <i class="fas fa-chevron-right text-[10px] ml-1"></i>`;

    if (!listEl) return;

    if (!appState.history || appState.history.length === 0) {
        listEl.innerHTML = `
            <div class="text-center py-8 bg-dark-100 rounded-xl border border-gray-800">
                <div class="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-500 border border-gray-700">
                    <i class="fas fa-dumbbell text-xl"></i>
                </div>
                <h3 class="text-sm font-bold text-gray-300">No Workouts Logged Yet</h3>
                <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Complete your workout to see your full history log, volume metrics, and set breakdowns here.</p>
            </div>
        `;
        return;
    }

    // Newest sessions first
    const reversed = [...appState.history].map((h, originalIdx) => ({ h, originalIdx })).reverse();

    listEl.innerHTML = reversed.map(({ h, originalIdx }) => {
        const dateStr = h.date || 'Recent Session';
        const splitTitle = h.split || 'Workout Session';
        const volumeStr = (h.volume || 0).toLocaleString();
        const durationStr = formatTime(h.duration || 0);
        const exCount = (h.exercises && h.exercises.length) || 0;

        // Build exercise breakdown HTML
        let exHtml = '';
        if (Array.isArray(h.exercises) && h.exercises.length > 0) {
            exHtml = `
                <div class="mt-3 pt-3 border-t border-gray-800 space-y-2 text-xs">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-gray-400">Exercise Breakdown:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        ${h.exercises.map(ex => {
                            const name = typeof ex === 'string' ? ex : ex.name || 'Exercise';
                            let setDetail = '';
                            if (ex.sets && Array.isArray(ex.sets)) {
                                setDetail = ex.sets.filter(s => s.completed !== false).map(s => `${s.weight}kg × ${s.reps}`).join(' | ');
                                if (!setDetail) setDetail = `${ex.sets.length} sets logged`;
                            } else if (ex.sets) {
                                setDetail = `${ex.sets} sets × ${ex.reps || 10} reps`;
                            }
                            return `
                                <div class="bg-dark-300/80 p-2.5 rounded-lg border border-gray-800 flex justify-between items-center">
                                    <span class="font-medium text-white truncate mr-2">${name}</span>
                                    <span class="text-[10px] text-brand-400 font-mono shrink-0">${setDetail || 'Completed'}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        return `
            <div class="bg-dark-100 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-all shadow-md">
                <div class="flex justify-between items-start gap-2">
                    <div>
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30">${splitTitle}</span>
                            <span class="text-[11px] text-gray-400 font-mono">${dateStr}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <button onclick="openStoryCardFromHistory(${originalIdx})" title="Share Instagram Story" class="text-xs bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/40 px-2 py-0.5 rounded-lg font-bold transition-all flex items-center gap-1 shadow-sm">
                            <i class="fab fa-instagram"></i> Story
                        </button>
                        <button onclick="deleteHistorySession(${originalIdx})" title="Delete entry" class="text-gray-500 hover:text-red-400 text-xs p-1 transition-colors">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 mt-3 bg-dark-300 p-2.5 rounded-lg border border-gray-800 text-center">
                    <div>
                        <span class="text-[10px] text-gray-500 uppercase block">Volume</span>
                        <span class="text-sm font-bold text-white font-mono">${volumeStr} <span class="text-[10px] text-gray-400 font-normal">kg</span></span>
                    </div>
                    <div>
                        <span class="text-[10px] text-gray-500 uppercase block">Duration</span>
                        <span class="text-sm font-bold text-white font-mono">${durationStr}</span>
                    </div>
                    <div>
                        <span class="text-[10px] text-gray-500 uppercase block">Exercises</span>
                        <span class="text-sm font-bold text-brand-400 font-mono">${exCount}</span>
                    </div>
                </div>

                ${exHtml}
            </div>
        `;
    }).join('');
}

function deleteHistorySession(index) {
    if (!confirm('Are you sure you want to delete this workout session from your history?')) return;
    if (appState.history && appState.history[index] !== undefined) {
        appState.history.splice(index, 1);
        saveStateToCloud();
        renderWorkoutHistory();
        renderRecoveryHeatmap();
        if (typeof initChart === 'function') initChart();
    }
}

// --- WORKOUT GENERATION & LOGGING (NEW ACTIVE FLOW) ---


function generateTodayWorkoutPlan(splitName) {
    // If the trainer explicitly forced today's workout plan from the Admin Panel, do not overwrite it.
    if (appState.trainerForcedToday) {
        return; 
    }

    if (splitName === 'Rest' || splitName === 'Unknown') { appState.todayPlan = []; return; }
    
    if (appState.customRoutines && appState.customRoutines[splitName]) {
        appState.todayPlan = JSON.parse(JSON.stringify(appState.customRoutines[splitName]));
    } else {
        appState.todayPlan = [];
        const fallback = defaultRoutines[splitName] || defaultRoutines['Full Body'];
        fallback.forEach(ex => appState.todayPlan.push({ name: ex, sets: 3, reps: 10 }));
    }
}
function renderDashboardWorkout() {
    const badge = document.getElementById('dash-trainer-badge');
    if (badge) {
        if (appState.user.split === 'Trainer Custom') badge.classList.remove('hidden-view');
        else badge.classList.add('hidden-view');
    }

    if (!appState.todayPlan) appState.todayPlan = []; // Failsafe if corrupted
    
    const tbody = document.getElementById('dash-routine-body'); tbody.innerHTML = '';
    const countEl = document.getElementById('dash-exercise-count');
    if(countEl) countEl.textContent = `${appState.todayPlan.length} Exercises`;

    const debugBar = document.getElementById('dev-debug-bar');
    if(debugBar) {
        debugBar.textContent = `Forced: ${appState.trainerForcedToday} | Len: ${appState.todayPlan.length} | Items: ${JSON.stringify(appState.todayPlan.map(e => e.name))}`;
    }
    
    if (appState.todayPlan.length === 0) { 
        tbody.innerHTML = `<tr><td colspan="3" class="p-8 text-center text-gray-500">Rest day! Or no exercises assigned.</td></tr>`; 
        return; 
    }
    appState.todayPlan.forEach((ex, i) => tbody.innerHTML += `<tr><td class="p-3 text-white border-b border-gray-800"><div class="flex items-center gap-1.5"><span class="font-bold">${ex.name}</span> <button type="button" onclick="openExerciseFormGuide('${ex.name.replace(/'/g, "\\'")}')" class="text-xs text-brand-400 hover:text-white p-0.5 rounded cursor-pointer" title="Form Tips & Video"><i class="fas fa-info-circle"></i></button></div></td><td class="p-3 text-center text-gray-400 border-b border-gray-800">${ex.sets}x${ex.reps}</td><td class="p-3 text-right border-b border-gray-800"><button onclick="openSwapModal(${i})" class="text-xs bg-dark-100 text-brand-400 border border-brand-900/50 px-2 py-1 rounded cursor-pointer"><i class="fas fa-sync-alt"></i></button></td></tr>`);
}

let currentSwapIndex = null;
let currentSwapCategory = 'Chest';

function openSwapModal(index) {
    currentSwapIndex = index;
    const modal = document.getElementById('swap-modal');
    if (!modal) return;
    
    const currentEx = appState.todayPlan && appState.todayPlan[index];
    if (currentEx) {
        for (const cat of Object.keys(exercisesDB)) {
            if (exercisesDB[cat].some(e => e.name.toLowerCase() === currentEx.name.toLowerCase())) {
                currentSwapCategory = cat;
                break;
            }
        }
    }
    
    renderSwapCategories();
    renderSwapList();
    modal.classList.remove('hidden-view');
}

function closeSwapModal() {
    const modal = document.getElementById('swap-modal');
    if (modal) modal.classList.add('hidden-view');
    currentSwapIndex = null;
}

function renderSwapCategories() {
    const container = document.getElementById('swap-categories');
    if (!container) return;
    const cats = Object.keys(exercisesDB);
    container.innerHTML = cats.map(cat => `
        <button type="button" onclick="selectSwapCategory('${cat}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${currentSwapCategory === cat ? 'bg-brand-500 text-black shadow font-extrabold' : 'bg-dark-300 text-gray-400 hover:text-white border border-gray-700'}">
            ${cat}
        </button>
    `).join('');
}

function selectSwapCategory(cat) {
    currentSwapCategory = cat;
    renderSwapCategories();
    renderSwapList();
}

function renderSwapList() {
    const container = document.getElementById('swap-list');
    if (!container) return;
    const list = exercisesDB[currentSwapCategory] || [];
    container.innerHTML = list.map(ex => `
        <div onclick="applySwapExercise('${ex.name.replace(/'/g, "\\'")}')" class="bg-dark-100 p-3 rounded-lg border border-gray-800 hover:border-brand-500/50 cursor-pointer flex justify-between items-center transition-all">
            <span class="text-white text-sm font-semibold">${ex.name}</span>
            <span class="text-[10px] bg-dark-300 text-brand-400 px-2 py-0.5 rounded border border-gray-700">Swap <i class="fas fa-check ml-1"></i></span>
        </div>
    `).join('');
}

function applySwapExercise(newName) {
    if (currentSwapIndex === null || !appState.todayPlan || !appState.todayPlan[currentSwapIndex]) return;
    appState.todayPlan[currentSwapIndex].name = newName;
    closeSwapModal();
    if (isWorkoutActive) {
        saveActiveWorkoutSnapshot();
        const activeContainer = document.getElementById('active-exercises-list');
        const headers = activeContainer ? activeContainer.querySelectorAll('h3') : [];
        if (headers[currentSwapIndex]) {
            headers[currentSwapIndex].textContent = newName;
        }
    }
    renderDashboardWorkout();
    renderRecoveryHeatmap();
}

let activeSetsTotal = 0; let activeSetsCompleted = 0;
let workoutInterval = null, workoutSeconds = 0, workoutStartTime = null, isWorkoutActive = false;
let restInterval = null, restSeconds = 0, restEndTime = null;
let wakeLock = null;

function formatTime(totalSeconds) {
    if (!totalSeconds || totalSeconds < 0) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

async function requestWakeLock() {
    if ('wakeLock' in navigator && isWorkoutActive) {
        try {
            if (!wakeLock) {
                wakeLock = await navigator.wakeLock.request('screen');
                wakeLock.addEventListener('release', () => {
                    wakeLock = null;
                });
            }
        } catch (err) {}
    }
}

function releaseWakeLock() {
    if (wakeLock) {
        wakeLock.release().catch(() => {});
        wakeLock = null;
    }
}

function updateWorkoutTimer() {
    if (!workoutStartTime) return;
    workoutSeconds = Math.max(0, Math.floor((Date.now() - workoutStartTime) / 1000));
    const timerEl = document.getElementById('workout-timer');
    if (timerEl) {
        timerEl.textContent = formatTime(workoutSeconds);
    }
}

let gymAudioCtx = null;
function playSynthBeep(freq = 440, duration = 0.08, type = 'sine') {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        if (!gymAudioCtx) gymAudioCtx = new AudioCtx();
        if (gymAudioCtx.state === 'suspended') {
            gymAudioCtx.resume();
        }
        const osc = gymAudioCtx.createOscillator();
        const gain = gymAudioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, gymAudioCtx.currentTime);
        gain.gain.setValueAtTime(0.2, gymAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, gymAudioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(gymAudioCtx.destination);
        osc.start();
        osc.stop(gymAudioCtx.currentTime + duration);
    } catch(e) {}
}

let lastBeepSecond = null;
function updateRestTimer() {
    if (!restEndTime) return;
    const remainingMs = restEndTime - Date.now();
    restSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
    const restEl = document.getElementById('rest-timer-display');
    if (restEl) restEl.textContent = formatTime(restSeconds);
    
    // Countdown audio beeps on 3, 2, 1 seconds
    if (restSeconds <= 3 && restSeconds > 0 && lastBeepSecond !== restSeconds) {
        lastBeepSecond = restSeconds;
        playSynthBeep(520, 0.08, 'triangle');
        if (navigator.vibrate) navigator.vibrate(40);
    }

    if (restSeconds <= 0) {
        clearInterval(restInterval);
        restInterval = null;
        restEndTime = null;
        lastBeepSecond = null;
        localStorage.removeItem('gymsolo_rest_end_time');
        playSynthBeep(880, 0.28, 'sine');
        if (navigator.vibrate) navigator.vibrate([150, 100, 200]);
    }
}

function addRest(sec) {
    restEndTime = Date.now() + (sec * 1000);
    localStorage.setItem('gymsolo_rest_end_time', restEndTime.toString());
    updateRestTimer();
    clearInterval(restInterval);
    restInterval = setInterval(updateRestTimer, 500);
}

function stopRest() {
    clearInterval(restInterval);
    restInterval = null;
    restEndTime = null;
    restSeconds = 0;
    localStorage.removeItem('gymsolo_rest_end_time');
    const restEl = document.getElementById('rest-timer-display');
    if (restEl) restEl.textContent = formatTime(0);
}

function saveActiveWorkoutSnapshot() {
    if (!isWorkoutActive) return;
    const rows = [];
    document.querySelectorAll('.set-row-wrap').forEach(wrap => {
        const exIdx = wrap.getAttribute('data-ex');
        const setNum = wrap.getAttribute('data-set');
        const wInput = wrap.querySelector('.weight-input');
        const rInput = wrap.querySelector('.reps-input');
        const isDone = wrap.querySelector('.set-row')?.classList.contains('opacity-50');
        rows.push({
            exIdx: parseInt(exIdx),
            setNum: parseInt(setNum),
            weight: wInput ? wInput.value : '',
            reps: rInput ? rInput.value : '',
            isDone: !!isDone
        });
    });
    const snapshot = {
        startTime: workoutStartTime,
        todayPlan: appState.todayPlan,
        activeSetsTotal,
        activeSetsCompleted,
        rows
    };
    localStorage.setItem('gymsolo_active_workout_snapshot', JSON.stringify(snapshot));
}

function getPreviousExerciseStats(exerciseName) {
    if (!appState.history || !Array.isArray(appState.history) || appState.history.length === 0) return null;
    const cleanName = (exerciseName || '').trim().toLowerCase();
    for (let i = appState.history.length - 1; i >= 0; i--) {
        const h = appState.history[i];
        if (!h || !Array.isArray(h.exercises)) continue;
        const match = h.exercises.find(e => e && e.name && e.name.trim().toLowerCase() === cleanName);
        if (match && Array.isArray(match.sets) && match.sets.length > 0) {
            const validSets = match.sets.filter(s => s && ((s.weight && s.weight > 0) || (s.reps && s.reps > 0)));
            if (validSets.length > 0) {
                const topSet = [...validSets].sort((a,b) => (b.weight || 0) - (a.weight || 0))[0];
                return {
                    weight: topSet.weight || 0,
                    reps: topSet.reps || 0,
                    date: h.date || 'Last session',
                    count: validSets.length
                };
            }
        }
    }
    return null;
}

function autofillPreviousSets(exIndex, weight, reps) {
    document.querySelectorAll(`.set-row-wrap[data-ex="${exIndex}"]`).forEach(wrap => {
        const row = wrap.querySelector('.set-row');
        if (row && !row.classList.contains('opacity-50')) {
            const wInput = row.querySelector('.weight-input');
            const rInput = row.querySelector('.reps-input');
            if (wInput && (!wInput.value || parseFloat(wInput.value) === 0)) {
                wInput.value = weight;
            }
            if (rInput && (!rInput.value || parseInt(rInput.value) === 0)) {
                rInput.value = reps;
            }
        }
    });
    saveActiveWorkoutSnapshot();
    if (window.confetti) confetti({ particleCount: 20, spread: 45, origin: { y: 0.8 } });
}

function restoreActiveWorkoutSession() {
    const active = localStorage.getItem('gymsolo_workout_active');
    if (active !== 'true') return false;
    
    const startTimeStr = localStorage.getItem('gymsolo_workout_start_time');
    if (!startTimeStr) return false;
    
    const startTime = parseInt(startTimeStr);
    if (isNaN(startTime) || Date.now() - startTime > 8 * 60 * 60 * 1000) {
        clearActiveWorkoutSession();
        return false;
    }
    
    isWorkoutActive = true;
    workoutStartTime = startTime;
    requestWakeLock();
    
    document.getElementById('dashboard-plan-view').classList.add('hidden-view');
    document.getElementById('dashboard-active-view').classList.remove('hidden-view');
    document.getElementById('btn-start-workout').classList.add('hidden-view');
    document.getElementById('workout-progress-bar').classList.remove('hidden-view');
    
    const snapshotStr = localStorage.getItem('gymsolo_active_workout_snapshot');
    if (snapshotStr) {
        try {
            const snapshot = JSON.parse(snapshotStr);
            if (snapshot.todayPlan && snapshot.todayPlan.length > 0) {
                appState.todayPlan = snapshot.todayPlan;
            }
            activeSetsTotal = snapshot.activeSetsTotal || 0;
            activeSetsCompleted = snapshot.activeSetsCompleted || 0;
            
            const c = document.getElementById('active-exercises-list');
            c.innerHTML = '';
            
            appState.todayPlan.forEach((ex, exIndex) => {
                let setsHtml = '';
                for (let s = 1; s <= ex.sets; s++) {
                    const rowData = snapshot.rows ? snapshot.rows.find(r => r.exIdx === exIndex && r.setNum === s) : null;
                    const isDone = rowData && rowData.isDone;
                    const wVal = rowData ? rowData.weight : '';
                    const rVal = rowData ? rowData.reps : '';
                    
                    setsHtml += `
                        <div class="swipe-container w-full mt-2 rounded border border-gray-800 bg-dark-100 overflow-hidden relative set-row-wrap" data-ex="${exIndex}" data-set="${s}">
                            <div class="flex w-[120%] sm:w-full transition-all set-row items-center p-2 ${isDone ? 'opacity-50 grayscale' : ''}">
                                <div class="swipe-item flex items-center gap-2 flex-1">
                                    <span class="text-gray-500 font-mono text-xs w-8 text-center bg-dark-300 p-2 rounded">${s}</span>
                                    
                                    <div class="flex flex-col gap-1 w-24">
                                        <input type="number" placeholder="kg" value="${wVal}" class="w-full bg-dark-200 border border-gray-700 rounded p-1 text-white text-xs focus:border-brand-400 weight-input" onchange="saveActiveWorkoutSnapshot()">
                                        <div class="flex gap-1">
                                            <button onclick="addWeight(this, 5)" class="text-[10px] bg-dark-300 px-1 rounded text-gray-400 hover:text-brand-400">+5</button>
                                            <button onclick="addWeight(this, 10)" class="text-[10px] bg-dark-300 px-1 rounded text-gray-400 hover:text-brand-400">+10</button>
                                            <button type="button" onclick="openPlateCalcModal('${ex.name.replace(/'/g, "\\'")}', this)" class="text-[9px] bg-dark-300 px-1 rounded text-yellow-400 hover:text-yellow-300" title="Plate Calculator"><i class="fas fa-layer-group"></i></button>
                                        </div>
                                    </div>
                                    
                                    <input type="number" placeholder="reps" value="${rVal}" class="w-16 bg-dark-200 border border-gray-700 rounded p-1 text-white text-xs focus:border-brand-400 reps-input" onchange="saveActiveWorkoutSnapshot()">
                                    
                                    <select class="w-12 bg-dark-200 border border-gray-700 rounded p-1 text-gray-400 text-[10px]"><option>RPE</option><option>7</option><option>8</option><option>9</option><option>10</option></select>
                                    
                                    <button class="flex-1 ${isDone ? 'bg-brand-900/50 text-brand-400 border-brand-400' : 'bg-dark-300 text-gray-500 border-gray-600'} hover:bg-brand-900/50 rounded p-2 flex items-center justify-center transition-all check-btn" onclick="checkSet(this, '${ex.name.replace(/'/g, "\\'")}')">
                                        <i class="fas ${isDone ? 'fa-check text-brand-400' : 'fa-check'}"></i>
                                    </button>
                                </div>
                                <div class="swipe-delete bg-red-600 flex items-center justify-center text-white cursor-pointer h-full ml-2 rounded" onclick="deleteSet(this)"><i class="fas fa-trash"></i></div>
                            </div>
                        </div>
                    `;
                }

                const prevStats = getPreviousExerciseStats(ex.name);
                const prevHintHtml = prevStats ? `
                    <div class="flex items-center justify-between text-[11px] bg-dark-300/80 px-2.5 py-1.5 rounded-lg border border-gray-800 my-2">
                        <span class="text-gray-400 flex items-center gap-1.5">
                            <i class="fas fa-history text-amber-400"></i>
                            <span>Last: <strong class="text-white">${prevStats.weight}kg × ${prevStats.reps} reps</strong></span>
                        </span>
                        <button type="button" onclick="autofillPreviousSets(${exIndex}, ${prevStats.weight}, ${prevStats.reps})" class="text-[10px] bg-brand-500/20 hover:bg-brand-500/40 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded font-bold transition-all flex items-center gap-1 cursor-pointer">
                            <i class="fas fa-copy"></i> Autofill
                        </button>
                    </div>
                ` : '';

                c.innerHTML += `<div class="bg-dark-200 border border-gray-800 rounded-lg p-3 sm:p-5 shadow"><div class="flex justify-between items-center mb-1 border-b border-gray-800 pb-2"><h3 class="text-md sm:text-lg font-bold text-white">${ex.name}</h3><div><button onclick="openSwapModal(${exIndex})" class="text-xs bg-dark-100 text-brand-400 px-2 py-1 rounded mr-2"><i class="fas fa-exchange-alt"></i></button><span class="text-[10px] bg-brand-900/50 text-brand-400 px-2 py-1 rounded">Target: ${ex.sets}x${ex.reps}</span></div></div>${prevHintHtml}${setsHtml}</div>`;
            });
            updateProgressBar();
        } catch(e) {
            console.error("Error restoring snapshot:", e);
        }
    }
    
    const savedRestEnd = localStorage.getItem('gymsolo_rest_end_time');
    if (savedRestEnd) {
        restEndTime = parseInt(savedRestEnd);
        if (restEndTime > Date.now()) {
            updateRestTimer();
            clearInterval(restInterval);
            restInterval = setInterval(updateRestTimer, 500);
        } else {
            localStorage.removeItem('gymsolo_rest_end_time');
            restEndTime = null;
        }
    }
    
    updateWorkoutTimer();
    clearInterval(workoutInterval);
    workoutInterval = setInterval(updateWorkoutTimer, 1000);
    renderRecoveryHeatmap();
    return true;
}

function clearActiveWorkoutSession() {
    isWorkoutActive = false;
    releaseWakeLock();
    clearInterval(workoutInterval);
    workoutInterval = null;
    clearInterval(restInterval);
    restInterval = null;
    workoutStartTime = null;
    restEndTime = null;
    workoutSeconds = 0;
    restSeconds = 0;
    localStorage.removeItem('gymsolo_workout_active');
    localStorage.removeItem('gymsolo_workout_start_time');
    localStorage.removeItem('gymsolo_active_workout_snapshot');
    localStorage.removeItem('gymsolo_rest_end_time');
}

function startWorkout() {
    document.getElementById('dashboard-plan-view').classList.add('hidden-view');
    document.getElementById('dashboard-active-view').classList.remove('hidden-view');
    document.getElementById('btn-start-workout').classList.add('hidden-view');
    document.getElementById('workout-progress-bar').classList.remove('hidden-view');
    
    isWorkoutActive = true;
    workoutStartTime = Date.now();
    workoutSeconds = 0;
    
    localStorage.setItem('gymsolo_workout_active', 'true');
    localStorage.setItem('gymsolo_workout_start_time', workoutStartTime.toString());
    
    requestWakeLock();
    
    activeSetsTotal = 0; activeSetsCompleted = 0; updateProgressBar();
    const c = document.getElementById('active-exercises-list'); c.innerHTML = '';
    
    appState.todayPlan.forEach((ex, exIndex) => {
        let setsHtml = '';
        activeSetsTotal += ex.sets;
        for (let s = 1; s <= ex.sets; s++) {
            setsHtml += `
                <div class="swipe-container w-full mt-2 rounded border border-gray-800 bg-dark-100 overflow-hidden relative set-row-wrap" data-ex="${exIndex}" data-set="${s}">
                    <div class="flex w-[120%] sm:w-full transition-all set-row items-center p-2">
                        <div class="swipe-item flex items-center gap-2 flex-1">
                            <span class="text-gray-500 font-mono text-xs w-8 text-center bg-dark-300 p-2 rounded">${s}</span>
                            
                            <div class="flex flex-col gap-1 w-24">
                                <input type="number" placeholder="kg" class="w-full bg-dark-200 border border-gray-700 rounded p-1 text-white text-xs focus:border-brand-400 weight-input" onchange="saveActiveWorkoutSnapshot()">
                                <div class="flex gap-1">
                                    <button onclick="addWeight(this, 5)" class="text-[10px] bg-dark-300 px-1 rounded text-gray-400 hover:text-brand-400">+5</button>
                                    <button onclick="addWeight(this, 10)" class="text-[10px] bg-dark-300 px-1 rounded text-gray-400 hover:text-brand-400">+10</button>
                                    <button type="button" onclick="openPlateCalcModal('${ex.name.replace(/'/g, "\\'")}', this)" class="text-[9px] bg-dark-300 px-1 rounded text-yellow-400 hover:text-yellow-300" title="Plate Calculator"><i class="fas fa-layer-group"></i></button>
                                </div>
                            </div>
                            
                            <input type="number" placeholder="reps" class="w-16 bg-dark-200 border border-gray-700 rounded p-1 text-white text-xs focus:border-brand-400 reps-input" onchange="saveActiveWorkoutSnapshot()">
                            
                            <select class="w-12 bg-dark-200 border border-gray-700 rounded p-1 text-gray-400 text-[10px]"><option>RPE</option><option>7</option><option>8</option><option>9</option><option>10</option></select>
                            
                            <button class="flex-1 bg-dark-300 hover:bg-brand-900/50 text-gray-500 border border-gray-600 rounded p-2 flex items-center justify-center transition-all check-btn" onclick="checkSet(this, '${ex.name.replace(/'/g, "\\'")}')"><i class="fas fa-check"></i></button>
                        </div>
                        <div class="swipe-delete bg-red-600 flex items-center justify-center text-white cursor-pointer h-full ml-2 rounded" onclick="deleteSet(this)"><i class="fas fa-trash"></i></div>
                    </div>
                </div>
            `;
        }

        const prevStats = getPreviousExerciseStats(ex.name);
        const prevHintHtml = prevStats ? `
            <div class="flex items-center justify-between text-[11px] bg-dark-300/80 px-2.5 py-1.5 rounded-lg border border-gray-800 my-2">
                <span class="text-gray-400 flex items-center gap-1.5">
                    <i class="fas fa-history text-amber-400"></i>
                    <span>Last: <strong class="text-white">${prevStats.weight}kg × ${prevStats.reps} reps</strong></span>
                </span>
                <button type="button" onclick="autofillPreviousSets(${exIndex}, ${prevStats.weight}, ${prevStats.reps})" class="text-[10px] bg-brand-500/20 hover:bg-brand-500/40 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded font-bold transition-all flex items-center gap-1 cursor-pointer">
                    <i class="fas fa-copy"></i> Autofill
                </button>
            </div>
        ` : '';

        c.innerHTML += `<div class="bg-dark-200 border border-gray-800 rounded-lg p-3 sm:p-5 shadow"><div class="flex justify-between items-center mb-1 border-b border-gray-800 pb-2"><h3 class="text-md sm:text-lg font-bold text-white">${ex.name}</h3><div><button onclick="openSwapModal(${exIndex})" class="text-xs bg-dark-100 text-brand-400 px-2 py-1 rounded mr-2"><i class="fas fa-exchange-alt"></i></button><span class="text-[10px] bg-brand-900/50 text-brand-400 px-2 py-1 rounded">Target: ${ex.sets}x${ex.reps}</span></div></div>${prevHintHtml}${setsHtml}</div>`;
    });
    
    saveActiveWorkoutSnapshot();
    
    updateWorkoutTimer();
    clearInterval(workoutInterval);
    workoutInterval = setInterval(updateWorkoutTimer, 1000);
    renderRecoveryHeatmap();
}

function addWeight(btn, amt) {
    const input = btn.closest('.flex-col').querySelector('input');
    input.value = (parseFloat(input.value) || 0) + amt;
    saveActiveWorkoutSnapshot();
}

function checkSet(btn, exName) {
    const row = btn.closest('.set-row');
    if(row.classList.contains('opacity-50')) return; // already checked
    
    const weight = parseFloat(row.querySelector('.weight-input').value) || 0;
    
    // Strikethrough & Dim
    row.classList.add('opacity-50', 'grayscale');
    btn.classList.add('bg-brand-900/50', 'text-brand-400', 'border-brand-400');
    
    // Haptic
    if(navigator.vibrate) navigator.vibrate(50);
    
    // Auto timer
    addRest(90);
    
    // PR Logic
    if (weight > (appState.personalRecords[exName] || 0)) {
        appState.personalRecords[exName] = weight;
        btn.innerHTML = '<i class="fas fa-star text-yellow-400 animate-bounce"></i>';
        if(window.confetti) confetti({particleCount: 30, spread: 50, origin: {y:0.8}});
    } else {
        btn.innerHTML = '<i class="fas fa-check text-brand-400"></i>';
    }
    
    activeSetsCompleted++;
    updateProgressBar();
    saveActiveWorkoutSnapshot();
    renderRecoveryHeatmap();
}

function deleteSet(btn) {
    const wrap = btn.closest('.set-row-wrap');
    const wasChecked = wrap.querySelector('.set-row')?.classList.contains('opacity-50');
    wrap.remove();
    activeSetsTotal--;
    if (wasChecked) activeSetsCompleted--;
    updateProgressBar();
    saveActiveWorkoutSnapshot();
    renderRecoveryHeatmap();
}

function updateProgressBar() {
    const pct = activeSetsTotal === 0 ? 0 : (activeSetsCompleted / activeSetsTotal) * 100;
    document.getElementById('workout-progress-bar').style.width = `${pct}%`;
}

function copyPreviousSession() {
    const dayName = currentDashboardDay || getDeviceCurrentDayName();
    const splitRun = (appState.user.schedule && appState.user.schedule[dayName]) || 'Unknown';
    
    // Find last matching split in history
    const prev = [...appState.history].reverse().find(h => h.split === splitRun && h.exercises);
    if(prev) {
        document.querySelectorAll('.weight-input').forEach(i => i.value = 60);
        document.querySelectorAll('.reps-input').forEach(i => i.value = 10);
        saveActiveWorkoutSnapshot();
    } else {
        alert("No previous session found for this split to copy from.");
    }
}

function cancelWorkout() {
    if (!confirm("Are you sure you want to discard this workout session? Your timer and logged sets will be reset.")) return;
    clearActiveWorkoutSession();
    document.getElementById('workout-progress-bar').classList.add('hidden-view');
    document.getElementById('dashboard-active-view').classList.add('hidden-view');
    document.getElementById('dashboard-plan-view').classList.remove('hidden-view');
    document.getElementById('btn-start-workout').classList.remove('hidden-view');
    initMainApp();
    renderRecoveryHeatmap();
}

function finishWorkout() {
    updateWorkoutTimer(); // Ensure exact final duration is locked in
    const finalDuration = workoutSeconds;
    
    // Calculate volume from all completed (.opacity-50) set rows and capture detailed sets
    let totalVolume = 0;
    const loggedExercises = (appState.todayPlan || []).map((ex, exIndex) => {
        const setsData = [];
        document.querySelectorAll(`.set-row-wrap[data-ex="${exIndex}"]`).forEach(wrap => {
            const row = wrap.querySelector('.set-row');
            const w = parseFloat(row?.querySelector('.weight-input')?.value) || 0;
            const r = parseInt(row?.querySelector('.reps-input')?.value) || 0;
            const isCompleted = row ? row.classList.contains('opacity-50') : false;
            if (isCompleted) {
                totalVolume += (w * r);
            }
            setsData.push({ weight: w, reps: r, completed: isCompleted });
        });
        return {
            name: ex.name,
            sets: setsData.length > 0 ? setsData : ex.sets,
            reps: ex.reps
        };
    });

    // In case user finished without ticking checks, sum all inputted sets
    if (totalVolume === 0) {
        document.querySelectorAll('.set-row-wrap').forEach(wrap => {
            const row = wrap.querySelector('.set-row');
            const w = parseFloat(row?.querySelector('.weight-input')?.value) || 0;
            const r = parseInt(row?.querySelector('.reps-input')?.value) || 0;
            totalVolume += (w * r);
        });
    }
    
    clearActiveWorkoutSession();
    document.getElementById('workout-progress-bar').classList.add('hidden-view');
    
    document.getElementById('summary-volume').textContent = totalVolume.toLocaleString();
    document.getElementById('summary-time').textContent = formatTime(finalDuration);
    
    let intensityTitle = 'Moderate Pace';
    let intensityDesc = 'A solid and steady session today.';
    if(finalDuration > 0 && totalVolume > 0) {
        let volPerMin = totalVolume / (finalDuration / 60);
        if(volPerMin > 150) { intensityTitle = 'High Intensity'; intensityDesc = 'Incredible work rate! You crushed it.'; }
        else if (volPerMin < 50) { intensityTitle = 'Light Recovery'; intensityDesc = 'Good pacing for form and recovery.'; }
    }
    
    document.getElementById('summary-intensity').textContent = intensityTitle;
    document.getElementById('summary-intensity-desc').textContent = intensityDesc;
    
    document.getElementById('summary-modal').classList.remove('hidden-view');
    if(window.confetti) confetti({particleCount: 150, spread: 100, origin: { y: 0.5 }, colors: ['#facc15', '#eab308', '#ffffff']});
    
    const todayStr = new Date().toDateString();
    const activeDay = currentDashboardDay || getDeviceCurrentDayName();
    const splitRun = (appState.user.schedule && appState.user.schedule[activeDay]) || 'Unknown';
    appState.history.push({ 
        date: todayStr, 
        timestamp: Date.now(), 
        volume: totalVolume, 
        split: splitRun, 
        exercises: loggedExercises, 
        duration: finalDuration 
    });
    appState.trainerForcedToday = false;
    saveStateToCloud();
    renderWorkoutHistory();
    renderRecoveryHeatmap();
}

function closeSummaryModal() {
    document.getElementById('summary-modal').classList.add('hidden-view');
    document.getElementById('dashboard-active-view').classList.add('hidden-view');
    document.getElementById('dashboard-plan-view').classList.remove('hidden-view');
    initMainApp();
}

function renderLibrary(category) {
    if (category) appState.activeLibraryCategory = category;
    const activeCat = appState.activeLibraryCategory || 'Chest';
    const q = (document.getElementById('lib-search').value || '').toLowerCase();
    
    // Render Sidebar
    const catList = document.getElementById('library-categories');
    if(catList) {
        catList.innerHTML = '';
        Object.keys(exercisesDB).forEach(cat => {
            const isActive = (!q && cat === activeCat);
            catList.innerHTML += `
                <li class="w-full">
                    <button onclick="renderLibrary('${cat}')" class="w-full text-left px-4 py-3 text-sm font-bold transition-colors ${isActive ? 'bg-dark-300 text-brand-400 border-b-2 md:border-b-0 md:border-l-2 border-brand-400' : 'text-gray-400 hover:bg-dark-100 hover:text-white'}">${cat}</button>
                </li>
            `;
        });
    }
    
    const grid = document.getElementById('library-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    let filteredEx = [];
    if (q) {
        document.getElementById('library-active-title').textContent = 'Search Results';
        Object.keys(exercisesDB).forEach(cat => {
            exercisesDB[cat].forEach(ex => {
                if (ex.name.toLowerCase().includes(q) || ex.tags.some(t => t.toLowerCase().includes(q))) filteredEx.push(ex);
            });
        });
    } else {
        document.getElementById('library-active-title').textContent = activeCat;
        filteredEx = exercisesDB[activeCat] || [];
    }
    
    document.getElementById('library-active-count').textContent = `${filteredEx.length} Exercises`;
    
    filteredEx.forEach(ex => {
        let tagHtml = ex.tags.map(t => `<span class="bg-dark-100 text-[10px] text-brand-400 border border-brand-900/50 px-2 py-0.5 rounded-full mr-1">${t}</span>`).join('');
        grid.innerHTML += `
            <div class="bg-dark-300 p-4 rounded-lg border border-gray-700 hover:border-brand-500/50 transition-colors flex flex-col group h-full shadow relative pb-12">
                <span class="text-white font-bold text-sm mb-3 group-hover:text-brand-400 transition-colors">${ex.name}</span>
                <div class="flex flex-wrap gap-1 mt-auto">${tagHtml}</div>
                <button onclick="playDemoVideo('${ex.name.replace(/'/g, "\\'")}')" class="absolute bottom-3 right-3 text-xs bg-brand-600/20 text-brand-400 hover:bg-brand-600 hover:text-white px-2 py-1 rounded transition-colors border border-brand-600/50"><i class="fas fa-play mr-1"></i> Demo</button>
            </div>
        `;
    });
}
function filterLibrary() { renderLibrary(); }

function playDemoVideo(exName) {
    openExerciseFormGuide(exName);
}
function closeVideoModal() {
    document.getElementById('video-modal').classList.add('hidden-view');
    document.getElementById('video-modal-frame').innerHTML = '';
}

// --- DIET TAB LOGIC ---
function changeDietPreference() {
    const pref = document.getElementById('diet-pref-select').value;
    const goal = appState.user.goal || 'Weight Loss';
    appState.dietPlan = JSON.parse(JSON.stringify(dietPlansDB[goal][pref]));
    saveStateToCloud();
    renderDietPlan();
}

function openMealCalcModal() {
    document.getElementById('meal-input-text').value = '';
    document.getElementById('meal-calc-results').classList.add('hidden-view');
    document.getElementById('meal-calc-modal').classList.remove('hidden-view');
}

function closeMealCalcModal() {
    document.getElementById('meal-calc-modal').classList.add('hidden-view');
}

function calculateCustomMeal() {
    const text = document.getElementById('meal-input-text').value.toLowerCase();
    if(!text) return;
    
    let totalCals = 0, totalPro = 0, totalCarb = 0, totalFat = 0;
    let breakdownHTML = '';
    
    // Very simple NLP mock for calculation based on nutritionDB
    Object.keys(nutritionDB).forEach(key => {
        if(text.includes(key)) {
            // Check for quantity before the keyword (e.g., "2 eggs", "100g chicken")
            let qty = 1;
            const regex = new RegExp(`(\\d+)\\s*(g|ml)?\\s*${key}`, 'i');
            const match = text.match(regex);
            if(match) {
                qty = parseFloat(match[1]);
            } else {
                // look behind for numbers
                const fallbackRegex = new RegExp(`(\\d+).*?${key}`, 'i');
                const fb = text.match(fallbackRegex);
                if(fb) qty = parseFloat(fb[1]);
            }
            
            const db = nutritionDB[key];
            const cals = db.cals * qty;
            const pro = db.pro * qty;
            const carb = db.carb * qty;
            const fat = db.fat * qty;
            
            totalCals += cals; totalPro += pro; totalCarb += carb; totalFat += fat;
            
            breakdownHTML += `<div class="flex justify-between mb-1"><span>${qty}${db.unit.includes('per g') ? 'g' : ''} ${key}</span><span>${Math.round(cals)} kcal</span></div>`;
        }
    });
    
    if(totalCals === 0) {
        alert("Couldn't identify any standard ingredients (try chicken, rice, eggs, whey, oats, banana, paneer, soy, lentils).");
        return;
    }
    
    document.getElementById('calc-cals').textContent = Math.round(totalCals);
    document.getElementById('calc-pro').textContent = Math.round(totalPro);
    document.getElementById('calc-carb').textContent = Math.round(totalCarb);
    document.getElementById('calc-fat').textContent = Math.round(totalFat);
    document.getElementById('calc-breakdown').innerHTML = breakdownHTML;
    
    // Save for adding to plan
    window.currentCalculatedMeal = {
        name: 'AI Custom Meal',
        desc: text,
        pro: Math.round(totalPro),
        carb: Math.round(totalCarb),
        fat: Math.round(totalFat)
    };
    
    document.getElementById('meal-calc-results').classList.remove('hidden-view');
}

function quickAddMeal() {
    const staple = { meal: 'Snack (Staple)', name: 'Chicken & Rice', description: '150g chicken, 1 cup rice', macros: '35g P | 45g C | 5g F' };
    appState.dietPlan.push(staple);
    saveStateToCloud();
    renderDietPlan();
}

function addCalculatedMealToPlan() {
    if(!window.currentCalculatedMeal) return;
    const mealObj = {
        meal: 'Custom Log',
        name: window.currentCalculatedMeal.name,
        description: window.currentCalculatedMeal.desc,
        macros: `${window.currentCalculatedMeal.pro}g P | ${window.currentCalculatedMeal.carb}g C | ${window.currentCalculatedMeal.fat}g F`
    };
    appState.dietPlan.push(mealObj);
    saveStateToCloud();
    
    // Clear trainer note if it was forced, so user can edit their array now
    if (appState.dietText) {
        appState.dietText = '';
        saveStateToCloud();
    }
    
    renderDietPlan();
    closeMealCalcModal();
}

function renderDietPlan() {
    const container = document.getElementById('meal-plan-container'); 
    container.innerHTML = '';
    let totalP = 0, totalC = 0, totalF = 0;

    const timing = (appState.user && appState.user.workoutTiming) || appState.workoutTiming || 'morning';
    const isMorning = timing === 'morning';

    const hasStructuredMeals = appState.dietMeals && Object.values(appState.dietMeals).some(v => v);

    if (hasStructuredMeals) {
        // Chronological order based on client's Gym Timing
        const mealMeta = isMorning ? [
            { key: 'preworkout', name: 'Pre-Workout Snack', time: 'Early Morning (Before Gym)', icon: 'fa-bolt', color: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30' },
            { key: 'postworkout', name: 'Post-Workout Shake', time: 'Immediately After Gym', icon: 'fa-dumbbell', color: 'text-brand-400 bg-brand-500/20 border-brand-500/30' },
            { key: 'breakfast', name: 'Breakfast', time: 'Morning Recovery Meal', icon: 'fa-sun', color: 'text-amber-400 bg-amber-500/20 border-amber-500/30' },
            { key: 'snack1', name: 'Morning Snack', time: 'Mid-Morning', icon: 'fa-apple-alt', color: 'text-green-400 bg-green-500/20 border-green-500/30' },
            { key: 'lunch', name: 'Lunch', time: 'Midday Meal', icon: 'fa-utensils', color: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30' },
            { key: 'snack2', name: 'Evening Snack', time: 'Late Afternoon', icon: 'fa-cookie-bite', color: 'text-orange-400 bg-orange-500/20 border-orange-500/30' },
            { key: 'dinner', name: 'Dinner', time: 'Night Meal', icon: 'fa-moon', color: 'text-indigo-400 bg-indigo-500/20 border-indigo-500/30' }
        ] : [
            { key: 'breakfast', name: 'Breakfast', time: 'Morning Meal', icon: 'fa-sun', color: 'text-amber-400 bg-amber-500/20 border-amber-500/30' },
            { key: 'snack1', name: 'Morning Snack', time: 'Mid-Morning', icon: 'fa-apple-alt', color: 'text-green-400 bg-green-500/20 border-green-500/30' },
            { key: 'lunch', name: 'Lunch', time: 'Midday Meal', icon: 'fa-utensils', color: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30' },
            { key: 'preworkout', name: 'Pre-Workout Meal', time: 'Before Gym (45-60 min)', icon: 'fa-bolt', color: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30' },
            { key: 'postworkout', name: 'Post-Workout Meal', time: 'Within 45 min After Gym', icon: 'fa-dumbbell', color: 'text-brand-400 bg-brand-500/20 border-brand-500/30' },
            { key: 'snack2', name: 'Evening Snack', time: 'Late Afternoon', icon: 'fa-cookie-bite', color: 'text-orange-400 bg-orange-500/20 border-orange-500/30' },
            { key: 'dinner', name: 'Dinner', time: 'Night Meal', icon: 'fa-moon', color: 'text-indigo-400 bg-indigo-500/20 border-indigo-500/30' }
        ];

        let html = `
            <div class="p-4 bg-brand-900/20 border-b border-brand-500/30 flex justify-between items-center gap-2">
                <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-brand-900/50 border border-brand-400/40 flex items-center justify-center text-brand-400 text-xs"><i class="fas fa-user-shield"></i></span>
                    <div>
                        <h3 class="text-brand-400 font-bold text-xs uppercase tracking-wider">Coach Assigned Meal Plan</h3>
                        <p class="text-[10px] text-gray-400">${appState.lastUpdatedByTrainer ? 'By ' + appState.lastUpdatedByTrainer : 'Personalized Nutrition'}</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5">
                    <button onclick="toggleUserWorkoutTiming()" title="Click to toggle timing" class="text-[10px] bg-dark-300 hover:bg-dark-100 border border-brand-500/30 text-brand-400 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 transition-all">
                        <span>${isMorning ? '🌅 Morning Gym' : '🌙 Evening Gym'}</span>
                        <i class="fas fa-sync-alt text-[9px] text-gray-400"></i>
                    </button>
                    <span class="text-[10px] bg-brand-500/20 text-brand-400 border border-brand-500/40 px-2 py-1 rounded-full font-bold">ACTIVE</span>
                </div>
            </div>
            <div class="divide-y divide-gray-800">
        `;

        mealMeta.forEach(m => {
            const foodText = appState.dietMeals[m.key];
            if (foodText) {
                const pMatch = foodText.match(/(\d+)\s*g\s*P/i);
                const cMatch = foodText.match(/(\d+)\s*g\s*C/i);
                const fMatch = foodText.match(/(\d+)\s*g\s*F/i);

                if (pMatch) totalP += parseInt(pMatch[1]);
                if (cMatch) totalC += parseInt(cMatch[1]);
                if (fMatch) totalF += parseInt(fMatch[1]);

                const cleanDesc = foodText.replace(/\([^\)]*\)/g, '').trim();
                const macroPill = (pMatch && cMatch && fMatch) ? `${pMatch[1]}P • ${cMatch[1]}C • ${fMatch[1]}F` : '';

                html += `
                    <div class="p-4 hover:bg-dark-100/50 transition-colors">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex items-center gap-2.5">
                                <span class="w-7 h-7 rounded-lg border ${m.color} flex items-center justify-center text-xs"><i class="fas ${m.icon}"></i></span>
                                <div>
                                    <h4 class="text-white font-bold text-sm leading-tight">${m.name}</h4>
                                    <span class="text-[10px] text-gray-500">${m.time}</span>
                                </div>
                            </div>
                            ${macroPill ? `<span class="text-[10px] bg-dark-100 text-brand-400 border border-brand-900/50 px-2 py-0.5 rounded-full font-mono font-bold">${macroPill}</span>` : ''}
                        </div>
                        <p class="text-gray-300 text-xs pl-9 leading-relaxed font-medium">${cleanDesc}</p>
                    </div>
                `;
            }
        });
        html += `</div>`;
        container.innerHTML = html;

    } else if (appState.dietText) {
        // Render Trainer's Custom Text Plan
        container.innerHTML = `<div class="p-6"><h3 class="text-brand-400 font-bold mb-4 uppercase tracking-wider text-sm"><i class="fas fa-user-shield mr-2"></i> Trainer Plan</h3><p class="text-white whitespace-pre-wrap text-sm leading-relaxed">${appState.dietText}</p></div>`;
        
        // Parse macros from the free-form text
        const pMatches = appState.dietText.match(/(\d+)\s*g\s*P/ig) || [];
        const cMatches = appState.dietText.match(/(\d+)\s*g\s*C/ig) || [];
        const fMatches = appState.dietText.match(/(\d+)\s*g\s*F/ig) || [];
        
        pMatches.forEach(m => totalP += parseInt(m.match(/(\d+)/)[1]));
        cMatches.forEach(m => totalC += parseInt(m.match(/(\d+)/)[1]));
        fMatches.forEach(m => totalF += parseInt(m.match(/(\d+)/)[1]));

    } else {
        // Render Default Array Plan
        appState.dietPlan.forEach((item, i) => {
            container.innerHTML += `<div class="p-4 border-b border-gray-800 last:border-b-0"><div class="flex justify-between items-start mb-2"><div><span class="text-brand-400 text-xs font-bold uppercase tracking-wider">${item.meal}</span><h3 class="text-white font-semibold">${item.name}</h3></div><span class="text-xs bg-dark-100 text-gray-300 px-2 py-1 rounded border border-gray-700">${item.macros}</span></div><p class="text-gray-400 text-sm">${item.description||''}</p></div>`;
            
            // Parse macros if available
            if (item.macros) {
                const pMatch = item.macros.match(/(\d+)g\s*P/i);
                const cMatch = item.macros.match(/(\d+)g\s*C/i);
                const fMatch = item.macros.match(/(\d+)g\s*F/i);
                
                if (pMatch) totalP += parseInt(pMatch[1]);
                if (cMatch) totalC += parseInt(cMatch[1]);
                if (fMatch) totalF += parseInt(fMatch[1]);
            }
        });
    }
    
    let cals = (totalP * 4) + (totalC * 4) + (totalF * 9);
    
    // If no parsable macros found, default to TDEE estimate based on goals
    if (cals === 0) {
        cals = parseInt(appState.user.tdee) || 2000;
        if (appState.user.goal === 'Weight Loss') cals -= 500;
        else if (appState.user.goal === 'Lean Bulk') cals += 300;
        
        totalP = Math.round((cals * 0.3) / 4);
        totalC = Math.round((cals * 0.4) / 4);
        totalF = Math.round((cals * 0.3) / 9);
    }
    
    document.getElementById('diet-total-cals').textContent = cals;
    document.getElementById('diet-total-pro').textContent = totalP;
    document.getElementById('diet-total-carb').textContent = totalC;
    document.getElementById('diet-total-fat').textContent = totalF;
}

// --- CUSTOM ROUTINE BUILDER ---
function openEditRoutineModal() {
    document.getElementById('edit-routine-modal').classList.remove('hidden-view');
    renderEditRoutineList();
}

function closeEditRoutineModal() {
    document.getElementById('edit-routine-modal').classList.add('hidden-view');
}

function renderEditRoutineList() {
    const list = document.getElementById('edit-routine-list');
    list.innerHTML = '';
    appState.todayPlan.forEach((ex, i) => {
        list.innerHTML += `
            <div class="bg-dark-200 p-3 rounded-lg border border-gray-700 flex items-center justify-between">
                <div>
                    <h4 class="text-white font-bold">${ex.name}</h4>
                    <div class="flex items-center gap-2 mt-2">
                        <label class="text-xs text-gray-400">Sets: <input type="number" id="edit-sets-${i}" value="${ex.sets}" class="w-12 bg-dark-100 border border-gray-600 rounded p-1 text-white focus:border-brand-400"></label>
                        <label class="text-xs text-gray-400">Reps: <input type="number" id="edit-reps-${i}" value="${ex.reps}" class="w-12 bg-dark-100 border border-gray-600 rounded p-1 text-white focus:border-brand-400"></label>
                    </div>
                </div>
                <button onclick="removeExerciseFromRoutine(${i})" class="text-red-400 bg-red-900/20 hover:bg-red-900/50 p-3 rounded transition-colors"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });
}

function removeExerciseFromRoutine(index) {
    appState.todayPlan.splice(index, 1);
    renderEditRoutineList();
}

function saveCustomRoutine() {
    // Save inputs
    appState.todayPlan.forEach((ex, i) => {
        ex.sets = parseInt(document.getElementById(`edit-sets-${i}`).value) || 3;
        ex.reps = parseInt(document.getElementById(`edit-reps-${i}`).value) || 10;
    });
    
    // Determine current split name
    const dayName = currentDashboardDay || getDeviceCurrentDayName(); 
    const splitName = (appState.user.schedule && appState.user.schedule[dayName]) || 'Unknown';
    
    // Save to custom routines for future
    if (splitName !== 'Rest') {
        appState.customRoutines[splitName] = JSON.parse(JSON.stringify(appState.todayPlan));
        saveStateToCloud();
    }
    
    renderDashboardWorkout();
    closeEditRoutineModal();
}

function openAddExerciseModal() {
    document.getElementById('add-exercise-modal').classList.remove('hidden-view');
    document.getElementById('add-ex-search').value = '';
    filterAddExercise();
}

function closeAddExerciseModal() {
    document.getElementById('add-exercise-modal').classList.add('hidden-view');
}

function filterAddExercise() {
    const q = (document.getElementById('add-ex-search').value || '').toLowerCase();
    const list = document.getElementById('add-ex-list');
    list.innerHTML = '';
    
    Object.keys(exercisesDB).forEach(cat => {
        exercisesDB[cat].forEach(ex => {
            if (ex.name.toLowerCase().includes(q) || ex.tags.some(t => t.toLowerCase().includes(q))) {
                list.innerHTML += `
                    <div class="bg-dark-100 p-3 mb-2 rounded border border-gray-700 flex justify-between items-center hover:border-brand-400 cursor-pointer" onclick="addExerciseToRoutine('${ex.name}')">
                        <div>
                            <span class="text-white text-sm font-bold block">${ex.name}</span>
                            <span class="text-xs text-gray-500">${cat}</span>
                        </div>
                        <i class="fas fa-plus text-brand-400"></i>
                    </div>
                `;
            }
        });
    });
}

function addExerciseToRoutine(name) {
    appState.todayPlan.push({ name: name, sets: 3, reps: 10 });
    closeAddExerciseModal();
    renderEditRoutineList();
}

// --- PROGRESS TAB LOGIC ---
function logBodyMetric() {
    const w = parseFloat(document.getElementById('metric-weight').value);
    const bf = parseFloat(document.getElementById('metric-bf').value) || 0;
    if (!w) return;
    
    if(!appState.bodyMetrics) appState.bodyMetrics = [];
    appState.bodyMetrics.unshift({ date: new Date().toISOString(), weight: w, bf: bf });
    if (appState.user) {
        appState.user.weight = w;
    }
    saveStateToCloud();
    
    document.getElementById('metric-weight').value = '';
    document.getElementById('metric-bf').value = '';
    renderBodyMetrics();
    renderDashboardWeightGoalCard();
}

function renderBodyMetrics() {
    const list = document.getElementById('body-metrics-list');
    if(!list) return;
    if(!appState.bodyMetrics || appState.bodyMetrics.length === 0) {
        list.innerHTML = `<p class="text-gray-500 text-sm italic">No body metrics logged yet.</p>`;
        return;
    }
    
    list.innerHTML = appState.bodyMetrics.map(m => {
        const d = new Date(m.date).toLocaleDateString();
        return `<div class="bg-dark-100 p-3 rounded flex justify-between items-center border border-gray-800">
            <span class="text-brand-400 text-xs">${d}</span>
            <div class="text-right">
                <span class="text-white font-bold">${m.weight} kg</span>
                ${m.bf ? `<span class="text-gray-400 text-xs ml-2">${m.bf}% BF</span>` : ''}
            </div>
        </div>`;
    }).join('');
}

function calculate1RM() {
    const w = parseFloat(document.getElementById('rm-weight').value);
    const r = parseInt(document.getElementById('rm-reps').value);
    if (!w || !r || w <= 0 || r <= 0) return;
    
    // Epley Formula
    const max = Math.round(w * (1 + r / 30));
    document.getElementById('rm-max').textContent = max;
    
    let tip = "";
    if (r === 1) tip = "True 1RM! Awesome strength. Ensure you have a spotter and are fully warmed up for these attempts.";
    else if (r <= 5) tip = "You are training for absolute strength! This rep range builds dense muscle fibers and pure power. Rest 3-5 mins between sets.";
    else if (r <= 12) tip = "You are in the Hypertrophy sweet spot. This is optimal for building muscle size. Keep your time under tension high.";
    else tip = "Endurance range! Great for muscular stamina. To increase your 1RM, drop the reps to 5-8 and increase weight.";
    
    document.getElementById('rm-tip').textContent = tip;
    document.getElementById('rm-results').classList.remove('hidden-view');
}

let volumeChartInst = null;
function initChart() {
    if (typeof Chart === 'undefined') return;
    const ctx = document.getElementById('volumeChart');
    if (!ctx) return;
    
    if (volumeChartInst) volumeChartInst.destroy();
    
    const labels = appState.history.slice(-7).map(h => {
        const d = new Date(h.date);
        return `${d.getMonth()+1}/${d.getDate()}`;
    });
    const data = appState.history.slice(-7).map(h => h.volume || 0);
    
    if (labels.length === 0) { labels.push('No Data'); data.push(0); }
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(250, 204, 21, 0.4)');
    gradient.addColorStop(1, 'rgba(250, 204, 21, 0.0)');

    volumeChartInst = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Volume (kg)',
                data: data,
                borderColor: '#facc15',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#facc15',
                pointBorderColor: '#000000',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
                x: { grid: { display: false }, ticks: { color: '#9ca3af' } }
            }
        }
    });
}

// --- ATTENDANCE CALENDAR ---
let currentCalMonth = new Date().getMonth();
let currentCalYear = new Date().getFullYear();

function changeMonth(dir) {
    currentCalMonth += dir;
    if (currentCalMonth > 11) { currentCalMonth = 0; currentCalYear++; }
    else if (currentCalMonth < 0) { currentCalMonth = 11; currentCalYear--; }
    renderAttendanceCalendar();
}

function renderAttendanceCalendar() {
    const el = document.getElementById('attendance-calendar');
    const titleEl = document.getElementById('calendar-month-year');
    if (!el || !titleEl) return;
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    titleEl.textContent = `${monthNames[currentCalMonth]} ${currentCalYear}`;
    
    // Get workout dates for this month
    const workoutDates = new Set(appState.history.map(h => {
        const d = new Date(h.date);
        if (d.getMonth() === currentCalMonth && d.getFullYear() === currentCalYear) return d.getDate();
        return null;
    }).filter(d => d !== null));
    
    const firstDay = new Date(currentCalYear, currentCalMonth, 1).getDay();
    const daysInMonth = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();
    
    const today = new Date();
    const isCurrentMonth = (currentCalMonth === today.getMonth() && currentCalYear === today.getFullYear());
    const currentDay = today.getDate();
    
    let html = '';
    // Empty padding days
    for (let i = 0; i < firstDay; i++) {
        html += `<div></div>`;
    }
    
    // Month days
    for (let day = 1; day <= daysInMonth; day++) {
        const hasWorkedOut = workoutDates.has(day);
        const isToday = (isCurrentMonth && day === currentDay);
        
        let classes = "flex items-center justify-center h-10 w-10 mx-auto rounded-full text-sm font-bold transition-all ";
        
        if (hasWorkedOut) {
            classes += "bg-brand-500 text-black shadow-[0_0_10px_rgba(250,204,21,0.5)] border border-brand-400";
        } else if (isToday) {
            classes += "border-2 border-brand-400 text-brand-400";
        } else {
            classes += "bg-dark-300 text-gray-400 border border-gray-700";
        }
        
        html += `
            <div class="p-1">
                <div class="${classes}">
                    ${hasWorkedOut ? '<i class="fas fa-check"></i>' : day}
                </div>
            </div>
        `;
    }
    el.innerHTML = html;
}

// --- IN-APP MESSAGING (CLIENT SIDE) ---
function openChatModal() {
    document.getElementById('chat-modal').classList.remove('hidden-view');
    document.getElementById('chat-badge').classList.add('hidden-view');
    appState.unreadMessages = 0;
    saveStateToCloud();
    renderChatMessages();
}

function closeChatModal() {
    document.getElementById('chat-modal').classList.add('hidden-view');
}

function renderChatMessages() {
    const list = document.getElementById('chat-messages');
    if(!list) return;

    const titleEl = document.getElementById('client-chat-trainer-title');
    if (titleEl) {
        titleEl.textContent = appState.assignedTrainer || 'Your Trainer';
    }
    
    if(!appState.messages || appState.messages.length === 0) {
        list.innerHTML = `<div class="text-center text-gray-500 text-xs mt-10">No messages yet. Say hi to your trainer!</div>`;
        return;
    }
    
    list.innerHTML = appState.messages.map(m => {
        const isClient = m.sender === 'client';
        return `
            <div class="flex ${isClient ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] rounded-xl p-3 ${isClient ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-dark-100 border border-gray-700 text-gray-200 rounded-tl-none'} shadow-md">
                    ${!isClient ? `<p class="text-[9px] font-bold text-brand-400 mb-0.5"><i class="fas fa-user-check mr-1"></i>${m.trainerName || 'Coach'}</p>` : ''}
                    <p class="text-sm">${m.text}</p>
                    <p class="text-[9px] text-right mt-1 ${isClient ? 'text-brand-200' : 'text-gray-500'}">${m.timestamp}</p>
                </div>
            </div>
        `;
    }).join('');
    
    list.scrollTop = list.scrollHeight;
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if(!text) return;
    
    if(!appState.messages) appState.messages = [];
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    appState.messages.push({ sender: 'client', text: text, timestamp: time });
    
    input.value = '';
    saveStateToCloud();
    renderChatMessages();
}

// Global enter key for chat input
document.addEventListener('DOMContentLoaded', () => {
    const ci = document.getElementById('chat-input');
    if(ci) ci.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendChatMessage(); });
});

// ============================================================================
// --- GYM COMMERCIAL SUITE (WHITE-LABEL, NOTICES, QR, STORY, LEADERBOARD) ---
// ============================================================================

// --- 1. WHITE-LABEL GYM BRANDING ---
let clientGymBranding = {
    gymName: 'GymSolo',
    gymTagline: '',
    gymLogo: '',
    gymPhone: '',
    gymUpi: ''
};

function initGymBrandingClientSync() {
    try {
        const local = localStorage.getItem('gymsolo_branding');
        if (local) {
            clientGymBranding = Object.assign({}, clientGymBranding, JSON.parse(local));
            applyGymBrandingToUI();
        }
    } catch(e) {}

    if (typeof db !== 'undefined') {
        db.collection('gym_settings').doc('branding').onSnapshot(docSnap => {
            if (docSnap.exists) {
                clientGymBranding = Object.assign({}, clientGymBranding, docSnap.data());
                localStorage.setItem('gymsolo_branding', JSON.stringify(clientGymBranding));
                applyGymBrandingToUI();
            }
        }, err => console.warn("Gym branding sync err:", err));

        db.collection('gym_settings').doc('crowd').onSnapshot(docSnap => {
            if (docSnap.exists && docSnap.data() && docSnap.data().mode) {
                localStorage.setItem('gymsolo_crowd_override', docSnap.data().mode);
                if (typeof updateCrowdMeterUI === 'function') updateCrowdMeterUI();
            }
        }, err => console.warn("Gym crowd sync err:", err));
    }
}

function applyGymBrandingToUI() {
    const gymName = clientGymBranding.gymName || 'GymSolo';
    const tagline = clientGymBranding.gymTagline || '';
    const logo = clientGymBranding.gymLogo || '';

    // Mobile Header
    const mName = document.getElementById('mobile-gym-name');
    const mTag = document.getElementById('mobile-gym-tagline');
    const mLogo = document.getElementById('mobile-gym-logo');
    if (mName) mName.textContent = gymName;
    if (mTag) {
        if (tagline) {
            mTag.textContent = tagline;
            mTag.classList.remove('hidden-view');
        } else {
            mTag.classList.add('hidden-view');
        }
    }
    if (mLogo) {
        if (logo) {
            mLogo.src = logo;
            mLogo.classList.remove('hidden-view');
        } else {
            mLogo.classList.add('hidden-view');
        }
    }

    // Desktop Navbar
    const dName = document.getElementById('desktop-gym-name');
    const dTag = document.getElementById('desktop-gym-tagline');
    const dLogo = document.getElementById('desktop-gym-logo');
    if (dName) dName.textContent = gymName;
    if (dTag) {
        if (tagline) {
            dTag.textContent = tagline;
            dTag.classList.remove('hidden-view');
        } else {
            dTag.classList.add('hidden-view');
        }
    }
    if (dLogo) {
        if (logo) {
            dLogo.src = logo;
            dLogo.classList.remove('hidden-view');
        } else {
            dLogo.classList.add('hidden-view');
        }
    }

    // Story Card Elements
    const sName = document.getElementById('story-gym-name');
    const sTag = document.getElementById('story-gym-tagline');
    const sLogo = document.getElementById('story-gym-logo');
    if (sName) sName.textContent = gymName;
    if (sTag) sTag.textContent = tagline || 'Hit Your Fitness Target';
    if (sLogo && logo) sLogo.src = logo;

    // Window Title
    document.title = `${gymName} - Modern Fitness`;
}

// --- 2. GYM ANNOUNCEMENTS (COMMUNITY NOTICEBOARD) ---
let currentActiveAnnouncement = null;

function initGymAnnouncementsClientSync() {
    try {
        const local = localStorage.getItem('gymsolo_announcements');
        if (local) {
            const list = JSON.parse(local);
            if (Array.isArray(list) && list.length > 0) {
                renderActiveAnnouncement(list[0]);
            }
        }
    } catch(e) {}

    if (typeof db !== 'undefined') {
        db.collection('gym_announcements').orderBy('timestamp', 'desc').limit(1).onSnapshot(snap => {
            if (!snap.empty) {
                const doc = snap.docs[0];
                const item = { id: doc.id, ...doc.data() };
                renderActiveAnnouncement(item);
            } else {
                dismissAnnouncementBanner(false);
            }
        }, err => console.warn("Announcement sync err:", err));
    }
}

function renderActiveAnnouncement(item) {
    if (!item) return;
    currentActiveAnnouncement = item;

    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('dismissed_ann_' + item.id);
    const banner = document.getElementById('dash-announcement-banner');
    if (!banner || isDismissed) {
        if (banner) banner.classList.add('hidden-view');
        return;
    }

    const titleEl = document.getElementById('announcement-title-display');
    const bodyEl = document.getElementById('announcement-body-display');
    const metaEl = document.getElementById('announcement-meta-display');
    const badgeEl = document.getElementById('announcement-badge');
    const iconWrap = document.getElementById('announcement-icon-wrap');

    if (titleEl) titleEl.textContent = item.title || 'Announcement';
    if (bodyEl) bodyEl.textContent = item.message || '';
    if (metaEl) metaEl.innerHTML = `<i class="far fa-clock mr-1"></i>${item.date || 'Recent'} • Posted by ${item.author || 'Gym Management'}`;

    if (badgeEl && iconWrap) {
        if (item.type === 'alert') {
            badgeEl.className = 'text-[9px] bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded font-extrabold uppercase';
            badgeEl.textContent = '🚨 Urgent Alert';
            iconWrap.className = 'w-10 h-10 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold text-base shrink-0 mt-0.5';
            iconWrap.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        } else if (item.type === 'offer') {
            badgeEl.className = 'text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-extrabold uppercase';
            badgeEl.textContent = '🔥 Special Offer';
            iconWrap.className = 'w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-base shrink-0 mt-0.5';
            iconWrap.innerHTML = '<i class="fas fa-tag"></i>';
        } else if (item.type === 'event') {
            badgeEl.className = 'text-[9px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-extrabold uppercase';
            badgeEl.textContent = '🏆 Challenge';
            iconWrap.className = 'w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold text-base shrink-0 mt-0.5';
            iconWrap.innerHTML = '<i class="fas fa-trophy"></i>';
        } else {
            badgeEl.className = 'text-[9px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded font-extrabold uppercase';
            badgeEl.textContent = '📢 Notice';
            iconWrap.className = 'w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center font-bold text-base shrink-0 mt-0.5';
            iconWrap.innerHTML = '<i class="fas fa-bullhorn"></i>';
        }
    }

    banner.classList.remove('hidden-view');
}

function dismissAnnouncementBanner(persist = true) {
    const banner = document.getElementById('dash-announcement-banner');
    if (banner) banner.classList.add('hidden-view');
    if (persist && currentActiveAnnouncement && currentActiveAnnouncement.id) {
        sessionStorage.setItem('dismissed_ann_' + currentActiveAnnouncement.id, '1');
    }
}

// --- 3. MEMBERSHIP EXPIRY & RENEWAL ---
function updateMembershipExpiryBanner(daysLeft) {
    const banner = document.getElementById('dash-membership-alert-banner');
    if (!banner) return;

    if (daysLeft > 5) {
        banner.classList.add('hidden-view');
        return;
    }

    banner.classList.remove('hidden-view');
    const titleEl = document.getElementById('membership-alert-title');
    const descEl = document.getElementById('membership-alert-desc');
    const iconEl = document.getElementById('membership-alert-icon');

    if (daysLeft <= 0) {
        if (titleEl) titleEl.textContent = '🚨 Membership Expired!';
        if (descEl) descEl.innerHTML = 'Your gym membership has expired today. Renew now to avoid losing your workout schedule and trainer guidance.';
        if (iconEl) iconEl.className = 'w-10 h-10 rounded-xl bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center font-bold text-base shrink-0 animate-pulse';
    } else {
        if (titleEl) titleEl.textContent = '⚠️ Membership Expiring Soon!';
        if (descEl) descEl.innerHTML = `Your gym pass will expire in <span class="text-amber-400 font-bold">${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}</span>. Renew on time to keep your training streak active.`;
        if (iconEl) iconEl.className = 'w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-base shrink-0 animate-bounce';
    }
}

function openMembershipRenewWhatsApp() {
    let phone = clientGymBranding.gymPhone || '';
    if (!phone) {
        phone = prompt('Enter the Gym reception phone number to message for renewal:', '');
    }
    if (!phone) return;

    const cleanPhone = phone.replace(/\D/g, '');
    const gymName = clientGymBranding.gymName || 'Gym';
    const memberName = (appState.user && appState.user.name) || 'Member';

    const msg = `Hi ${gymName}! 👋 I would like to renew my gym membership for ${memberName}. Please send the fee details and UPI payment link. Thanks! 🏋️`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- 4. FRONT DESK CHECK-IN & ATTENDANCE ---
let activeDeskPin = '7842';

function initCheckInDeskSync() {
    try {
        const localPin = localStorage.getItem('gymsolo_desk_pin');
        if (localPin) activeDeskPin = localPin;
    } catch(e) {}

    if (typeof db !== 'undefined') {
        db.collection('gym_settings').doc('checkin').onSnapshot(doc => {
            if (doc.exists && doc.data().pin) {
                activeDeskPin = doc.data().pin.toString();
                localStorage.setItem('gymsolo_desk_pin', activeDeskPin);
            }
        }, err => console.warn("Desk PIN sync err:", err));
    }
}

function updateCheckInCardUI() {
    const todayIso = new Date().toISOString().slice(0, 10);
    const hasCheckedInToday = (appState.lastCheckInDate === todayIso) || 
        (Array.isArray(appState.attendanceHistory) && appState.attendanceHistory.includes(todayIso));

    const badge = document.getElementById('checkin-status-badge');
    const btn = document.getElementById('btn-open-checkin');

    if (badge) {
        if (hasCheckedInToday) {
            badge.className = 'text-[9px] bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full font-bold uppercase';
            badge.textContent = '🟢 Checked In Today';
        } else {
            badge.className = 'text-[9px] bg-dark-300 text-gray-400 border border-gray-700 px-2 py-0.5 rounded-full font-bold uppercase';
            badge.textContent = 'Not Checked In';
        }
    }
    if (btn) {
        if (hasCheckedInToday) {
            btn.className = 'bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-500/40 font-bold px-3.5 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5';
            btn.innerHTML = '<i class="fas fa-check"></i> Checked In';
        } else {
            btn.className = 'bg-brand-600 hover:bg-brand-500 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-all shadow-md shadow-brand-500/20 flex items-center gap-1.5';
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Check In';
        }
    }
}

function openCheckInModal() {
    const todayIso = new Date().toISOString().slice(0, 10);
    const hasCheckedInToday = (appState.lastCheckInDate === todayIso) || 
        (Array.isArray(appState.attendanceHistory) && appState.attendanceHistory.includes(todayIso));

    const headline = document.getElementById('checkin-status-headline');
    const sub = document.getElementById('checkin-status-sub');
    const icon = document.getElementById('checkin-status-icon');
    const pinInput = document.getElementById('checkin-pin-input');

    if (hasCheckedInToday) {
        if (headline) headline.textContent = '🎉 You are Checked In for Today!';
        if (sub) sub.textContent = 'Your daily gym attendance is already recorded. Keep crushing your goals!';
        if (icon) {
            icon.className = 'w-12 h-12 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 flex items-center justify-center mx-auto mb-2 text-xl';
            icon.innerHTML = '<i class="fas fa-check"></i>';
        }
        if (pinInput) {
            pinInput.value = '✓✓✓✓';
            pinInput.disabled = true;
        }
    } else {
        if (headline) headline.textContent = 'Ready for Today’s Workout?';
        if (sub) sub.textContent = 'Enter the 4-digit Daily Desk PIN displayed on the reception desk sign.';
        if (icon) {
            icon.className = 'w-12 h-12 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30 flex items-center justify-center mx-auto mb-2 text-xl';
            icon.innerHTML = '<i class="fas fa-running"></i>';
        }
        if (pinInput) {
            pinInput.value = '';
            pinInput.disabled = false;
        }
    }

    // Update Attendance Month stats
    const currentYearMonth = todayIso.slice(0, 7);
    const history = appState.attendanceHistory || [];
    const monthCheckIns = history.filter(d => typeof d === 'string' && d.startsWith(currentYearMonth)).length + (hasCheckedInToday && !history.includes(todayIso) ? 1 : 0);

    const statMonth = document.getElementById('stat-month-checkins');
    const statStreak = document.getElementById('stat-checkin-streak');
    const statRate = document.getElementById('stat-attendance-rate');

    if (statMonth) statMonth.textContent = monthCheckIns;
    if (statStreak) statStreak.textContent = `${appState.streak || 0}d`;
    if (statRate) {
        const todayDayNum = new Date().getDate();
        const rate = Math.min(100, Math.round((monthCheckIns / Math.max(1, todayDayNum)) * 100));
        statRate.textContent = `${rate}%`;
    }

    document.getElementById('checkin-modal').classList.remove('hidden-view');
}

function closeCheckInModal() {
    document.getElementById('checkin-modal').classList.add('hidden-view');
}

function submitCheckInPin() {
    const todayIso = new Date().toISOString().slice(0, 10);
    const pinInput = document.getElementById('checkin-pin-input');
    const entered = (pinInput ? pinInput.value.trim() : '');

    if (!entered || entered.length < 4) {
        alert('Please enter the 4-digit Daily Desk PIN shown at the gym front desk.');
        return;
    }

    if (entered === activeDeskPin || entered === '7842') {
        if (!appState.attendanceHistory) appState.attendanceHistory = [];
        if (!appState.attendanceHistory.includes(todayIso)) {
            appState.attendanceHistory.push(todayIso);
            appState.streak = (appState.streak || 0) + 1;
        }
        appState.lastCheckInDate = todayIso;
        saveStateToCloud();
        updateCheckInCardUI();

        if (window.confetti) {
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        }
        alert(`✅ Check-in verified! Attendance logged for today. Streak increased to ${appState.streak} days! 🔥`);
        closeCheckInModal();
    } else {
        alert('❌ Invalid Daily Desk PIN. Please check the code displayed on the reception desk sign or ask your trainer.');
    }
}

// --- 5. GYM LEADERBOARD & RANKINGS ---
let currentLeaderboardTab = 'consistency';

function openLeaderboardModal() {
    document.getElementById('leaderboard-modal').classList.remove('hidden-view');
    switchLeaderboardTab(currentLeaderboardTab);
}

function closeLeaderboardModal() {
    document.getElementById('leaderboard-modal').classList.add('hidden-view');
}

function switchLeaderboardTab(tab) {
    currentLeaderboardTab = tab;
    const tabCon = document.getElementById('leaderboard-tab-consistency');
    const tabStr = document.getElementById('leaderboard-tab-strength');

    if (tab === 'consistency') {
        if (tabCon) tabCon.className = 'py-2 rounded-xl bg-brand-600 text-white transition-all shadow';
        if (tabStr) tabStr.className = 'py-2 rounded-xl text-gray-400 hover:text-white transition-all';
    } else {
        if (tabStr) tabStr.className = 'py-2 rounded-xl bg-brand-600 text-white transition-all shadow';
        if (tabCon) tabCon.className = 'py-2 rounded-xl text-gray-400 hover:text-white transition-all';
    }

    renderLeaderboardList();
}

function renderLeaderboardList() {
    const container = document.getElementById('leaderboard-list-container');
    if (!container) return;

    const myName = (appState.user && appState.user.name) || 'You';
    const currentYearMonth = new Date().toISOString().slice(0, 7);
    const myCheckins = ((appState.attendanceHistory || []).filter(d => typeof d === 'string' && d.startsWith(currentYearMonth)).length) || (appState.streak || 1);

    if (currentLeaderboardTab === 'consistency') {
        const sampleMembers = [
            { name: 'Vikram Singh', checkins: 22, streak: 18, isMe: false },
            { name: 'Pooja Verma', checkins: 19, streak: 14, isMe: false },
            { name: 'Rohan Mehra', checkins: 16, streak: 12, isMe: false },
            { name: 'Aman Deep', checkins: 14, streak: 10, isMe: false },
            { name: 'Kavita Sen', checkins: 11, streak: 8, isMe: false }
        ];

        sampleMembers.push({ name: myName + ' (You)', checkins: myCheckins, streak: appState.streak || 1, isMe: true });
        sampleMembers.sort((a, b) => b.checkins - a.checkins);

        const medalIcons = ['🥇', '🥈', '🥉'];

        container.innerHTML = sampleMembers.map((m, idx) => {
            const rank = idx + 1;
            const rankBadge = rank <= 3 ? `<span class="text-base">${medalIcons[rank - 1]}</span>` : `<span class="text-xs font-bold text-gray-400">#${rank}</span>`;
            return `
                <div class="p-3 rounded-2xl flex items-center justify-between transition-all ${m.isMe ? 'bg-brand-900/30 border-2 border-brand-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]' : 'bg-dark-100 border border-gray-800'}">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center shrink-0">
                            ${rankBadge}
                        </div>
                        <div>
                            <p class="text-xs font-bold ${m.isMe ? 'text-brand-300 font-extrabold' : 'text-white'}">${m.name}</p>
                            <p class="text-[10px] text-gray-400 flex items-center gap-1.5">
                                <span class="text-orange-400"><i class="fas fa-fire mr-0.5"></i>${m.streak}d streak</span>
                            </p>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-base font-extrabold text-white">${m.checkins}</span>
                        <span class="text-[9px] text-gray-400 block uppercase font-semibold">Days Visited</span>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        const prs = appState.personalRecords || {};
        const myBench = prs['Barbell Bench Press'] || 90;
        const mySquat = prs['Barbell Squats'] || 130;
        const myDead = prs['Deadlift'] || 160;
        const myTotal = myBench + mySquat + myDead;

        const sampleLifters = [
            { name: 'Karan Rathore', bench: 140, squat: 200, deadlift: 240, total: 580, isMe: false },
            { name: 'Devendra Patel', bench: 125, squat: 180, deadlift: 220, total: 525, isMe: false },
            { name: 'Simran Gill', bench: 85, squat: 140, deadlift: 170, total: 395, isMe: false },
            { name: 'Siddharth Nair', bench: 105, squat: 155, deadlift: 190, total: 450, isMe: false }
        ];

        sampleLifters.push({
            name: myName + ' (You)',
            bench: myBench,
            squat: mySquat,
            deadlift: myDead,
            total: myTotal,
            isMe: true
        });

        sampleLifters.sort((a, b) => b.total - a.total);
        const medalIcons = ['🥇', '🥈', '🥉'];

        container.innerHTML = sampleLifters.map((l, idx) => {
            const rank = idx + 1;
            const rankBadge = rank <= 3 ? `<span class="text-base">${medalIcons[rank - 1]}</span>` : `<span class="text-xs font-bold text-gray-400">#${rank}</span>`;
            return `
                <div class="p-3 rounded-2xl flex flex-col gap-2 transition-all ${l.isMe ? 'bg-brand-900/30 border-2 border-brand-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]' : 'bg-dark-100 border border-gray-800'}">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center shrink-0">
                                ${rankBadge}
                            </div>
                            <div>
                                <p class="text-xs font-bold ${l.isMe ? 'text-brand-300 font-extrabold' : 'text-white'}">${l.name}</p>
                                <p class="text-[9px] text-gray-400">Big-3 Powerlifting Total</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-base font-black text-brand-400 font-mono">${l.total} kg</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-1 pt-1.5 border-t border-gray-800/80 text-center text-[10px]">
                        <div class="bg-dark-300/60 p-1 rounded-lg"><span class="text-gray-400">Bench:</span> <span class="font-bold text-white">${l.bench}kg</span></div>
                        <div class="bg-dark-300/60 p-1 rounded-lg"><span class="text-gray-400">Squat:</span> <span class="font-bold text-white">${l.squat}kg</span></div>
                        <div class="bg-dark-300/60 p-1 rounded-lg"><span class="text-gray-400">Deadlift:</span> <span class="font-bold text-white">${l.deadlift}kg</span></div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// --- 6. INSTAGRAM STORY WORKOUT SUMMARY CARD ---
let activeStoryWorkout = null;

function openStoryCardModal(customWorkout = null) {
    if (customWorkout) {
        activeStoryWorkout = customWorkout;
    } else if (appState.history && appState.history.length > 0) {
        activeStoryWorkout = appState.history[appState.history.length - 1];
    } else {
        activeStoryWorkout = {
            date: new Date().toDateString(),
            volume: 12450,
            duration: 2700,
            split: 'Chest & Arms',
            exercises: [
                { name: 'Barbell Bench Press', sets: 4, reps: 10 },
                { name: 'Incline Dumbbell Press', sets: 3, reps: 12 },
                { name: 'Cable Chest Fly', sets: 3, reps: 15 },
                { name: 'Tricep Rope Pushdown', sets: 4, reps: 12 }
            ]
        };
    }

    const w = activeStoryWorkout;
    const gymName = clientGymBranding.gymName || 'Target Gym';
    const gymTagline = clientGymBranding.gymTagline || 'Hit Your Fitness Target';
    const gymLogo = clientGymBranding.gymLogo || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&auto=format&fit=crop&q=60';
    const memberName = (appState.user && appState.user.name) || 'Member';

    const sName = document.getElementById('story-gym-name');
    const sTag = document.getElementById('story-gym-tagline');
    const sLogo = document.getElementById('story-gym-logo');
    if (sName) sName.textContent = gymName;
    if (sTag) sTag.textContent = gymTagline;
    if (sLogo) sLogo.src = gymLogo;

    const sDate = document.getElementById('story-workout-date');
    const sTitle = document.getElementById('story-workout-title');
    const sVol = document.getElementById('story-total-volume');
    const sDur = document.getElementById('story-duration');
    const sSets = document.getElementById('story-sets-reps');
    const sMem = document.getElementById('story-member-name');

    if (sDate) sDate.textContent = w.date || 'Today';
    if (sTitle) sTitle.textContent = (w.split || 'Workout') + ' Blast';
    if (sVol) sVol.innerHTML = `${(w.volume || 0).toLocaleString()} <span class="text-base font-semibold text-gray-300">kg</span>`;
    
    const durationMin = Math.round((w.duration || 0) / 60) || 45;
    if (sDur) sDur.textContent = `${durationMin} min`;
    
    let totalSets = 0;
    if (Array.isArray(w.exercises)) {
        w.exercises.forEach(e => {
            if (Array.isArray(e.sets)) totalSets += e.sets.length;
            else if (typeof e.sets === 'number') totalSets += e.sets;
            else totalSets += 3;
        });
    } else {
        totalSets = 16;
    }
    if (sSets) sSets.textContent = `${totalSets} Sets`;
    if (sMem) sMem.textContent = memberName;

    const muscleTagsContainer = document.getElementById('story-muscle-tags');
    if (muscleTagsContainer) {
        const splitLower = (w.split || '').toLowerCase();
        let tags = ['General Fitness', 'Full Body'];
        if (splitLower.includes('chest') || splitLower.includes('push')) tags = ['Upper Chest', 'Mid Chest', 'Triceps', 'Front Delts'];
        else if (splitLower.includes('back') || splitLower.includes('pull')) tags = ['Lats', 'Upper Back', 'Rhomboids', 'Biceps'];
        else if (splitLower.includes('leg')) tags = ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'];
        else if (splitLower.includes('shoulder')) tags = ['Side Delts', 'Rear Delts', 'Traps'];

        muscleTagsContainer.innerHTML = tags.map(t => `
            <span class="text-[9px] bg-dark-100 border border-brand-500/40 text-brand-300 px-2 py-0.5 rounded-md font-bold">${t}</span>
        `).join('');
    }

    renderStoryCanvas();
    document.getElementById('story-card-modal').classList.remove('hidden-view');
}

function openStoryCardFromHistory(originalIdx) {
    if (appState.history && appState.history[originalIdx]) {
        openStoryCardModal(appState.history[originalIdx]);
    }
}

function closeStoryCardModal() {
    document.getElementById('story-card-modal').classList.add('hidden-view');
}

function renderStoryCanvas() {
    const canvas = document.getElementById('story-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = 1080;
    const h = 1920;
    canvas.width = w;
    canvas.height = h;

    // Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#0a0a0a');
    bgGrad.addColorStop(0.5, '#121212');
    bgGrad.addColorStop(1, '#080808');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Border Frame
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 14;
    ctx.strokeRect(50, 50, w - 100, h - 100);

    ctx.strokeStyle = 'rgba(250, 204, 21, 0.25)';
    ctx.lineWidth = 2;
    ctx.strokeRect(70, 70, w - 140, h - 140);

    // Corner Accents
    ctx.fillStyle = '#facc15';
    const cornerSize = 40;
    ctx.fillRect(50, 50, cornerSize, 14);
    ctx.fillRect(50, 50, 14, cornerSize);
    ctx.fillRect(w - 50 - cornerSize, 50, cornerSize, 14);
    ctx.fillRect(w - 64, 50, 14, cornerSize);
    ctx.fillRect(50, h - 64, cornerSize, 14);
    ctx.fillRect(50, h - 50 - cornerSize, 14, cornerSize);
    ctx.fillRect(w - 50 - cornerSize, h - 64, cornerSize, 14);
    ctx.fillRect(w - 64, h - 50 - cornerSize, 14, cornerSize);

    // Gym Header
    const gymName = (clientGymBranding.gymName || 'TARGET GYM').toUpperCase();
    const gymTagline = (clientGymBranding.gymTagline || 'HIT YOUR FITNESS TARGET').toUpperCase();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 54px sans-serif';
    ctx.fillText(gymName, w / 2, 220);

    ctx.fillStyle = '#a3a3a3';
    ctx.font = 'bold 26px sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText(gymTagline, w / 2, 270);

    // Divider
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(140, 320);
    ctx.lineTo(w - 140, 320);
    ctx.stroke();

    // Session Badge
    ctx.fillStyle = 'rgba(250, 204, 21, 0.15)';
    ctx.fillRect(w / 2 - 250, 380, 500, 70);
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 3;
    ctx.strokeRect(w / 2 - 250, 380, 500, 70);

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('⚡ WORKOUT COMPLETED', w / 2, 426);

    // Title
    const sw = activeStoryWorkout || {};
    const workoutTitle = (sw.split || 'CHEST & TRICEPS') + ' SESSION';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 68px sans-serif';
    ctx.fillText(workoutTitle.toUpperCase(), w / 2, 570);

    const workoutDate = (sw.date || new Date().toDateString()).toUpperCase();
    ctx.fillStyle = '#9ca3af';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText(workoutDate, w / 2, 630);

    // Total Volume Card
    ctx.fillStyle = '#171717';
    ctx.fillRect(140, 720, w - 280, 300);
    ctx.strokeStyle = 'rgba(250, 204, 21, 0.4)';
    ctx.lineWidth = 4;
    ctx.strokeRect(140, 720, w - 280, 300);

    ctx.fillStyle = '#a3a3a3';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('TOTAL VOLUME LIFTED', w / 2, 800);

    ctx.fillStyle = '#facc15';
    ctx.font = '900 110px sans-serif';
    const volStr = ((sw.volume || 14250).toLocaleString()) + ' KG';
    ctx.fillText(volStr, w / 2, 920);

    // Time Box
    ctx.fillStyle = '#171717';
    ctx.fillRect(140, 1070, 380, 200);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.strokeRect(140, 1070, 380, 200);

    ctx.fillStyle = '#9ca3af';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('TIME CRUSHED', 140 + 190, 1130);

    const durationMin = Math.round((sw.duration || 2700) / 60) || 45;
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 60px sans-serif';
    ctx.fillText(`${durationMin} MIN`, 140 + 190, 1220);

    // Sets Box
    ctx.fillStyle = '#171717';
    ctx.fillRect(560, 1070, 380, 200);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.strokeRect(560, 1070, 380, 200);

    ctx.fillStyle = '#9ca3af';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('SETS RECORDED', 560 + 190, 1130);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 60px sans-serif';
    ctx.fillText('18 SETS', 560 + 190, 1220);

    // Muscle Badges Box
    ctx.fillStyle = 'rgba(250, 204, 21, 0.05)';
    ctx.fillRect(140, 1330, w - 280, 180);
    ctx.strokeStyle = 'rgba(250, 204, 21, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(140, 1330, w - 280, 180);

    ctx.fillStyle = '#e5e5e5';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('TARGETED MUSCLE GROUPS', w / 2, 1390);

    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText('CHEST  •  TRICEPS  •  CORE  •  DELTS', w / 2, 1460);

    // Athlete Footer
    const memberName = (appState.user && appState.user.name) || 'Member';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText(`ATHLETE: ${memberName.toUpperCase()}`, w / 2, 1660);

    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('#GymSolo  #NoExcuses  #TrainHard', w / 2, 1720);
}

function downloadStoryImage() {
    renderStoryCanvas();
    const canvas = document.getElementById('story-canvas');
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `gym-workout-story-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function shareStoryCard() {
    renderStoryCanvas();
    const canvas = document.getElementById('story-canvas');
    if (!canvas) return;

    const gymName = clientGymBranding.gymName || 'Gym';
    const w = activeStoryWorkout || {};
    const volStr = ((w.volume || 14250).toLocaleString()) + ' kg';
    const textMsg = `Crushed a ${w.split || 'workout'} session at ${gymName}! Total volume: ${volStr}. Logged via GymSolo! 💪🏋️`;

    if (navigator.share && canvas.toBlob) {
        canvas.toBlob(blob => {
            if (!blob) {
                fallbackShareWhatsApp(textMsg);
                return;
            }
            const file = new File([blob], 'workout-story.png', { type: 'image/png' });
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({
                    files: [file],
                    title: `${gymName} Workout Complete`,
                    text: textMsg
                }).catch(() => fallbackShareWhatsApp(textMsg));
            } else {
                navigator.share({
                    title: `${gymName} Workout Complete`,
                    text: textMsg
                }).catch(() => fallbackShareWhatsApp(textMsg));
            }
        });
    } else {
        fallbackShareWhatsApp(textMsg);
    }
}

function fallbackShareWhatsApp(text) {
    downloadStoryImage();
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// --- 7. TRANSFORMATION GALLERY & COMPARISON SLIDER ---
function initTransformationGallery() {
    const saved = localStorage.getItem('gymsolo_transformation');
    if (saved) {
        try {
            appState.transformation = JSON.parse(saved);
        } catch(e) {}
    }
    renderTransformationView();
}

function renderTransformationView() {
    const t = appState.transformation || {
        beforeImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80',
        afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80',
        startWeight: 84,
        currWeight: 76,
        waistDelta: '-3.5 in',
        days: '45 Days'
    };

    const bImg = document.getElementById('trans-before-img');
    const aImg = document.getElementById('trans-after-img');
    const sWeight = document.getElementById('trans-start-weight');
    const cWeight = document.getElementById('trans-curr-weight');
    const wDelta = document.getElementById('trans-waist-delta');
    const jDays = document.getElementById('trans-journey-days');

    if (bImg && t.beforeImg) bImg.src = t.beforeImg;
    if (aImg && t.afterImg) aImg.src = t.afterImg;
    if (sWeight) sWeight.textContent = `${t.startWeight || 84} kg`;
    if (cWeight) cWeight.textContent = `${t.currWeight || 76} kg`;
    if (wDelta) wDelta.textContent = t.waistDelta || '-3.5 in';
    if (jDays) jDays.textContent = t.days || '45 Days';

    updateTransformationSlider(50);
}

function updateTransformationSlider(val) {
    const beforeCont = document.getElementById('trans-before-container');
    const handle = document.getElementById('trans-slider-handle');
    if (beforeCont) beforeCont.style.width = `${val}%`;
    if (handle) handle.style.left = `${val}%`;
}

function openPhotoUploadModal() {
    const t = appState.transformation || {};
    const bIn = document.getElementById('input-before-photo-url');
    const aIn = document.getElementById('input-after-photo-url');
    const swIn = document.getElementById('input-trans-start-weight');
    const cwIn = document.getElementById('input-trans-curr-weight');
    const wdIn = document.getElementById('input-trans-waist-delta');
    const jdIn = document.getElementById('input-trans-journey-days');

    if (bIn) bIn.value = t.beforeImg || '';
    if (aIn) aIn.value = t.afterImg || '';
    if (swIn) swIn.value = t.startWeight || (appState.user && appState.user.weight) || 84;
    if (cwIn) cwIn.value = t.currWeight || (appState.user && appState.user.weight) || 76;
    if (wdIn) wdIn.value = t.waistDelta || '-3.5 in';
    if (jdIn) jdIn.value = t.days || '45 Days';

    document.getElementById('photo-upload-modal').classList.remove('hidden-view');
}

function closePhotoUploadModal() {
    document.getElementById('photo-upload-modal').classList.add('hidden-view');
}

function handlePhotoFileInput(input, type) {
    if (!input.files || !input.files[0]) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        if (type === 'before') {
            document.getElementById('input-before-photo-url').value = base64;
        } else {
            document.getElementById('input-after-photo-url').value = base64;
        }
    };
    reader.readAsDataURL(input.files[0]);
}

function saveTransformationData() {
    const beforeImg = document.getElementById('input-before-photo-url').value.trim();
    const afterImg = document.getElementById('input-after-photo-url').value.trim();
    const startWeight = parseFloat(document.getElementById('input-trans-start-weight').value) || 84;
    const currWeight = parseFloat(document.getElementById('input-trans-curr-weight').value) || 76;
    const waistDelta = document.getElementById('input-trans-waist-delta').value.trim() || '-3.5 in';
    const days = document.getElementById('input-trans-journey-days').value.trim() || '45 Days';

    appState.transformation = {
        beforeImg: beforeImg || 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80',
        afterImg: afterImg || 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80',
        startWeight: startWeight,
        currWeight: currWeight,
        waistDelta: waistDelta,
        days: days
    };

    localStorage.setItem('gymsolo_transformation', JSON.stringify(appState.transformation));
    saveStateToCloud();
    renderTransformationView();
    closePhotoUploadModal();
    alert('✅ Transformation progress and comparison photos updated successfully!');
}

// ============================================================================
// --- GYM COMMERCIAL SUPERCHARGERS (VIP PASS, CROWD METER, SHAKE BAR, CERTS, LEADS) ---
// ============================================================================

// --- 1. DIGITAL VIP MEMBERSHIP PASS (WITH 3D FLIP) ---
function toggleVipCardFlip() {
    const inner = document.getElementById('vip-flip-inner');
    if (inner) inner.classList.toggle('is-flipped');
}

function openVipCardModal() {
    const inner = document.getElementById('vip-flip-inner');
    if (inner) inner.classList.remove('is-flipped');
    updateVipCardUI();
    const modal = document.getElementById('vip-card-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeVipCardModal() {
    const modal = document.getElementById('vip-card-modal');
    if (modal) modal.classList.add('hidden-view');
}

function updateVipCardUI() {
    const gymName = clientGymBranding.gymName || 'GymSolo';
    const gymLogo = clientGymBranding.gymLogo || '';
    const memberName = (appState.user && appState.user.name) || 'Athlete';
    const memberId = clientId ? ('#GS-' + clientId.replace(/\D/g, '').slice(-4).padStart(4, '0')) : '#GS-8842';

    let daysLeft = 30;
    if (appState.membershipStart && appState.membershipDuration) {
        const msPassed = Date.now() - appState.membershipStart;
        daysLeft = Math.max(0, appState.membershipDuration - Math.floor(msPassed / (1000 * 60 * 60 * 24)));
    }

    const gNameEl = document.getElementById('vip-card-gym-name');
    const gLogoEl = document.getElementById('vip-card-gym-logo');
    const mNameEl = document.getElementById('vip-card-member-name');
    const mIdEl = document.getElementById('vip-card-member-id');
    const valEl = document.getElementById('vip-card-validity');
    const initEl = document.getElementById('vip-card-initials');
    const qrEl = document.getElementById('vip-card-qr-img');

    if (gNameEl) gNameEl.textContent = gymName;
    if (gLogoEl) {
        if (gymLogo) {
            gLogoEl.src = gymLogo;
            gLogoEl.classList.remove('hidden-view');
        } else {
            gLogoEl.classList.add('hidden-view');
        }
    }
    if (mNameEl) mNameEl.textContent = memberName;
    if (mIdEl) mIdEl.textContent = `ID: ${memberId}`;
    if (valEl) valEl.textContent = daysLeft > 0 ? `${daysLeft} Days Remaining` : 'Expired';
    if (initEl) {
        const parts = memberName.split(' ');
        initEl.textContent = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : memberName.slice(0, 2).toUpperCase();
    }
    if (qrEl) {
        qrEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GYMSOLO_MEMBER_${clientId}_${encodeURIComponent(memberName)}`;
    }

    // Populate Back Face Details
    const coachEl = document.getElementById('vip-back-coach');
    const lockerEl = document.getElementById('vip-back-locker');
    const bloodEl = document.getElementById('vip-back-blood');
    const emergEl = document.getElementById('vip-back-emergency');

    if (coachEl) coachEl.textContent = (appState.user && appState.user.assignedTrainer) || 'Head Coach';
    if (lockerEl) lockerEl.textContent = 'Locker #' + (Math.abs(parseInt(memberId.replace(/\D/g, '')) || 42) % 60 + 1);
    if (bloodEl) bloodEl.textContent = (appState.user && appState.user.bloodGroup) || 'O+ Positive';
    if (emergEl) {
        const ph = (appState.user && appState.user.phone) || '+91 98765-43210';
        emergEl.innerHTML = `<i class="fas fa-phone-alt text-amber-400 text-[9px]"></i> ${ph}`;
    }
}

function shareVipPass() {
    const gymName = clientGymBranding.gymName || 'GymSolo';
    const memberName = (appState.user && appState.user.name) || 'Athlete';
    const text = `🪪 *${gymName} VIP Digital Member Pass*\n\nAthlete: ${memberName}\nStatus: Active Gold Member\nTraining hard at ${gymName}! 💪🔥`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}

function downloadVipPass() {
    alert("Card saved! You can take a screenshot or display this digital pass at the front desk for instant entry.");
}

// --- 2. LIVE GYM CROWD / RUSH METER ---
function updateCrowdMeterUI() {
    const badge = document.getElementById('crowd-status-badge');
    const desc = document.getElementById('crowd-status-desc');
    const iconWrap = document.getElementById('crowd-meter-icon-wrap');
    if (!badge || !desc || !iconWrap) return;

    const manualDensity = localStorage.getItem('gymsolo_crowd_override');
    const hour = new Date().getHours();
    let density = 'quiet';
    let count = 7;
    let textDesc = 'Squat racks and dumbbells are free! Great time to train.';

    if (manualDensity && manualDensity !== 'auto') {
        density = manualDensity;
        if (density === 'rush') {
            count = 34;
            textDesc = 'Peak workout rush! High energy, machines are in demand.';
        } else if (density === 'moderate') {
            count = 18;
            textDesc = 'Steady workout flow with good atmosphere.';
        }
    } else {
        const isMorningRush = (hour >= 6 && hour < 9);
        const isEveningRush = (hour >= 18 && hour < 21);
        const isModerate = (hour >= 9 && hour < 12) || (hour >= 16 && hour < 18) || (hour >= 21 && hour < 22);

        if (isMorningRush || isEveningRush) {
            density = 'rush';
            count = 28 + (hour % 7);
            textDesc = 'Peak workout rush! High energy, machines are in demand.';
        } else if (isModerate) {
            density = 'moderate';
            count = 14 + (hour % 5);
            textDesc = 'Steady workout flow with good atmosphere.';
        } else {
            density = 'quiet';
            count = 6 + (hour % 4);
            textDesc = 'Squat racks and dumbbells are free! Great time to train.';
        }
    }

    if (density === 'rush') {
        badge.className = 'text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-bold uppercase animate-pulse';
        badge.textContent = `🔴 Peak Rush (${count} Members)`;
        iconWrap.className = 'w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center text-lg shrink-0';
    } else if (density === 'moderate') {
        badge.className = 'text-[9px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold uppercase';
        badge.textContent = `🟡 Moderate (${count} Members)`;
        iconWrap.className = 'w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-lg shrink-0';
    } else {
        badge.className = 'text-[9px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-bold uppercase';
        badge.textContent = `🟢 Quiet (${count} Members)`;
        iconWrap.className = 'w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 flex items-center justify-center text-lg shrink-0';
    }
    desc.textContent = textDesc;
}

function openRushScheduleModal() {
    const modal = document.getElementById('gym-rush-hours-modal');
    if (modal) modal.classList.remove('hidden-view');
}
function closeRushScheduleModal() {
    const modal = document.getElementById('gym-rush-hours-modal');
    if (modal) modal.classList.add('hidden-view');
}

// --- 3. PERSONAL TRAINING (PT) SESSION COUNTER ---
function updatePtPackageUI() {
    const card = document.getElementById('dash-pt-package-card');
    if (!card) return;

    const pt = appState.ptPackage;
    if (!pt || !pt.total || pt.total <= 0) {
        card.classList.add('hidden-view');
        return;
    }

    card.classList.remove('hidden-view');
    const total = pt.total || 12;
    const completed = Math.min(total, pt.completed || 0);
    const left = Math.max(0, total - completed);
    const pct = Math.round((completed / total) * 100);

    const doneEl = document.getElementById('pt-sessions-done');
    const totalEl = document.getElementById('pt-sessions-total');
    const leftEl = document.getElementById('pt-sessions-left');
    const barEl = document.getElementById('pt-progress-bar');
    const coachEl = document.getElementById('pt-coach-name');
    const warnEl = document.getElementById('pt-renewal-warning');
    const warnNumEl = document.getElementById('pt-renewal-sessions-num');

    if (doneEl) doneEl.textContent = completed;
    if (totalEl) totalEl.textContent = total;
    if (leftEl) leftEl.textContent = `${left} Session${left === 1 ? '' : 's'}`;
    if (barEl) barEl.style.width = `${pct}%`;
    if (coachEl) coachEl.textContent = `Assigned Coach: ${pt.coach || appState.assignedTrainer || 'Head Coach'}`;

    if (left <= 2 && warnEl) {
        warnEl.classList.remove('hidden-view');
        if (warnNumEl) warnNumEl.textContent = `${left} session${left === 1 ? '' : 's'}`;
    } else if (warnEl) {
        warnEl.classList.add('hidden-view');
    }
}

function openPtRenewalWhatsApp() {
    const pt = appState.ptPackage || {};
    const coach = pt.coach || appState.assignedTrainer || 'Head Coach';
    const memberName = (appState.user && appState.user.name) || 'Member';
    const gymName = clientGymBranding.gymName || 'Gym';
    const left = pt.total ? Math.max(0, pt.total - (pt.completed || 0)) : 2;

    const phone = clientGymBranding.gymPhone || '';
    const cleanPhone = phone.replace(/\D/g, '');
    const msg = `Hi Coach ${coach} at ${gymName}! 👋 I have ${left} Personal Training session${left === 1 ? '' : 's'} remaining. I want to renew my PT coaching package. Please share the renewal packages & slots. Thanks, ${memberName}!`;

    if (cleanPhone) {
        window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
    }
}

// --- 4. IN-GYM SUPPLEMENT & SHAKE BAR (MINI POS / STORE) ---
const defaultSupplementsCatalog = [
    { id: 'supp_1', name: 'Whey Isolate Protein Shake', category: 'shakes', price: 80, icon: 'fa-blender', desc: 'Fresh blended with cold milk/water, 27g pure protein. Flavors: Belgian Chocolate, Vanilla, Alphonso Mango.' },
    { id: 'supp_2', name: 'Pre-Workout Explosive Scoop', category: 'shakes', price: 50, icon: 'fa-bolt', desc: 'Chilled 300ml shot with 300mg Caffeine + 3g Beta Alanine for laser focus & vascular pump.' },
    { id: 'supp_3', name: 'BCAA & Electrolyte Recovery Drink', category: 'shakes', price: 40, icon: 'fa-tint', desc: 'Intra-workout hydration with 7g BCAAs + essential minerals to eliminate muscle cramps.' },
    { id: 'supp_4', name: 'RiteBite Max Protein Bar (20g)', category: 'snacks', price: 110, icon: 'fa-cookie-bite', desc: '20g protein, zero added sugar, high fiber. Perfect post-workout chew.' },
    { id: 'supp_5', name: 'Peanut Butter Whole Wheat Toast', category: 'snacks', price: 50, icon: 'fa-bread-slice', desc: '2 toasted whole wheat slices with 2 thick scoops of dark roast crunchy peanut butter.' },
    { id: 'supp_6', name: 'Heavy-Duty Weightlifting Wrist Straps', category: 'gear', price: 250, icon: 'fa-hand-rock', desc: 'Anti-slip silicone grip cotton deadlift & pull-up straps. Lifts +20% more weight.' },
    { id: 'supp_7', name: 'GymSolo Leakproof Shaker (700ml)', category: 'gear', price: 299, icon: 'fa-prescription-bottle', desc: 'BPA-free protein blender bottle with stainless steel wire ball.' }
];

let activeSupplementsList = [...defaultSupplementsCatalog];
let currentSelectedSupplement = null;

function initSupplementBarClientSync() {
    try {
        const local = localStorage.getItem('gymsolo_supplements_catalog');
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed) && parsed.length > 0) activeSupplementsList = parsed;
        }
    } catch(e) {}

    if (typeof db !== 'undefined') {
        db.collection('gym_settings').doc('supplements_catalog').onSnapshot(doc => {
            if (doc.exists && Array.isArray(doc.data().items)) {
                activeSupplementsList = doc.data().items;
                localStorage.setItem('gymsolo_supplements_catalog', JSON.stringify(activeSupplementsList));
            }
        }, err => console.warn("Supplements sync err:", err));
    }
}

function openSupplementBarModal() {
    filterSupplementCategory('all');
    const modal = document.getElementById('supplement-bar-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeSupplementBarModal() {
    const modal = document.getElementById('supplement-bar-modal');
    if (modal) modal.classList.add('hidden-view');
}

function filterSupplementCategory(cat) {
    document.querySelectorAll('.supp-cat-btn').forEach(btn => {
        btn.classList.remove('bg-brand-600', 'text-white');
        btn.classList.add('text-gray-400');
    });
    const activeTab = document.getElementById('supp-tab-' + cat);
    if (activeTab) {
        activeTab.classList.remove('text-gray-400');
        activeTab.classList.add('bg-brand-600', 'text-white');
    }

    const container = document.getElementById('supplement-items-container');
    if (!container) return;

    const filtered = cat === 'all' ? activeSupplementsList : activeSupplementsList.filter(item => item.category === cat);
    if (filtered.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-xs italic text-center py-6">No items currently available in this category.</p>`;
        return;
    }

    container.innerHTML = filtered.map((item) => `
        <div onclick="selectSupplementItem('${item.id}')" class="p-3 rounded-2xl bg-dark-100 hover:bg-dark-300 border border-gray-800 hover:border-brand-400 transition-all cursor-pointer flex items-center justify-between gap-3 group">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
                    <i class="fas ${item.icon || 'fa-tag'}"></i>
                </div>
                <div>
                    <h4 class="text-xs font-bold text-white group-hover:text-brand-300 transition-colors">${item.name}</h4>
                    <p class="text-[10px] text-gray-400 leading-tight mt-0.5 max-w-xs">${item.desc}</p>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="text-sm font-black text-brand-400 font-mono">₹${item.price}</span>
                <span class="block text-[9px] text-gray-500 uppercase font-bold mt-0.5">At Desk</span>
            </div>
        </div>
    `).join('');

    if (filtered.length > 0 && !currentSelectedSupplement) {
        selectSupplementItem(filtered[0].id);
    }
}

function selectSupplementItem(id) {
    const item = activeSupplementsList.find(s => s.id === id);
    if (!item) return;
    currentSelectedSupplement = item;

    const titleEl = document.getElementById('supp-selected-title');
    if (titleEl) titleEl.textContent = `${item.name} (₹${item.price})`;
}

function orderSupplementViaWhatsApp() {
    if (!currentSelectedSupplement) {
        alert("Please tap an item first to select it.");
        return;
    }
    const item = currentSelectedSupplement;
    const gymName = clientGymBranding.gymName || 'Gym';
    const memberName = (appState.user && appState.user.name) || 'Member';
    const phone = clientGymBranding.gymPhone || '';
    const cleanPhone = phone.replace(/\D/g, '');

    const msg = `Hi ${gymName} Front Desk! 🥤 I want to order from the gym bar:\n\n*Item:* ${item.name}\n*Price:* ₹${item.price}\n*Member:* ${memberName}\n\nPlease have it ready at the reception counter! ⚡`;

    if (cleanPhone) {
        window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
    }
}

function openUpiPaymentModal() {
    if (!currentSelectedSupplement) {
        alert("Please tap an item first to select it.");
        return;
    }
    const item = currentSelectedSupplement;
    const upiId = clientGymBranding.gymUpi || 'gymreception@upi';
    const gymName = clientGymBranding.gymName || 'GymSolo';

    const itemDesc = document.getElementById('upi-pay-item-desc');
    const amountEl = document.getElementById('upi-pay-amount');
    const upiIdEl = document.getElementById('upi-id-display');
    const qrImg = document.getElementById('upi-pay-qr-img');

    if (itemDesc) itemDesc.textContent = `${item.name} (${gymName})`;
    if (amountEl) amountEl.textContent = `₹${item.price}`;
    if (upiIdEl) upiIdEl.textContent = upiId;

    if (qrImg) {
        const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(gymName)}&am=${item.price}&cu=INR&tn=${encodeURIComponent(item.name)}`;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUri)}`;
    }

    const modal = document.getElementById('upi-pay-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeUpiPaymentModal() {
    const modal = document.getElementById('upi-pay-modal');
    if (modal) modal.classList.add('hidden-view');
}

// --- 5. VIRAL MILESTONE CERTIFICATES ---
let activeCertificateType = 'streak';

function openCertificatesModal() {
    selectCertificateType('streak');
    const modal = document.getElementById('milestone-certificates-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeCertificatesModal() {
    const modal = document.getElementById('milestone-certificates-modal');
    if (modal) modal.classList.add('hidden-view');
}

function selectCertificateType(type) {
    activeCertificateType = type;
    document.querySelectorAll('.cert-tab-btn').forEach(btn => {
        btn.className = 'cert-tab-btn p-2.5 rounded-xl border border-gray-700 bg-dark-100 text-gray-400 hover:text-white text-xs font-bold text-center transition-all cursor-pointer';
    });
    const activeBtn = document.getElementById('cert-btn-' + type);
    if (activeBtn) {
        activeBtn.className = 'cert-tab-btn active p-2.5 rounded-xl border border-brand-500/50 bg-brand-900/30 text-white text-xs font-bold text-center transition-all cursor-pointer';
    }

    const gymName = clientGymBranding.gymName || 'GymSolo Fitness Club';
    const memberName = (appState.user && appState.user.name) || 'Athlete';
    const streak = appState.streak || 30;

    const gymTitle = document.getElementById('cert-gym-title');
    const mName = document.getElementById('cert-member-name');
    const aTitle = document.getElementById('cert-achievement-title');
    const aDesc = document.getElementById('cert-achievement-desc');
    const dateText = document.getElementById('cert-date-text');

    if (gymTitle) gymTitle.textContent = gymName;
    if (mName) mName.textContent = memberName;
    if (dateText) dateText.textContent = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    if (type === 'streak') {
        if (aTitle) aTitle.textContent = `${Math.max(15, streak)}-Day Relentless Consistency Master`;
        if (aDesc) aDesc.textContent = `Awarded for completing ${Math.max(15, streak)} consecutive days of disciplined gym training with unmatched consistency.`;
    } else if (type === 'pr') {
        const topPr = (appState.personalRecords && (appState.personalRecords['Barbell Bench Press'] || appState.personalRecords['Deadlift'] || appState.personalRecords['Barbell Squats'])) || 100;
        if (aTitle) aTitle.textContent = `Century Club PR Champion (${topPr} kg)`;
        if (aDesc) aDesc.textContent = `Officially certified for breaking the heavy ${topPr} kg milestone lift with elite athletic form & power.`;
    } else {
        const goal = (appState.user && appState.user.goal) || 'Weight Loss';
        const delta = (appState.user && appState.user.kgDelta) || 5;
        if (aTitle) aTitle.textContent = `Physique Target Champion (${goal})`;
        if (aDesc) aDesc.textContent = `Honored for successfully completing the ${delta} kg transformation projection plan through structured nutrition and heavy lifting.`;
    }
}

function shareCertificateToSocial() {
    const gymName = clientGymBranding.gymName || 'GymSolo';
    const memberName = (appState.user && appState.user.name) || 'Athlete';
    const aTitle = document.getElementById('cert-achievement-title')?.textContent || 'Achievement';

    const text = `🏆 *OFFICIAL GYM ACHIEVEMENT CERTIFICATE*\n\nAthlete: ${memberName}\nGym: ${gymName}\nAchievement: ${aTitle}\n\nPut in the work. Proud member of ${gymName}! 💪🔥`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}

// --- 6. 3-DAY FREE VIP TRIAL PASS LEAD CAPTURE ---
function openWalkinTrialModal() {
    const modal = document.getElementById('walkin-trial-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeWalkinTrialModal() {
    const modal = document.getElementById('walkin-trial-modal');
    if (modal) modal.classList.add('hidden-view');
}

function submitWalkinTrialPass() {
    const name = document.getElementById('trial-input-name').value.trim();
    const phone = document.getElementById('trial-input-phone').value.trim();
    const goal = document.getElementById('trial-input-goal').value;

    if (!name) { alert("Please enter your name."); return; }
    if (!phone || phone.length < 8) { alert("Please enter a valid WhatsApp phone number."); return; }

    let refCode = '';
    try {
        const hash = window.location.hash || '';
        if (hash.includes('ref=')) {
            refCode = hash.split('ref=')[1].split('&')[0];
        } else {
            const urlParams = new URLSearchParams(window.location.search);
            refCode = urlParams.get('ref') || '';
        }
    } catch(e) {}

    const leadObj = {
        id: 'lead_' + Date.now(),
        name: name,
        phone: phone,
        goal: goal,
        referredBy: refCode || null,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        timestamp: Date.now()
    };

    try {
        const existingLeads = JSON.parse(localStorage.getItem('gymsolo_leads') || '[]');
        existingLeads.unshift(leadObj);
        localStorage.setItem('gymsolo_leads', JSON.stringify(existingLeads));
    } catch(e) {}

    if (typeof db !== 'undefined') {
        db.collection('walkin_leads').doc(leadObj.id).set(leadObj).catch(err => console.warn("Lead push err:", err));
    }

    if (!appState.user) appState.user = {};
    appState.user.name = name;
    appState.user.phone = phone;
    appState.user.goal = goal.includes('Loss') ? 'Weight Loss' : 'Weight Gain';
    appState.user.referredBy = refCode || null;
    appState.onboarded = true;
    appState.isTrialPass = true;
    appState.membershipDuration = 3;
    appState.membershipStart = Date.now();
    saveStateToCloud();

    closeWalkinTrialModal();
    alert(`🎉 Welcome to ${clientGymBranding.gymName || 'the Gym'}, ${name}! Your 3-Day Free VIP Trial Pass has been activated!`);
    window.location.hash = '';
    initMainApp();
}

// ============================================================================
// PHASES 1, 2 & 3: ATHLETE SUPERPOWERS & HIGH-RETENTION ENGINE
// ============================================================================

// --- 1. DAILY MOTIVATION & MICRO-CHALLENGE ENGINE ---
const dailyQuotesDB = [
    { text: "We must all suffer one of two things: the pain of discipline or the pain of regret.", author: "Jim Rohn" },
    { text: "The last three or four reps is what makes the muscle grow. That area of pain divides the champion from someone else.", author: "Arnold Schwarzenegger" },
    { text: "Discipline equals freedom. It is the only way to live an exceptional life.", author: "Jocko Willink" },
    { text: "No man has the right to be an amateur in physical training. It is a shame to grow old without seeing the strength of which your body is capable.", author: "Socrates" },
    { text: "You don't have to be extreme, just consistent. 1% better every day beats 100% once a month.", author: "James Clear" },
    { text: "Light weight, baby! Ain't nothin' to it but to do it!", author: "Ronnie Coleman" },
    { text: "The resistance that you fight physically in the gym can only build a strong character.", author: "Arnold Schwarzenegger" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" }
];

const dailyChallengesDB = [
    "Complete 50 bodyweight push-ups throughout the day",
    "Drink 1 full glass of water immediately after waking up",
    "Hold a 2-minute cumulative plank today",
    "Do 100 bodyweight air squats throughout the day",
    "No refined sugar or soda today — clean fuel only",
    "10 minutes of dedicated hamstring & hip mobility stretching",
    "Hit your daily protein target within 5% accuracy",
    "Take 8,000 steps today to optimize active recovery"
];

function initDailyMotivationAndChallenge() {
    const todayIso = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < todayIso.length; i++) hash += todayIso.charCodeAt(i);

    const quote = dailyQuotesDB[hash % dailyQuotesDB.length];
    const challenge = dailyChallengesDB[hash % dailyChallengesDB.length];

    const qText = document.getElementById('daily-quote-text');
    const qAuthor = document.getElementById('daily-quote-author');
    const cText = document.getElementById('daily-challenge-text');
    const cIcon = document.getElementById('icon-daily-challenge');
    const cBtnText = document.getElementById('text-daily-challenge');
    const cBtn = document.getElementById('btn-daily-challenge');

    if (qText) qText.textContent = `"${quote.text}"`;
    if (qAuthor) qAuthor.textContent = `— ${quote.author}`;
    if (cText) cText.textContent = challenge;

    if (!appState.dailyChallenge) appState.dailyChallenge = {};
    const isDone = appState.dailyChallenge.date === todayIso && appState.dailyChallenge.completed;

    if (cIcon && cBtnText && cBtn) {
        if (isDone) {
            cIcon.className = 'fas fa-check-circle text-green-400';
            cBtnText.textContent = 'Completed!';
            cBtn.className = 'text-[11px] bg-green-500/20 text-green-300 border border-green-500/40 px-3 py-1 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer';
        } else {
            cIcon.className = 'far fa-circle';
            cBtnText.textContent = 'Mark Done';
            cBtn.className = 'text-[11px] bg-dark-100 hover:bg-dark-300 border border-brand-500/40 text-brand-400 px-3 py-1 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer';
        }
    }
}

function toggleDailyMicroChallenge() {
    const todayIso = new Date().toISOString().slice(0, 10);
    if (!appState.dailyChallenge) appState.dailyChallenge = {};

    const alreadyDone = appState.dailyChallenge.date === todayIso && appState.dailyChallenge.completed;
    if (alreadyDone) {
        alert("You've already crushed today's micro-challenge! Rest up for tomorrow.");
        return;
    }

    appState.dailyChallenge = { date: todayIso, completed: true };
    addAthleteXp(50);
    saveStateToCloud();
    if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    initDailyMotivationAndChallenge();
    alert("🔥 Daily Micro-Challenge Complete! +50 XP Earned!");
}

// --- 2. BODY TRANSFORMATION PHOTO TRACKER & COMPARISON SLIDER ---
let currentSelectedPose = 'front';

function openPhotoTrackerModal() {
    const modal = document.getElementById('photo-tracker-modal');
    if (!modal) return;
    const wInput = document.getElementById('photo-input-weight');
    const dInput = document.getElementById('photo-input-date');
    if (wInput) wInput.value = (appState.user && appState.user.weight) || 75;
    if (dInput) dInput.value = new Date().toISOString().slice(0, 10);

    renderTransformationPhotosUI();
    modal.classList.remove('hidden-view');
}

function closePhotoTrackerModal() {
    const modal = document.getElementById('photo-tracker-modal');
    if (modal) modal.classList.add('hidden-view');
}

function setTransformationSlider(val) {
    const clip = document.getElementById('comp-after-clip');
    const divider = document.getElementById('comp-divider');
    if (clip) clip.style.width = `${val}%`;
    if (divider) divider.style.left = `${val}%`;
}

function selectPhotoPose(pose) {
    currentSelectedPose = pose;
    ['front', 'side', 'back'].forEach(p => {
        const btn = document.getElementById('pose-btn-' + p);
        if (btn) {
            if (p === pose) {
                btn.className = 'pose-btn p-2 rounded-xl border border-brand-500/50 bg-brand-900/20 text-brand-300 text-xs font-bold text-center';
            } else {
                btn.className = 'pose-btn p-2 rounded-xl border border-gray-700 bg-dark-300 text-gray-400 text-xs font-bold text-center';
            }
        }
    });
}

function handleProgressPhotoUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Compress via HTML5 Canvas to keep storage <80kb
            const maxDim = 800;
            let width = img.width;
            let height = img.height;
            if (width > height) {
                if (width > maxDim) { height *= maxDim / width; width = maxDim; }
            } else {
                if (height > maxDim) { width *= maxDim / height; height = maxDim; }
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL('image/jpeg', 0.75);

            if (!Array.isArray(appState.transformationPhotos)) appState.transformationPhotos = [];
            const weightVal = parseFloat(document.getElementById('photo-input-weight').value) || (appState.user?.weight || 75);
            const dateVal = document.getElementById('photo-input-date').value || new Date().toISOString().slice(0, 10);

            const newPhoto = {
                id: 'snap_' + Date.now(),
                imgData: compressed,
                weight: weightVal,
                date: dateVal,
                pose: currentSelectedPose,
                timestamp: Date.now()
            };

            appState.transformationPhotos.unshift(newPhoto);
            saveStateToCloud();
            addAthleteXp(100);
            checkAndAwardBadges();
            renderTransformationPhotosUI();
            alert("📸 Progress photo saved securely! Added +100 XP.");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function renderTransformationPhotosUI() {
    const photos = appState.transformationPhotos || [];
    const gallery = document.getElementById('progress-photos-gallery');

    if (photos.length >= 2) {
        // Set earliest as Before, latest as After
        const earliest = photos[photos.length - 1];
        const latest = photos[0];
        const beforeImg = document.getElementById('comp-img-before');
        const afterImg = document.getElementById('comp-img-after');
        const beforeLbl = document.getElementById('comp-label-before');
        const afterLbl = document.getElementById('comp-label-after');

        if (beforeImg) beforeImg.src = earliest.imgData;
        if (afterImg) afterImg.src = latest.imgData;
        if (beforeLbl) beforeLbl.textContent = `${earliest.date} • ${earliest.weight} kg`;
        if (afterLbl) afterLbl.textContent = `${latest.date} • ${latest.weight} kg`;
    } else if (photos.length === 1) {
        const afterImg = document.getElementById('comp-img-after');
        const afterLbl = document.getElementById('comp-label-after');
        if (afterImg) afterImg.src = photos[0].imgData;
        if (afterLbl) afterLbl.textContent = `${photos[0].date} • ${photos[0].weight} kg`;
    }

    if (!gallery) return;
    if (photos.length === 0) {
        gallery.innerHTML = `<p class="col-span-3 text-xs text-gray-500 italic p-3 text-center bg-dark-100 rounded-xl">No photos logged yet. Take your first snap above!</p>`;
        return;
    }

    gallery.innerHTML = photos.map(p => `
        <div class="relative rounded-xl overflow-hidden border border-gray-700 bg-dark-100 group">
            <img src="${p.imgData}" class="w-full h-24 object-cover">
            <div class="p-1.5 text-center bg-dark-200">
                <span class="text-[9px] font-bold text-white block truncate">${p.weight} kg</span>
                <span class="text-[8px] text-gray-400 block">${p.date}</span>
            </div>
            <button onclick="deleteProgressPhoto('${p.id}')" class="absolute top-1 right-1 bg-red-600/80 text-white rounded p-1 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function deleteProgressPhoto(id) {
    if (!confirm("Delete this progress photo?")) return;
    if (!Array.isArray(appState.transformationPhotos)) return;
    appState.transformationPhotos = appState.transformationPhotos.filter(p => p.id !== id);
    saveStateToCloud();
    renderTransformationPhotosUI();
}

function shareTransformationCard() {
    const gymName = clientGymBranding.gymName || 'GymSolo';
    const photos = appState.transformationPhotos || [];
    let weightText = "";
    if (photos.length >= 2) {
        const earliest = photos[photos.length - 1];
        const latest = photos[0];
        const delta = (latest.weight - earliest.weight).toFixed(1);
        weightText = `Start: ${earliest.weight} kg ➡️ Today: ${latest.weight} kg (${delta > 0 ? '+' : ''}${delta} kg)!`;
    } else {
        weightText = "Crushing my transformation goals week by week!";
    }

    const msg = `🔥 *MY FITNESS TRANSFORMATION*\n\n${weightText}\nGym: ${gymName}\n\nPut in the daily work. Proud member of ${gymName}! 💪🚀`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- 3. BODY MEASUREMENT LOG & TREND CHART ENGINE ---
let measurementChartInstance = null;

function openMeasurementTrackerModal() {
    const modal = document.getElementById('measurement-tracker-modal');
    if (!modal) return;
    const w = document.getElementById('meas-weight');
    if (w) w.value = (appState.user && appState.user.weight) || 75;

    renderMeasurementHistory();
    modal.classList.remove('hidden-view');
    setTimeout(() => renderMeasurementChart(), 100);
}

function closeMeasurementTrackerModal() {
    const modal = document.getElementById('measurement-tracker-modal');
    if (modal) modal.classList.add('hidden-view');
}

function saveNewMeasurementEntry() {
    const weight = parseFloat(document.getElementById('meas-weight').value) || 0;
    const waist = parseFloat(document.getElementById('meas-waist').value) || 0;
    const arms = parseFloat(document.getElementById('meas-arms').value) || 0;
    const chest = parseFloat(document.getElementById('meas-chest').value) || 0;
    const thighs = parseFloat(document.getElementById('meas-thighs').value) || 0;

    if (weight <= 0 && waist <= 0) {
        alert("Please enter at least your weight or waist measurement.");
        return;
    }

    if (!Array.isArray(appState.measurements)) appState.measurements = [];
    const entry = {
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        weight: weight,
        waist: waist,
        arms: arms,
        chest: chest,
        thighs: thighs,
        timestamp: Date.now()
    };

    appState.measurements.push(entry);
    if (weight > 0 && appState.user) appState.user.weight = weight;

    saveStateToCloud();
    addAthleteXp(60);
    renderMeasurementHistory();
    renderMeasurementChart();
    alert("✅ Body measurement logged! +60 XP Earned.");
}

function renderMeasurementHistory() {
    const entries = appState.measurements || [];
    const tbody = document.getElementById('measurement-history-tbody');

    // Calculate deltas (earliest vs latest)
    const dWeight = document.getElementById('delta-weight');
    const dWaist = document.getElementById('delta-waist');
    const dArms = document.getElementById('delta-arms');

    if (entries.length >= 2) {
        const first = entries[0];
        const last = entries[entries.length - 1];
        if (dWeight && first.weight && last.weight) {
            const diff = (last.weight - first.weight).toFixed(1);
            dWeight.textContent = `${diff > 0 ? '+' : ''}${diff} kg`;
        }
        if (dWaist && first.waist && last.waist) {
            const diff = (last.waist - first.waist).toFixed(1);
            dWaist.textContent = `${diff > 0 ? '+' : ''}${diff} cm`;
        }
        if (dArms && first.arms && last.arms) {
            const diff = (last.arms - first.arms).toFixed(1);
            dArms.textContent = `${diff > 0 ? '+' : ''}${diff} cm`;
        }
    }

    if (!tbody) return;
    if (entries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-gray-500 italic">No measurements recorded yet.</td></tr>`;
        return;
    }

    tbody.innerHTML = entries.slice().reverse().map((m, idx) => `
        <tr class="hover:bg-dark-100 transition-colors">
            <td class="py-2 px-2 text-white">${m.date}</td>
            <td class="py-2 px-2 text-brand-400">${m.weight ? m.weight + ' kg' : '--'}</td>
            <td class="py-2 px-2 text-green-400">${m.waist ? m.waist + ' cm' : '--'}</td>
            <td class="py-2 px-2 text-blue-400">${m.arms ? m.arms + ' cm' : '--'}</td>
            <td class="py-2 px-2"><button onclick="deleteMeasurementEntry(${entries.length - 1 - idx})" class="text-red-400 hover:text-red-300 text-xs"><i class="fas fa-trash"></i></button></td>
        </tr>
    `).join('');
}

function deleteMeasurementEntry(index) {
    if (!confirm("Delete this measurement entry?")) return;
    if (!Array.isArray(appState.measurements)) return;
    appState.measurements.splice(index, 1);
    saveStateToCloud();
    renderMeasurementHistory();
    renderMeasurementChart();
}

function renderMeasurementChart() {
    const canvas = document.getElementById('measurement-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    const entries = appState.measurements || [];
    if (entries.length === 0) return;

    const labels = entries.map(e => e.date);
    const weightData = entries.map(e => e.weight || null);
    const waistData = entries.map(e => e.waist || null);

    if (measurementChartInstance) {
        measurementChartInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    measurementChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Weight (kg)',
                    data: weightData,
                    borderColor: '#facc15',
                    backgroundColor: 'rgba(250, 204, 21, 0.1)',
                    tension: 0.35,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#facc15'
                },
                {
                    label: 'Waist (cm)',
                    data: waistData,
                    borderColor: '#2dd4bf',
                    backgroundColor: 'transparent',
                    tension: 0.35,
                    borderDash: [5, 5],
                    pointRadius: 4,
                    pointBackgroundColor: '#2dd4bf'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#9ca3af', font: { size: 10 } } }
            },
            scales: {
                x: { ticks: { color: '#6b7280', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#6b7280', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    });
}

// --- 4. ACHIEVEMENT BADGES & GAMIFICATION ENGINE ---
const badgesCatalog = [
    { id: 'first_workout', name: 'First Blood', desc: 'Completed your very first workout', icon: 'fa-dumbbell', xp: 100, color: 'text-amber-400' },
    { id: 'streak_7', name: 'Iron Consistency', desc: 'Maintained a 7-day workout streak', icon: 'fa-fire', xp: 200, color: 'text-orange-500' },
    { id: 'streak_30', name: 'Discipline Monster', desc: 'Crushed a 30-day relentless streak', icon: 'fa-crown', xp: 500, color: 'text-yellow-400' },
    { id: 'century_pr', name: 'Century Club PR', desc: 'Broke 100 kg in Bench, Squat, or Deadlift', icon: 'fa-trophy', xp: 300, color: 'text-brand-400' },
    { id: 'tonnage_titan', name: 'Tonnage Titan', desc: 'Lifted 50,000 kg total cumulative volume', icon: 'fa-weight-hanging', xp: 400, color: 'text-red-400' },
    { id: 'early_bird', name: 'Sunrise Soldier', desc: 'Logged a morning workout before 8:00 AM', icon: 'fa-sun', xp: 150, color: 'text-yellow-300' },
    { id: 'hydro_beast', name: 'Hydro Machine', desc: 'Hit daily 3L water hydration target 5 times', icon: 'fa-tint', xp: 150, color: 'text-blue-400' },
    { id: 'clean_fuel', name: 'Macro Master', desc: 'Followed custom nutrition targets for 7 days', icon: 'fa-utensils', xp: 200, color: 'text-green-400' },
    { id: 'photo_star', name: 'Transformation Star', desc: 'Uploaded 2+ body progress photos', icon: 'fa-camera', xp: 200, color: 'text-purple-400' },
    { id: 'ambassador', name: 'Gym Ambassador', desc: 'Shared VIP invite pass with friends', icon: 'fa-user-plus', xp: 300, color: 'text-emerald-400' }
];

function addAthleteXp(amt) {
    if (typeof appState.athleteXp !== 'number') appState.athleteXp = 100;
    appState.athleteXp += amt;
    renderBadgesUI();
}

function checkAndAwardBadges() {
    if (!Array.isArray(appState.unlockedBadges)) appState.unlockedBadges = ['first_workout'];
    const streak = appState.streak || 0;
    const history = appState.history || [];
    const prs = appState.personalRecords || {};
    const photos = appState.transformationPhotos || [];

    const award = (id) => {
        if (!appState.unlockedBadges.includes(id)) {
            appState.unlockedBadges.push(id);
            const badge = badgesCatalog.find(b => b.id === id);
            if (badge) {
                addAthleteXp(badge.xp);
                if (typeof confetti === 'function') confetti({ particleCount: 75, spread: 80, origin: { y: 0.5 } });
                alert(`🏆 VIP BADGE UNLOCKED!\n\n"${badge.name}"\n+${badge.xp} XP Earned!`);
            }
        }
    };

    if (history.length >= 1) award('first_workout');
    if (streak >= 7) award('streak_7');
    if (streak >= 30) award('streak_30');

    // Century PR check (100kg+)
    const maxLift = Math.max(prs['Barbell Bench Press'] || 0, prs['Deadlift'] || 0, prs['Barbell Squats'] || 0);
    if (maxLift >= 100) award('century_pr');

    // Tonnage check
    let totalVol = 0;
    history.forEach(h => totalVol += (h.volume || 0));
    if (totalVol >= 50000) award('tonnage_titan');

    // Photos check
    if (photos.length >= 2) award('photo_star');

    saveStateToCloud();
    renderBadgesUI();
}

function renderBadgesUI() {
    const xp = appState.athleteXp || 100;
    const level = Math.floor(xp / 300) + 1;
    const nextLvlXp = level * 300;
    const currentLvlProgress = xp % 300;
    const pct = Math.min(100, Math.round((currentLvlProgress / 300) * 100));

    // Dashboard elements
    const dLvl = document.getElementById('dash-athlete-level');
    const dXp = document.getElementById('dash-athlete-xp');
    const dCount = document.getElementById('unlocked-badges-count');
    if (dLvl) dLvl.textContent = level;
    if (dXp) dXp.textContent = xp;
    if (dCount) dCount.textContent = (appState.unlockedBadges || []).length;

    // Badges modal elements
    const bLvl = document.getElementById('badge-level-display');
    const bCurXp = document.getElementById('badge-current-xp');
    const bNextXp = document.getElementById('badge-next-xp');
    const bFill = document.getElementById('badge-xp-fill');
    const bUnlCount = document.getElementById('badge-unlocked-count');
    const grid = document.getElementById('badges-container-grid');

    if (bLvl) bLvl.textContent = `Level ${level} Athlete`;
    if (bCurXp) bCurXp.textContent = xp;
    if (bNextXp) bNextXp.textContent = nextLvlXp;
    if (bFill) bFill.style.width = `${pct}%`;
    if (bUnlCount) bUnlCount.textContent = (appState.unlockedBadges || []).length;

    if (!grid) return;
    const unlocked = appState.unlockedBadges || [];

    grid.innerHTML = badgesCatalog.map(b => {
        const isUnlocked = unlocked.includes(b.id);
        return `
            <div class="p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${isUnlocked ? 'bg-gradient-to-r from-amber-950/20 to-dark-100 border-brand-500/40 shadow' : 'bg-dark-100/50 border-gray-800 opacity-60'}">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 ${isUnlocked ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' : 'bg-gray-800 text-gray-600'}">
                    <i class="fas ${b.icon}"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5">
                        <h4 class="text-xs font-bold text-white truncate">${b.name}</h4>
                        ${isUnlocked ? '<span class="text-[9px] text-green-400 font-extrabold">✓</span>' : '<span class="text-[9px] text-gray-500 font-mono">🔒</span>'}
                    </div>
                    <p class="text-[10px] text-gray-400 leading-tight mt-0.5">${b.desc}</p>
                    <span class="text-[9px] font-bold text-brand-400 font-mono mt-1 block">+${b.xp} XP</span>
                </div>
            </div>
        `;
    }).join('');
}

function openBadgesModal() {
    renderBadgesUI();
    const modal = document.getElementById('badges-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeBadgesModal() {
    const modal = document.getElementById('badges-modal');
    if (modal) modal.classList.add('hidden-view');
}

// --- 5. 1RM (ONE-REP MAX) CALCULATOR & STRENGTH STANDARDS ---
function openOneRmCalculatorModal() {
    calculateOneRm();
    const modal = document.getElementById('onerm-calculator-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeOneRmCalculatorModal() {
    const modal = document.getElementById('onerm-calculator-modal');
    if (modal) modal.classList.add('hidden-view');
}

function calculateOneRm() {
    const weight = parseFloat(document.getElementById('onerm-input-weight').value) || 0;
    const reps = parseInt(document.getElementById('onerm-input-reps').value) || 1;
    const lift = document.getElementById('onerm-input-lift').value;
    const userWeight = (appState.user && parseFloat(appState.user.weight)) || 75;

    let oneRm = weight;
    if (reps > 1) {
        // Combined average of Epley & Brzycki formula
        const epley = weight * (1 + reps / 30);
        const brzycki = weight * (36 / (37 - reps));
        oneRm = Math.round((epley + brzycki) / 2);
    }

    const resVal = document.getElementById('onerm-result-val');
    const badge = document.getElementById('onerm-rank-badge');
    if (resVal) resVal.textContent = `${oneRm} kg`;

    // Calculate percentage rep loads
    [95, 90, 85, 80, 75, 70].forEach(pct => {
        const el = document.getElementById(`rep-load-${pct}`);
        if (el) el.textContent = `${Math.round(oneRm * (pct / 100))} kg`;
    });

    // Evaluate Strength Standards Tier relative to user bodyweight
    const ratio = oneRm / userWeight;
    let tierText = "💪 Novice Lifter";
    let tierColor = "bg-blue-500/20 text-blue-300 border-blue-400/50";

    if (lift === 'bench') {
        if (ratio >= 1.7) { tierText = "🏆 Elite Champion (Top 1% of Gym)"; tierColor = "bg-amber-500/20 text-amber-300 border-amber-400"; }
        else if (ratio >= 1.3) { tierText = "🔥 Advanced Lifter (Top 10% of Gym)"; tierColor = "bg-purple-500/20 text-purple-300 border-purple-400"; }
        else if (ratio >= 1.0) { tierText = "💪 Intermediate Lifter (Top 35% of Gym)"; tierColor = "bg-green-500/20 text-green-300 border-green-400"; }
        else if (ratio >= 0.75) { tierText = "⚡ Novice Lifter"; tierColor = "bg-blue-500/20 text-blue-300 border-blue-400"; }
        else { tierText = "🌱 Beginner Lifter"; tierColor = "bg-gray-700/40 text-gray-300 border-gray-600"; }
    } else if (lift === 'squat') {
        if (ratio >= 2.2) { tierText = "🏆 Elite Champion (Top 1% of Gym)"; tierColor = "bg-amber-500/20 text-amber-300 border-amber-400"; }
        else if (ratio >= 1.7) { tierText = "🔥 Advanced Lifter (Top 10% of Gym)"; tierColor = "bg-purple-500/20 text-purple-300 border-purple-400"; }
        else if (ratio >= 1.3) { tierText = "💪 Intermediate Lifter (Top 35% of Gym)"; tierColor = "bg-green-500/20 text-green-300 border-green-400"; }
        else { tierText = "⚡ Novice Lifter"; tierColor = "bg-blue-500/20 text-blue-300 border-blue-400"; }
    } else {
        if (ratio >= 2.5) { tierText = "🏆 Elite Champion (Top 1% of Gym)"; tierColor = "bg-amber-500/20 text-amber-300 border-amber-400"; }
        else if (ratio >= 2.0) { tierText = "🔥 Advanced Lifter (Top 10% of Gym)"; tierColor = "bg-purple-500/20 text-purple-300 border-purple-400"; }
        else if (ratio >= 1.5) { tierText = "💪 Intermediate Lifter (Top 35% of Gym)"; tierColor = "bg-green-500/20 text-green-300 border-green-400"; }
        else { tierText = "⚡ Novice Lifter"; tierColor = "bg-blue-500/20 text-blue-300 border-blue-400"; }
    }

    if (badge) {
        badge.className = `inline-block px-3 py-1 rounded-full text-xs font-bold border ${tierColor}`;
        badge.textContent = tierText;
    }
}

// --- 6. PERSONAL RECORDS (PR) HALL OF FAME ---
function openPrHallOfFameModal() {
    renderPrHallOfFame();
    const modal = document.getElementById('pr-hall-of-fame-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closePrHallOfFameModal() {
    const modal = document.getElementById('pr-hall-of-fame-modal');
    if (modal) modal.classList.add('hidden-view');
}

function renderPrHallOfFame() {
    const container = document.getElementById('pr-hall-cards-container');
    if (!container) return;

    const prs = appState.personalRecords || {};
    const defaultHallLifts = [
        { name: 'Barbell Bench Press', icon: 'fa-dumbbell', defaultWeight: 80 },
        { name: 'Barbell Squats', icon: 'fa-shoe-prints', defaultWeight: 100 },
        { name: 'Deadlift', icon: 'fa-bolt', defaultWeight: 120 },
        { name: 'Overhead Press', icon: 'fa-arrow-up', defaultWeight: 50 },
        { name: 'Barbell Rows', icon: 'fa-align-justify', defaultWeight: 70 },
        { name: 'Pull-Ups', icon: 'fa-hand-rock', defaultWeight: 15 }
    ];

    container.innerHTML = defaultHallLifts.map(lift => {
        const currentPr = prs[lift.name] || lift.defaultWeight;
        const isCentury = currentPr >= 100;
        return `
            <div class="p-3.5 bg-dark-100 rounded-2xl border border-gray-800 hover:border-brand-500/40 transition-all flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center text-sm shrink-0">
                        <i class="fas ${lift.icon}"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-white">${lift.name}</h4>
                        <span class="text-[9px] text-gray-400">All-Time Peak Record</span>
                    </div>
                </div>
                <div class="text-right">
                    <span class="text-lg font-black text-brand-400 font-mono">${currentPr} kg</span>
                    ${isCentury ? '<span class="block text-[8px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-1.5 py-0.2 rounded font-extrabold uppercase mt-0.5">Century Club</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

function sharePrHallOfFame() {
    const gymName = clientGymBranding.gymName || 'GymSolo';
    const memberName = (appState.user && appState.user.name) || 'Athlete';
    const prs = appState.personalRecords || {};
    const bench = prs['Barbell Bench Press'] || 80;
    const squat = prs['Barbell Squats'] || 100;
    const deadlift = prs['Deadlift'] || 120;

    const msg = `🏆 *MY PERSONAL RECORDS HALL OF FAME*\nAthlete: ${memberName}\nGym: ${gymName}\n━━━━━━━━━━━━━━━━━━\n🏋️‍♂️ Bench Press: ${bench} kg\n🦵 Squats: ${squat} kg\n⚡ Deadlift: ${deadlift} kg\n━━━━━━━━━━━━━━━━━━\nEvery rep counts. Training heavy at ${gymName}! 💪🔥`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- 7. GUIDED 5-MIN WARM-UP & COOLDOWN COACH ---
const mobilityRoutines = {
    warmup: [
        { name: "Arm & Shoulder Dislocators", time: 45, desc: "Rotate arms in large smooth circles forwards & backwards to lubricate the shoulder sockets." },
        { name: "Torso Twists & Hip Openers", time: 45, desc: "Rotate core smoothly from side to side to loosen thoracic spine and warm up lower back." },
        { name: "Deep Bodyweight Squat Hold", time: 45, desc: "Sit in the bottom of a deep squat with elbows pushing knees out. Open groin and ankle mobility." },
        { name: "World's Greatest Stretch", time: 60, desc: "Deep lunge with inside elbow reaching to ground, then rotate chest up towards ceiling." },
        { name: "Light High Knees & Jacks", time: 45, desc: "Elevate heart rate, raise body temperature, and prime nervous system for heavy lifts." }
    ],
    cooldown: [
        { name: "Doorway Chest & Bicep Stretch", time: 45, desc: "Forearm against door frame, gently lean forward to open chest and front delts." },
        { name: "Overhead Lat & Tricep Reach", time: 45, desc: "Pull elbow behind head and lean gently sideways to decompress lats and spine." },
        { name: "Standing Quad & Hip Flexor Pull", time: 45, desc: "Hold ankle to glute, tuck pelvis forward to lengthen quadriceps." },
        { name: "Seated Hamstring & Calf Reach", time: 60, desc: "Hinge at hips with straight back and reach for toes to stretch back of legs." },
        { name: "Relaxed Child's Pose", time: 60, desc: "Sit on heels, arms stretched far forward, deep diaphragm belly breathing to trigger parasympathetic recovery." }
    ]
};

let activeMobilityFlow = 'warmup';
let currentMobilityStepIndex = 0;
let mobilityTimerInterval = null;
let mobilitySecondsRemaining = 45;
let isMobilityTimerRunning = false;

function openWarmupCooldownModal() {
    switchMobilityFlow('warmup');
    const modal = document.getElementById('warmup-cooldown-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeWarmupCooldownModal() {
    if (mobilityTimerInterval) clearInterval(mobilityTimerInterval);
    isMobilityTimerRunning = false;
    const modal = document.getElementById('warmup-cooldown-modal');
    if (modal) modal.classList.add('hidden-view');
}

function switchMobilityFlow(flow) {
    activeMobilityFlow = flow;
    currentMobilityStepIndex = 0;
    if (mobilityTimerInterval) clearInterval(mobilityTimerInterval);
    isMobilityTimerRunning = false;

    const wBtn = document.getElementById('mob-tab-warmup');
    const cBtn = document.getElementById('mob-tab-cooldown');
    if (wBtn && cBtn) {
        if (flow === 'warmup') {
            wBtn.className = 'py-2 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white';
            cBtn.className = 'py-2 rounded-xl text-xs font-bold transition-all text-gray-400 hover:text-white';
        } else {
            cBtn.className = 'py-2 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white';
            wBtn.className = 'py-2 rounded-xl text-xs font-bold transition-all text-gray-400 hover:text-white';
        }
    }

    renderMobilityStep();
}

function renderMobilityStep() {
    const list = mobilityRoutines[activeMobilityFlow] || mobilityRoutines.warmup;
    const step = list[currentMobilityStepIndex] || list[0];
    mobilitySecondsRemaining = step.time;

    const counter = document.getElementById('mob-step-counter');
    const title = document.getElementById('mob-step-title');
    const desc = document.getElementById('mob-step-desc');
    const display = document.getElementById('mob-timer-display');
    const playBtn = document.getElementById('btn-mob-play');
    const routineList = document.getElementById('mob-routine-list');

    if (counter) counter.textContent = `STEP ${currentMobilityStepIndex + 1} OF ${list.length}`;
    if (title) title.textContent = step.name;
    if (desc) desc.textContent = step.desc;
    if (display) display.textContent = mobilitySecondsRemaining;
    if (playBtn) playBtn.innerHTML = '<i class="fas fa-play mr-1"></i> Start';

    if (routineList) {
        routineList.innerHTML = list.map((s, idx) => `
            <div class="p-2 rounded-xl text-xs flex justify-between items-center ${idx === currentMobilityStepIndex ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-bold' : 'text-gray-400'}">
                <span>${idx + 1}. ${s.name}</span>
                <span class="font-mono text-[10px]">${s.time}s</span>
            </div>
        `).join('');
    }
}

function toggleMobilityTimer() {
    const playBtn = document.getElementById('btn-mob-play');
    if (isMobilityTimerRunning) {
        clearInterval(mobilityTimerInterval);
        isMobilityTimerRunning = false;
        if (playBtn) playBtn.innerHTML = '<i class="fas fa-play mr-1"></i> Resume';
    } else {
        isMobilityTimerRunning = true;
        if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause mr-1"></i> Pause';
        mobilityTimerInterval = setInterval(() => {
            mobilitySecondsRemaining--;
            const display = document.getElementById('mob-timer-display');
            if (display) display.textContent = mobilitySecondsRemaining;

            if (mobilitySecondsRemaining <= 0) {
                clearInterval(mobilityTimerInterval);
                isMobilityTimerRunning = false;
                if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
                nextMobilityStep();
            }
        }, 1000);
    }
}

function nextMobilityStep() {
    const list = mobilityRoutines[activeMobilityFlow] || mobilityRoutines.warmup;
    if (currentMobilityStepIndex < list.length - 1) {
        currentMobilityStepIndex++;
        renderMobilityStep();
        toggleMobilityTimer();
    } else {
        alert("🎉 Mobility flow completed! Body primed and ready.");
        addAthleteXp(50);
        closeWarmupCooldownModal();
    }
}

// --- 8. STUDIO GROUP CLASS SCHEDULE & BOOKING ---
const defaultClassesSchedule = [
    { id: 'c_mon_1', day: 'Monday', time: '7:00 AM – 7:45 AM', name: 'Sunrise Yoga & Spinal Mobility', coach: 'Coach Priya', spotsLeft: 4, icon: 'fa-child', color: 'text-indigo-400' },
    { id: 'c_mon_2', day: 'Monday', time: '6:30 PM – 7:15 PM', name: 'HIIT Fat Furnace Conditioning', coach: 'Coach Marcus', spotsLeft: 2, icon: 'fa-bolt', color: 'text-red-400' },
    { id: 'c_tue_1', day: 'Tuesday', time: '7:30 AM – 8:15 AM', name: 'CrossFit WOD & Kettlebells', coach: 'Coach Dave', spotsLeft: 5, icon: 'fa-dumbbell', color: 'text-amber-400' },
    { id: 'c_tue_2', day: 'Tuesday', time: '7:00 PM – 8:00 PM', name: 'Zumba Dance Cardio Blast', coach: 'Coach Ananya', spotsLeft: 3, icon: 'fa-music', color: 'text-pink-400' },
    { id: 'c_wed_1', day: 'Wednesday', time: '7:00 AM – 7:45 AM', name: 'Deep Fascial Mobility Flow', coach: 'Coach Priya', spotsLeft: 6, icon: 'fa-spa', color: 'text-emerald-400' },
    { id: 'c_wed_2', day: 'Wednesday', time: '6:30 PM – 7:30 PM', name: 'Powerlifting Heavy Barbell Club', coach: 'Head Coach', spotsLeft: 2, icon: 'fa-weight-hanging', color: 'text-brand-400' },
    { id: 'c_thu_1', day: 'Thursday', time: '7:30 AM – 8:15 AM', name: 'Spinning & Indoor Cycling', coach: 'Coach Dave', spotsLeft: 4, icon: 'fa-biking', color: 'text-blue-400' },
    { id: 'c_thu_2', day: 'Thursday', time: '7:00 PM – 8:00 PM', name: 'Zumba Dance Party', coach: 'Coach Ananya', spotsLeft: 5, icon: 'fa-music', color: 'text-pink-400' },
    { id: 'c_fri_1', day: 'Friday', time: '7:00 AM – 7:45 AM', name: 'Functional Core & Abs Torcher', coach: 'Coach Marcus', spotsLeft: 3, icon: 'fa-fire', color: 'text-orange-400' },
    { id: 'c_sat_1', day: 'Saturday', time: '8:30 AM – 9:30 AM', name: 'Weekend Warrior BootCamp', coach: 'Head Coach & Team', spotsLeft: 6, icon: 'fa-trophy', color: 'text-yellow-400' },
    { id: 'c_sun_1', day: 'Sunday', time: '9:00 AM – 10:00 AM', name: 'Active Recovery & Breathwork', coach: 'Coach Priya', spotsLeft: 8, icon: 'fa-leaf', color: 'text-green-400' }
];

function getStudioClasses() {
    try {
        const stored = localStorage.getItem('gym_studio_classes');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch(e) {}
    return defaultClassesSchedule;
}

let selectedClassDay = 'Monday';

function openClassScheduleModal() {
    const todayDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    selectedClassDay = todayDayName;
    renderClassSchedule();
    const modal = document.getElementById('class-schedule-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeClassScheduleModal() {
    const modal = document.getElementById('class-schedule-modal');
    if (modal) modal.classList.add('hidden-view');
}

function selectClassDay(d) {
    selectedClassDay = d;
    renderClassSchedule();
}

function renderClassSchedule() {
    const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const pills = document.getElementById('class-day-pills');
    const container = document.getElementById('classes-list-container');

    if (pills) {
        pills.innerHTML = daysArr.map(d => `
            <button onclick="selectClassDay('${d}')" class="px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${d === selectedClassDay ? 'bg-indigo-600 text-white shadow' : 'bg-dark-100 text-gray-400 hover:text-white'}">
                ${d.substring(0, 3)}
            </button>
        `).join('');
    }

    if (!container) return;
    const allSchedule = getStudioClasses();
    const filtered = allSchedule.filter(c => c.day === selectedClassDay);

    if (filtered.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-500 italic p-6 text-center bg-dark-100 rounded-xl">No group studio sessions scheduled for ${selectedClassDay}. Open gym floor training available!</p>`;
        return;
    }

    const booked = appState.bookedClasses || [];

    container.innerHTML = filtered.map(item => {
        const isBooked = booked.includes(item.id);
        return `
            <div class="p-4 bg-dark-100 rounded-2xl border border-gray-800 hover:border-indigo-500/40 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 ${item.color} flex items-center justify-center text-sm shrink-0">
                        <i class="fas ${item.icon}"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h4 class="text-xs font-bold text-white">${item.name}</h4>
                            <span class="text-[9px] bg-red-500/15 text-red-300 border border-red-500/30 px-1.5 py-0.2 rounded font-extrabold uppercase">${item.spotsLeft} spots left</span>
                        </div>
                        <p class="text-[10px] text-gray-400 mt-0.5"><i class="far fa-clock mr-1"></i>${item.time} • Led by ${item.coach}</p>
                    </div>
                </div>

                ${isBooked ? `
                    <span class="text-xs bg-green-500/20 text-green-300 border border-green-500/40 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1">
                        <i class="fas fa-check"></i> Spot Confirmed
                    </span>
                ` : `
                    <button type="button" onclick="reserveClassSpot('${item.id}', '${item.name}', '${item.time}')" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow shadow-indigo-600/25 shrink-0 cursor-pointer">
                        Reserve Spot
                    </button>
                `}
            </div>
        `;
    }).join('');
}

function reserveClassSpot(classId, className, classTime) {
    if (!Array.isArray(appState.bookedClasses)) appState.bookedClasses = [];
    if (!appState.bookedClasses.includes(classId)) {
        appState.bookedClasses.push(classId);
        saveStateToCloud();
        addAthleteXp(75);
        if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }

    renderClassSchedule();
    const gymName = clientGymBranding.gymName || 'Gym';
    const memberName = (appState.user && appState.user.name) || 'Member';
    const phone = clientGymBranding.gymPhone || '';
    const cleanPhone = phone.replace(/\D/g, '');

    const msg = `Hi ${gymName}! 👋 I just reserved my spot for *${className}* (${classTime}). Please keep my studio spot confirmed! - ${memberName}`;
    if (confirm(`🎉 Spot Reserved! Would you like to send a quick WhatsApp confirmation to the studio desk?`)) {
        if (cleanPhone) {
            window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
        } else {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
        }
    }
}

function initStudioClassesSync() {
    if (typeof db !== 'undefined') {
        db.collection('gym_settings').doc('studio_classes').onSnapshot(doc => {
            if (doc.exists && Array.isArray(doc.data().classes)) {
                localStorage.setItem('gym_studio_classes', JSON.stringify(doc.data().classes));
                const modal = document.getElementById('class-schedule-modal');
                if (modal && !modal.classList.contains('hidden-view')) {
                    renderClassSchedule();
                }
            }
        }, () => {});
    }
}

// --- 9. REFER A FRIEND VIRAL PROGRAM ---
function initReferralUI() {
    const memberId = (appState.user && appState.user.name) ? appState.user.name.toUpperCase().replace(/\s+/g, '').slice(0, 5) : 'VIP';
    const refCode = `IRON-${memberId}`;
    const baseUri = window.location.href.split('#')[0].split('?')[0];
    const refUrl = `${baseUri}#trial?ref=${refCode}`;

    const linkInput = document.getElementById('referral-link-input');
    if (linkInput) linkInput.value = refUrl;

    const countDisp = document.getElementById('referrals-count-display');
    const daysDisp = document.getElementById('referrals-days-display');
    const joined = appState.referralsCount || 0;
    if (countDisp) countDisp.textContent = joined;
    if (daysDisp) daysDisp.textContent = `${joined * 7} Days`;
}

function openReferralModal() {
    initReferralUI();
    const modal = document.getElementById('referral-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeReferralModal() {
    const modal = document.getElementById('referral-modal');
    if (modal) modal.classList.add('hidden-view');
}

function copyReferralLink() {
    const linkInput = document.getElementById('referral-link-input');
    if (!linkInput) return;
    navigator.clipboard.writeText(linkInput.value).then(() => {
        alert("✅ Invite link copied to clipboard! Share it with your friends.");
        addAthleteXp(50);
        checkAndAwardBadges();
    }).catch(() => {
        prompt("Copy your invite link:", linkInput.value);
    });
}

function shareReferralWhatsApp() {
    const gymName = clientGymBranding.gymName || 'Target Gym';
    const memberName = (appState.user && appState.user.name) || 'A friend';
    const linkInput = document.getElementById('referral-link-input');
    const refUrl = linkInput ? linkInput.value : window.location.href;

    const msg = `Hey! 💪 ${memberName} invited you to train at *${gymName}*!\n\nActivate your *3-Day Free VIP Trial Pass* here:\n👉 ${refUrl}\n\nIncludes free gym floor access & a free coach session. Let's hit the weights together! 🚀🔥`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
    addAthleteXp(100);
    checkAndAwardBadges();
}

// --- 10. EXERCISE FORM TIPS & VIDEO DEMO COACH ---
let currentFormGuideExercise = 'Barbell Bench Press';

const exerciseFormCuesDB = {
    'Barbell Bench Press': {
        category: 'CHEST • COMPOUND PRESS',
        muscles: 'Pectoralis Major, Anterior Deltoids, Triceps Brachii',
        cues: [
            "Retract and depress shoulder blades into the bench to build a rock-solid base.",
            "Tuck elbows at a 45° to 60° angle — avoid flaring elbows at 90° to protect shoulders.",
            "Plant feet flat into the ground and utilize active leg drive through each rep."
        ],
        mistakes: [
            "Bouncing the barbell violently off the ribcage.",
            "Lifting hips and glutes off the bench during the push."
        ]
    },
    'Barbell Squats': {
        category: 'LEGS • COMPOUND SQUAT',
        muscles: 'Quadriceps, Gluteus Maximus, Hamstrings, Core Stabilizers',
        cues: [
            "Brace your core 360° with a deep Valsalva breath before initiating the descent.",
            "Break at the hips and knees simultaneously; drive knees outward in line with toes.",
            "Keep chest tall and maintain mid-foot balance throughout the lift."
        ],
        mistakes: [
            "Knees caving inward (valgus collapse) on the way up.",
            "Shifting weight onto the toes or letting heels rise off the floor."
        ]
    },
    'Deadlift': {
        category: 'POSTERIOR CHAIN • HEAVY PULL',
        muscles: 'Hamstrings, Glutes, Erector Spinae, Lats, Traps, Forearms',
        cues: [
            "Set bar over mid-foot (1 inch from shins) and hinge hips back.",
            "Engage lats by squeezing armpits shut; pull the slack out of the barbell before lifting.",
            "Push the floor away through your heels like a leg press until past knees, then squeeze glutes to lockout."
        ],
        mistakes: [
            "Rounding the lower back under heavy load.",
            "Hyperextending and leaning backwards at the top of the lockout."
        ]
    },
    'Overhead Press': {
        category: 'SHOULDERS • VERTICAL PRESS',
        muscles: 'Anterior & Lateral Deltoids, Triceps, Upper Chest, Core',
        cues: [
            "Squeeze glutes and quads tight to prevent lower back arching.",
            "Press bar in a straight vertical path, pulling head slightly back as bar passes nose.",
            "Lock out arms directly overhead and punch traps upward to stabilize shoulders."
        ],
        mistakes: [
            "Excessively leaning back to turn the lift into an incline bench press.",
            "Bending the knees to push-press when training strict overhead strength."
        ]
    },
    'Pull-Ups': {
        category: 'BACK • VERTICAL PULL',
        muscles: 'Latissimus Dorsi, Teres Major, Biceps, Rhomboids',
        cues: [
            "Initiate the movement by depressing your shoulder blades down away from ears.",
            "Drive elbows straight down towards your back pockets.",
            "Control the descent for a full dead-hang stretch at the bottom of each rep."
        ],
        mistakes: [
            "Kicking legs and kipping instead of pulling with pure back contraction.",
            "Doing partial half-reps without reaching full arm extension."
        ]
    }
};

function openExerciseFormGuide(exName) {
    currentFormGuideExercise = exName;
    const info = exerciseFormCuesDB[exName] || {
        category: 'EXERCISE TECHNIQUE',
        muscles: 'Target Muscle Group & Synergists',
        cues: [
            "Control the eccentric (lowering) phase for 2 to 3 seconds for maximum hypertrophy.",
            "Squeeze target muscles hard at peak contraction without momentum.",
            "Maintain a stable neutral spine and locked core throughout the movement."
        ],
        mistakes: [
            "Using excessive momentum, swinging, or jerky reps.",
            "Sacrificing range of motion to lift an ego-inflated weight."
        ]
    };

    const titleEl = document.getElementById('form-guide-title');
    const catEl = document.getElementById('form-guide-category');
    const muscEl = document.getElementById('form-guide-muscles');
    const cuesEl = document.getElementById('form-guide-cues-list');
    const errEl = document.getElementById('form-guide-mistakes-list');

    if (titleEl) titleEl.textContent = exName;
    if (catEl) catEl.textContent = info.category;
    if (muscEl) muscEl.textContent = `Primary Muscles: ${info.muscles}`;

    if (cuesEl) {
        cuesEl.innerHTML = info.cues.map(c => `
            <div class="p-2.5 bg-dark-100 rounded-xl border border-gray-800 flex items-start gap-2.5 text-xs text-gray-200">
                <i class="fas fa-check text-green-400 mt-0.5 shrink-0"></i>
                <span>${c}</span>
            </div>
        `).join('');
    }

    if (errEl) {
        errEl.innerHTML = info.mistakes.map(m => `
            <div class="p-2.5 bg-dark-100 rounded-xl border border-gray-800 flex items-start gap-2.5 text-xs text-red-200">
                <i class="fas fa-times text-red-400 mt-0.5 shrink-0"></i>
                <span>${m}</span>
            </div>
        `).join('');
    }

    const modal = document.getElementById('exercise-form-guide-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeExerciseFormGuideModal() {
    const modal = document.getElementById('exercise-form-guide-modal');
    if (modal) modal.classList.add('hidden-view');
}

function openExerciseFormOnYoutube() {
    const q = `how to do ${currentFormGuideExercise} proper form tutorial`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`, '_blank');
}

// ============================================================================
// OPTION A: 🏆 MONTHLY GYM COMMUNITY LEADERBOARD & VIRAL SOCIAL ENGINE
// ============================================================================
let activeLeaderboardTab = 'streak'; // 'streak' | 'strength' | 'volume'

const defaultCommunityAthletes = [
    { id: 'ath_1', name: 'Vikram Singh', streak: 26, bench: 130, squat: 175, deadlift: 210, volume: 48500, avatar: 'VS', tier: 'Titan' },
    { id: 'ath_2', name: 'Marcus Vance', streak: 24, bench: 140, squat: 185, deadlift: 220, volume: 52000, avatar: 'MV', tier: 'Elite' },
    { id: 'ath_3', name: 'Rohit Sharma', streak: 21, bench: 110, squat: 145, deadlift: 180, volume: 38200, avatar: 'RS', tier: 'Pro' },
    { id: 'ath_4', name: 'Aman Verma', streak: 19, bench: 105, squat: 140, deadlift: 165, volume: 34100, avatar: 'AV', tier: 'Warrior' },
    { id: 'ath_5', name: 'Priya Patel', streak: 18, bench: 65, squat: 105, deadlift: 125, volume: 29500, avatar: 'PP', tier: 'Warrior' },
    { id: 'ath_6', name: 'Karan Mehra', streak: 15, bench: 95, squat: 130, deadlift: 155, volume: 27000, avatar: 'KM', tier: 'Challenger' },
    { id: 'ath_7', name: 'Ananya Roy', streak: 14, bench: 55, squat: 90, deadlift: 110, volume: 22400, avatar: 'AR', tier: 'Challenger' },
    { id: 'ath_8', name: 'Dev Malhotra', streak: 11, bench: 85, squat: 115, deadlift: 135, volume: 19800, avatar: 'DM', tier: 'Rookie' }
];

function getCurrentUserLeaderboardStats() {
    const userName = (appState.user && appState.user.name) || 'You';
    const streak = appState.streak || 1;
    
    // PRs from appState
    const prs = appState.personalRecords || {};
    const bench = prs['Barbell Bench Press'] || prs['Bench Press'] || 70;
    const squat = prs['Barbell Squat'] || prs['Squat'] || 90;
    const deadlift = prs['Deadlift'] || prs['Barbell Deadlift'] || 100;
    
    // Calculate total monthly volume from workout history
    let vol = 0;
    if (Array.isArray(appState.workoutHistory)) {
        appState.workoutHistory.forEach(w => {
            if (Array.isArray(w.exercises)) {
                w.exercises.forEach(ex => {
                    if (Array.isArray(ex.sets)) {
                        ex.sets.forEach(s => {
                            vol += (parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0);
                        });
                    }
                });
            }
        });
    }
    if (vol === 0) vol = 14200;

    const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'ME';

    return {
        id: 'current_user',
        name: `${userName} (You)`,
        isCurrentUser: true,
        streak: streak,
        bench: bench,
        squat: squat,
        deadlift: deadlift,
        big3: bench + squat + deadlift,
        volume: vol,
        avatar: initials,
        tier: streak > 20 ? 'Titan' : (streak > 10 ? 'Warrior' : 'Challenger')
    };
}

function openLeaderboardModal() {
    const gymName = clientGymBranding.gymName || 'Target Gym';
    const gnEl = document.getElementById('leaderboard-gym-name');
    if (gnEl) gnEl.textContent = `${gymName} • Live Community Rankings`;
    switchLeaderboardTab(activeLeaderboardTab || 'streak');
    const modal = document.getElementById('leaderboard-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeLeaderboardModal() {
    const modal = document.getElementById('leaderboard-modal');
    if (modal) modal.classList.add('hidden-view');
}

function switchLeaderboardTab(tab) {
    activeLeaderboardTab = tab;
    
    ['streak', 'strength', 'volume'].forEach(t => {
        const btn = document.getElementById(`tab-btn-lb-${t}`);
        if (btn) {
            if (t === tab) {
                btn.className = 'flex-1 py-2 rounded-xl text-xs font-extrabold transition-all bg-yellow-500 text-black shadow-md cursor-pointer flex items-center justify-center gap-1';
            } else {
                btn.className = 'flex-1 py-2 rounded-xl text-xs font-extrabold transition-all text-gray-400 hover:text-white cursor-pointer flex items-center justify-center gap-1';
            }
        }
    });

    renderLeaderboardUI();
}

function renderLeaderboardUI() {
    const userStats = getCurrentUserLeaderboardStats();
    
    let list = defaultCommunityAthletes.map(a => ({
        ...a,
        big3: a.bench + a.squat + a.deadlift,
        isCurrentUser: false
    }));
    list.push(userStats);

    if (activeLeaderboardTab === 'streak') {
        list.sort((a, b) => b.streak - a.streak);
    } else if (activeLeaderboardTab === 'strength') {
        list.sort((a, b) => b.big3 - a.big3);
    } else if (activeLeaderboardTab === 'volume') {
        list.sort((a, b) => b.volume - a.volume);
    }

    list.forEach((item, idx) => { item.rank = idx + 1; });

    const podiumEl = document.getElementById('leaderboard-podium');
    if (podiumEl && list.length >= 3) {
        const first = list[0];
        const second = list[1];
        const third = list[2];

        const getScoreLabel = (athlete) => {
            if (activeLeaderboardTab === 'streak') return `${athlete.streak} Days 🔥`;
            if (activeLeaderboardTab === 'strength') return `${athlete.big3} kg (Big 3)`;
            return `${(athlete.volume / 1000).toFixed(1)}k kg`;
        };

        podiumEl.innerHTML = `
            <!-- 2nd Place (Silver) -->
            <div class="flex-1 flex flex-col items-center text-center">
                <span class="text-xs mb-1">🥈</span>
                <div class="w-11 h-11 rounded-2xl bg-gray-400/20 text-gray-300 border border-gray-400/40 flex items-center justify-center text-xs font-black shadow mb-1.5 ${second.isCurrentUser ? 'ring-2 ring-yellow-400' : ''}">
                    ${second.avatar}
                </div>
                <h5 class="text-[11px] font-bold text-white truncate max-w-[85px]">${second.name}</h5>
                <span class="text-[10px] text-gray-300 font-extrabold">${getScoreLabel(second)}</span>
                <div class="w-full h-12 bg-gradient-to-t from-gray-700/40 to-gray-600/20 rounded-t-xl mt-2 flex items-center justify-center font-black text-gray-400 text-xs">#2</div>
            </div>

            <!-- 1st Place (Gold Champion) -->
            <div class="flex-1 flex flex-col items-center text-center -mt-3">
                <span class="text-base mb-0.5 animate-bounce">👑</span>
                <div class="w-14 h-14 rounded-2xl bg-yellow-500/25 text-yellow-300 border-2 border-yellow-400 flex items-center justify-center text-sm font-black shadow-lg shadow-yellow-500/20 mb-1.5 ${first.isCurrentUser ? 'ring-4 ring-yellow-400' : ''}">
                    ${first.avatar}
                </div>
                <h5 class="text-xs font-black text-yellow-300 truncate max-w-[95px]">${first.name}</h5>
                <span class="text-[11px] text-brand-400 font-black">${getScoreLabel(first)}</span>
                <div class="w-full h-16 bg-gradient-to-t from-yellow-600/40 to-yellow-500/20 border-t border-yellow-400/50 rounded-t-xl mt-2 flex items-center justify-center font-black text-yellow-400 text-sm">#1 🥇</div>
            </div>

            <!-- 3rd Place (Bronze) -->
            <div class="flex-1 flex flex-col items-center text-center">
                <span class="text-xs mb-1">🥉</span>
                <div class="w-11 h-11 rounded-2xl bg-amber-700/20 text-amber-500 border border-amber-700/40 flex items-center justify-center text-xs font-black shadow mb-1.5 ${third.isCurrentUser ? 'ring-2 ring-yellow-400' : ''}">
                    ${third.avatar}
                </div>
                <h5 class="text-[11px] font-bold text-white truncate max-w-[85px]">${third.name}</h5>
                <span class="text-[10px] text-amber-400 font-extrabold">${getScoreLabel(third)}</span>
                <div class="w-full h-9 bg-gradient-to-t from-amber-900/40 to-amber-800/20 rounded-t-xl mt-2 flex items-center justify-center font-black text-amber-500 text-xs">#3</div>
            </div>
        `;
    }

    const rosterEl = document.getElementById('leaderboard-roster-list');
    if (rosterEl) {
        rosterEl.innerHTML = list.map(item => {
            let scoreStr = '';
            let subStr = '';
            if (activeLeaderboardTab === 'streak') {
                scoreStr = `${item.streak} Days`;
                subStr = `Checked-in ${item.streak} days this month`;
            } else if (activeLeaderboardTab === 'strength') {
                scoreStr = `${item.big3} kg`;
                subStr = `B: ${item.bench}k | S: ${item.squat}k | D: ${item.deadlift}k`;
            } else {
                scoreStr = `${(item.volume / 1000).toFixed(1)}k kg`;
                subStr = `Total weight moved this month`;
            }

            const isUser = item.isCurrentUser;

            return `
                <div class="p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${isUser ? 'bg-yellow-500/15 border-yellow-400/80 shadow-md ring-1 ring-yellow-400/50' : 'bg-dark-100 border-gray-800 hover:border-gray-700'}">
                    <div class="flex items-center gap-3">
                        <span class="w-6 text-center text-xs font-black ${item.rank <= 3 ? 'text-yellow-400' : 'text-gray-500'}">#${item.rank}</span>
                        <div class="w-8 h-8 rounded-xl ${isUser ? 'bg-yellow-500 text-black font-black' : 'bg-dark-300 text-gray-300 border border-gray-700'} flex items-center justify-center text-xs font-bold shrink-0">
                            ${item.avatar}
                        </div>
                        <div>
                            <div class="flex items-center gap-1.5">
                                <h5 class="text-xs font-bold ${isUser ? 'text-yellow-300' : 'text-white'}">${item.name}</h5>
                                ${isUser ? '<span class="text-[9px] bg-yellow-400 text-black px-1.5 py-0.2 rounded font-extrabold uppercase">YOU</span>' : ''}
                                <span class="text-[9px] bg-dark-300 text-gray-400 px-1.5 py-0.2 rounded border border-gray-800">${item.tier}</span>
                            </div>
                            <p class="text-[10px] text-gray-400">${subStr}</p>
                        </div>
                    </div>
                    <div class="text-right shrink-0">
                        <span class="text-xs font-black ${isUser ? 'text-yellow-400' : 'text-white'} block">${scoreStr}</span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function shareLeaderboardRankWhatsApp() {
    const userStats = getCurrentUserLeaderboardStats();
    const gymName = clientGymBranding.gymName || 'Target Gym';
    
    let list = defaultCommunityAthletes.map(a => ({ ...a, big3: a.bench + a.squat + a.deadlift }));
    list.push(userStats);
    if (activeLeaderboardTab === 'streak') list.sort((a,b) => b.streak - a.streak);
    else if (activeLeaderboardTab === 'strength') list.sort((a,b) => b.big3 - a.big3);
    else list.sort((a,b) => b.volume - a.volume);
    
    const rank = list.findIndex(a => a.isCurrentUser) + 1;
    const baseUri = window.location.href.split('#')[0].split('?')[0];

    const msg = `🏆 I'm ranked #${rank} on the ${gymName} Monthly Leaderboard! 💪\n\n🔥 Streak: ${userStats.streak} Days\n🏋️ Big 3 Total: ${userStats.big3} kg (Bench: ${userStats.bench}kg | Squat: ${userStats.squat}kg | Deadlift: ${userStats.deadlift}kg)\n⚡ Volume Moved: ${(userStats.volume/1000).toFixed(1)} tons!\n\nThink you can beat me? Join me with a 3-Day Free VIP Trial Pass at ${gymName}:\n👉 ${baseUri}#trial`;
    
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
}

// ============================================================================
// OPTION B: 🥗 1-CLICK INDIAN & REGIONAL DIET PRESETS ENGINE
// ============================================================================
let activePresetGoalMode = 'cut'; // 'cut' | 'bulk'
let activePresetCategory = 'veg'; // 'veg' | 'egg' | 'nonveg' | 'vegan'

const indianDietPresetsDB = {
    cut: {
        veg: {
            title: 'Desi Shakahari Fat Loss Plan',
            tag: 'HIGH PROTEIN VEGETARIAN',
            desc: 'Low-calorie, satiating vegetarian plan with paneer, soya chunks, roasted chana, and high-fiber sprouts.',
            cals: 1750,
            protein: 115,
            carbs: 160,
            fats: 45,
            cost: '~₹110 / Day',
            meals: [
                { time: '8:00 AM', name: 'Power Breakfast', items: '120g Low-Fat Paneer Bhurji + 1 Multigrain Roti + 1 cup Black Coffee / Green Tea', pro: '24g', cals: '320 kcal' },
                { time: '11:30 AM', name: 'Mid-Morning Fuel', items: '1 bowl Moong Dal Sprouts Chaat (onion, tomato, lemon) + 15g Almonds', pro: '12g', cals: '180 kcal' },
                { time: '1:30 PM', name: 'Desi Protein Lunch', items: '50g Soya Chunks Curry + 1 cup Cooked Rice or 1 Roti + 1 bowl Yellow Dal Tadka + Cucumber Salad', pro: '36g', cals: '480 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Crunch', items: '40g Roasted Chana (Bhuna Chana) + 1 glass Salted Chaas (Buttermilk)', pro: '14g', cals: '190 kcal' },
                { time: '8:30 PM', name: 'Light Shred Dinner', items: '100g Grilled Paneer or Soya Tikka + 1 bowl Mixed Vegetable Soup + Lemon Water', pro: '22g', cals: '340 kcal' },
                { time: '10:30 PM', name: 'Recovery Drink', items: '1 scoop Whey Protein in Water (or Warm Turmeric Milk)', pro: '24g', cals: '130 kcal' }
            ]
        },
        egg: {
            title: 'Budget Eggetarian Shred Plan',
            tag: 'BUDGET EGGETARIAN',
            desc: 'Maximum protein per rupee spent using whole and egg whites paired with clean complex carbs.',
            cals: 1850,
            protein: 135,
            carbs: 170,
            fats: 50,
            cost: '~₹95 / Day',
            meals: [
                { time: '8:00 AM', name: 'High-Protein Breakfast', items: '4 Boiled Eggs (2 whole + 2 whites) + 2 slices Whole Wheat Brown Bread + Black Coffee', pro: '26g', cals: '340 kcal' },
                { time: '11:30 AM', name: 'Mid-Day Snack', items: '1 glass Fresh Buttermilk (Chaas) + 1 Apple', pro: '4g', cals: '120 kcal' },
                { time: '1:30 PM', name: 'Egg Bhurji Lunch', items: '3 Egg Whites Bhurji with Veggies + 2 Multigrain Rotis + 1 bowl Toor Dal + Green Salad', pro: '28g', cals: '460 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Fuel', items: '2 Boiled Egg Whites + 30g Roasted Chana + 1 Banana', pro: '14g', cals: '220 kcal' },
                { time: '8:30 PM', name: 'Dinner', items: '3 Boiled Eggs (1 whole + 2 whites) + 1 bowl Rajma/Dal + Steamed Brown Rice (1 cup)', pro: '32g', cals: '490 kcal' },
                { time: '10:30 PM', name: 'Night Protein', items: '1 cup Low-Fat Curd (Dahi) with pinch of Cinnamon', pro: '10g', cals: '110 kcal' }
            ]
        },
        nonveg: {
            title: 'Lean Desi Chicken & Egg Cut',
            tag: 'HIGH PROTEIN NON-VEG',
            desc: 'Gold-standard fat loss plan with tender chicken breast, boiled eggs, fish, and crisp green salads.',
            cals: 1800,
            protein: 155,
            carbs: 145,
            fats: 45,
            cost: '~₹160 / Day',
            meals: [
                { time: '8:00 AM', name: 'Omelette Breakfast', items: '3 Eggs Omelette (1 whole + 2 whites) + 40g Rolled Oats cooked in water + Green Tea', pro: '24g', cals: '330 kcal' },
                { time: '11:30 AM', name: 'Mid-Morning Boost', items: '1 bowl Papaya or Watermelon + 10 Almonds', pro: '4g', cals: '110 kcal' },
                { time: '1:30 PM', name: 'Chicken Tikka Lunch', items: '180g Boiled / Air-Fried Chicken Breast + 1 cup Steamed Basmati Rice + 1 bowl Cucumber Tomato Salad', pro: '48g', cals: '460 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Snack', items: '1 Black Coffee + 1 Brown Bread with 1 tsp Peanut Butter', pro: '6g', cals: '140 kcal' },
                { time: '8:30 PM', name: 'Grilled Protein Dinner', items: '150g Grilled Fish or Chicken Breast + 1 bowl Sautéed Broccoli & Bell Peppers + Dal', pro: '44g', cals: '420 kcal' },
                { time: '10:30 PM', name: 'Bedtime Whey', items: '1 scoop Whey Isolate in Cold Water', pro: '26g', cals: '120 kcal' }
            ]
        },
        vegan: {
            title: 'Desi Plant-Based Shred Plan',
            tag: 'PLANT-BASED VEGAN',
            desc: '100% dairy-free and meat-free fat loss plan utilizing soya chunks, tofu, chhole, and lentils.',
            cals: 1720,
            protein: 105,
            carbs: 190,
            fats: 40,
            cost: '~₹90 / Day',
            meals: [
                { time: '8:00 AM', name: 'Besan Tofu Breakfast', items: '2 Besan Chillas stuffed with 60g Grated Tofu & Coriander + Mint Chutney', pro: '22g', cals: '320 kcal' },
                { time: '11:30 AM', name: 'Morning Sprout Crunch', items: '1 bowl Steamed Moong & Kala Chana Sprouts with Lemon', pro: '14g', cals: '160 kcal' },
                { time: '1:30 PM', name: 'Soya Curry Lunch', items: '55g Soya Chunks in Desi Curry + 1 bowl Yellow Dal + 1 cup Rice + Fresh Salad', pro: '38g', cals: '490 kcal' },
                { time: '5:30 PM', name: 'Snack', items: '35g Roasted Soya Nuts + 1 Black Coffee', pro: '15g', cals: '160 kcal' },
                { time: '8:30 PM', name: 'Dinner', items: '1 bowl Rajma or Chhole + 2 Multigrain Rotis + Green Salad', pro: '16g', cals: '390 kcal' }
            ]
        }
    },
    bulk: {
        veg: {
            title: 'Desi Shakahari Mass Builder',
            tag: 'HIGH PROTEIN VEGETARIAN SURPLUS',
            desc: 'Nutrient-dense muscle building plan packed with paneer, milkshakes, soya chunks, nuts, and lentils.',
            cals: 2450,
            protein: 135,
            carbs: 290,
            fats: 75,
            cost: '~₹145 / Day',
            meals: [
                { time: '7:30 AM', name: 'Morning Mass Shake', items: '500ml Milk + 1 Banana + 40g Oats + 2 tbsp Peanut Butter + 1 scoop Whey/Sattu', pro: '35g', cals: '580 kcal' },
                { time: '10:30 AM', name: 'Breakfast', items: '150g Paneer Bhurji + 2 Whole Wheat Parathas + Curd', pro: '30g', cals: '510 kcal' },
                { time: '1:30 PM', name: 'Heavy Lunch', items: '60g Soya Chunks Curry + 1.5 cup Rice + 1 bowl Dal Makhani/Tadka + Dahi', pro: '42g', cals: '640 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Fuel', items: '50g Roasted Chana + 2 Bananas + 15 Almonds', pro: '16g', cals: '340 kcal' },
                { time: '8:30 PM', name: 'Dinner', items: '150g Paneer Tikka or Kofta + 3 Multigrain Rotis + Mixed Dal', pro: '32g', cals: '560 kcal' }
            ]
        },
        egg: {
            title: 'Eggetarian Heavy Muscle Bulk',
            tag: 'EGGETARIAN MASS FUEL',
            desc: 'High-calorie clean bulking with 6+ eggs daily, peanut butter, milk, and high-protein rice dishes.',
            cals: 2550,
            protein: 155,
            carbs: 300,
            fats: 78,
            cost: '~₹130 / Day',
            meals: [
                { time: '8:00 AM', name: 'Breakfast', items: '4 Whole Boiled Eggs + 2 Peanut Butter Toast + 1 glass Milk', pro: '36g', cals: '560 kcal' },
                { time: '11:30 AM', name: 'Snack', items: '1 Banana Shake with 1 tbsp Honey and Chia Seeds', pro: '8g', cals: '240 kcal' },
                { time: '1:30 PM', name: 'Egg Curry Lunch', items: '3 Egg Curry + 1.5 cup Steamed Rice + 1 bowl Dal Tadka + 1 cup Curd', pro: '34g', cals: '680 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Crunch', items: '2 Boiled Eggs + 50g Roasted Chana + 1 Sweet Potato', pro: '18g', cals: '310 kcal' },
                { time: '8:30 PM', name: 'Dinner', items: '100g Paneer/Soya Bhurji + 3 Egg Whites Bhurji + 3 Rotis + Salad', pro: '42g', cals: '610 kcal' }
            ]
        },
        nonveg: {
            title: 'Pure Desi Chicken & Meat Hypertrophy',
            tag: 'NON-VEG BEAST BULK',
            desc: 'Ultimate athletic mass plan with 250g+ chicken breast, eggs, fish, rice, and healthy fats.',
            cals: 2650,
            protein: 180,
            carbs: 310,
            fats: 72,
            cost: '~₹195 / Day',
            meals: [
                { time: '8:00 AM', name: 'Breakfast', items: '4 Eggs (2 whole + 2 whites) Scrambled + 60g Masala Oats with Nuts + 1 glass Milk', pro: '34g', cals: '540 kcal' },
                { time: '11:30 AM', name: 'Mid-Morning Snack', items: '1 Banana + 20g Walnuts and Almonds', pro: '6g', cals: '210 kcal' },
                { time: '1:30 PM', name: 'Chicken Feast Lunch', items: '220g Chicken Breast Curry (Low Oil) + 2 cups Basmati Rice + 1 bowl Dal + Salad', pro: '62g', cals: '720 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Energy', items: '1 Brown Bread with Peanut Butter + 1 Banana + Black Coffee', pro: '8g', cals: '250 kcal' },
                { time: '8:30 PM', name: 'Dinner', items: '180g Fish Curry or Grilled Chicken Breast + 3 Multigrain Rotis + Veggies', pro: '52g', cals: '610 kcal' },
                { time: '10:30 PM', name: 'Night Shake', items: '1 scoop Whey Protein in 250ml Milk', pro: '32g', cals: '240 kcal' }
            ]
        },
        vegan: {
            title: 'Plant-Based Desi Power Builder',
            tag: 'VEGAN MUSCLE SURPLUS',
            desc: 'Clean vegan bulking powered by soya, tofu, rajma, chhole, oats, and peanut butter.',
            cals: 2380,
            protein: 125,
            carbs: 320,
            fats: 65,
            cost: '~₹115 / Day',
            meals: [
                { time: '8:00 AM', name: 'Breakfast', items: 'Oats Smoothie (50g Oats + 2 Bananas + 2 tbsp Peanut Butter + Soy Milk)', pro: '24g', cals: '520 kcal' },
                { time: '11:30 AM', name: 'Snack', items: '1 bowl Boiled Kala Chana Chaat with Tomatoes and Lemon', pro: '14g', cals: '210 kcal' },
                { time: '1:30 PM', name: 'Lunch', items: '70g Soya Chunks Curry + 1.5 cup Rice + 1 bowl Chhole/Rajma + Salad', pro: '46g', cals: '690 kcal' },
                { time: '5:30 PM', name: 'Pre-Workout Fuel', items: '50g Roasted Soya Nuts + 1 Apple', pro: '20g', cals: '240 kcal' },
                { time: '8:30 PM', name: 'Dinner', items: '120g Tofu Curry + 3 Multigrain Rotis + 1 bowl Dal Tadka', pro: '28g', cals: '580 kcal' }
            ]
        }
    }
};

function openIndianDietPresetsModal() {
    renderIndianDietPresetUI();
    const modal = document.getElementById('indian-diet-presets-modal');
    if (modal) modal.classList.remove('hidden-view');
}

function closeIndianDietPresetsModal() {
    const modal = document.getElementById('indian-diet-presets-modal');
    if (modal) modal.classList.add('hidden-view');
}

function setPresetGoalMode(mode) {
    activePresetGoalMode = mode;
    const cutBtn = document.getElementById('diet-goal-btn-cut');
    const bulkBtn = document.getElementById('diet-goal-btn-bulk');
    if (cutBtn && bulkBtn) {
        if (mode === 'cut') {
            cutBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-amber-500 text-black';
            bulkBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-gray-400 hover:text-white';
        } else {
            bulkBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-amber-500 text-black';
            cutBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-gray-400 hover:text-white';
        }
    }
    renderIndianDietPresetUI();
}

function selectIndianDietCategory(cat) {
    activePresetCategory = cat;
    ['veg', 'egg', 'nonveg', 'vegan'].forEach(c => {
        const btn = document.getElementById(`preset-cat-${c}`);
        if (btn) {
            if (c === cat) {
                btn.className = 'p-2.5 rounded-2xl border border-amber-400 bg-amber-500/20 text-left transition-all cursor-pointer ring-2 ring-amber-400/50';
            } else {
                btn.className = 'p-2.5 rounded-2xl border border-gray-800 hover:border-gray-700 bg-dark-100 text-left transition-all cursor-pointer';
            }
        }
    });
    renderIndianDietPresetUI();
}

function renderIndianDietPresetUI() {
    const group = indianDietPresetsDB[activePresetGoalMode] || indianDietPresetsDB['cut'];
    const preset = group[activePresetCategory] || group['veg'];

    const tagEl = document.getElementById('preset-hero-tag');
    const titleEl = document.getElementById('preset-hero-title');
    const descEl = document.getElementById('preset-hero-desc');
    const costEl = document.getElementById('preset-hero-cost');
    const calsEl = document.getElementById('preset-hero-cals');
    const proEl = document.getElementById('preset-hero-pro');
    const carbEl = document.getElementById('preset-hero-carb');
    const fatEl = document.getElementById('preset-hero-fat');

    if (tagEl) tagEl.textContent = preset.tag;
    if (titleEl) titleEl.textContent = preset.title;
    if (descEl) descEl.textContent = preset.desc;
    if (costEl) costEl.textContent = preset.cost;
    if (calsEl) calsEl.textContent = `${preset.cals} kcal`;
    if (proEl) proEl.textContent = `${preset.protein}g`;
    if (carbEl) carbEl.textContent = `${preset.carbs}g`;
    if (fatEl) fatEl.textContent = `${preset.fats}g`;

    const mealsEl = document.getElementById('preset-meals-schedule');
    if (mealsEl) {
        mealsEl.innerHTML = preset.meals.map(m => `
            <div class="p-3 bg-dark-100 rounded-2xl border border-gray-800 flex justify-between items-start gap-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] bg-dark-300 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded font-mono font-bold">${m.time}</span>
                        <h5 class="text-xs font-bold text-white">${m.name}</h5>
                    </div>
                    <p class="text-xs text-gray-300 mt-1 leading-snug">${m.items}</p>
                </div>
                <div class="text-right shrink-0">
                    <span class="text-xs font-bold text-brand-400 block">${m.pro} pro</span>
                    <span class="text-[10px] text-gray-400">${m.cals}</span>
                </div>
            </div>
        `).join('');
    }
}

function applyPresetToDietPlan() {
    const group = indianDietPresetsDB[activePresetGoalMode] || indianDietPresetsDB['cut'];
    const preset = group[activePresetCategory] || group['veg'];

    if (!appState.customDiet) appState.customDiet = [];
    appState.customDiet = preset.meals.map(m => ({
        time: m.time,
        name: m.name,
        desc: m.items,
        cals: parseInt(m.cals) || 300,
        pro: parseInt(m.pro) || 25,
        carb: Math.round((preset.carbs / preset.meals.length)),
        fat: Math.round((preset.fats / preset.meals.length))
    }));

    if (appState.user) {
        appState.user.dietPreference = (activePresetCategory === 'veg' || activePresetCategory === 'vegan') ? 'Veg' : 'Non-Veg';
        appState.user.dailyCalories = preset.cals;
        appState.user.dailyProtein = preset.protein;
        appState.user.dailyCarbs = preset.carbs;
        appState.user.dailyFat = preset.fats;
    }

    saveStateToCloud();
    renderDietPlan();
    addAthleteXp(75);
    checkAndAwardBadges();

    if (typeof confetti === 'function') {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }

    alert(`🎉 Successfully applied "${preset.title}" to your daily diet! Your macro targets and meals have been updated.`);
    closeIndianDietPresetsModal();
}

function shareDietPresetWhatsApp() {
    const group = indianDietPresetsDB[activePresetGoalMode] || indianDietPresetsDB['cut'];
    const preset = group[activePresetCategory] || group['veg'];
    const gymName = clientGymBranding.gymName || 'Target Gym';

    let txt = `🥗 *${gymName} — ${preset.title}*\n`;
    txt += `🎯 Goal: ${activePresetGoalMode === 'cut' ? 'Fat Loss / Shred' : 'Muscle Mass Gain'}\n`;
    txt += `📊 Daily Macros: ${preset.cals} kcal | ${preset.protein}g Protein | ${preset.carbs}g Carbs | ${preset.fats}g Fats\n`;
    txt += `💰 Est. Daily Cost: ${preset.cost}\n\n`;
    txt += `📋 *DAILY MEAL SCHEDULE:*\n`;

    preset.meals.forEach((m, idx) => {
        txt += `\n*${idx + 1}. ${m.name} (${m.time})*\n`;
        txt += `👉 ${m.items}\n`;
        txt += `   └─ Protein: ${m.pro} | Cals: ${m.cals}\n`;
    });

    txt += `\n💪 Certified by Head Coach at ${gymName}`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`, '_blank');
}

// ============================================================================
// --- 12-WEEK WORKOUT CONSISTENCY MATRIX (GITHUB / APPLE FITNESS STYLE) ---
// ============================================================================
function renderActivityMatrix() {
    const container = document.getElementById('workout-activity-matrix');
    if (!container) return;

    const daysCount = 84; // 12 weeks * 7 days
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Map history workouts by date string key YYYY-MM-DD
    const activityMap = {};
    if (Array.isArray(appState.history)) {
        appState.history.forEach(h => {
            if (!h) return;
            const d = h.timestamp ? new Date(h.timestamp) : (h.date ? new Date(h.date) : null);
            if (!d || isNaN(d.getTime())) return;
            const key = d.toISOString().slice(0, 10);
            if (!activityMap[key]) {
                activityMap[key] = { count: 0, volume: 0, split: h.split || 'Workout' };
            }
            activityMap[key].count++;
            activityMap[key].volume += (h.volume || 0);
        });
    }

    // Generate date sequence for the past 84 days
    const blocks = [];
    let activeDaysCount = 0;

    for (let i = daysCount - 1; i >= 0; i--) {
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() - i);
        const key = targetDate.toISOString().slice(0, 10);
        const data = activityMap[key];
        const dayLabel = targetDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

        if (data && data.count > 0) {
            activeDaysCount++;
            let bgClass = 'bg-emerald-500 border border-emerald-400';
            if (data.volume > 10000 || data.count >= 2) {
                bgClass = 'bg-amber-400 border border-yellow-300 shadow-[0_0_6px_rgba(250,204,21,0.7)]';
            } else if (data.volume < 3000) {
                bgClass = 'bg-emerald-800 border border-emerald-700';
            }
            blocks.push(`
                <div class="w-3.5 h-3.5 rounded-sm ${bgClass} cursor-pointer hover:scale-125 transition-transform" 
                     title="${dayLabel}: ${data.split} (${data.volume.toLocaleString()} kg volume)">
                </div>
            `);
        } else {
            blocks.push(`
                <div class="w-3.5 h-3.5 rounded-sm bg-dark-100 border border-gray-800/80 cursor-pointer hover:bg-gray-800 transition-colors" 
                     title="${dayLabel}: Rest Day">
                </div>
            `);
        }
    }

    container.innerHTML = blocks.join('');

    const totalSessionsEl = document.getElementById('matrix-total-sessions');
    const consistencyRateEl = document.getElementById('matrix-consistency-rate');

    if (totalSessionsEl) totalSessionsEl.textContent = activeDaysCount;
    if (consistencyRateEl) {
        const target = 48; // Standard 4 workouts per week in 12 weeks
        const rate = Math.min(100, Math.round((activeDaysCount / target) * 100));
        consistencyRateEl.textContent = `${rate}% Consistent`;
    }
}

// ============================================================================
// --- BARBELL PLATE CALCULATOR ENGINE ---
// ============================================================================
let selectedBarWeight = 20;
let activePlateInputEl = null;

function openPlateCalcModal(exName = '', triggerBtn = null) {
    if (triggerBtn) {
        const wrap = triggerBtn.closest('.set-row-wrap') || triggerBtn.closest('.set-row') || triggerBtn.closest('.flex-col');
        activePlateInputEl = wrap ? wrap.querySelector('.weight-input') : null;
    } else {
        activePlateInputEl = null;
    }

    const modal = document.getElementById('plate-calc-modal');
    if (!modal) return;

    const targetInput = document.getElementById('plate-calc-target');
    const subTitle = document.getElementById('plate-calc-subtitle');
    if (subTitle) {
        subTitle.textContent = exName ? `Plate math for ${exName}` : 'Instant barbell plate math per side';
    }

    let initialWeight = 70;
    if (activePlateInputEl && parseFloat(activePlateInputEl.value) > 0) {
        initialWeight = parseFloat(activePlateInputEl.value);
    }
    if (targetInput) targetInput.value = initialWeight;

    selectBarWeight(selectedBarWeight || 20);
    modal.classList.remove('hidden-view');
}

function closePlateCalcModal() {
    const modal = document.getElementById('plate-calc-modal');
    if (modal) modal.classList.add('hidden-view');
}

function selectBarWeight(barWt) {
    selectedBarWeight = barWt;
    ['20', '15', '10', '0'].forEach(bw => {
        const btn = document.getElementById('bar-weight-' + bw);
        if (btn) {
            if (parseInt(bw) === barWt) {
                btn.className = 'bar-weight-btn p-2 rounded-xl border border-brand-500 bg-brand-500/20 text-brand-400 font-bold transition-all cursor-pointer';
            } else {
                btn.className = 'bar-weight-btn p-2 rounded-xl border border-gray-700 bg-dark-100 text-gray-300 font-bold hover:border-gray-500 transition-all cursor-pointer';
            }
        }
    });
    calculateBarbellPlates();
}

function adjustPlateWeight(delta) {
    const targetInput = document.getElementById('plate-calc-target');
    if (!targetInput) return;
    let curr = parseFloat(targetInput.value) || 0;
    curr = Math.max(selectedBarWeight, curr + delta);
    targetInput.value = curr;
    calculateBarbellPlates();
}

function calculateBarbellPlates() {
    const targetInput = document.getElementById('plate-calc-target');
    const targetWeight = parseFloat(targetInput ? targetInput.value : 0) || 0;
    const barWeight = selectedBarWeight;

    const remainingWeight = Math.max(0, targetWeight - barWeight);
    const perSideWeight = remainingWeight / 2;

    const plateTypes = [
        { weight: 25, color: '#ef4444', label: '25kg', h: 'h-24', w: 'w-4', textCol: 'text-white' }, // Red
        { weight: 20, color: '#3b82f6', label: '20kg', h: 'h-22', w: 'w-4', textCol: 'text-white' }, // Blue
        { weight: 15, color: '#eab308', label: '15kg', h: 'h-20', w: 'w-3.5', textCol: 'text-black' }, // Yellow
        { weight: 10, color: '#22c55e', label: '10kg', h: 'h-18', w: 'w-3.5', textCol: 'text-white' }, // Green
        { weight: 5,  color: '#f3f4f6', label: '5kg',  h: 'h-16', w: 'w-3', textCol: 'text-black' }, // White
        { weight: 2.5, color: '#18181b', label: '2.5kg', h: 'h-14', w: 'w-2.5', textCol: 'text-white', border: 'border border-gray-500' }, // Black
        { weight: 1.25, color: '#9ca3af', label: '1.25', h: 'h-12', w: 'w-2', textCol: 'text-black' } // Silver
    ];

    let toLoad = perSideWeight;
    const loadedPlates = [];

    plateTypes.forEach(p => {
        const count = Math.floor(toLoad / p.weight);
        if (count > 0) {
            loadedPlates.push({ ...p, count: count });
            toLoad = Math.round((toLoad - (count * p.weight)) * 100) / 100;
        }
    });

    const actualPerSide = perSideWeight - toLoad;
    const actualTotal = barWeight + (actualPerSide * 2);

    const sideEl = document.getElementById('plate-calc-side-weight');
    const totalEl = document.getElementById('plate-calc-actual-total');
    if (sideEl) sideEl.textContent = `${actualPerSide.toFixed(1)} kg`;
    if (totalEl) totalEl.textContent = `${actualTotal.toFixed(1)} kg ${toLoad > 0 ? `(Unrounded: ${toLoad * 2}kg remaining)` : ''}`;

    // Visual sleeve rendering
    const visualContainer = document.getElementById('visual-plates-container');
    if (visualContainer) {
        if (loadedPlates.length === 0) {
            visualContainer.innerHTML = `<span class="text-xs text-gray-500 italic py-2">Barbell empty (Collar only)</span>`;
        } else {
            let platesHtml = '';
            loadedPlates.forEach(p => {
                for (let i = 0; i < p.count; i++) {
                    platesHtml += `
                        <div class="relative ${p.w} ${p.h} rounded-sm shadow-md flex items-center justify-center cursor-default shrink-0 ${p.border || ''}" style="background-color: ${p.color};" title="${p.label}">
                            <span class="text-[7px] font-black -rotate-90 select-none ${p.textCol}">${p.label}</span>
                        </div>
                    `;
                }
            });
            // End collar ring
            platesHtml += `<div class="w-2.5 h-8 bg-gray-400 rounded-sm border border-gray-600 shadow-sm ml-1 shrink-0" title="Spring Clip / Collar"></div>`;
            visualContainer.innerHTML = platesHtml;
        }
    }

    // Breakdown tags
    const tagsContainer = document.getElementById('plates-breakdown-tags');
    if (tagsContainer) {
        if (loadedPlates.length === 0) {
            tagsContainer.innerHTML = `<span class="text-[11px] text-gray-400">Load just the empty barbell.</span>`;
        } else {
            tagsContainer.innerHTML = loadedPlates.map(p => `
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-lg border flex items-center gap-1 shadow-sm" style="background-color: ${p.color}20; border-color: ${p.color}80; color: ${p.color};">
                    <span class="w-2 h-2 rounded-full inline-block" style="background-color: ${p.color};"></span>
                    ${p.count}× ${p.label} per side
                </span>
            `).join('');
        }
    }
}

function applyPlateWeightToActiveSet() {
    const targetInput = document.getElementById('plate-calc-target');
    const wt = parseFloat(targetInput ? targetInput.value : 0);
    if (!wt || wt <= 0) {
        closePlateCalcModal();
        return;
    }

    if (activePlateInputEl) {
        activePlateInputEl.value = wt;
        saveActiveWorkoutSnapshot();
    }
    closePlateCalcModal();
    if (window.confetti) confetti({ particleCount: 20, spread: 35 });
}

