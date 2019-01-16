/*Iterators 

let iterble = {
    [Symbol.iterator]();//define iterable
}
let iteratorObject = {
    next(): {
        value:"String",
        done:true //false iterator enable true disable 
    }
}*/
//Example for understand next 
let colors = ['blue','green', 'Red'];

function iterador(array){
    let count = 0;
    return {
        next: function(){
            if (count < array.length){
                return {value:array[count++], done:false}
            } 
            else{
                return {value:undefined, done:true}
            }
        }
    }
}

let itr= iterador(colors);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());//true can not  iterate


//GENERATORS
function* generator(){
    yield 1;
    yield 10;
    yield 1000;
}

//call generator

let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//example 

function* sum(number){
    yield 10 + number;
    yield* greet();
    while(true){
        yield number+1
        number +=1;
        
    }
}
function* greet(){
    yield "Hello from other generator";
    yield "Bye of this generator"
}

let add = sum(60);
console.log(add.next());
console.log(add.next());
console.log(add.next());
console.log(add.next());
console.log(add.next());
console.log(add.next());
console.log(add.next());