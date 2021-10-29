/*PALINDROME WORD TASK  */
//2. ask user a word and store in a variable
const userWord = prompt('Type a word');
console.log(userWord);

//3. call function for checking user input
const result = checkForPalindrome(userWord);
console.log(result);


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
    console.log(userReverse);
    //1.2. if word is palindrome print out "the word is palindrome"
    //     else "the word isn't palindrome"
    if (userReverse === word) {
        return 'The word you chose is palindrome';
    } else {
        return 'The word is not palindrome';
    }
}