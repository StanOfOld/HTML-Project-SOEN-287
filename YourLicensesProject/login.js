function submitForm() {
  var form = document.getElementById("loginForm");
  var formData = new FormData(form);

  // Convert form data to a JSON object
  var jsonData = {};
  formData.forEach(function (value, key) {
    jsonData[key] = value;
  });

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "your_server_endpoint", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Handle the response from the server if needed
      console.log(xhr.responseText);
    }
  };

  // Convert JSON object to a string and send
  xhr.send(JSON.stringify(jsonData));
}
