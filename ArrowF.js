var createGreeting = function(message, name){
    return message + name;
}

console.log(createGreeting("Hello", "Brian"));


var createArrow = (message, name) => {
    return message + name;
}

console.log(createArrow("Hello from arrow","Brian"));

var createBestArrow = (message, name) => message+name;
console.log(createBestArrow("Hello from best Arrow ","Brian"))


var deliveryBoy = {
    name:"BRIAN",
    HandlesMessage: function (message, handler){
        handler(message);
    },
    receive: function(){

        this.HandlesMessage("Hello ",(message) =>console.log(message + this.name));
    }
}
deliveryBoy.receive();