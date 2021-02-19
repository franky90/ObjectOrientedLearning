class Circle{
    constructor(radius){
        this._radius = radius; // some developers mark names with _ to make them private sense
    }
}

const c = new Circle(1);
c._radius
//------------------------------


const _radius = Symbol(); // assign Symbol
const _draw = Symbol();

class Circle{
    constructor(radius){
        this.radius = radius;
        this['_radius'] = radius; // Use Symbol in as prop
    }
    [_draw](){ // Symbol will be a name of this method

    }
}

const c = new Circle(1);
c.radius

