var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var image = panel.querySelector(".image-transition");
        panel.classList.toggle("active");
    });

    acc[i].addEventListener("mouseenter", function() {
        var panel = this.nextElementSibling;
        var image = panel.querySelector(".image-transition")
        if (!panel.classList.contains("active")) {
            panel.classList.add("active");
            image.style.opacity = 1;
        }
    });
    acc[i].addEventListener("mouseleave", function() {
        var panel = this.nextElementSibling;
        var image = panel.querySelector(".image-transition")
        if(this.classList.contains("active")) {
            panel.classList.add("active");
            image.style.opacity = 1;
        } else {
            panel.classList.remove("active");
            image.style.opacity = 0;
        }
    });
}
