<!DOCTYPE html>
<html lang="en">
<html xmlns="http://www.w3.org/1999/xhtml">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Bot</title>

    <link rel="stylesheet" href="static/css/chat.css">
    <link rel="stylesheet" href="static/css/home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
    <!-- CHAT BAR BLOCK -->
    <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible">Chat with us!  
            <i id="chat-icon" style="color: #fff;" class="fa-solid fa-comments"></i>
        </button>

        <div class="content">
            <div class="full-chat-block">
                <!-- Message Container -->
                <div class="outer-container">
                    <div class="chat-container">
                        <!-- Messages -->
                        <div id="chatbox">
                            <h5 id="chat-timestamp"></h5>
                            <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                            
                        </div>
                        <!--Later ones-->
                        <p id="botStarterMessage2" class="botText2"><span></span></p>
                        <p id="botStarterMessage3" class="botText2"><span>Enter your query</span></p>
                        <!-- User input box -->
                        <div class="chat-bar-input-block">
                            <div id="userInput">
                                <input id="textInput" class="input-box" type="text" name="msg"
                                    placeholder="'Enter' your query">  
                                <p></p>
                            </div>

                            <div class="chat-bar-icons">
                                <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                    onclick="sendButton()"></i>
                            </div>
                        </div>

                        <div id="chat-bar-bottom">
                            <p></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
<div class="form-hidden">
<fieldset>
    <form name="frmQuery" method="post" action="/index.php" id="subit">
    <p>    
    <label for="date">Date:</label>
        <input type="text" name="date" id="date"><br>
</p>
<p>
        <label for="time">Time:</label>
        <input type="text" name="time" id="time"><br>
</p>
<p>
        <label for="query">Query:</label>
        <input type="text" name="query" id="query" ><br>
</p>
<p>
        <input type="submit" value="Submit" id="Submit" name="Submit">
</p>
      </form>
</fieldset>
     <h1>
</div>
</body>
<script src="https://kit.fontawesome.com/fba2771769.js" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="static/scripts/responses.js"></script>
<script src="static/scripts/chat.js"></script>
<script src="static/scripts/newcomplaint.js"></script>

</html>

<?php

$date = $_POST['date'];
$time = $_POST['time'];
$query = $_POST['query'];

$con = mysqli_connect('localhost', 'root', '','chat-box');

// database insert SQL code
$sql1 = "DELETE FROM `chat-entries` WHERE query=' '; ";
$sql = "INSERT INTO `chat-entries` (`S.no`,`date`,`time`,`query`) VALUES ('0','$date','$time','$query')";

// insert in database 
$rs = mysqli_query($con, $sql1);
$rs = mysqli_query($con, $sql);

if($rs) 
{
	echo "Contact Records Inserted";
}
else{
    echo "Connection failed";
}
?>