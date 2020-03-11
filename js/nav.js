heights = [];
for (i = 0, len = document.getElementsByClassName("section").length; i < len; i++) {
    div = document.getElementsByClassName("section")[i]
    heights.push(div.offsetHeight)
}
updateDivs()
function updateDivs() {

    height = document.getElementById("headerbar").offsetHeight;
    
    for (i = 0, len = document.getElementsByClassName("section").length; i < len; i++) {
        div = document.getElementsByClassName("section")[i]
        div.style.marginTop = "-" + height.toString() + "px";
    }
    for (i = 0, len = document.getElementsByClassName("section_title").length; i < len; i++) {
        div = document.getElementsByClassName("section_title")[i]
        div.style.paddingTop = height.toString() + "px";
    }
}

for (i = 0, len = document.getElementsByClassName("navbarlink").length; i < len; i++) {
    button = document.getElementsByClassName("navbarlink")[i]
    button.onclick = function(){updateDivs()};
}