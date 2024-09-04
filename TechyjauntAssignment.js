const calculate = (num1, num2, operation) => {
    //validate num1 and num2 are valid numbers
    if(num1 === null || num2 === null || num1 === undefined || num2 === undefined || typeof num1 != "number" || typeof num2 != "number") {
        return("invalid numbers");
    }
//to validate that the allowed operation is one of the strings below
const allowedOperation = ["add", "subtract", "divide", "multiply"];
    if(!allowedOperation.includes(operation)){
        return("Error, invalid operation");
    }

    if (operation === 'add'){
        return(num1 + num2);
    }
    else if (operation === 'subtract'){
        return(num1 - num2);
    }
    else if (operation === 'multiply'){
        return(num1 * num2);
    }
    else if (operation === 'divide'){
        if (num2 == 0) {
            return("Error, 0 cannot be used to divide num1"); // to return error if num2 is a zero
        } else {return(num1 / num2)};
    }
}
// to test the functions with different sets of input
console.log(calculate(5,3,'add'));
console.log(calculate(5,3,'subtract'));
console.log(calculate(8,2,'divide'));
console.log(calculate(5,3,'multiply'))

// to test the functions against other operations not declared in the function

console.log(calculate(10,3, 'modulus'));
console.log(calculate(4,8, 'exponential'));
console.log(calculate(6,0, 'divide'));