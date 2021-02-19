function Shape(){
    Shape.prototype.duplicate = function (){
        console.log('duplicate');
    }
}


function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);// make Circle to Inherit from Shape

Circle.prototype.construtor = Circle; //when you reset prototype, reset constructor as well 


Circle.prototype.draw = function (){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

// Creating circle object in two ways
new Circle(1) <==> new Circle.prototype.construtor(1)