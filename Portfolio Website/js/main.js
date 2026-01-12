const dropdown_button = document.getElementById('dropdown-btn');
const dropdown = document.getElementById('dropdown');
const icon = document.getElementById('dropdown-icon');
const contact_button = document.getElementById('contact');
const contact_icon = document.getElementById('contact-icon');
const link_button = document.getElementById('link')

dropdown_button.addEventListener('mouseover', function() {
    dropdown.classList.add('active');
    icon.classList.add('active');
    document.addEventListener('click', function event_handler(event) {
        if (!dropdown.contains(event.target) && !dropdown_button.contains(event.target)) {
            dropdown.classList.remove('active');
            icon.classList.remove('active');
            document.removeEventListener('click', event_handler);
        }
    });
})
