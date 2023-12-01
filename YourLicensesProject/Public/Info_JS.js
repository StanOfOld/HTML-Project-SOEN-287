document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have the accountID from the server-side logic
    var accountID = 6; // Replace with the actual accountID

    // Make a request to the server to get the user's information based on accountID
    console.log('Before fetch');
    fetch(`/getaccountinfo?accountID=${accountID}`)
    .then(response => {
        console.log('Inside fetch - Response Status:', response.status);
        return response.json(); })

        .then(data => {
            console.log('After fetch - Data:', data);
            // Process the returned data (user information)
        if (data && !data.error) {
            // Now you can use the user information in your client-side logic
            updateUserDetailsForm(data);
        } else {
            console.error('Failed to fetch user information.');
        }
    })
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('After fetch'));

    function updateUserDetailsForm(userDetails) {
        // Assuming you have a form with input fields, replace the IDs accordingly
        var form = document.querySelector('form');
        
        // Iterate through user details and update form fields
        for (var key in userDetails) {
            if (userDetails.hasOwnProperty(key)) {
                var input = form.querySelector(`#${key}`);
                if (input) {
                    input.value = userDetails[key];
                }
            }
        }

        // Enable or disable the form based on the mode (edit or readonly)
        toggleFormMode(true);

        // Attach event listeners for edit, save, and delete buttons
        var editButton = document.getElementById('editButton');
        var saveButton = document.getElementById('saveButton');
        var deleteButton = document.getElementById('deleteButton');

        editButton.addEventListener('click', function () {
            toggleFormMode(false);
        });

        saveButton.addEventListener('click', function () {
            // Add logic to save the updated information on the server
            // Then toggle back to readonly mode
            toggleFormMode(true);
        });

        deleteButton.addEventListener('click', function () {
            // Add logic to delete the user's account on the server
        });
    }

    function toggleFormMode(readonly) {
        var form = document.querySelector('form');
        var editButton = document.getElementById('editButton');
        var saveButton = document.getElementById('saveButton');

        // Enable or disable the form fields
        for (var i = 0; i < form.elements.length; i++) {
            form.elements[i].readOnly = readonly;
        }

        // Toggle the visibility of Edit and Save buttons
        editButton.style.display = readonly ? 'block' : 'none';
        saveButton.style.display = readonly ? 'none' : 'block';
    }
});