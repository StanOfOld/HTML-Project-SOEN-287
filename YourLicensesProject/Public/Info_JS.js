document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const inputs = document.querySelectorAll('.form-control');

    editButton.addEventListener('click', () => {
        inputs.forEach(input => {
            input.removeAttribute('readonly');
        });
        editButton.style.display = 'none';
        saveButton.style.display = 'block';
    });

    saveButton.addEventListener('click', () => {
        inputs.forEach(input => {
            input.setAttribute('readonly', 'true');
        });
        editButton.style.display = 'block';
        saveButton.style.display = 'none';
    });
});
