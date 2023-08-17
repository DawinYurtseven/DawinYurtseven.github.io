function toggleMenu() {
    var width = document.getElementById("collapseMenu").style.width;
    if (width === "350px") {
        document.getElementById("collapseMenu").style.width = "0px";
        document.getElementById("MenuButton").style.right = "10px";
        document.body.style.backgroundColor = "white";
    }
    else {
        document.getElementById("collapseMenu").style.width = "350px";
        document.getElementById("MenuButton").style.right = "360px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}