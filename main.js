// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        this.querySelector('.menu-icon').textContent = '☰';
    } else {
        mobileMenu.classList.add('active');
        this.querySelector('.menu-icon').textContent = '✕';
    }
});

// Steps toggle functionality
function toggleStep(stepIndex) {
    let steps = document.querySelectorAll('.step');
    let plusSigns = document.querySelectorAll('.plus-sign');

    steps.forEach((step, index) => {
        let content = step.querySelector('.step-content');
        let blackLine = step.querySelector('.black-line');

        if (index + 1 === stepIndex) {
            step.classList.toggle('active');
            plusSigns[index].textContent = step.classList.contains('active') ? "-" : "+";
            content.style.display = step.classList.contains('active') ? "block" : "none";
            blackLine.style.display = step.classList.contains('active') ? "block" : "none";
        } else {
            step.classList.remove('active');
            plusSigns[index].textContent = "+";
            step.querySelector('.step-content').style.display = "none";
            step.querySelector('.black-line').style.display = "none";
        }
    });
}


function showNotification(message) {
const notification = document.getElementById('notificationMessage');
notification.textContent = message;
notification.style.display = 'block';

// Hide notification after 3 seconds
setTimeout(function() {
notification.style.display = 'none';
}, 3000);
}

// Add event listeners to all login and signup buttons
const loginButtons = document.querySelectorAll('.login');
const signupButtons = document.querySelectorAll('.signup');

loginButtons.forEach(button => {
button.addEventListener('click', function() {
showNotification('This feature is not available for students yet.');
});
});

signupButtons.forEach(button => {
button.addEventListener('click', function() {
showNotification('This feature is not available for students yet.');
});
});