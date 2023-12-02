document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform the login using AJAX or fetch
    fetch('/logInn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("tries");
        if (data.success) {
          // Redirect to the home page after a successful login
          window.location.href = '/home';
          console.log("success");
        } else {
          // Handle unsuccessful login, show an error message, etc.
          console.error('Login failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  });
});
