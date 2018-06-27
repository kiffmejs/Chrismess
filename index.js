const form = document.querySelector('form#flickForm')

const renderProperty = function (name, value) {
  const Span = document.createElement('span')
  Span.classList.add(name)
  Span.textContent = value
  return Span
}

const movieSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target


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


