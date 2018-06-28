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
      deleteButton.textContent = 'delete'
      deleteButton
      .addEventListener (
        'click',
         (_ev) => this.removeFlick(flick, item)
        )
      item.appendChild(deleteButton)

  
    return item
  
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
  }

  this.flicks.push(flick)
  
   const item = this.renderItem(flick)
    this.list.appendChild(item)
  
    f.reset()
    f.flickName.focus()
    
  }
}

const app = new App()








