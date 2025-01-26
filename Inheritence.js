// Inheritance 
// It is mainly used to reduce code duplication. In Javascript it can be done with or without classes.

// Firstly Inheritance with classes
// Now We have two Objects
const me ={
    talk(){
        console.log("Heyy I am Talking!");
    }
}

const you = {
    talk(){
        console.log('Heyy I am Talking!');
    }
}

me.talk()
you.talk()
//The above code which is having code dupication. Both the objects are performing same operation. This is code dupication. Now make me to implement using a sigle class

class Person{
    talk(){
        return 'Talking';
    }
}

const he = new Person();
const she = new Person();
he.talk();
she.talk();
//In this phase the object he & she didn't have a talk function directly. It is only related to Person class.

//to check the characteristics of a thing we use words like prototype , __proto__. 
//In this prototype is used to class, where __proto__ is used for objects.
//for example
console.log(Person.protoype === he.__proto__)
//Here we get true as output in cosole. because they both are having same features but from different sides.One is from class and otherone is from object.
console.log(me.__proto__.talk)// In this the Me object __proto__includes the Person and now we are searching the talk function indirectly using __proto__

Person.prototype.talk = function(){
    return "This is New Improvement";
}

console.log(he.talk())
console.log(she.talk())
//the talk function is updated using prototype and it will also be modified in the object also.


//The second type of inheritance is done using the pure objects. this is known as Prototypal Inheritance
// Here is a function used in the inheritance 
function hunters(){
    this.fight = function(){ //talk method in form of function expression
        return 'Fighting'
    }
}

const i = new hunters();
console.log(i.fight())
//Back to classes
class MetaHuman extends Person{
    fly(){
        return 'Flying'
    }
}

const obj = new MetaHuman();
console.log(obj.fly());
console.log(obj.talk());

//Sometimes we may get the undefined word in the console.Have you ever got a doubt that whu ??
//Here is the reason. The prototype and __proto__ will have all the relations and charcateristics of a varibale. 
//Now while in case of inheritance it will check for the value in the object and later it will search in the other inherited objects also if it is not found. 
//even though if it is not found. Then it my display the undefined word.

