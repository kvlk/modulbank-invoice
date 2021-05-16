document.addEventListener("DOMContentLoaded", function(e) {    
    let circle = document.querySelectorAll(".progress-ring__circle");
    let text = document.querySelectorAll(".progress-ring__text");
    let radius = 0;
    let circumference = 0;
    let offset = 0;

    function setProgress(percent, index) {
        radius = circle[index].r.baseVal.value;
        circumference = radius * Math.PI * 2;
        offset = circumference - percent / 100 * circumference;

        circle[index].style.strokeDasharray = circumference + " " + circumference;
        circle[index].style.strokeDashoffset = offset;
        text[index].textContent = percent;
    }    
    
    for (let i = 0; i < text.length; i++) {
        setProgress(text[i].textContent, i);
    }

    let sidebarPanel = document.querySelector("#sidebar-panel");
    let openPanelButton = document.querySelectorAll(".js-sidebar-toggle");
    let closePanelButton = document.querySelector("#panel-close");
    let headerProfileMenuArrow = document.querySelector(".header__profile__menu__icon");

    for (let j = 0; j < openPanelButton.length; j++) {
        openPanelButton[j].addEventListener("click", function(e) {
            e.preventDefault();
            headerProfileMenuArrow.classList.toggle("icon-arrow-down");
            headerProfileMenuArrow.classList.toggle("icon-arrow-right");
            sidebarPanel.classList.toggle("active");
        }, false);
    }

    closePanelButton.addEventListener("click", function() {
        sidebarPanel.classList.remove("active");
        closePanelButton.classList.add("active");
        headerProfileMenuArrow.classList.toggle("icon-arrow-down");
        headerProfileMenuArrow.classList.toggle("icon-arrow-right");
        setTimeout(function() {
            closePanelButton.classList.remove("active");
        }, 600);
    }, false);

    let searchInput = document.querySelector("#search");
    
    ["focus", "blur"].forEach(function(e) {
        searchInput.addEventListener(e, function() {
            this.parentNode.classList.toggle("active");
        }, false);
    });

}, false);
