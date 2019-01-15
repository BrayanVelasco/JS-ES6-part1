var fs = [];
for(let i = 0; i < 10; i++){
    fs.push(()=>console.log(i));
}

fs.forEach((f)=>f());


//var scope global and let block scope in a function

function init(){
    
    if(true){
        let name = "Brian H"
    }
    console.log(name)
}

init()