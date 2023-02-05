const holes = document.querySelectorAll('.holes')
const h1 = document.querySelector('.score')
const sound = new Audio('images/whack.mp3')
let score = 0;
let timer = null;


function run () {
    // Function so that it randomly selects a hole
    const i = Math.floor(Math.random() * (holes.length))
    const hole = holes[i]

    const img = document.createElement('img')
    img.classList.add('moles')
    
    // Updates scoreboard by one everytime you click on a mole as well as play sound when you whack a mole.
    img.src = `images/${i}.png`
    img.addEventListener('click', () => {
        score++
        sound.play()
        h1.textContent = `Score: ${score}`
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 100)
    })

    hole.appendChild(img)

// Gives you three seconds to whack a mole before alerting you that the game is over.
    timer = setTimeout (() => {
        hole.removeChild(img)
        alert(`Game Over! Your score is ${score}!`)
        clearTimeout(timer)
        run()
        score = 0
    }, 3000);
    
// After game resets, the score does not reset back to zero on the screen but starts from one when you start game

}

run();

