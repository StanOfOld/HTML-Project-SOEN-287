document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signupform').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postalCode').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const isProvider = document.getElementById('provider').checked;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
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
          window.location.href = '/home';
        } else {
          console.error('Signup failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error during signup:', error);
      });
  });
  
});