function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function (){
        console.log('duplicate');
    }


// Change reseting proto and constructor 
Square.prototype = Object.create(Shape.prototype);
Square.prototype.construtor = Square;  
// to function
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.construtor = Child;    
}
// .............

function Circle(radius, color){
    Shape.call(this, color); 
    this.radius = radius;
}

extend(Circle, Shape); // Reseting proto and constructor


Circle.prototype.draw = function (){
    console.log('draw');
}

function Square(size){
    this.size = size;
}
extend(Square, Shape); // Reseting proto and constructor

const s = new Shape();
const c = new Circle(1);

// Creating circle object in two ways
new Circle(1) <==> new Circle.prototype.construtor(1)