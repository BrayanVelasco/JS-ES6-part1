var {color, lastName} = {
    color:"Blue",
    name:"Brian",
    lastName:"Velasco",
    state:"Nariño"
};

//console.log(color, lastName);

function generatePerson(){
    return{
        name:"Brian",
        lastName:"Velasco",
        age:25,
        sister:"Ingrid"

    }

}
var {name:user,age} = generatePerson();
console.log(user)


var people =[
    {
        firstName:"Brian",
        age:25,
        gender:"Male"
    },
    {
        firstName:"Juan",
        age:24,
        gender:"Male"
    },
    {
        firstName:"Nathalia",
        age:23,
        gender:"Female"
    },
    {
        firstName:"Dayana",
        age:25,
        gender:"Female"
    }
]

//best form
people.forEach(({firstName}) => {
    console.log(firstName)    
});

//Other form like other language
for (let i=0;i<people.length;i++){
    console.log("--"+people[i].firstName);
}

var [,,Nathalia] = people;
console.log(Nathalia.gender);
function knowAge({age}){
    console.log(age);
}
knowAge(Nathalia)