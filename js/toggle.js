var tog = document.getElementById("toggle");
var inside = document.getElementById("inside")
var safi = 5;
tog.onclick = function () {
    if (safi == "5") {
        safi = 19;
        inside.style.transform = "translateX(24px)";
        tog.style.background = "hsl(230, 22%, 74%)";
        inside.style.background = " #fff";
        inside.style.transition = "transform .35s";


    } else {
        safi = 5;
        tog.style.background = "linear-gradient( to right, hsl(210, 78%, 56%) , hsl(146, 68%, 55%))";
        inside.style.background = " hsl(230, 17%, 14%)";
        inside.style.transform = "translateX(0px)";
    }
}