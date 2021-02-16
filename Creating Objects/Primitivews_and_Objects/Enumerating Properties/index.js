// Iterating through objects

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle){
    if(typeof circle[key] !== 'function') // show only values which are not functions
    console.log(key, circle[key]);
}

const keys = Object.keys(circle); // show poles of objects in array
console.log(keys)

if('radius' in circle) // if pole of circle is radius, log it
console.log('Circle has a radius.');