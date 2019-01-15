function receive( greet, name = "BRIAN",) {
    console.log(greet + name);
}

//receive("Hello")

function greet(name,fn = function(name){
    console.log("Hello"+ name)
}){
    fn(name);
}
greet("BRIAN");