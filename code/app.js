let darkmode = localStorage.getItem('darkmode')
const themebtn = document.getElementById('theme')


themebtn.addEventListener("click", ()=> {
    darkmode !== "active" ? enableDarkMode(): disableDarkMode()
})