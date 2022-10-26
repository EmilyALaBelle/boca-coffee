const coffeeContainer = document.querySelector('main')

function setLoading() {
    coffeeContainer.innerHTML = ''
    const h2 = document.createElement('h2') //create an element called h2
    const loading = document.createTextNode('LOADING...')//creates a text node called loading
    h2.appendChild(loading) // Take loading and add inside of h2
    coffeeContainer.appendChild(h2) //go to coffee containerand add the h2 element to it
}

function displayCoffeeList(coffeeList) {
    coffeeContainer.innerHTML = '' //clears the contents of the coffee container
    coffeeList.map(coffee => {
        const card = document.createElement('div')
        //const img = document.createElement('img')
        const title = document.createElement('h3') //creates an h3 called title
        const description = document.createElement('p') //creates a p called description
        title.appendChild(document.createTextNode(coffee.title)) //create text that it gets from coffe title the go to title and stick the coffe title  inside of it
        description.appendChild(document.createTextNode(coffee.description))  // Go to the coffee and grab the descripton and craete a text element and stick it inside of description
        card.appendChild(title)// stick title inside of card
        card.appendChild(description) //stick descripton inside of card (append means add to the end)
        coffeeContainer.appendChild(card)//Go to coffee container and add the card to it 
    })
}

function getCoffee(temp) {
    setLoading()
    fetch(`https://api.sampleapis.com/coffee/${temp}`)
        .then(responce => responce.json())
        // .then(coffeeList => displayCoffeeList(coffeeList) (does same thing as line below)
        .then(displayCoffeeList)
        .catch(console.error) //ToDo: display error for user
}


getCoffee('hot')
