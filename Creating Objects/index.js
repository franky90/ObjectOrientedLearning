
// Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1); // creating empty object, poiting to this object, returning object

// Every object has constructor parameter, which shows function which created this object.
// IN JavaScript Functions are objects