// Polymorphysm  - many forms / Different implementations of methods


function Shape(){
    
}

Shape.prototype.duplicate = function (){
    console.log('duplicate');
}

function Circle(){

}

extend(Circle, Shape); // Reset Prototype

Circle.prototype.duplicate = function (){ // Overide method which is declared in base object
    console.log('duplicate circle');
}

function Square(){

}

extend(Square, Shape);

Square.prototype.duplicate = function (){ // Overide method which is declared in base object
    console.log('duplicate square');

const shapes = [
    new Circle(),
    new Square()
];


// Polymorphysm OOP Solution
for(let shape of shapes){
    shape.duplicate()
}

// Functional Solution
for(let shape of shapes){
    if(shape.type === 'circle'){
        duplicateCircle();
    }else if (shape.type === 'square'){
        duplicateSquare();
    }else{
        duplicateShape();
    }
}