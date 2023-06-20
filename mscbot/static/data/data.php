
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact Form - PHP/MySQL Demo Code</title>
</head>

<body>
<fieldset>
<legend>Contact Form</legend>
<form name="frmContact" method="post" action="data.php" id="sub">
<p>
<label for="Name">Name </label>
<input type="text" name="txtName" id="txtName">
</p>
<p>
<label for="email">Email</label>
<input type="text" name="txtEmail" id="txtEmail">
</p>
<p>
<label for="phone">Phone</label>
<input type="text" name="txtPhone" id="txtPhone">
</p>
<p>
<label for="message">Message</label>
<textarea name="txtMessage" id="txtMessage"></textarea>
</p>
<p>&nbsp;</p>
<p>
<input type="submit" name="Submit" id="Submit" value="Submit">
</p>
</form>
</fieldset>
<script>
    
</script>
</body>
</html>
<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');


    
    // get the post records
    $txtName = $_POST['txtName'];
    $txtEmail = $_POST['txtEmail'];
    $txtPhone = $_POST['txtPhone'];
    $txtMessage = $_POST['txtMessage'];


$con = mysqli_connect('localhost', 'root', '','chat-box');

// database insert SQL code
$sql = "INSERT INTO `test` (`Id`, `fldName`, `fldEmail`, `fldPhone`, `fldMessage`) VALUES ('0', '$txtName', '$txtEmail', '$txtPhone', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>