const form = document.querySelector('form#flickForm')

const movieSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const flickSpan = document.createElement('span')
  flickSpan.textContent = flickName

  const flickYear = f.flickYear.value
  const yearSpan = document.createElement('span')
  yearSpan.textContent = flickYear

  const item = document.createElement ('li')
  item.appendChild(flickSpan)
  item.appendChild(yearSpan) 

  const list = document.querySelector("#flicks")
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', movieSubmit)


