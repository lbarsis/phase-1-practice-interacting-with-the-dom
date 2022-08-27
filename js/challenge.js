// As a user, I can:

// See the timer increment every second once the page has loaded.
// Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "restart" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

function init() {
  const counter = document.querySelector('#counter')
  const minus = document.querySelector('#minus')
  const plus = document.querySelector('#plus')
  const pause = document.querySelector('#pause')
  const form = document.querySelector('#comment-form')
  const heart = document.querySelector('#heart')
  const likes = document.querySelector('.likes')
  const submit = document.querySelector('#comment-form')

  submit.addEventListener('submit', e => {
    e.preventDefault()

    const input = document.querySelector('#comment-input')
    const comments = document.querySelector('#list')
    const comment = document.createElement('p')
    
    comment.textContent = input.value
    comments.appendChild(comment)
    
    form.reset()
  })


  let favNumberArray =[]

  heart.addEventListener('click',() => {
    const favNumber = counter.textContent
    const favNumberElement = document.createElement('li')
    favNumberElement.classList.add('favNumElement')
    favNumberElement.id = favNumber

    const favNumberCount = countArrayRepeats(favNumberArray, favNumber)

      // select the created element 'favNumberElement'and check if favNumber already exists
    if (favNumberArray.includes(favNumber)) {
      // if true, grab element and update the textContent with favNumberCount
      const newFavNumberElement = document.getElementById(favNumber)
      newFavNumberElement.textContent = `${favNumber} was liked ${favNumberCount} times.`
    } else {
      // otherwise, post uniqe element
      favNumberElement.textContent = `${favNumber} was liked ${favNumberCount + 1} time.`
      likes.appendChild(favNumberElement)
    }
    favNumberArray.push(favNumber)
  }) 
  
  let sec = 0
  let isPaused = false

  pause.addEventListener('click', () => {
    if (!isPaused) {
      pause.textContent = 'Play'
      isPaused = true
      document.querySelector('#minus').style.pointerEvents = 'none';
      document.querySelector('#plus').style.pointerEvents = 'none';
      document.querySelector('#heart').style.pointerEvents = 'none';
    } else if (isPaused) {
      pause.textContent = 'Pause'
      isPaused = false
      document.querySelector('#minus').style.pointerEvents = 'auto';
      document.querySelector('#plus').style.pointerEvents = 'auto';
      document.querySelector('#heart').style.pointerEvents = 'auto';
    }
  })

  minus.addEventListener('click', () => sec = parseInt(counter.textContent) - 1)
  plus.addEventListener('click', () => sec++
  )

  const timer = setInterval(() => {
    if (!isPaused) {
      counter.textContent = sec;
      sec++
    }
  }, 1000)
}

function submitInput(e) {
  e.preventDefault
  const input = document.querySelector('#comment-input')
  const submit = document.querySelector('#comment-submit')
  const comment = document.createElement('p')

}

function countArrayRepeats(array, value) {
  return array.filter(elem => (elem === value)).length;
}



document.addEventListener('DOMContentLoaded', init)