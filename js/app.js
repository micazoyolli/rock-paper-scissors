const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the Game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const scoreScreen = document.querySelector('.score');
    const matchScreen = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      scoreScreen.classList.add('fadeIn');
      matchScreen.classList.add('fadeIn');
    });
  };

  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });

    // Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        playerHand.src = './assets/rock.png';
        computerHand.src = './assets/rock.png';

        setTimeout(() => {
          compareHands(this.className, computerChoice);
          // Update Images
          playerHand.src = `./assets/${this.className}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // Animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector('.winner');

    // Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'Empate!!!';
      return;
    }

    // Check for Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      }
    }

    // Check for Paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }

    // Check for Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Call all the inner functions
  startGame();
  playMatch();
};

// Start the game function
game();