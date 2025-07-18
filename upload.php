<?php 

$servername = "localhost";
$usernam = "root";
$password = "";
$uploadname = "file_uploads";
//database connection
$conn = mysqli_connect($servername, $usernam, $password, $uploadname);

if(!$conn){
    echo"no connection available".mysqli_connect_error();
    die();
}


if(isset($_POST['submit'])){
//fetch from the form

$file = $_FILES['file'];


//print_r($file);
$fileName = $_FILES['file']['name'];
$fileType = $_FILES['file']['type'];
$fileTmpName = $_FILES['file']['tmp_name'];
$fileError = $_FILES['file']['error'];
$fileSize = $_FILES['file']['size'];

$fileExt = explode('.', $fileName);
$fileActualExt = strtolower(end($fileExt));

//allowed file type
$allowed = array('png','jpeg','zip','jpg','pdf','docx');

if(in_array($fileActualExt , $allowed)) {
     if($fileError === 0){
        if($fileSize < 10000000){
          $fileNameNew = uniqid('Yahee', true).".".$fileActualExt;
        $fileDestination = 'uploads/' .$fileNameNew;
        move_uploaded_file($fileTmpName, $fileDestination);

        }else{
          echo"Your file is too big!";
        }
     }else{
      echo"There was an error on uploading your file!";
         }
}else{
  echo"You can not upload files of this type";
}


      //sql script

      $fileNameNew = uniqid('Yahee', true).".".$fileActualExt; 
$sql = "INSERT INTO upload(Uploaded_file) VALUES ('$fileNameNew');";

mysqli_query($conn, $sql);

header("location: fileupload.html?upload=success");

}



