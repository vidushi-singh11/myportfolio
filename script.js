document.getElementById('year').textContent = new Date().getFullYear();

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } })
}, { threshold: 0.2 });
reveals.forEach(r => obs.observe(r));

// Initialize EmailJS with your public key
emailjs.init('SkvP6CuoM82_3b5Nn'); // Replace with your actual public key from EmailJS

// Get the form element
const contactForm = document.querySelector('.contact form');

// Add submit event listener
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Prepare template parameters
    const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
        to_name: 'Vidushi Singh' // Your name
    };

    // Get the submit button
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send email using EmailJS
    emailjs.send('service_58uy7wk', 'template_uo6y09i', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            submitBtn.textContent = 'Sent!';
            submitBtn.style.background = 'linear-gradient(90deg, #10b981, #059669)';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(90deg, #a855f7, #3b82f6)';
                submitBtn.disabled = false;
            }, 3000);
        })
        .catch(function (error) {
            console.error('FAILED...', error);

            // Show error message
            submitBtn.textContent = 'Failed to send';
            submitBtn.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(90deg, #a855f7, #3b82f6)';
                submitBtn.disabled = false;
            }, 3000);
        });
});