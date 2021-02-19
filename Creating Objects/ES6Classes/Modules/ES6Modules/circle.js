const _radius = new WeakMap();

 export class Circle { // we use export name
    constructor(radius){
        _radius.set(this, radius);
    }

    draw(){
        console.log('Circle with radius' + _radius.get(this,radius))
    }
}