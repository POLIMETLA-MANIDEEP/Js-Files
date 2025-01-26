// There are to types of function Factory and constructor functions.Factory
function Person(name){
    this.n = name;
}

const me = new Person('Sasi');
//In this case there is constructor varibale using this keyword.This is an example for this

function createPerson(name){
    this.n = name;
    return{
        talk(){
            return `I am ${this.n}`
        }
    }
} 

const he = createPerson('Alice');
const she = createPerson('Alisa');

console.log(he)
console.log(she)
he.talk()
she.talk()
//So here a consructor function is created and later it is used by invoking an obj like he, she and used them.

//I want to change the function in the function using obj 
he.talk = function(){
    return `Hello, I am ${this.name}`
}
console.log(he.talk());
console.log(she.talk());
//Here only the he objs code function lnly will be modified. because the function talkis not chbnged. But the obj related only chnage for temporary.

const myCoolProto = {
    talk(){
        rerurn `Hello , I am ${this.name}`
    }
}

function createHuman(name){
    return Object.create(myCoolProto, {
        name:{  //Key 
            value : name //value
        }
    })
}

const obj = createPerson('Sung');
console.log(obj.talk())

console.log(obj.__proto__.talk);

//Use of this is Simple, Reduce code duplication, Privacy of data

//Now, we will see how to create elements using function this includes the DOM concept 
function createElement(type, text, color){
    const el = document.createElement(type) //In this DOM element functions will be used this line create a HTML element
    el.innerText = text; //This line will add the content 
    el.style.color = color; // this line will add a color to the font similar to HTML
    document.body.append(el)
    return {
        el,
        setText(text){
            el.innerText = text
        },
        setColor(color){
            el.style.color = color
        }
    }
}

const h1 = createElement('h1','Hey Guys', 'red')

console.log(h1)

h1.setText('Modified text Guys!')

console.log(h1)

const p =createElement('p', 'This is paragraph','blue')
console.log(p)


//Now the Concept is Constructors Function
///firstly the constructors are used in the class. where they similar to the class name. The constructor will be executed firstly in the class

//In previous we have done the factory function to perform the task and reduced code duplication. So in the same way I also needed to implemnt it using the constructor
//Unlike factory functions the constructor function won't return any object unless we use a keyword called new 
//This constructor functions also reduce the unnecesaary execution. they only simplify the execution.

function Person(name){
    //when new keyword is mentuioned It creates an object called const this{}
   this.name = name 
}

const sina = new Person('Sina')
console.log(sina) 


// here is a monified code for above 
function Person(name){
    this.name = namethis.talk =() =>{
        return  `Hello I am ${this.name}`
    }
}

const Rahul = new Person('Rahul')
const Ben = new Person('Ben')
console.log(Rahul.talk())
console.log(Ben.talk())

//Now  I am going to write function to create an HTML Element same way as above Factory function task
function SuperElement(type, content){
    this.el = document.createElement(type)
    this.el.innerText = content;
    document.body.append(this.el)
    this.el.addEventListener('click',()=>{
        console.log(this.el)
    })
}

const array = ['a','b','c']
const myElements = array.map(items => {
    return new SuperElement('p', items)
})

console.log(myElements)


//Now the Difference between the Factory functions and Constructor Functions 
/*
function personfactory(n){
    return { name : n}
}

const me = personFactory('Sung')

//In this above factory function which is started with lower case and returns a value or object as output and simply called by a variable
//coming to the constructor functions The function starts with the Upper Case letter. This follows a this object in it when we use a new keyword in the object invoke for the function.
function Person(n){
    this.name = n
}

const me = new Person('Jinoo')

// The general purpose of these both is to create an object and use them dynamic for multiple purpose
//Coming to the difference of these both are like
In the factory function case the objects which are created will have the code copy of the factiry function. So, they can modify the code of specific objects but not the original factory function.
Means like suppose if "me" is a object for Factory function "createPerson". Now the Factory function having a method called "kind()"
This "kind()" method will be copy to the object "me" when it is invoked. Later, Object can modify using
"me.talk = function(){
    //Some new statement;
}
"  Here the new statement will not be modified in the main function. It will be just modified for the me object. When we call the "me.kind()" for next time we get the modified code.
but the createPerson will have the old code only.
So, to prevent this thing in the factory function we can use a way
 */

//This is by creating object in the function 
const coolProto = {
    talk(){
        return `Hello, I am ${this.name}`
    }
}

function createsPerson(name){
    return Object.create(coolProto, {
        name :{
            value: name
        }
    })
}

const boy = createPerson('Shoyo')
me.talk()

//By doing this type the talkw will not be directly on the object created. In this the factory Function inside included a object called myCoolProro, So it is secured to the method talk.

/*
function Person(name){
    this.name = name;
}

const Sina = new Person('Sina');
//As it is a constructor function.
//I can add the data to the main function using prototype keyword like

Person.protoype.talk = function(){
    console.log(`Hello , I am  ${this.name}`)
}

console.log(sina.talk())
*/

//Here the protoype and __proto__ are also used to insert and features to the class , Fuunctions and to Variables, Objects respectively
