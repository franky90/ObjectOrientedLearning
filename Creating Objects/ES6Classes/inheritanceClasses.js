class Shape {
    constructor(color){
        this.color = color;
    }

    move(){
        console.log('move');
    }
}

class Circle extends Shape{ //No need to reset prototypes and constructors
    constructor(color, radius){
        super(color); // It allows to use props from Shape 
        this.radius = radius;
    }
    
    draw(){
        console.log('draw');
    }
}

const c = new Circle('blue', 1 );