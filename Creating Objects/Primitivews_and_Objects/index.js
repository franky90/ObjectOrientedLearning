// Primitives are copied by their value
// Objects are copied by their reference

Primitives Types : Number, String, Boolean, Symbol, undefined, null
Reference Types : Object, Function, Array

let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);

//number will have value 10

let obj = {value: 10};

function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);

//obj value 11 cause we point to the same object

// JS is dynamic changing which means we can add properties to objects on go

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = {x:1}; //simpler
or 
circle['location'] = {x:1}; 
same as
const propertyName = 'center-location'
circle[center-location] = {x:1} // useful when you want to target property


// Deleting property from object

delete circle.location; 
or 
delete.circle['location']
