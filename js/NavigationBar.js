const dropdownButton = document.getElementById('dropdown-btn');
const dropdown = document.getElementById('dropdown');
const dropdownIcon = document.getElementById('dropdown-icon');

dropdownButton.addEventListener('mouseover', function() {
    dropdown.classList.add('active');
    dropdownIcon.classList.add('active');
    document.addEventListener('click', function event_handler(event) {
        if (!dropdown.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdown.classList.remove('active');
            dropdownIcon.classList.remove('active');
            document.removeEventListener('click', event_handler);
        }
    });
})

