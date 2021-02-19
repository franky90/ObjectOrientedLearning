const Circle = function(){
    this.draw = function(){
        console.log(this);
    }
}

const c = new Circle();

// Method Call , 'this' will point to this object
c.draw();

const draw = c.draw;

// Function Call , when called like this it's not part of an object 'this' will point to global object
// It's prevents from modyfing global objects
draw();
//------------------------------

class Circle{
    draw(){
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();
