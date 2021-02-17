function Shape(){
    Shape.prototype.duplicate = function (){
        console.log('duplicate');
    }
}


function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);// make Circle to Inherit from Shape

Circle.prototype.draw = function (){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
