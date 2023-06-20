let tempo=0;
// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }  });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();
    document.getElementById("chat-timestamp").innerHTML ='<p>'+time+'</p>' ;
}

firstBotMessage();

function submission()
{

    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + SubmissionMessage1 + '</span></p>';

}


// Retrieves the response

function getHardResponse(userText) {
    let time = getTime();
    document.getElementById("chat-timestamp").innerHTML ='<p>'+time+'</p>' ;

    let botResponse = getBotResponse(userText);
    if(botResponse=="x2")
    {
        let botHtml='<p class="botText"><span>1.Ask Queries<br>2.Ask Doubts</span>  </p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(false);

    }
    else if(botResponse=="x3"){
        SubmissionMessage1='<p class="botText"><span>Enter your Query in 50-100 words (plz mention your name and mobile number for your query to be accepted):</span></p>';
        $("#chatbox").append(SubmissionMessage1);
        document.getElementById("chat-bar-bottom").scrollIntoView(false);

        tempo=tempo+1;
        console.log("end");
    }
    else{
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
}

function printdate()
{
    const d = new Date();
    let day = d.getDay();
           
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const m = new Date();
    let fmonth = month[m.getMonth()];
    
    const y = new Date();
    let year = y.getFullYear();
    
    let fulldate=`${day} ${fmonth},${year}`;

$('#date').append(fulldate);
return true;
}

function printtime()
{
    let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
   $("#time").append(time);
   console.log("time is");
   return true;
}


//Gets the text from the input box and processes it
function getResponse(cond) {
    if (cond==1){
    let userText = $("#textInput").val();

    if (tempo>0)
    {
        if(printdate())
        {
            if(printtime())
            {
                $('#query').append(userText);
                {
                    document.getElementById("subit").submit();
                }
            }
            
        }
        
    }
    if (userText == " ") {
        userText = "Try entering Something else";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
    console.log("getend1");
}
else{
    console.log("getend2");
}
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

return sampleText;
    //Uncomment this if you want the bot to respond to this buttonSendText event

     setTimeout(() => {
         getHardResponse(sampleText);
     }, 1000)

}

function sendButton() {
    let cond=1;
    getResponse(cond);
    let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(true);
  
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        let cond=1;
        getResponse(cond);
    }
});

