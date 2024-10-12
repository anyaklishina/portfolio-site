const btnDarkMode = document.querySelector(".dark-mode-btn");

// проверка темной темы 
if (localStorage.getItem('darkMode')== 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.toggle("dark")
}
 

// включение по клику дарк мода
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle("dark")

    if (isDark) {
        localStorage.setItem("darkMode", 'dark')
    }
    else{
        localStorage.setItem("darkMode", 'light')

    }
}

