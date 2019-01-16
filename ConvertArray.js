const products = 
    Array.from(document.querySelectorAll(".product"));


//products.filter((product) => parseInt(product.innerHtml) < 3000).forEach((product) => product.style.color = 'red');

/*
var cheap = products.filter(function(product){
    return parseInt(product.innerHTML) < 3000;
})
cheap.forEach(function(product){
    product.style.color = 'red'
})
console.log(cheap);*/

var cheap = products.filter((product) => parseInt(product.innerHTML) < 3000);

//change style
cheap.forEach((product) => product.style.color = 'red');

//Example dishes

const dishes = [
    {
        plate:"salmon",
        day:1
    },
    {
        plate:"sushy",
        day:2
    },
    {
        plate:"chicken",
        day:3
    },
    {
        plate:"Risotto",
        day:4
    },
    {
        plate:"Locust",
        day:5
    },
    {
        plate:"Caviar",
        day:6
    },
    {
        plate:"Paella",
        day:7
    }
]
console.log(typeof(new Date().getDay()));
var plateDay = dishes.filter((plate) => plate.day === (new Date().getDay()))
    .map((plate) => plate.plate)
    .forEach((plate) => document.getElementById("plate").innerHTML = "<h4>Today the dish is " + plate);
console.log(plateDay)