import inquirer from "inquirer";

// asking questions from users through inquirer

let answers = await inquirer.prompt ([
    {message: "enter fisrt number" , type: "number" , name: "firstNumber"},
    {message: "enter second number" , type: "number" , name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices:["addition" , "subtraction" , "multiplication" , "division"]
    },
]);

// conditional statement if-else

if (answers.operator === "addition"){
     console.log(answers.firstNumber + answers.secondNumber) 
}
else if(answers.operator === "subtraction"){
     console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}    
else if(answers.operator === "division"){
    console.log(answers.firstNumber / answers.secondNumber)
}  
else {
    console.log("invalid input")
}
