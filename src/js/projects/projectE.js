(() => {
    const startGameButton = document.getElementById('start-game-button');
    const balanceAmount = document.getElementById('balance-amount');
    const activeGameArea = document.getElementById('game-active-area');
    const highLowText = document.getElementById('higher-lower-text');
    const gameOverModal = document.getElementById('game-over-modal');
    const newGameButton = document.getElementById('new-game-button');
    const guessButton = document.getElementById('guess-button');
    const guessInput = document.getElementById('guess-input');
    let guessCount = 1;

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // This is where we check our current balance.
    const balanceAmountValue = sessionStorage.getItem('winBalance');
    if (balanceAmountValue === null) balanceAmount.innerHTML = 'Your current balance is $0'
    else balanceAmount.innerHTML = `Your current balance is $${balanceAmountValue}`;

    const startGame = () => {
        let headerSecondary = document.getElementById('header-secondary');
        activeGameArea.style.display = 'block';
        startGameButton.style.display = 'none';
        headerSecondary.style.display = 'none';
    }

    const validateGuess = () => {
        let maxGuesses = 10; ++guessCount;
        if (guessCount == maxGuesses) gameLose();
    }

    // Handle winStreak value.
    let winStreak = sessionStorage.getItem('winStreak');
    if (winStreak === null) winStreak = 0;
    // WinStreak Text.
    const winStreakText = document.getElementById('win-streak-text');
    winStreakText.innerHTML = `WinStreak is: ${winStreak}`;

    // Verify that the numbers are within range and acceptable for the game.
    const inputAcceptable = () => {
        if (guessInput.value > 100) {
            guessInput.value = null;
            inputErrorMessage.innerText = 'Please choose a number within the guessing range of 0 to 100.';
        } else if (guessInput.value < 0) {
            guessInput.value = null;
            inputErrorMessage.innerText = 'Guess value cannot be negative.'
        }
    }

    const validateInput = () => {

        switch (true) {
            case (guessInput.value < randomNumber):
                highLowText.style.display = 'block';
                highLowText.innerHTML = 'The number is higher!';
                break;

            case (guessInput.value > randomNumber):
                highLowText.style.display = 'block';
                highLowText.innerHTML = 'The number is lower!';
                break;

            case (guessInput.value == randomNumber):
                winStreak++;
                let balance = winStreak * 500;
                highLowText.style.display = 'block';
                highLowText.innerHTML = 'You guessed it!';
                sessionStorage.setItem('winStreak', winStreak);
                sessionStorage.setItem('winBalance', balance);
                gameWin();
                break;
        }
    }

    // Define Game Result Text.
    const gameResult = document.getElementById('game-result');
    // New game button action.
    const newGame = () => location.reload();

    const gameEnd = () => {
        activeGameArea.style.display = 'none';
        newGameButton.style.display = 'block';
        guessInput.value = null;
    }

    const gameWin = () => {
        gameResult.innerHTML = 'You won $500!';
        highLowText.style.display = 'block';
        gameEnd();
    }

    const gameLose = () => {
        // Todo: Update Balance.
        highLowText.style.display = 'block';
        gameOverModal.style.display = 'block';
        sessionStorage.clear();
        gameEnd();
    }

    // Close out of the Game Over modal.
    const modalXButton = document.getElementById('close-modal');
    modalXButton.onclick = () => gameOverModal.style.display = 'none';
    const closeDivButton = document.getElementById('close-modal-div');
    closeDivButton.onclick = () => gameOverModal.style.display = 'none';

    // Reset Button Action.
    const resetButton = document.getElementById('reset-btn');
    resetButton.onclick = () => { location.reload(); sessionStorage.clear(); }

    // Confetti button functionality.
    const animateButton = (e) => {
        e.preventDefault;
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(() => e.target.classList.remove('animate'), 1000);
    };

    const className = document.getElementsByClassName("confetti-button");
    for (let i = 0; i < className.length; i++) {
        className[i].addEventListener('click', animateButton, false);
    }

    guessInput.addEventListener('change', inputAcceptable, false);
    startGameButton.addEventListener('click', startGame, false);
    guessButton.addEventListener('click', validateGuess, false);
    guessButton.addEventListener('click', validateInput, false);
    newGameButton.addEventListener('click', newGame, false);
})();