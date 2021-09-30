var toggle = document.getElementById("toggle");
var inside = document.getElementById("inside");
var html = document.querySelector("html");
var span = document.querySelector(".toggle-div span");

toggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        span.textContent = "Light Mode";
        inside.style.transform = "translateX(24px)";
        inside.style.transition = "transform .35s";
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        span.textContent = "Dark Mode";
        inside.style.transform = "translateX(0px)";
        inside.style.transition = "transform .35s";
    }
});