const form = document.querySelector('form#flickForm')

const movieSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const flickName = f.flickName.value
  const item = document.createElement ('li')
  item.textContent = flickName
  const list = document.querySelector("#flicks")
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', movieSubmit)

const tvSubmit = function (ev){
  ev.preventDefault()
  const t = ev.target
  const tvShow = t.tvShow.value
  const item = document.createElement('li')
  item.textContent = tvShow
  const list = document.querySelector ("#flicks")
  tvlist.appendChild(item2)
}

form.addEventListener('submit', tvSubmit)

