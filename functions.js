function toggleMenu() {
    var width = document.getElementById("collapseMenu").style.width;
    if (width === "350px") {
        document.getElementById("collapseMenu").style.width = "0px";
        document.getElementById("MenuButton").style.right = "10px";
        document.body.style.backgroundColor = "white";
        document.getElementById("wrapper").style.opacity = 1;

    }
    else {
        document.getElementById("collapseMenu").style.width = "350px";
        document.getElementById("MenuButton").style.right = "360px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("wrapper").style.opacity = 0.7;
    }
}



//this is for the post update
$(document).ready(function() {
    var handleDrag = function(e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
    };
    var handleDrop = function(e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
        //console.log(e);
        //get x and y coordinates of the dropped item
        x = e.clientX;
        y = e.clientY;
        //drops are treated as multiple files. Only dealing with single files right now, so assume its the first object you're interested in
        var file = e.dataTransfer.files[0];
        //don't try to mess with non-image files
        if (file.type.match('image.*')) {
            //then we have an image,

            //we have a file handle, need to read it with file reader!
            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                //get the data uri
                var dataURI = theFile.target.result;
                //make a new image element with the dataURI as the source
                var img = document.createElement("img");
                img.src = dataURI;

                //Insert the image at the carat

                // Try the standards-based way first. This works in FF
                if (document.caretPositionFromPoint) {
                    var pos = document.caretPositionFromPoint(x, y);
                    range = document.createRange();
                    range.setStart(pos.offsetNode, pos.offset);
                    range.collapse();
                    range.insertNode(img);
                }
                // Next, the WebKit way. This works in Chrome.
                else if (document.caretRangeFromPoint) {
                    range = document.caretRangeFromPoint(x, y);
                    range.insertNode(img);
                }
                else
                {
                    //not supporting IE right now.
                    console.log('could not find carat');
                }


            });
            //this reads in the file, and the onload event triggers, which adds the image to the div at the carat
            reader.readAsDataURL(file);
        }
    };

    var dropZone = document.getElementById('inputBase');
    dropZone.addEventListener('dragover', handleDrag, false);
    dropZone.addEventListener('drop', handleDrop, false);
});

function saveUpdate() {
    var btn = document.getElementById("save");
    var inputBase = document.getElementById("inputBase");
    var updateGoal = document.getElementById("updateGame");
    var homelist = document.getElementById("HomeList");

    var html = inputBase.html;
    console.log(html);

    var date = new Date();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    var newdate = day + "/" + month + "/" + year;
    var dateSpan = document.createElement("span");
    dateSpan.innerHTML = newdate;
    console.log(dateSpan)
    
    var newEntry = document.createElement("li");
    newEntry.innerHTML = dateSpan + html;

    var home = window.open("index.html");
    console.log(home);
    var homelist = home.getElementById("HomeList");
}