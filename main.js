//Some Variables ================================================================================

let lowerNumber = 1;
let higherNumber = 100;
let tries = 3;
let answer = Math.floor(Math.random() * (upperNumber - lowerNumber + 1)) + lowerNumber;
let guess = '';
let message = 'Guess a number between ' + lowerNumber + ' and ' + higherNumber + ':';

// Keep prompting the user for a guess until the game ends.======================================

while (tries > 0) {

    guess = prompt(message, guess);
    if (guess == null) {
        console.log('Quitting game now.');
        break;
    }else if (isFinite(guess) && guess != '') {
        guess = +guess;
        if (guess < lowerNumber) {
            console.log('Your guess should be no less than ' + lowerNumber + '.');
        }
        else if (guess > higherNumber) {
            console.log('Your guess should be no greater than ' + higherNumber + '.');
        }
        else if (guess > answer) {
            console.log('Your guess is too high.');
        }
        else if (guess < answer) {
            console.log('Your guess is too low');
        }
        else {
            console.log('Great job, you got it!');
            break;
        }
    }
    else {
        console.log('You must enter a number as a guess.');
    }
    
    tries = tries - 1;
}

if (tries == 0) {
    console.log('You ran out of tries.  The number was ' + answer + '.');
}
