//main menu elements
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const h1 = document.createElement('h1')
h1.innerHTML = "Psycho Game"
canvas.parentNode.insertBefore(h1, canvas.nextSibling)

const img = new Image()
img.onload = function() {
    ctx.drawImage(img, 0, 0)
};
img.src = 'resources/images/main-menu.jpg'

// Create START and MUSIC buttons
const button = document.createElement('button')
button.innerText = 'Start Game'
button.className = 'glow-on-hover'
canvas.parentNode.appendChild(button)

const musicButton = document.createElement('button')
musicButton.className = 'music-btn'
canvas.parentNode.appendChild(musicButton)
//MUSIC!!!!
const audio = new Audio('resources/sounds/password-infinity.mp3')
const musicOn = document.querySelector('.music-btn')
musicOn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
})

//Start the game by clearing everything
button.addEventListener('click', function() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    button.remove()
    musicButton.remove()
    h1.remove()
    //audio.pause()

    //load the game
    const script = document.createElement('script')
    script.src = 'game.js'
    document.body.appendChild(script)
})