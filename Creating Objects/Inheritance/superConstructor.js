function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function (){
        console.log('duplicate');
    }



function Circle(radius, color){
    Shape.call(this, color); // This is how you call super constructor !!
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.construtor = Circle; 


Circle.prototype.draw = function (){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

// Creating circle object in two ways
new Circle(1) <==> new Circle.prototype.construtor(1)