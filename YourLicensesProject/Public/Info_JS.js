document.addEventListener('DOMContentLoaded', function () {

    console.log('Before fetch');
    fetch(`/getaccountinfo`)
    .then(response => {
        console.log('Inside fetch - Response Status:', response.status);
        return response.json(); })

        .then(data => {
            console.log('After fetch - Data:', data);
        if (data && !data.error) {
            updateUserDetailsForm(data);
        } else {
            console.error('Failed to fetch user information.');
        }
    })
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('After fetch'));

    function updateUserDetailsForm(userDetails) {
        var form = document.querySelector('form');
        
        for (var key in userDetails) {
            if (userDetails.hasOwnProperty(key)) {
                var input = form.querySelector(`#${key}`);
                if (input) {
                    input.value = userDetails[key];
                }
            }
        }

        toggleFormMode(true);

        var editButton = document.getElementById('editButton');
        var saveButton = document.getElementById('saveButton');
        var deleteButton = document.getElementById('deleteButton');
        var logoutButton = document.getElementById('logoutButton');

        editButton.addEventListener('click', function () {
            toggleFormMode(false);
        });

        saveButton.addEventListener('click', function () {
            saveUserDetails(userDetails);
            toggleFormMode(true);
            
        });

        deleteButton.addEventListener('click', function () {
            deleteUserAccount();
        });

        logoutButton.addEventListener('click', function () {
            window.location.href = '/logout';
        });
    }

    function toggleFormMode(readonly) {
        var form = document.querySelector('form');
        var editButton = document.getElementById('editButton');
        var saveButton = document.getElementById('saveButton');

        for (var i = 0; i < form.elements.length; i++) {
            form.elements[i].readOnly = readonly;
        }

        editButton.style.display = readonly ? 'block' : 'none';
        saveButton.style.display = readonly ? 'none' : 'block';
    }

    function saveUserDetails(userDetails) {
        var form = document.querySelector('form');
        for (var i = 0; i < form.elements.length; i++) {
            var input = form.elements[i];
            if (userDetails.hasOwnProperty(input.id)) {
                userDetails[input.id] = input.value;
            }
        }
    
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
                    console.log('User details saved successfully');
                } else {
                    console.error('Failed to save user details.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => toggleFormMode(true));
    }

    function deleteUserAccount() {
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