const ul = document.getElementById('root')
ul.setAttribute('class', 'menuElement')



async function apiFetch() {
  try {
    const response = await fetch('http://localhost:4444/')
    const data = await response.json()
    createUI(data)
  } catch (error) {
    console.error(error)
  }
}

function createUI(users) {
  users.map(user => {
    const li = document.createElement('li')
    li.setAttribute('class', 'list-names')
    li.innerHTML = user.name
    return root.append(li) 
  })

}

apiFetch()