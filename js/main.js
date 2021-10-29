/*PALINDROME WORD TASK  */
//2. ask user a word and store in a variable
/* const userWord = prompt('Type a word');
console.log(userWord);

//3. call function for checking user input
const result = checkForPalindrome(userWord);
console.log(result); */


/**********************
 * FUNCTION PALINDROME
 **********************/
//1. define a function for checking if user input is palindrome or not
/**
 * 
 * @param {string} word 
 * @returns
 */
/* function checkForPalindrome (word) {
    //1.1. word reverse
    let userReverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        userReverse += word[i];
    }
    console.log(userReverse);
    //1.2. if word is palindrome print out "the word is palindrome"
    //     else "the word isn't palindrome"
    if (userReverse === word) {
        return 'The word you chose is palindrome';
    } else {
        return 'The word is not palindrome';
    }
} */



/* ODD/EVEN TASK */
//2. ask user if odd or even
let userChoice = prompt('odd or even?');
    console.log(`You chose ${userChoice}`);
/* while (userChoice !== 'odd' || userChoice !== 'even') {
    alert('Please type "odd" or "even"');
    userChoice = prompt('odd or even?');
} */
if (userChoice === 'even') {
    userChoice = true;
} else {
    userChoice = false;
}
//3. ask user a number from 1 to 5
const userNumber = parseInt(prompt('Type a number from 1 to 5'));
console.log(`You chose ${userNumber}`)
//4. call function for generating a random number from 1 to 5
const computerNumber = genRandomNumber(5, 1);
console.log(`The computer choice is ${computerNumber}`);
//5. sum the numbers
const sum = userNumber + computerNumber;
console.log(`The sum is ${sum}`)
//7. call function for checking if odd or even
const sumResult = checkOddOrEven(sum);
//8. get the winner
if(userChoice === sumResult) {
    console.log('You won');
} else {
    console.log('You lose');
}



/**************************
 *FUNCTIONS FOR ODD OR EVEN
 **************************/
//1. define a function for generate a random number
/**
 * 
 * @param {number} max 
 * @param {number} min 
 * @returns 
 */
function genRandomNumber(max, min) {
    const randomNumber = Math.floor(Math.random() *(max - min + 1) + min);
    return randomNumber;
}

//6. define a function for checking if odd or even
function checkOddOrEven(number) {
    let even = true;
    if (number % 2 !== 0) {
        even = false;
        console.log('The result is odd');
    } else {
        console.log('The result is even');
    }
    return even;
}

