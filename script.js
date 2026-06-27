function chooseCard(event) {
  const type = event.currentTarget.id.replace(/-button/, '')
  const tableClass = `.${type}`
  document.querySelectorAll('table').forEach(table => table.style.display = 'none')
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.innerText = '▢'
    if (toggle.style) toggle.style.color = null
  })
  document.querySelectorAll(tableClass).forEach(table => table.style.display = 'table')
}

function toggle(event) {
  const display = event.currentTarget.querySelector('.toggle')
  switch (display.innerText) {
    case '▢':
      display.innerText = '✗'
      display.style.color = 'red'
      break
    case '✗':
      display.innerText = '✓'
      display.style.color = 'green'
      break
    case '✓':
      display.innerText = '▢'
      display.style.color = null
      break
  }
}
