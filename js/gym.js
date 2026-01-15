/**
 * FitMind.AI - Gym Page JavaScript
 * Handles gym-specific functionality and program selection
 */

// ===== Gym Page State =====
const GymState = {
    selectedProgram: null,
    userPreferences: {}
};

// ===== DOM Elements Cache =====
const GymDOM = {
    programCards: document.querySelectorAll('[data-program]'),
    startGymBtn: document.getElementById('start-gym-btn'),
    hamburger: document.getElementById('hamburger'),
    navMenu: document.getElementById('nav-menu'),
    navLinks: document.querySelectorAll('.nav-menu a'),
    signinBtn: document.getElementById('signin-btn')
};

// ===== Initialize Gym Page =====
function initGymPage() {
    initMobileNavigation();
    initProgramSelection();
    setupEventListeners();
}

// ===== Mobile Navigation Toggle =====
function initMobileNavigation() {
    if (!GymDOM.hamburger) return;

    GymDOM.hamburger.addEventListener('click', () => {
        toggleMobileMenu();
    });

    GymDOM.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

function toggleMobileMenu() {
    const isOpen = GymDOM.hamburger.classList.contains('active');
    GymDOM.hamburger.classList.toggle('active');
    GymDOM.navMenu.classList.toggle('active');
    GymDOM.hamburger.setAttribute('aria-expanded', !isOpen);
}

function closeMobileMenu() {
    GymDOM.hamburger.classList.remove('active');
    GymDOM.navMenu.classList.remove('active');
    GymDOM.hamburger.setAttribute('aria-expanded', 'false');
}

// ===== Program Selection Handler =====
function initProgramSelection() {
    const buttons = document.querySelectorAll('[data-program]');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            selectProgram(button);
        });
    });
}

function selectProgram(button) {
    const programType = button.getAttribute('data-program');
    
    // Update state
    GymState.selectedProgram = programType;
    saveUserPreferences({ selectedGymProgram: programType });

    // Visual feedback
    showProgramConfirmation(programType);

    // Track event
    trackEvent('gym_program_selected', {
        program: programType,
        timestamp: new Date().toISOString()
    });

    // Navigate to next step (could be form, checkout, or dashboard)
    setTimeout(() => {
        // Placeholder: Replace with actual navigation logic
        console.log('Navigating to next step for program:', programType);
        // window.location.href = '/dashboard?program=' + programType;
    }, 1500);
}

// ===== UI Feedback =====
function showProgramConfirmation(programType) {
    // Get the program name
    const programNames = {
        strength: 'Strength Building',
        hypertrophy: 'Muscle Hypertrophy',
        conditioning: 'Endurance & Conditioning',
        athletic: 'Athletic Performance'
    };

    const programName = programNames[programType] || programType;

    // Create and show confirmation message
    const confirmationDiv = document.createElement('div');
    confirmationDiv.className = 'confirmation-message';
    confirmationDiv.innerHTML = `
        <h4>✓ Program Selected</h4>
        <p>Great choice! You've selected <strong>${programName}</strong> training.</p>
        <p>Get ready to transform your physique with personalized coaching.</p>
    `;
    
    // Add to body temporarily
    document.body.appendChild(confirmationDiv);
    
    // Animate in
    setTimeout(() => confirmationDiv.classList.add('show'), 10);
    
    // Remove after delay
    setTimeout(() => {
        confirmationDiv.classList.remove('show');
        setTimeout(() => confirmationDiv.remove(), 300);
    }, 3000);
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    if (GymDOM.startGymBtn) {
        GymDOM.startGymBtn.addEventListener('click', () => {
            // Scroll to programs section
            const programsSection = document.querySelector('.gym-programs');
            if (programsSection) {
                programsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Sign in button
    if (GymDOM.signinBtn) {
        GymDOM.signinBtn.addEventListener('click', () => {
            handleSignIn();
        });
    }
}

// ===== Utility Functions =====
function handleSignIn() {
    // Placeholder for sign-in logic
    console.log('Sign in clicked');
    // window.location.href = '/signin';
}

function saveUserPreferences(preferences) {
    const stored = localStorage.getItem('fitmind_preferences');
    const current = stored ? JSON.parse(stored) : {};
    const updated = { ...current, ...preferences };
    localStorage.setItem('fitmind_preferences', JSON.stringify(updated));
}

function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    // Integrate with your analytics service here (GA, Mixpanel, etc.)
}

// ===== Page Load =====
document.addEventListener('DOMContentLoaded', initGymPage);
