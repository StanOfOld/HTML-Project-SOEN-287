document.addEventListener('DOMContentLoaded', function () {
    // Other existing code...

    // Fetch software data from the server
    fetch('/getSoftwareListOwner') // Adjust the URL based on your server endpoint
        .then(response => response.json())
        .then(data => {
            // Process the returned data (array of software)
            if (data) {
                // Now you can use the software in your client-side logic
                updateSoftwareList(data);
            }
        })
        .catch(error => console.error('Error:', error));

        // Function to handle blocking a serial number
    function blockSerialNumber(serialNumber) {
        fetch('/blockSerial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ serialNumber: serialNumber }),
        })
        .then(response => response.json())
        .then(data => {
                // Handle the response from the server
            if (data.success) {
                alert('Serial number blocked successfully');
                // You can update the UI or take additional actions as needed
            } else {
                alert('Failed to block serial number');
            }
        })
        .catch(error => {
            console.error('Error blocking serial number:', error);
        });
    }

    function enableSerialNumber(serialNumber) {
        fetch('/enableSerial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ serialNumber: serialNumber }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.success);
                // Handle the response from the server
            if (data.success) {
                alert('Serial number enabled successfully');
                // You can update the UI or take additional actions as needed
            } else {
                alert('Failed to enable serial number');
            }
        })
        .catch(error => {
            console.error('Error enabling serial number:', error);
        });
    }

    // Event listener for the block button click
    document.getElementById('blockButton').addEventListener('click', function () {
        var serialNumberInput = document.getElementById('input1').value;
        blockSerialNumber(serialNumberInput);
    });

    document.getElementById('enableButton').addEventListener('click', function () {
        var serialNumberInput = document.getElementById('input1').value;
        enableSerialNumber(serialNumberInput);
    });

    function updateSoftwareList(softwareList) {
        var softwareContainer = document.getElementById('software-list');

        // Clear existing content
        softwareContainer.innerHTML = '';
        active = " active";

        softwareList.forEach(software => {
            var softwareCard = document.createElement('div');
            softwareCard.className = `carousel-item${active}`;

            // Create a card for each software
            softwareCard.innerHTML = `
                <div class="allcards">
                <div class="card" style="width: 18rem;">
                <img src="./images/logo/${software.imageLink || "software-logo-409721744.PNG"}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${software.name}</h5>
                <p class="card-text">${software.description}</p>
                </div></div></div>
            `;

            active = "";

            // Append the card to the software container
            softwareContainer.appendChild(softwareCard);
        });
    }

    function handleFormSubmission() {
        // Get values from the form
        var serialNumber = document.getElementById("input2").value;
        var email = document.getElementById("emailInput").value;
  
        // Check if both serial number and email are provided
        if (serialNumber && email) {
          // Make a POST request using fetch
          fetch('/assSerial', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              serialNumber: serialNumber,
              email: email,
            }),
          })
          .then(function (response) {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(function (data) {
            // Handle the response data if needed
            alert(data);
          })
          .catch(function (error) {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
          });
        } else {
          alert("Please enter both serial number and email");
        }
      }
  
      // Add an event listener for the form submission
      document.querySelector('#formass').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        handleFormSubmission(); // Call the function to handle the form submission
      });
});
