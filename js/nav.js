function updateDivs() {

    height = document.getElementById("headerbar").offsetHeight;
    
    for (i = 0, len = document.getElementsByClassName("section").length; i < len; i++) {
        div = document.getElementsByClassName("section")[i]
        div.style.paddingTop = height.toString() + "px";
        console.log(height)
    }
    for (i = 0, len = document.getElementsByClassName("innersection").length; i < len; i++) {
        div = document.getElementsByClassName("section")[i]
        div.style.marginTop = "-" + height.toString() + "px";
    }
  }

for (i = 0, len = document.getElementsByClassName("navbarlink").length; i < len; i++) {
console.log("run")
button = document.getElementsByClassName("navbarlink")[i]
button.onclick = function(){updateDivs()};
}
  
  