document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect form data and convert to JSON object
    var formData = {};
    new FormData(event.target).forEach(function (value, key) {
      formData[key] = value;
    });

    // Send a POST request with the JSON data
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "your_server_endpoint", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Handle the response from the server if needed
        console.log(xhr.responseText);
      }
    };

    xhr.send(JSON.stringify(formData));
  });
