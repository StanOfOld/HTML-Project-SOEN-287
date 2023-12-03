document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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
          window.location.href = '/home';
          console.log("success");
        } else {
          console.error('Login failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  });
});
