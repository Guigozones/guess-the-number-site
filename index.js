let computerNumber
let userNumbers = []
let attempts = 0
let maxAttempts = 10

function init() {
    computerNumber = Math.floor(Math.random() * 100) + 1
    console.log(computerNumber)


}

document.getElementById('newGameButton').addEventListener('click', function() {
  location.reload();
});

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if(attempts >= maxAttempts) {
        document.getElementById('textOutput').innerHTML = 'You have reached the maximum number of attempts. The number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('disabled', 'disabled')
        return
    }
    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your guess ' + userNumber + ' is too high'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts

    }else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your guess ' + userNumber + ' is too low'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts

    }else {
        document.getElementById('textOutput').innerHTML = 'Congratulations! You guessed the number ' + computerNumber
        attempts++
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('disabled', 'disabled')
    }
}