// Dont use it everywere. Start building objects and when you notice they shares same feature then inherit
// Keep it simple
// Avoid creating inheritance hierarchies, keep in them on one level

// Composition over Inheritance

// Mixins is assigning methods of objects to other objects
function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating')
    }
} 

const canWalk = {
    walk: function(){
        console.log('walking')
    }
} 

const canSwim = {
    swim: function(){
        console.log('swim')
    }
}

Object.assign // let us to copy methods or props from one object to another

const person = Object.assign({}, canEat, canWalk) // copy methods 

// or 

function Person(){
}

Object.assign(Person.prototype, canEat, canWalk); // copy methods 

const person = new Person(); // this Person can eat and walk

//...........

function GoldFish(){

}

Object.assign(Goldfish.prototype, canEat, canSwim);

const goldfish = new GoldFish();