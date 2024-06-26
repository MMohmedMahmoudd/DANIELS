const navbar = document.getElementById("navbar-fun");
const navLinks = document.getElementsByClassName("nav-link");
const brand = document.querySelector(".navbar-brand");
const progressBar = document.getElementById("progress-bar");
const progres80 = document.getElementById("progres80%");
const progres90 = document.getElementById("progres90%");
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos || document.documentElement.scrollTop > 1000) {
        navbar.style.top = "0";
        if (document.documentElement.scrollTop > 1000) {
            progressBar.style.width = "95%";
            progres80.style.width = "80%";
            progres90.style.width = "90%";
            navbar.classList.remove("dark:bg-zinc-800");
            navbar.classList.add("bg-white");
            Array.from(navLinks).forEach(link => {
                link.style.color = "black";
            });
            brand.style.color = "black";
        }
    } else {
        navbar.style.top = "-100px";
    }

    let sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    prevScrollPos = currentScrollPos;
});
