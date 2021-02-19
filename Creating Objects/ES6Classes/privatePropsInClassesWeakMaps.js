
const _radius = new WeakMap(); // WeakMap is dictionary where keys are objects and values are anything
const _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius); // Sets radius prop as private

        _move.set(this, () => {
            console.log('move', this);
        })
    }

    draw(){
        console.log(_radius.get(this)) // displays value of private prop
    }

    drawMove(){
        _move.get(this)();

        console.log('draw');
    }
}

const c = new Circle(1);
