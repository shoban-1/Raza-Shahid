// Interactive Hover Effects
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#6a11cb';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
    });
});
// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Gather form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill out all required fields!');
        return;
    }

    // Placeholder for form submission (e.g., AJAX)
    alert('Thank you for reaching out! Your message has been sent.');
    this.reset(); // Reset form fields
});

