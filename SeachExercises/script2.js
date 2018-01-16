// var person = {
//     name: "Darko" ,
//     lastName: "Pavleski"
// }

// console.log("Name: "+ person.name);
// console.log("Last Name: "+person.lastName);

// function Person(firstName, lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     let test = "777";
//     this.age = age;
//     this.fullName =function(){
//         console.log(this.firstName + " " + this.lastName);
//         console.log(this.test);
//     }
// }
// var me = new Person("Dejan","Nikolov",33);
// var me2 = new Person("Deko","Nikolov",33);
// me2.fullName();
// me.fullName();

    
        
    


// var student = new Person("Dejan","Nikolov", 33);
// console.log(student);

// function addressBook(){
//     this.deletePerson = function(){
//         alert("Are you sure you want to delete the person");
//     }
//     this.addPerson = function(){
//         alert("Are you sure you want to add person");
//     }
    
// }
// let me = new addressBook();
// me.addPerson();
// me.deletePerson();


function addressBook(){
    this.addPerson = function(person){
        person.FullName();
        person.Name;
    }
    
}
let me = new addressBook();
me.addPerson();
me.deletePerson();

