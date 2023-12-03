document.addEventListener('DOMContentLoaded', function () {

    fetch('/getSoftwareListOwner')
        .then(response => response.json())
        .then(data => {
            if (data) {
                updateSoftwareList(data);
            }
        })
        .catch(error => console.error('Error:', error));

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
            if (data.success) {
                alert('Serial number blocked successfully');
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
            if (data.success) {
                alert('Serial number enabled successfully');
            } else {
                alert('Failed to enable serial number');
            }
        })
        .catch(error => {
            console.error('Error enabling serial number:', error);
        });
    }

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

        softwareContainer.innerHTML = '';
        active = " active";

        softwareList.forEach(software => {
            var softwareCard = document.createElement('div');
            softwareCard.className = `carousel-item${active}`;

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

            softwareContainer.appendChild(softwareCard);
        });
    }

    function handleFormSubmission() {
        var serialNumber = document.getElementById("input2").value;
        var email = document.getElementById("emailInput").value;
  
        if (serialNumber && email) {
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
            alert(data);
          })
          .catch(function (error) {
            console.error('There was a problem with the fetch operation:', error);
          });
        } else {
          alert("Please enter both serial number and email");
        }
      }
  
      document.querySelector('#formass').addEventListener('submit', function (event) {
        event.preventDefault();
        handleFormSubmission();
      });
});
