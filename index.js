const form = document.querySelector('form#flickForm')

const renderProperty = function (name, value) {
  const Span = document.createElement('span')
  Span.classList.add(name)
  Span.textContent = value
  return Span
}

const renderItem = function(flick) {
  const item = document.createElement ('li')
  item.classList.add('flick')

  const properties = object.keys(flick)
  properties.forEach(function(propertyName){
    const span = renderProperty(propertyName, flick[propertyName])
    item.appendChild(span)
  })

  return item

}

const movieSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

const flick = {
  name: f.flickName.value,
  year: f.flickYear.value,
}

  const flickSpan = renderProperty('name', f.flickName.value)
  const yearSpan = renderProperty('year', f.flickYear.value)

  const item = document.createElement ('li')
  item.classList.add('flick')
  item.appendChild(flickSpan)
  item.appendChild(yearSpan) 

  const list = document.querySelector("#flicks")
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', movieSubmit)


