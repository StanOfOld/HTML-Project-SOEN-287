document.addEventListener('DOMContentLoaded', function () {
    var accountID = 6;

    /*document.querySelector('table').addEventListener('click', function (event) {
        if (event.target.classList.contains('renew-link')) {
            handleRenewClick(event);
        } else if (event.target.classList.contains('delete-icon')) {
            handleDeleteClick(event);
        }
    });*/

    fetch(`/getlicenses`)
        .then(response => response.json())
        .then(data => {
            console.log("Inside fetch");
            console.log(data);
            if (data) {
                updateLicenseTable(data);
            }
        })
        .catch(error => console.error('Error:', error))
        .finally(() => console.log('After fetch'));

    function updateLicenseTable(licenses) {
        var tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';

        licenses.forEach(license => {
            console.log('License:', license);

            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${license.serialNum}</td>
                <td>${license.softwareName}</td>
                <td>${formatDate(license.purchaseDate)}</td>
                <td>${formatDate(license.expiryDate)}</td>
                <td><a href="/renewLicense?licenseid=${license.licenseID}" class="link-secondary renew-link">Renew</a></td>
                <td><a href="/deleteLicense?licenseid=${license.licenseID}" class="delete-icon"><i class="fas fa-trash-alt"></i></a></td>
              `;

            tableBody.appendChild(row);
        });

        console.log("addDeleteEvent");
    }

    function handleRenewClick(event) {
        event.preventDefault();
        console.log("Renew clicked");

        var licenseID = event.target.getAttribute('data-license-id');

        fetch(`/renewLicense?licenseid=${licenseID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Renew License Response:', data);
                if (data.success) {
                    console.log('License renewed successfully.');
                    var row = event.target.closest('tr');
                    var expiryDateCell = row.querySelector('td:nth-child(4)');
                    expiryDateCell.textContent = data.newExpiryDate;
                } else {
                    console.error('Failed to renew the license.');
                }
            })
            .catch(error => console.error('Error:', error));
    }

    function handleDeleteClick(event) {
        event.preventDefault();
        console.log("Delete clicked");

        var licenseID = event.target.getAttribute('data-license-id');

        if (confirm('Are you sure you want to delete this license?')) {
            fetch(`/deleteLicense?licenseid=${licenseID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        var row = event.target.closest('tr');
                        row.parentNode.removeChild(row);
                        console.log('License deleted successfully.');
                    } else {
                        console.error('Failed to delete the license.');
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
});
