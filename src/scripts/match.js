let pScore = 0
let cScore = 0

export const playMatch = () => {
  const options = document.querySelectorAll('.options button')
  const playerHand = document.querySelector('.player-hand')
  const computerHand = document.querySelector('.computer-hand')
  const hands = document.querySelectorAll('.hands img')
  const computerOptions = ['rock', 'paper', 'scissors']

  hands.forEach(hand => {
    hand.style.opacity = 0.5
    hand.addEventListener('animationend', function () {
      this.style.animation = ''
    })
  })

  options.forEach(option => {
    option.style.opacity = 1
    option.addEventListener('click', function () {
      const computerNumber = Math.floor(Math.random() * 3)
      const computerChoice = computerOptions[computerNumber]

      hands.forEach(hand => (hand.style.opacity = 1))
      options.forEach(opt => {
        opt.style.opacity = 0.5
        opt.disabled = true
      })

      playerHand.src = '/assets/hands/rock.png'
      computerHand.src = '/assets/hands/rock.png'

      setTimeout(() => {
        compareHands(this.className, computerChoice)
        playerHand.src = `/assets/hands/${this.className}.png`
        computerHand.src = `/assets/hands/${computerChoice}.png`
      }, 2000)

      playerHand.style.animation = 'shakePlayer 2s ease'
      computerHand.style.animation = 'shakeComputer 2s ease'
    })
  })
}

const compareHands = (playerChoice, computerChoice) => {
  const playerResult = document.querySelector('.wrapper-player-score .result-icon')
  const playerScoreEl = document.querySelector('.wrapper-player-score .score-text')
  const computerResult = document.querySelector('.wrapper-computer-score .result-icon')
  const computerScoreEl = document.querySelector('.wrapper-computer-score .score-text')

  // Reset
  playerResult.classList.remove('fadeIn', 'win', 'lose', 'tie')
  computerResult.classList.remove('fadeIn', 'win', 'lose', 'tie')
  playerResult.classList.add('fadeOut')
  computerResult.classList.add('fadeOut')
  playerResult.textContent = ''
  computerResult.textContent = ''
  playerScoreEl.classList.remove('fadeIn')
  playerScoreEl.classList.add('fadeOut')
  computerScoreEl.classList.remove('fadeIn')
  computerScoreEl.classList.add('fadeOut')

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }

  const empate = playerChoice === computerChoice
  const ganaJugador = winConditions[playerChoice] === computerChoice

  if (empate) {
    playerResult.textContent = 'ø'
    computerResult.textContent = 'ø'
    playerResult.classList.add('tie', 'fadeIn')
    computerResult.classList.add('tie', 'fadeIn')
    playerResult.classList.remove('fadeOut')
    computerResult.classList.remove('fadeOut')
  } else if (ganaJugador) {
    playerResult.textContent = '✓'
    computerResult.textContent = '×'
    playerResult.classList.add('win', 'fadeIn')
    computerResult.classList.add('lose', 'fadeIn')
    playerResult.classList.remove('fadeOut')
    computerResult.classList.remove('fadeOut')
    pScore++
  } else {
    playerResult.textContent = '×'
    computerResult.textContent = '✓'
    playerResult.classList.add('lose', 'fadeIn')
    computerResult.classList.add('win', 'fadeIn')
    playerResult.classList.remove('fadeOut')
    computerResult.classList.remove('fadeOut')
    cScore++
  }

  updateScore()
}

const updateScore = () => {
  const options = document.querySelectorAll('.options button')
  const playerScore = document.querySelector('.wrapper-player-score .score-text')
  const computerScore = document.querySelector('.wrapper-computer-score .score-text')
  const playerResult = document.querySelector('.wrapper-player-score .result-icon')
  const computerResult = document.querySelector('.wrapper-computer-score .result-icon')

  setTimeout(() => {
    // Ocultar resultado
    playerResult.classList.remove('fadeIn', 'win', 'lose', 'tie')
    computerResult.classList.remove('fadeIn', 'win', 'lose', 'tie')
    playerResult.classList.add('fadeOut')
    computerResult.classList.add('fadeOut')

    // Mostrar nuevo score
    playerScore.textContent = pScore
    computerScore.textContent = cScore
    playerScore.classList.remove('fadeOut')
    playerScore.classList.add('fadeIn')
    computerScore.classList.remove('fadeOut')
    computerScore.classList.add('fadeIn')

    options.forEach(option => {
      option.style.opacity = 1
      option.disabled = false
    })
  }, 2000)
}