/**
 * FitMind.AI - Main JavaScript Application
 * Features: Navigation, Form validation, Analytics, Smooth scrolling
 */

// ===== State Management =====
const AppState = {
    mobileMenuOpen: false,
    userPreferences: {},
    formData: {
        name: '',
        email: '',
        message: ''
    }
};

// ===== DOM Elements Cache =====
const DOM = {
    hamburger: document.getElementById('hamburger'),
    navMenu: document.getElementById('nav-menu'),
    navLinks: document.querySelectorAll('.nav-menu a'),
    startBtn: document.getElementById('start-btn'),
    learnMoreBtn: document.getElementById('learn-more-btn'),
    signinBtn: document.getElementById('signin-btn'),
    contactForm: document.getElementById('contact-form'),
    successMessage: document.getElementById('success-message'),
    submitBtn: document.getElementById('submit-btn')
};

// ===== Mobile Navigation Toggle =====
function initMobileNavigation() {
    if (!DOM.hamburger) return;

    DOM.hamburger.addEventListener('click', () => {
        toggleMobileMenu();
    });

    // Close mobile menu when a link is clicked
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

function toggleMobileMenu() {
    AppState.mobileMenuOpen = !AppState.mobileMenuOpen;
    DOM.hamburger.classList.toggle('active', AppState.mobileMenuOpen);
    DOM.navMenu.classList.toggle('active', AppState.mobileMenuOpen);
    
    // Update ARIA attributes for accessibility
    DOM.hamburger.setAttribute('aria-expanded', AppState.mobileMenuOpen);
}

function closeMobileMenu() {
    AppState.mobileMenuOpen = false;
    DOM.hamburger.classList.remove('active');
    DOM.navMenu.classList.remove('active');
    DOM.hamburger.setAttribute('aria-expanded', 'false');
}

// ===== Smooth Scroll Behavior =====
function setupSmoothScroll() {
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== Form Validation =====
const FormValidator = {
    rules: {
        name: {
            validate: (value) => value.trim().length >= 2,
            message: 'Name must be at least 2 characters'
        },
        email: {
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address'
        },
        message: {
            validate: (value) => value.trim().length >= 10,
            message: 'Message must be at least 10 characters'
        }
    },

    validateField(fieldName, value) {
        const rule = this.rules[fieldName];
        if (!rule) return { isValid: true };
        
        const isValid = rule.validate(value);
        return {
            isValid,
            message: isValid ? '' : rule.message
        };
    },

    validateForm(formData) {
        const errors = {};
        let isValid = true;

        Object.keys(this.rules).forEach(fieldName => {
            const validation = this.validateField(fieldName, formData[fieldName]);
            if (!validation.isValid) {
                errors[fieldName] = validation.message;
                isValid = false;
            }
        });

        return { isValid, errors };
    }
};

// ===== Form Handling =====
function initContactForm() {
    if (!DOM.contactForm) return;

    // Real-time field validation
    DOM.contactForm.addEventListener('input', (e) => {
        const { name, value } = e.target;
        if (name in AppState.formData) {
            AppState.formData[name] = value;
            validateFieldOnChange(name, value);
        }
    });

    // Form submission
    DOM.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit();
    });
}

function validateFieldOnChange(fieldName, value) {
    const validation = FormValidator.validateField(fieldName, value);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    if (!errorElement) return;

    if (!validation.isValid && value.trim()) {
        errorElement.textContent = validation.message;
        errorElement.style.display = 'block';
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function handleFormSubmit() {
    const validation = FormValidator.validateForm(AppState.formData);
    
    if (!validation.isValid) {
        // Display field errors
        Object.keys(validation.errors).forEach(fieldName => {
            const errorElement = document.getElementById(`${fieldName}-error`);
            if (errorElement) {
                errorElement.textContent = validation.errors[fieldName];
                errorElement.style.display = 'block';
            }
        });
        return;
    }

    // Submit form (simulate)
    submitForm();
}

function submitForm() {
    // Disable button during submission
    DOM.submitBtn.disabled = true;
    DOM.submitBtn.textContent = 'Sending...';

    // Simulate API call
    setTimeout(() => {
        // Show success message
        DOM.successMessage.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        DOM.successMessage.classList.add('show');

        // Reset form
        DOM.contactForm.reset();
        AppState.formData = { name: '', email: '', message: '' };

        // Clear errors
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });

        // Reset button
        setTimeout(() => {
            DOM.submitBtn.disabled = false;
            DOM.submitBtn.textContent = 'Send Message';
            DOM.successMessage.classList.remove('show');
        }, 3000);
    }, 1000);
}

