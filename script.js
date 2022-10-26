const coffeeContainer = document.querySelector('main')

function setLoading() {
    coffeeContainer.innerHTML = ''
    const h2 = document.createElement('h2') //create an element called h2
    const loading = document.createTextNode('LOADING...')
    h2.appendChild(loading) // Take loading and add inside of h2
    coffeeContainer.appendChild(h2)
}

function displayCoffeeList(coffeeList) {
    coffeeContainer.innerHTML - ''
    coffeeList.map(coffe => {
const card = document.createElement('div')
const img = document.createElement('img')
const title = document.createElement('h3')
const description = document.createElement('p')        
    })
}

function getCoffee() {
    setLoading()
    fetch(`https://api.sampleapis.com/coffee/hot`)
        .then(responce => responce.json())
        // .then(coffeeList => displayCoffeeList(coffeeList) (does same thing as line below)
        .then(displayCoffeeList)
        .catch(console.error) //ToDo: display error for user
}


getCoffee()
