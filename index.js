console.log('hello world')

//Step 1: Grab and HTML element
const message = document.querySelector('#message')

//Step 2: Write the function

const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector('input')
    const ul1 = document.querySelector('ul')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    // const check = document.querySelector('.checked')
    
    ul1.appendChild(movie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = ('X')
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    inputField.value = ' '
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = ('Movie Deleted!')
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = ('Finished Movie Already?!?')
    }else {
        message.textContent = ("You're Watching it Again?!?")
    }
}

const addBtn = document.querySelector('form')

//Step 3: Combines step 1 and 2 using an Event Listener

addBtn.addEventListener('submit', addMovie)


