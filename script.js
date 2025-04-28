// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Self-correcting quiz functionality
    const quizSubmit = document.getElementById('quiz-submit');
    const quizResult = document.getElementById('quiz-result');

    if (quizSubmit) {
        quizSubmit.addEventListener('click', function() {
            const selectedOption = document.querySelector('input[name="coffee-quiz"]:checked');
            
            if (!selectedOption) {
                quizResult.textContent = 'Please select an answer.';
                quizResult.style.backgroundColor = '#ffebee';
                quizResult.style.color = '#c62828';
                return;
            }
            
            const answer = selectedOption.value;
            
            if (answer === 'brazil') {
                quizResult.textContent = 'Correct! Brazil is the largest producer of coffee in the world.';
                quizResult.style.backgroundColor = '#e8f5e9';
                quizResult.style.color = '#2e7d32';
            } else {
                quizResult.textContent = 'Incorrect. Brazil is the largest producer of coffee in the world.';
                quizResult.style.backgroundColor = '#ffebee';
                quizResult.style.color = '#c62828';
            }
        });
    }

    // Form validation functionality
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // Add real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Get error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');
    
    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('input-error');
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('input-error');
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('input-error');
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address (must contain @ and .)';
            emailInput.classList.add('input-error');
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('input-error');
        }
    });
    
     
    phoneInput.addEventListener('input', function() {
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Phone number is required';
            phoneInput.classList.add('input-error');
        } else if (!validatePhone(phoneInput.value)) {
            phoneError.textContent = 'Please enter a valid 8-digit phone number';
            phoneInput.classList.add('input-error');
        } else {
            phoneError.textContent = '';
            phoneInput.classList.remove('input-error');
        }
    });
    
    messageInput.addEventListener('input', function() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageInput.classList.add('input-error');
        } else {
            messageError.textContent = '';
            messageInput.classList.remove('input-error');
        }
    });
    
    // Form submission validation
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formSuccess = document.getElementById('form-success');
        formSuccess.textContent = '';
        
        // Flag to track if form is valid
        let isValid = true;
        
        // Validate name (required)
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('input-error');
            isValid = false;
        }
        
        // Validate email (required and format)
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('input-error');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address (must contain @ and .)';
            emailInput.classList.add('input-error');
            isValid = false;
        }
        
        // Validate phone (required)
        if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        phoneInput.classList.add('input-error');
        isValid = false;
        } else if (!validatePhone(phoneInput.value)) {
        phoneError.textContent = 'Please enter a valid 8-digit phone number';
        phoneInput.classList.add('input-error');
        isValid = false;
        }
        
        // Validate message (required)
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageInput.classList.add('input-error');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            formSuccess.textContent = 'Form submitted successfully! We will contact you soon.';
            contactForm.reset();
            // Clear all error states
            nameInput.classList.remove('input-error');
            emailInput.classList.remove('input-error');
            phoneInput.classList.remove('input-error');
            messageInput.classList.remove('input-error');
        }
    });
}

// Email validation helper function
function validateEmail(email) {
    // Simple validation checking for @ and . characters
    return email.includes('@') && email.includes('.');
}

// Phone validation helper function - only allows 8 digits
function validatePhone(phone) {
    // Extract only digits using a for loop
    let digitsOnly = "";
    for (let i = 0; i < phone.length; i++) {
        const char = phone.charAt(i);
        if (char >= '0' && char <= '9') {
            digitsOnly += char;
        }
    }
    
    // Check if result is exactly 8 digits
    return digitsOnly.length === 8;
}
    
   
});