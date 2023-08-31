<!DOCTYPE html>
<html>
<head>
    <title>add posts</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="functions.js"></script>
</head>

<body>
    <header>
        <label for="game">update to game:</label>

        <select name="game" id="updateGame">
            <option value="guardian">The Guardian</option>
            <option value="thunderpunk">ThunderPunk</option>
            <option value="castleinthesky"> Castle In The Sky</option>
        </select>
    </header>

    <div name="inputBase" id="inputBase" class="inputbase" contenteditable=true></div>

    <button id="save" onclick="saveUpdate()">Save</button>
</body>

</html>

<?php

if(!isset($_POST['sendData'])) exit;

$filename = $_FILES["file"]["name"];

$ext = explode('.', $filename);
if($ext[1] != 'html'){
    echo '<br>bad file type, it must be html file';
    exit;
}
//upload the file to temp area
move_uploaded_file($_FILES["file"]["tmp_name"], $_FILES["file"]["name"]);
//read the file
$file = @fopen($filename, 'r');
if($file === false){
    echo 'Error when reading the file';
    exit;  
}
//reading line by line
$output ='';
while (($line = fgets($file)) !== FALSE) {
    $output .= str_replace('<img', '<svg', $line);
}
fclose($file);
//write the new file
$result = file_put_contents($filename, $output);
echo $result;
if(!$result){
    echo 'faild';
}else{
    echo 'success <br/>';
    $load_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $load_link = str_replace('pars.php', '', $load_link); 
    $load_link .= $filename;   
    echo '<a href='.$load_link.'>See the results</a><br>';
}


?>