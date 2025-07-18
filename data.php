<?php

$servername = "localhost";
$usernam = "root";
$password = "";
$dataname = "my website";
//database connection
$conn = mysqli_connect($servername, $usernam, $password, $dataname);

if(!$conn){
    echo"no connection available".mysqli_connect_error();
    die();
}

if(isset($_POST['submit'])){

    //collect user inputs
$firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
$lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
$Gender = mysqli_real_escape_string($conn, $_POST['Gender']);
$Hobies = mysqli_real_escape_string($conn, $_POST['Hobies']);
$Region = mysqli_real_escape_string($conn, $_POST['Region']);
$phoneNumber = mysqli_real_escape_string($conn, $_POST['phoneNumber']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$pass = mysqli_real_escape_string($conn, $_POST['pass']);


//SQL script

$sql = "INSERT INTO message(firstName, lastName, Gender, Hobies,Region, phoneNumber, email, pass) VALUES ('$firstName', 
'$lastName', '$Gender', '$Hobies', '$Region' ,'$phoneNumber', '$email', '$pass');";

mysqli_query($conn, $sql);

header("location: form.html?message=sent");
}
?>