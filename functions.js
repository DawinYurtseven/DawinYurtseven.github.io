function nacCollaps(){
    var x = document.getElementById(collapseMenu);
    if(x.className === "innerMenu") {
        x.className += " responsive";
    }
    else{
        x.className = "innerMenu";
    }
}