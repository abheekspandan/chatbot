function newcom()
{
    let inpname=$("#textInput").val();
    $('#name-chat').append(inpname);
    
    $("#textInput").val("");
    $("#chatbox").append(inpname);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

    console.log(inpname);
   
   SubmissionMessage2="Enter contact"; 
    $("#chatbox").append(SubmissionMessage2);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);
}