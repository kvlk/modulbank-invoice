document.addEventListener('DOMContentLoaded', function(e) {    
    let circle = document.querySelectorAll('.progress-ring__circle');
    let text = document.querySelectorAll('.progress-ring__text');
    let radius = 0;
    let circumference = 0;
    let offset = 0;

    function setProgress(percent, index) {
        radius = circle[index].r.baseVal.value;
        circumference = radius * Math.PI * 2;
        offset = circumference - percent / 100 * circumference;

        circle[index].style.strokeDasharray = circumference + ' ' + circumference;
        circle[index].style.strokeDashoffset = offset;
        text[index].textContent = percent;
    }    
    
    for (let i = 0; i < text.length; i++) {
        setProgress(text[i].textContent, i);
    }
}, false);

document.addEventListener("DOMContentLoaded", function() {
    let closePanelButton = document.querySelector("#panel-close");
    closePanelButton.addEventListener("click", function() {
        document.querySelector("#sidebar-panel").classList.remove("active");
    }, false);
}, false);