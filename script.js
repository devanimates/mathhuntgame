
    // JavaScript for rotating the quotes
    let quotes = [
      { text: "The only way to do great work is to love what you do. - Steve Jobs", author: "Steve Jobs" },
      { text: "Believe you can and you're halfway there. - Theodore Roosevelt", author: "Theodore Roosevelt" },
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill", author: "Winston Churchill" }
    ];

    let currentQuoteIndex = 0;

    function rotateQuote() {
      let quoteElement = document.getElementById("quote");
      quoteElement.textContent = `"${quotes[currentQuoteIndex].text}" - ${quotes[currentQuoteIndex].author}`;
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    setInterval(rotateQuote, 10000);

 
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      alert('Form Submitted');
      setTimeout(() => {
        this.reset(); // Clear all form entries
      }, 0);
    });
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    function showRegisterForm() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }

    function showLoginForm() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        alert('Login form submitted');
        setTimeout(() => {
            loginForm.reset(); // Clear all form entries
        }, 0);
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        alert('Registration form submitted');
        setTimeout(() => {
            registerForm.reset(); // Clear all form entries
        }, 0);
    });

    function makeAlert() {
        alert('Form submitted');
    }
    function redirectToMath() {
      window.location.href = 'math.html';
  }