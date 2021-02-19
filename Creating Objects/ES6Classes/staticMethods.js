// Static methods are available on the class itselt not an object created from this class

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    // This is Instance Method available in object
    draw(){
    }

    static parse(str){ // It's available only in class not in object itself
    const radius = JSON.parse(str).radius;
    return new Circle(radius);    
}
}

const circle = Circle.parse("{'radius: 1'}");
