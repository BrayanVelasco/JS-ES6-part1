let person = {
    name:"Brian",
    age:25
};

let pet = {
    name:"Coco",
    age:1,
    breed:"Doberman"
};
let team = {person, pet};

console.log(team.person.name +" and "+ team.pet.name);

function makeTeam(namePerson, ageP, namePet, agePet){
    let person={
        name:namePerson,
        age:ageP
    };
    let pet = {
        greet :()=> console.log(" I am a little dog")
    };
    pet.name = namePet;
    pet.age = agePet;
    console.log("My team is "+ person.name + " and "+ pet.name );

    pet.greet()

}
makeTeam("Brian",25,"Nicky",1);