var myMap = new Map();
//metods
/*
set()
get() (key) return value
size return size of map
clear() clear the map
has() (key) if have value return true
map(key,value)

*/
myMap.set('foo','bar');
myMap.set('hello',"world");

console.log(myMap.get('foo'));


//iterators
//key
for(let key of myMap.keys()){
    console.log("key ",key);
}

//values
for(let value of myMap.values()){
    console.log("value ", value);
}
//key and value
for (var [key,value] of myMap.entries()){
    console.log(key +" "+value);
    
}