
function Circle(radius){
    this.radius = radius;

    this.draw = function(){
        console.log('draw')
    }
}

// Alternatywny zapis jako klasa

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    draw() {  // methods we add in body of class not in constructor (without 'function' syntax)
        console.log('draw')
    } 
}

const c = new Circle(1);