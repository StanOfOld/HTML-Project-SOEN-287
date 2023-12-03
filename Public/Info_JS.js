document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have the accountID from the server-side logic

    // Make a request to the server to get the user's information based on accountID
    console.log('Before fetch');
    fetch(`/getaccountinfo`)
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
        var logoutButton = document.getElementById('logoutButton');

        editButton.addEventListener('click', function () {
            toggleFormMode(false);
        });

        saveButton.addEventListener('click', function () {
            // Add logic to save the updated information on the server
            // Then toggle back to readonly mode
            saveUserDetails(userDetails);
            toggleFormMode(true);
            
        });

        deleteButton.addEventListener('click', function () {
            deleteUserAccount();
        });

        logoutButton.addEventListener('click', function () {
            // Redirect to the logout endpoint on the server
            window.location.href = '/logout';
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

    function saveUserDetails(userDetails) {
        // Iterate through form fields and update userDetails
        var form = document.querySelector('form');
        for (var i = 0; i < form.elements.length; i++) {
            var input = form.elements[i];
            if (userDetails.hasOwnProperty(input.id)) {
                userDetails[input.id] = input.value;
            }
        }
    
        // Call the server to save the updated information
        fetch('/update-user-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Optionally, update the form or provide feedback to the user
                    console.log('User details saved successfully');
                } else {
                    console.error('Failed to save user details.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => toggleFormMode(true));
    }

    function deleteUserAccount() {
        // Call the server to delete the user's account
        if (confirm('Are you sure you want to delete your account?')) {
            fetch('/deleteAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Optionally, redirect to a different page or provide feedback to the user
                        console.log('User account deleted successfully');
                        window.location.href = '/home';
                    } else {
                        console.error('Failed to delete user account.');
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }
});