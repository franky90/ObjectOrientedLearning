function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

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

const c = new Circle();


