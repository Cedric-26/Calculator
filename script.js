//creating basic math functions
function add(a,b)
{
    return a + b;
}
function subtract(a,b)
{
    return a - b;
}
function multiply(a,b)
{
    return a * b;
}
function divide(a,b)
{
    if (b === 0)
    {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}
//creating variables for calculator operators
let firstNumber = "";
let operator = "";
let secondNumber = "";
// creating actions for operators
function operate (operator, a, b)
{
    function operate(operator, a, b) {
        switch (operator)
     {
          case "+":
            return add(a, b);
          case "-":
            return subtract(a, b);
          case "*":
            return multiply(a, b);
          case "/":
            return divide(a, b);
          default:
            return "Invalid operator";
        }
      }
}      

//more on display and creating the clear button
 const display = document.getElementById("display");
 const clearButton = document.createElement("button");
 clearButton.textContent = "C";
 clearButton.addEventListener("Click", () => 
 {
    display.value = "0";
    firstNumber = "";
    operator = "";
    secondNumber = "";
 
 });
 document.getElementById("Calculator").appendChild(clearButton);
 