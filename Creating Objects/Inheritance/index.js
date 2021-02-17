// Let objects to inherit methods and variables of other objects

// Main object we call Base/Super/Parent
// Sub objects we call Derived/Sub/Child

//Classical Inheritance
//---------------


//Prototypical Inheritance 
// In js we dont have classes
// Think about Prorotype as Parent
// All objects inherit from 'SuperBase' Parent
// Every object has prototype apart root object
//----------------


//Multi-level Inheritance

let myArray = []; // example is myArray -> arrayBase -> SuperBase
// Objects created by a given contrustor will have the same prototype.
//----------------

// Prototypes Attributes
let person = {name: "Pete"};
console.log(person);

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); 
//  console.log('descriptor')

Object.defineProperty(person, 'name', { // In objects we use PropertyDescriptor
    writable:false, // can't edit object
    enumerable: false, // won't show object keys
    configurable: false // can't delete object
})
//----------------


//Constructor Prototypes
Object.getPrototypeOf(myObj) <==> myObj.__proto__ // Parent of myObj

function Circle(radius){
    this.radius = radius;
}

Circle.prototype // target parent object of Circle
//----------------

//Prototype vs Instance Members
// When we access property or method of object nad there is none of them JS is checking prototype of this object
function Circle(radius){
    // Instance members
    this.radius = radius;
}

// Circle.prototype === c1__proto__ <- they reference same object in memory

// Prototype members
Circle.prototype.draw = function(){ // draw method will be in prototype not in Circle
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);
//----------------


//Iterating Properties
function Circle(radius){
    
    this.radius = radius;

    this.move = function(){
        console.log('move')
    }
}

const c1 = new Circle(2);

Circle.prototype.draw = function (){
    console.log('draw');
}

// Returns instance members
console.log(Object.keys(c1)); // will show radius and move , there is no draw

// Retyrns all members (instance + prototype)
for (let key in c1) console.log(key);








