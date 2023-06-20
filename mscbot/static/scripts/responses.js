function getBotResponse(input) {
    //rock paper scissors
    if (input.includes("rock")) {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if(input=="help"){
        cond1="x2"
        return cond1;
    }
    else if(input.includes("Ask query")){
        cond2="x3"
        return cond2;
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if(input.length>50)
    {
        return "query accepted successfully!"
    }
    else {
        return "Try asking something else! or for help enter 'help'";
    }
}

function getBotResponse2(input)
{
    if(input=="Ask query"){
    return "Enter Name";    
    }
}