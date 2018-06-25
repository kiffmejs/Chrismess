const button = document.querySelector('button')

const changeHeading = function() {
    const heading = document.querySelector('h1')
    heading.textContent = "Jim Kiffmeyer\'s Page"
}

button.addEventListener('click', changeHeading)
