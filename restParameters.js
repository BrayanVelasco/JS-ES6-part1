//arguments

function myFunc(){
    console.log(...arguments)
}
myFunc(1,2,3,45)

//rest

function addStudent( arrayStudents, ...students){
    //console.log(arguments);
    for(let i=0; i< students.length; i++){
        arrayStudents.push(students[i]);

    }
    return arrayStudents

}
let arrayStudents = [];
let students = addStudent(arrayStudents,"Brian","sara","carlos","Ana");
console.log(students);