// Sports page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get all Start Program buttons
    const startButtons = document.querySelectorAll('button[data-program]');

    startButtons.forEach(button => {
        button.addEventListener('click', function() {
            const program = this.getAttribute('data-program');
            startProgram(program);
        });
    });

    // Also handle the main CTA button
    const startSportsBtn = document.getElementById('start-sports-btn');
    if (startSportsBtn) {
        startSportsBtn.addEventListener('click', function() {
            startProgram('general');
        });
    }

    // Handle navigation links
    const navLinks = document.querySelectorAll('a[href*="index.html#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent navigation
            const href = this.getAttribute('href');
            let message = '';
            if (href.includes('#features')) {
                message = "Tell our bot 'Show me the features'";
            } else if (href.includes('#pricing')) {
                message = "Tell our bot 'Show me the pricing'";
            } else if (href.includes('#about')) {
                message = "Tell our bot 'Tell me about FitMind.AI'";
            } else if (href.includes('#home')) {
                message = "Tell our bot 'Take me home'";
            } else if (href.includes('#contact')) {
                message = "Tell our bot 'How can I contact you'";
            } else {
                message = "Tell our bot 'Help me navigate'";
            }
            alert(message);
        });
    });
});

function startProgram(programType) {
    const messages = {
        soccer: "Tell our bot 'Start my soccer training program'",
        basketball: "Tell our bot 'Start my basketball training program'",
        running: "Tell our bot 'Start my running training program'",
        multisport: "Tell our bot 'Start my multi-sport training program'",
        general: "Tell our bot 'Start my sports journey'"
    };

    const message = messages[programType] || messages.general;
    alert(message);
}

