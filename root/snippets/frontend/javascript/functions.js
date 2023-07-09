// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if(b != 0) {
        return a / b;
    } else {
        throw new Error("Cannot divide by zero");
    }
}

// Function to calculate modulus of two numbers
function modulus(a, b) {
    return a % b;
}

// Function to square a number
function square(a) {
    return a * a;
}

// Function to calculate square root of a number
function squareRoot(a) {
    return Math.sqrt(a);
}

// Function to calculate power of a number
function power(a, b) {
    return Math.pow(a, b);
}

// Function to calculate factorial of a number
function factorial(n) {
    if(n < 0) {
        throw new Error("Factorial for negative numbers is not defined");
    } else if(n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for(let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}