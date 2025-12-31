document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');

    function updateLogos(theme) {
        const logo1 = document.getElementById('logo1');
        const logo2 = document.getElementById('logo2');

        if (!logo1 || !logo2) return;

        if (theme === 'dark') {
            logo1.src = 'img/white-logo1.png';
            logo2.src = 'img/white-logo2.png';
        } else {
            logo1.src = 'img/logo1.png';
            logo2.src = 'img/logo2.png';
        }
    }

    themeBtn.addEventListener('click', function() {
        themeDropdown.classList.toggle('show');
    });

    window.addEventListener('click', function(e) {
        if (!e.target.matches('#theme-btn') && !e.target.closest('#theme-btn')) {
            themeDropdown.classList.remove('show');
        }
    });

    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateLogos(theme);
            themeDropdown.classList.remove('show');
        });
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateLogos(savedTheme);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });


//burger menu
    const burger = document.getElementById("burger-menu");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                burger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
});
