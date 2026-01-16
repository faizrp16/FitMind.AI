/**
 * FitMind.AI - Calisthenics Page JavaScript
 * Handles personalization, workout plan generation, and form interactions
 */

// ===== Sample Workout Plans Database =====
const workoutPlansDatabase = {
    'beginner-muscle-gain-none-10-20': {
        day1: {
            title: 'Upper Body A',
            focus: 'Push & Upper Body Strength',
            exercises: [
                { name: 'Warm-up', details: '5 min light movement' },
                { name: 'Wall Push-ups', details: '3 sets x 12 reps' },
                { name: 'Incline Push-ups', details: '3 sets x 10 reps' },
                { name: 'Dips (chair)', details: '2 sets x 8 reps' }
            ]
        },
        day2: { type: 'rest' },
        day3: {
            title: 'Lower Body A',
            focus: 'Leg Strength & Power',
            exercises: [
                { name: 'Warm-up', details: '5 min light cardio' },
                { name: 'Bodyweight Squats', details: '3 sets x 15 reps' },
                { name: 'Lunges', details: '3 sets x 10 reps/leg' },
                { name: 'Glute Bridges', details: '2 sets x 12 reps' }
            ]
        },
        day4: { type: 'rest' },
        day5: {
            title: 'Full Body',
            focus: 'Total Body Activation',
            exercises: [
                { name: 'Warm-up', details: '5 min mobility work' },
                { name: 'Push-ups', details: '3 sets x 10 reps' },
                { name: 'Squats', details: '3 sets x 12 reps' },
                { name: 'Planks', details: '2 sets x 20 seconds' }
            ]
        },
        day6: { type: 'rest' },
        day7: { type: 'rest' }
    },
    'beginner-muscle-gain-none-20-30': {
        day1: {
            title: 'Upper Body A',
            focus: 'Chest, Shoulders, Triceps',
            exercises: [
                { name: 'Warm-up', details: '5 min dynamic stretching' },
                { name: 'Incline Push-ups', details: '3 sets x 12 reps' },
                { name: 'Wall Push-ups (variations)', details: '3 sets x 10 reps' },
                { name: 'Pike Push-ups', details: '3 sets x 8 reps' },
                { name: 'Dips (chair)', details: '2 sets x 10 reps' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day2: { type: 'rest' },
        day3: {
            title: 'Lower Body A',
            focus: 'Quads, Hamstrings, Glutes',
            exercises: [
                { name: 'Warm-up', details: '5 min light cardio' },
                { name: 'Bodyweight Squats', details: '3 sets x 15 reps' },
                { name: 'Lunges', details: '3 sets x 12 reps/leg' },
                { name: 'Reverse Lunges', details: '3 sets x 10 reps/leg' },
                { name: 'Glute Bridges', details: '2 sets x 15 reps' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day4: { type: 'rest' },
        day5: {
            title: 'Full Body B',
            focus: 'Total Body Strength',
            exercises: [
                { name: 'Warm-up', details: '5 min mobility work' },
                { name: 'Push-ups', details: '3 sets x 12 reps' },
                { name: 'Step-ups', details: '3 sets x 10 reps/leg' },
                { name: 'Planks', details: '3 sets x 30 seconds' },
                { name: 'Superman Holds', details: '2 sets x 15 seconds' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day6: { type: 'rest' },
        day7: { type: 'rest' }
    },
    'intermediate-muscle-gain-pull-up-bar-20-30': {
        day1: {
            title: 'Push Day',
            focus: 'Chest, Shoulders, Triceps',
            exercises: [
                { name: 'Warm-up', details: '5 min dynamic stretching' },
                { name: 'Regular Push-ups', details: '4 sets x 15 reps' },
                { name: 'Diamond Push-ups', details: '3 sets x 10 reps' },
                { name: 'Pike Push-ups', details: '3 sets x 12 reps' },
                { name: 'Tricep Dips (bar)', details: '3 sets x 8 reps' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day2: { type: 'rest' },
        day3: {
            title: 'Pull Day',
            focus: 'Back, Biceps, Lats',
            exercises: [
                { name: 'Warm-up', details: '5 min light movement' },
                { name: 'Dead Hangs', details: '3 sets x 30 seconds' },
                { name: 'Scapular Pull-ups', details: '3 sets x 8 reps' },
                { name: 'Assisted Pull-ups', details: '4 sets x 5 reps' },
                { name: 'Inverted Rows', details: '3 sets x 8 reps' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day4: { type: 'rest' },
        day5: {
            title: 'Leg Day',
            focus: 'Lower Body Strength',
            exercises: [
                { name: 'Warm-up', details: '5 min leg mobility' },
                { name: 'Pistol Squat Progression', details: '3 sets x 6 reps/leg' },
                { name: 'Bulgarian Split Squats', details: '3 sets x 10 reps/leg' },
                { name: 'Jump Squats', details: '3 sets x 12 reps' },
                { name: 'Single-leg Calf Raises', details: '2 sets x 10 reps/leg' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day6: { type: 'rest' },
        day7: { type: 'rest' }
    },
    'advanced-muscle-gain-multiple-30-plus': {
        day1: {
            title: 'Chest & Triceps',
            focus: 'Upper Push Strength',
            exercises: [
                { name: 'Warm-up', details: '5 min dynamic stretching' },
                { name: 'Push-up Variations', details: '4 sets x 12-15 reps' },
                { name: 'Decline Push-ups', details: '4 sets x 10 reps' },
                { name: 'Archer Push-ups', details: '3 sets x 8 reps/side' },
                { name: 'Handstand Push-ups (wall)', details: '3 sets x 5 reps' },
                { name: 'Dips (weighted)', details: '3 sets x 8 reps' },
                { name: 'Core work', details: '10 min' },
                { name: 'Cool-down', details: '5 min stretching' }
            ]
        },
        day2: {
            title: 'Back & Biceps',
            focus: 'Upper Pull Strength',
            exercises: [
                { name: 'Warm-up', details: '5 min movement prep' },
                { name: 'Pull-ups', details: '4 sets x 8 reps' },
                { name: 'Weighted Pull-ups', details: '3 sets x 5 reps' },
                { name: 'Archer Pull-ups', details: '3 sets x 6 reps/side' },
                { name: 'Muscle-up Progression', details: '3 sets x 3 reps' },
                { name: 'Inverted Rows (weighted)', details: '3 sets x 8 reps' },
                { name: 'Core work', details: '10 min' },
                { name: 'Cool-down', details: '5 min stretching' }
            ]
        },
        day3: {
            title: 'Legs',
            focus: 'Lower Body Strength',
            exercises: [
                { name: 'Warm-up', details: '5 min leg mobility' },
                { name: 'Pistol Squats', details: '4 sets x 8 reps/leg' },
                { name: 'Jump Squats', details: '3 sets x 15 reps' },
                { name: 'Single-leg Deadlifts', details: '3 sets x 10 reps/leg' },
                { name: 'Handstand Walk Practice', details: '3 sets x 3 reps' },
                { name: 'Leg Raises', details: '3 sets x 12 reps' },
                { name: 'Mobility work', details: '10 min' },
                { name: 'Cool-down', details: '5 min stretching' }
            ]
        },
        day4: {
            title: 'Full Body Strength',
            focus: 'Total Body Power',
            exercises: [
                { name: 'Warm-up', details: '5 min dynamic prep' },
                { name: 'Weighted Push-ups', details: '4 sets x 8 reps' },
                { name: 'Weighted Pull-ups', details: '4 sets x 6 reps' },
                { name: 'Pistol Squats', details: '3 sets x 6 reps/leg' },
                { name: 'Planche Progression', details: '3 sets x 10 seconds' },
                { name: 'Front Lever Progression', details: '3 sets x 8 seconds' },
                { name: 'Cool-down', details: '5 min stretching' }
            ]
        },
        day5: { type: 'rest' },
        day6: { type: 'rest' },
        day7: { type: 'rest' }
    },
    'beginner-general-fitness-none-20-30': {
        day1: {
            title: 'Full Body A',
            focus: 'Overall Fitness',
            exercises: [
                { name: 'Warm-up', details: '5 min light cardio' },
                { name: 'Bodyweight Squats', details: '3 sets x 12 reps' },
                { name: 'Push-ups (modified)', details: '3 sets x 10 reps' },
                { name: 'Glute Bridges', details: '3 sets x 12 reps' },
                { name: 'Plank Hold', details: '2 sets x 20 seconds' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day2: { type: 'rest' },
        day3: {
            title: 'Full Body B',
            focus: 'Balanced Training',
            exercises: [
                { name: 'Warm-up', details: '5 min mobility' },
                { name: 'Lunges', details: '3 sets x 10 reps/leg' },
                { name: 'Incline Push-ups', details: '3 sets x 12 reps' },
                { name: 'Step-ups', details: '3 sets x 10 reps/leg' },
                { name: 'Superman Holds', details: '2 sets x 15 seconds' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day4: { type: 'rest' },
        day5: {
            title: 'Full Body C',
            focus: 'Active Recovery',
            exercises: [
                { name: 'Warm-up', details: '5 min light movement' },
                { name: 'Reverse Lunges', details: '3 sets x 10 reps/leg' },
                { name: 'Wall Push-ups', details: '3 sets x 12 reps' },
                { name: 'Calf Raises', details: '3 sets x 15 reps' },
                { name: 'Bird Dogs', details: '2 sets x 10 reps/side' },
                { name: 'Cool-down', details: '3 min stretching' }
            ]
        },
        day6: { type: 'rest' },
        day7: { type: 'rest' }
    }
};

// ===== DOM Element Cache =====
const DOM = {
    form: document.getElementById('preferencesForm'),
    fitnessGoal: document.getElementById('fitnessGoal'),
    skillLevel: document.getElementById('skillLevel'),
    equipment: document.getElementById('equipment'),
    duration: document.getElementById('duration'),
    generateBtn: document.getElementById('generateBtn'),
    regenerateBtn: document.getElementById('regenerateBtn'),
    workoutPlanSection: document.getElementById('workoutPlanSection'),
    planDetails: document.getElementById('planDetails'),
    workoutGrid: document.getElementById('workoutGrid'),
    disclaimerAgreement: document.getElementById('disclaimerAgreement')
};

// ===== Form Submission Handler =====
function initFormHandler() {
    if (!DOM.form) return;

    DOM.form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateWorkoutPlan();
    });

    // Regenerate button
    if (DOM.regenerateBtn) {
        DOM.regenerateBtn.addEventListener('click', () => {
            DOM.form.reset();
            DOM.workoutPlanSection.style.display = 'none';
            DOM.form.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ===== Workout Plan Generation =====
function generateWorkoutPlan() {
    // Get form values
    const goal = DOM.fitnessGoal.value;
    const level = DOM.skillLevel.value;
    const equip = DOM.equipment.value;
    const time = DOM.duration.value;

    // Validate form
    if (!goal || !level || !equip || !time) {
        alert('Please fill in all fields');
        return;
    }

    // Create database key
    const dbKey = `${level}-${goal}-${equip}-${time}`;
    
    // Get workout plan (fallback to beginner general fitness if not found)
    let workoutPlan = workoutPlansDatabase[dbKey] || 
                      workoutPlansDatabase['beginner-general-fitness-none-20-30'];

    // Display plan
    displayWorkoutPlan(goal, level, equip, time, workoutPlan);
    
    // Track event
    trackEvent('workout_plan_generated', {
        goal,
        level,
        equipment: equip,
        duration: time
    });

    // Scroll to plan
    DOM.workoutPlanSection.scrollIntoView({ behavior: 'smooth' });
}

// ===== Display Workout Plan =====
function displayWorkoutPlan(goal, level, equip, time, workoutPlan) {
    // Update plan details
    const goalLabel = {
        'muscle-gain': 'Muscle Gain',
        'fat-loss': 'Fat Loss',
        'general-fitness': 'General Fitness'
    }[goal];

    const levelLabel = {
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
    }[level];

    DOM.planDetails.textContent = `${goalLabel} • ${levelLabel} Level • ${time} minutes per session`;

    // Clear grid
    DOM.workoutGrid.innerHTML = '';

    // Days of week
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Populate workout grid
    for (let i = 0; i < 7; i++) {
        const dayKey = `day${i + 1}`;
        const dayData = workoutPlan[dayKey];
        const dayName = daysOfWeek[i];

        if (dayData.type === 'rest') {
            DOM.workoutGrid.innerHTML += createRestDayCard(dayName);
        } else {
            DOM.workoutGrid.innerHTML += createWorkoutCard(dayName, dayData);
        }
    }

    // Show section
    DOM.workoutPlanSection.style.display = 'block';
}

// ===== Create Workout Card =====
function createWorkoutCard(day, dayData) {
    const exercisesHtml = dayData.exercises
        .map(ex => `
            <li class="exercise-item">
                <span class="exercise-name">${ex.name}</span>
                <span class="exercise-details">${ex.details}</span>
            </li>
        `)
        .join('');

    return `
        <div class="workout-card">
            <div class="workout-day-header">
                <div class="day-badge">${dayData.exercises.length}</div>
                <h3 class="day-title">${day}</h3>
            </div>
            <div class="workout-focus">${dayData.focus}</div>
            <div class="workout-focus" style="background: linear-gradient(135deg, #F0FFFE, #E8F5F4); border-left-color: #D4FF5A;">
                <strong>📋 ${dayData.title}</strong>
            </div>
            <ul class="exercise-list">
                ${exercisesHtml}
            </ul>
        </div>
    `;
}

// ===== Create Rest Day Card =====
function createRestDayCard(day) {
    return `
        <div class="workout-card">
            <div class="workout-day-header">
                <div class="day-badge">✓</div>
                <h3 class="day-title">${day}</h3>
            </div>
            <div class="rest-day">
                <p class="rest-day-text">Rest Day</p>
                <p class="rest-tip">Recovery is when muscles grow. Stay active with light stretching or walking.</p>
            </div>
        </div>
    `;
}

// ===== Event Tracking (minimal implementation) =====
function trackEvent(eventName, eventData = {}) {
    const event = {
        name: eventName,
        timestamp: new Date().toISOString(),
        ...eventData
    };

    console.log('Event tracked:', event);

    // Store in localStorage
    const events = JSON.parse(localStorage.getItem('fitmind_calisthenics_events') || '[]');
    events.push(event);
    if (events.length > 50) events.shift();
    localStorage.setItem('fitmind_calisthenics_events', JSON.stringify(events));
}

// ===== Disclaimer Handling =====
function initDisclaimerHandler() {
    if (!DOM.disclaimerAgreement) return;

    DOM.disclaimerAgreement.addEventListener('change', () => {
        if (DOM.disclaimerAgreement.checked) {
            console.log('User accepted disclaimer');
            trackEvent('disclaimer_accepted');
        }
    });
}

// ===== Page Load Initialization =====
function initPage() {
    console.log('💪 Calisthenics Page - Initializing');

    initFormHandler();
    initDisclaimerHandler();

    trackEvent('page_load', {
        page: 'calisthenics',
        timestamp: new Date().toISOString()
    });

    console.log('✓ Calisthenics page loaded successfully');
}

// ===== Run on DOM Ready =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
