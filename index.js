class App {
  constructor(){
    this.flicks = []
    this.list = document.querySelector("#flicks")
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.movieSubmit(ev)
    })
  }
 renderProperty(name, value) {
    const Span = document.createElement('span')
    Span.classList.add(name)
    Span.textContent = value
    return Span
  }
  
  renderItem(flick) {
    const item = document.createElement ('li')
    item.classList.add('flick')
  
    const properties = Object.keys(flick)

    properties.forEach((propertyName) => {
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'
      deleteButton
      .addEventListener (
        'click',
         (_ev) => this.removeFlick(flick, item)
        )
      item.appendChild(deleteButton)

      const favButton = document.createElement('button')
      favButton.textContent = 'Favorite'
      favButton.addEventListener('click', (_ev) => this.toggleFavorite(flick, item)
      )
      item.appendChild(favButton)

  
    return item
  }

  toggleFavorite(flick, item) {
    flick.favorite = item.classList.toggle('fav')
  }

  removeFlick(flick, item) {
    this.list.removeChild(item)

    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i,1)
  }

 movieSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
  
  const flick = {
    name: f.flickName.value,
    year: f.flickYear.value,
    favorite: false,
  }

  this.flicks.push(flick)
  
   const item = this.renderItem(flick)
    this.list.appendChild(item)
  
    f.reset()
    f.flickName.focus()
    
  }
}

const app = new App()








