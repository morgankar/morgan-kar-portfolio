// Check for saved dark mode preference
let darkMode = localStorage.getItem('darkmode') === 'active';

// Get the theme button
const themeBtn = document.getElementById('theme');



// Apply dark mode if it was previously active
if (darkMode) {
  document.body.classList.add('darkmode'); 
}

// Toggle dark mode on button click
themeBtn.addEventListener("click", () => {
  // Toggle the dark mode state
  darkMode = !darkMode;
  
  if (darkMode) {
    // Enable dark mode
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  } else {
    // Disable dark mode
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  }

});

