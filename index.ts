import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message: "Enter First Number", type:"number", name:"firstNumber"},
    {message: "Enter Second Number", type:"number", name:"secondNumber"},
    {
        message: "Select one of the operators to Perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition","Subtration","Multiplication","Division"],
    }

    
]);

// Conditional Statement (if & else Condition)

if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operator === "Subtration"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("invalid")
}``