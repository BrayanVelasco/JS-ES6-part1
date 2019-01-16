var prom = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (false){
            resolve("Process Successful"); //correct parameter 
         }
         else{
             reject("Process Bad"); //when operation is bad
         }
    }, 2000 ) 
});

prom.then((data) => console.log('success : ',data), (error)=>{
    console.error("New msg error", error);
});

//prom.catch((error) => console.error('error : ',error));

//State of promise

var newPromise = new Promise((resolve, reject) =>{
    console.log("......loading");
    setTimeout(() => resolve("Promise solve successful"),2000);
    setTimeout(() => resolve("Promise  unsuccessful"),2000)
});
newPromise
    .then((res) => console.log('Resolve',res))
    .catch((error) => console.log('error',error));

//several promises WITH ALL
var promise1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Promise1 solve successful"));
});
var promise2 = new Promise((resolve,reject) =>{
    setTimeout(() => reject("Promise2 solve unsuccessful"),1000);
});
var promise3 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Promise3 solve successful"),2000);
});
var promise4 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("Promise4 solve successful"),3000);
});


Promise.all([promise1, promise2, promise3, promise4])//return promise failed
    .then((values) => console.log("Value: ",values))
    .catch((error) => console.log("error",error))

//race get first promise failed
Promise.race([promise1, promise2, promise3, promise4])//return promise failed
    .then((values) => console.log("Value: ",values))
    .catch((error) => console.log("error",error))




//
var firstPromise = new Promise((resolve,reject) =>{
    resolve("First promise successful");
});
var secondPromise = new Promise((resolve,reject) =>{
    rsolve("Second promise successful");
});
var lastPromise = new Promise((resolve,reject) =>{
    reject("Last promise Unsuccessful");
});

firstPromise
    .then (
        res => {
            console.log(res);
            return secondPromise;
        }
    )
    .then(
        resSecond => {
            console.log(resSecond)
            return lastPromise
        }
    )
    .then(
        resLast => {
            console.log(resLast)
        }
    )
    .catch(error => console.error(error));