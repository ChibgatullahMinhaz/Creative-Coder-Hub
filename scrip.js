// dark Mood feature
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');

    // Apply saved mode from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        modeToggle.textContent = '☀️';
    } else {
        modeToggle.textContent = '🌙';
    }

    // Add event listener for toggle button
    modeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Update button text and save mode to localStorage
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = '☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            this.textContent = '🌙';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});



// toogle menu 

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

// Show menu with animation on clicking the menu icon
menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
    menuToggle.style.display = 'none'; // Hide menu icon
    if (closeMenu) closeMenu.style.display = 'inline'; // Show close icon if it exists
});

// Hide menu with animation on clicking the close icon
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        closeNavMenu();
    });
}

// Hide menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeNavMenu();
    }
});

// Function to close the navigation menu
function closeNavMenu() {
    navMenu.classList.remove('active');
    if (closeMenu) closeMenu.style.display = 'none'; // Hide close icon if it exists
    menuToggle.style.display = 'inline'; // Show menu icon
}
