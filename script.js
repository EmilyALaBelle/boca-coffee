const coffeeContainer = document.querySelector('main')

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
