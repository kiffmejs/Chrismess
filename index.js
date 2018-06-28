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

  renderActionButtons (flick, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('remove')
    deleteButton.innerHTML = '<i class="far fa-trash-alt" title="remove flick"></i>'
      deleteButton
      .addEventListener (
        'click',
         (_ev) => this.removeFlick(flick, item)
        )
      actions.appendChild(deleteButton)

      const favButton = document.createElement('button')
      favButton.classList.add('fav')
      favButton.innerHTML = '<i class="fas fa-star" title="toggle favorite"></i>'
      favButton.addEventListener('click', (_ev) => this.toggleFavorite(flick, item)
      )
      actions.appendChild(favButton)

  
    return actions
  }

  renderProperties(flick, item) {
     const div = document.createElement('div')
     div.classList.add('info')
    
    
     const properties = Object.keys(flick)
   
     properties.forEach((propertyName) => {
   
     const span = this.renderProperty(propertyName, flick[propertyName])
          div.appendChild(span)
        })

        return div
      }

      renderItem(flick) {
        const item = document.createElement('li')
        item.classList.add('flick')

        const properties = this.renderProperties(flick, item)
        item.appendChild(properties)
   
     const actions = this.renderActionButtons(flick, item)
     item.appendChild(actions)

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








