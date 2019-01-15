let first = [1,2,3];
let second =[4,5,6];

first.push(...second);

console.log(first);


function nameList(developer,...names){
    console.log(developer,...names);
}
nameList("Brian","Ingrid","Sara")