export const startGame = () => {
  const playBtn = document.querySelector('.intro button')
  const introScreen = document.querySelector('.intro')
  const gameScreen = document.querySelector('.game')

  playBtn.addEventListener('click', () => {
    introScreen.classList.add('fadeOut')
    gameScreen.classList.add('fadeIn')
  })
}