const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        feedback.textContent = 'Por favor, completa todos los campos correctamente.';
        feedback.style.color = 'red';
        return;
    }

    feedback.textContent = 'Mensaje enviado correctamente. Nos pondremos en contacto contigo.';
    feedback.style.color = 'green';

    form.reset();
});