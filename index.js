class App {
  constructor(){
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
  
    return item
  
  }
  
 movieSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
  
  const flick = {
    name: f.flickName.value,
    year: f.flickYear.value,
  }
  
   const item = this.renderItem(flick)
  
    const list = document.querySelector("#flicks")
    list.appendChild(item)
  
    f.reset()
  }
}

const app = new App()








