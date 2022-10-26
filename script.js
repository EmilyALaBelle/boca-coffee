const coffeeContainer = document.querySelector('main')

function setLoading() {
const h2 = document.createElement('h2')
h2.innerHTML = 'Loading...'
}

function getCoffee() {
    fetch(`https://api.sampleapis.com/coffee/hot`)
        .then(responce => responce.json())
       // .then(coffeeList => displayCoffeeList(coffeeList) (does same thing as line below)
       .then(displayCoffeeList)
        .catch(console.error) //ToDo: display error for user
}

function displayCoffeeList(coffeeList) {

}

getCoffee()
