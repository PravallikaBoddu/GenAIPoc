1. To start the flask app, navigate to the BackendPython directory and run Python file.

2. To start the react app, navigate to the "UI" directory and run "npm start"

3. The browser page automatically opens with the react app running at localhost:3000

4. Provide the following typescript code snippet to generate the test cases:
   
//This is a simple function to check if a number is Prime 
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


/*
    This function which is used to check if a year is a leap year
*/
function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


// This function used to find a reverse number
function reverseNumber(num: number): number {
    let reversed = 0;
    while (num !== 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}



/*
    This function is defines palindrome of a string
*/
function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
