function toggleMenu(){
    var width = document.getElementById("collapseMenu").style.width;
    if(width === "250px"){
        document.getElementById("collapseMenu").style.width = "0px";
        document.body.style.backgroundColor = "white";
    }
    else{
        document.getElementById("collapseMenu").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}