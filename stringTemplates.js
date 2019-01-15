function greetings(){
    let salulation = "Hello";
    let place = "Pasto"
    let greeting = `${salulation}, 
            Word    from
                            ${place} for everybody`;

console.log(greeting);
}

function operations(x,y){
    let result = `${x+y} result of ${x} + ${y}`;
    console.log(result);
}
greetings();
operations(4,6)

function tag(strings,...values){
    if(values[1] >= 16){
        values[2] = "tired"
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}${values[2]}`
    console.log(strings)
    console.log(values)
}

var message = tag`Hello ${"Brian"} now is ${new Date().getHours()} o'clock, I'm ${""}`
console.log(message);