// Abstraction - hide the details and show the essentials

function Circle(radius){
    
    
    this.radius = radius,
    this.defaultLocation = {x:0,y:0};
 
    this.computeOptimumLocation = function(){
//...
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}
//-----------------------------------------------------------



// Private props and methods
// To make sth private we have to change this.variable to normal variable to keep it in closure

function Circle(radius){
    
    this.radius = radius
    // this.defaultLocation = {x:0,y:0};
    let defaultLocation = { x:0, y:0 };
 
    let computeOptimumLocation = function(factor){
//...
    }
    this.draw = function(){
        
        // this.computeOptimumLocation();
        computeOptimumLocation(0,1);
        defaultLocation
        this.radius
        
        console.log('draw');
    }
}
//-----------------------------------------------------------



// Getters Setters
function Circle(radius){
    
    this.radius = radius
    let defaultLocation = { x:0, y:0 };
 
    this.getDefaultlocation = function (){
        return defaultLocation;
    }

    this.draw = function(){
        console.log('draw')
    };

    Object.defineProperty(this,'defaultLocation', {  // using defineProperty function to create getters or setters
        get: function(){ // It will be read only property
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
            throw new Error('Invalid location.');

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1; // will describe error Invalid Location
circle.draw();