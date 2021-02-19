

class Shape{
    move(){ // It's when we have method in base object and we want to change it
        console.log('move');
    }
}

class Circle extends Shape{
    move(){ // Js will check first this method, if doesn't exist will check it prototype
        console.log('circle.move')
    }
}

const c = new Circle();
//-----------------------

class Circle extends Shape{
    move(){ 
        super.move(); // If we want to use method from prototype
        console.log('circle.move')
    }
}