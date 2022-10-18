// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function () {
  alert('Pretend faulty network, forget to set HTTP verb')
})

const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.innerHTML === EMPTY_HEART) {
      alert('You notified the server your like, Thank you!')
      item.innerHTML = FULL_HEART
      item.classList.add('activated-heart')
    } else if (item.innerHTML === FULL_HEART) {
      alert('Are you sure?')
      item.innerHTML = `&#128148`
    } else {
      item.innerHTML = FULL_HEART
      item.classList.add('activated-heart')
    }
  })
})

/** ------------------------ FETCH ---------------------------------- */
let submitData = {
  clickNumbers: '',
}

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  // method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(submitData),
})
  .then(function (response) {
    return response.json()
  })
  .then(function (object) {
    console.log(object)
  })
  .catch(function (error) {
    getError()
    console.log(error.message)
  })

function getError(params) {
  let modal = document.querySelector('.hidden')
  modal.classList.remove('hidden')
  setTimeout(function () {
    modal.classList.add('hidden')
  }, 5000)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject('Random server error. Try again.')
      } else {
        resolve('Pretend remote server notified of action!')
      }
    }, 300)
  })
}