// ===== Intersection Observer for Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        observer.observe(card);
    });
}

// ===== Button Event Listeners =====
function initButtonEvents() {
    if (DOM.startBtn) {
        DOM.startBtn.addEventListener('click', () => {
            trackEvent('cta_click', { button: 'start_journey' });
            navigateToSection('features');
        });
    }

    if (DOM.learnMoreBtn) {
        DOM.learnMoreBtn.addEventListener('click', () => {
            trackEvent('cta_click', { button: 'learn_more' });
            navigateToSection('features');
        });
    }

    if (DOM.signinBtn) {
        DOM.signinBtn.addEventListener('click', () => {
            trackEvent('cta_click', { button: 'signin' });
            // In a real app, this would open a modal or redirect to login
            alert('Sign in functionality would be implemented here');
        });
    }
}

function navigateToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Analytics & Tracking =====
function trackEvent(eventName, eventData = {}) {
    const event = {
        name: eventName,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ...eventData
    };

    // Log to console in development
    console.log('Event tracked:', event);

    // Store in localStorage for session tracking
    saveEventToStorage(event);

    // In a real app, this would send to an analytics service
}

function saveEventToStorage(event) {
    const events = JSON.parse(localStorage.getItem('fitmind_events') || '[]');
    events.push(event);
    
    // Keep only last 50 events
    if (events.length > 50) {
        events.shift();
    }
    
    localStorage.setItem('fitmind_events', JSON.stringify(events));
}

// ===== Local Storage Management =====
function saveUserPreferences(preferences) {
    AppState.userPreferences = { ...AppState.userPreferences, ...preferences };
    localStorage.setItem('fitmind_preferences', JSON.stringify(AppState.userPreferences));
    trackEvent('preferences_saved', { preferences });
}

function loadUserPreferences() {
    const saved = localStorage.getItem('fitmind_preferences');
    if (saved) {
        AppState.userPreferences = JSON.parse(saved);
    }
}

// ===== Performance Monitoring =====
function logPerformanceMetrics() {
    if (!window.performance || !window.performance.timing) return;

    const timing = window.performance.timing;
    const metrics = {
        pageLoadTime: timing.loadEventEnd - timing.navigationStart,
        domInteractiveTime: timing.domInteractive - timing.navigationStart,
        resourceLoadTime: timing.responseEnd - timing.fetchStart
    };

    console.log('Performance Metrics:', metrics);
}

// ===== Lazy Loading Images (Future Enhancement) =====
function initLazyLoading() {
    if (!('IntersectionObserver' in window)) {
        console.log('IntersectionObserver not supported');
        return;
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Dark Mode Toggle (Future Enhancement) =====
function initDarkMode() {
    const isDarkMode = localStorage.getItem('fitmind_darkmode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// ===== Keyboard Navigation =====
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && AppState.mobileMenuOpen) {
            closeMobileMenu();
        }

        // Navigate with keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            if (e.key === '/') {
                e.preventDefault();
                DOM.navMenu.focus();
            }
        }
    });
}

// ===== Initialization =====
function initApp() {
    console.log('🧠 FitMind.AI - Initializing Application');

    loadUserPreferences();
    initMobileNavigation();
    setupSmoothScroll();
    initContactForm();
    initScrollAnimations();
    initButtonEvents();
    initLazyLoading();
    initKeyboardNavigation();

    trackEvent('page_load', { 
        timestamp: new Date().toISOString(),
        pageTitle: document.title 
    });

    // Log performance metrics when page fully loads
    window.addEventListener('load', () => {
        logPerformanceMetrics();
    });

    console.log('✓ Application initialized successfully');
}

// ===== Run on DOM Ready =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ===== Utility Functions =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AppState,
        FormValidator,
        trackEvent,
        saveUserPreferences,
        loadUserPreferences
    };
}
