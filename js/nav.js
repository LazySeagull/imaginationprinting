pages = ["home","about","gallery","services","contact"]

function changePage(pagename) {
    for(page in pages) {
        if(pagename == page) {
            document.getElementById(page).style.zIndex = 9;
            document.getElementById(page).style.opacity = 100;
        }
        else {
            document.getElementById(page).style.zIndex = 0;
            document.getElementById(page).style.opacity = 0;
        }
    }
}

function changeWindow(direction) {
    var currentpageID = -1
    for(i = 0; i  < pages.length; i++) {
        if(document.getElementById(pages[i]).style.opacity == 100) {
            currentpageID = i
        }
    }
    var newpage = currentpageID
    if(direction == 'left') {
        newpage -= 1
    }
    else if(direction == 'right') {
        newpage += 1
    }
    changePage(pages[newpage])
}