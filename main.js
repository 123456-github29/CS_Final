document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
    var scrolled = window.scrollY;
    var parallax = document.querySelectorAll(".parallax");
    
    for (var i = 0; i < parallax.length; i++) {
    var yPos = -(scrolled * 0.3) + "px";
    parallax[i].style.backgroundPositionY = yPos;
    }
    });
    });
    