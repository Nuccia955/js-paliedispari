/*PALINDROME WORD TASK  */
//2. add a click event on button "Converti"
const btnWord = document.getElementById('btn-word');
btnWord.addEventListener('click', function() {
    //3. ask user a word and store in a variable
    let userWord = prompt('choose a word!');
    while (!isNaN(parseInt(userWord))) {
        alert ('Please choose a word, not a nomber');
        userWord = prompt('choose a word!');
    }
    let userWordChoice = document.querySelector('h1');
    userWordChoice.innerHTML = 'Parola palindroma?';
    userWordChoice.innerHTML += ` You chose: ${userWord}`;
    let wordResult = document.getElementById('word-result');
    wordResult.innerHTML = '';
    //4. call function for checking user input
    const result = checkForPalindrome(userWord);
    wordResult.innerHTML += `${result}. Click the button to try again!`;
})


/**********************
 * FUNCTION PALINDROME
 **********************/
//1. define a function for checking if user input is palindrome or not
/**
 * 
 * @param {string} word 
 * @returns
 */
function checkForPalindrome (word) {
    //1.1. word reverse
    let userReverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        userReverse += word[i];
    }
    //1.2. if word is palindrome print out "the word is palindrome"
    //     else "the word isn't palindrome"
    if (userReverse === word) {
        return `Reverse: ${userReverse}. The word you chose is palindrome`;
    } else {
        return `Reverse: ${userReverse}. The word is not palindrome`;
    }
}



/* ODD/EVEN TASK */
//2. ask user if odd or even
const btnOddEven = document.getElementById('btn-odd-even');
btnOddEven.addEventListener('click', function() {
    let userChoice = prompt('odd or even?');
    while (userChoice !== 'odd' && userChoice !== 'even') {
        alert('Please type "odd" or "even"');
        userChoice = prompt('odd or even?');
    }
    const oddEven = document.querySelector('.odd-even > h1');
    oddEven.innerHTML = 'Odd or even?';
    oddEven.innerHTML += ` You chose ${userChoice}`;
    if (userChoice === 'even') {
        userChoice = true;
    } else {
        userChoice = false;
    }
    //3. ask user a number from 1 to 5
    let userNumber = parseInt(prompt('Type a number from 1 to 5'));
    while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert('You have to choose a number from 1 to 5')
        userNumber = parseInt(prompt('Type a number from 1 to 5'));
    }
    oddEven.innerHTML += ` and you chose ${userNumber}`;
    //4. call function for generating a random number from 1 to 5
    const computerNumber = genRandomNumber(5, 1);
    const computerChoice = document.querySelector('.odd-even > h3');
    computerChoice.innerHTML = `The computer choice is ${computerNumber}.`;
    //5. sum the numbers
    const sum = userNumber + computerNumber;
    computerChoice.innerHTML += ` The sum of the numbers is ${sum}`;
    //7. call function for checking if odd or even
    const sumResult = checkOddOrEven(sum);
    //8. get the winner
    const result = document.getElementById('result');
    if(userChoice === sumResult) {
        result.innerHTML = 'Congrats! You won!';
    } else {
        result.innerHTML = 'Oh no! You lose! Click the button to try again.';
    }
})




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
/**
 * 
 * @param {number} number 
 * @returns 
 */
function checkOddOrEven(number) {
    let even = true;
    if (number % 2 !== 0) {
        even = false;
    }
    return even;
}

