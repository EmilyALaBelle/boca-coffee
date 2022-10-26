function getCoffee() {
    fetch(`https://api.sampleapis.com/coffee/hot`)
        .then(responce => responce.json())
        .then(coffeeList => console.log(coffeeList))
        .catch(console.error) //ToDo: display error for user
}