function secondBotMessage() {
    let secondMessage = "How's it going2?"
    document.getElementById("botStarterMessage").scrollIntoView(false) = '<p class="botText"><span>' + secondMessage + '</span></p>';

    let time = getTime();
    document.getElementById("chat-timestamp").innerHTML ='<p>'+time+'</p>' ;
}

function getHardResponse2(userText)
{
    let botResponse = getBotResponse2(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    console.log(botResponse);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse2() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    //$("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
    console.log("newend1");
    }

function sendButton2() {
    let cond=1;
    getResponse2();
    let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(true);
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        let cond=1;
        getResponse2();
    }
});