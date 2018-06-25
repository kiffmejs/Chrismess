const button = document.querySelector('button')

const changeHeading = function() {
    const heading = document.querySelector('#SecondHeading')
    heading.textContent = "Downtown Indy"
}

button.addEventListener('click', changeHeading)
