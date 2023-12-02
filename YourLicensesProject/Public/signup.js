document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signupform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get the values from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postalCode').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const isProvider = document.getElementById('provider').checked;
  
    // Validate password and confirmPassword
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Perform the signup using Fetch API
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, address, postalCode, password, isProvider, firstName, lastName }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect to the login page after a successful signup
          window.location.href = '/home';
        } else {
          // Handle unsuccessful signup, show an error message, etc.
          console.error('Signup failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error during signup:', error);
      });
  });
  
});