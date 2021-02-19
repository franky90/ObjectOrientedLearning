// Hoisted - raised to the top


sayHello(); // works
sayGoodbye(); // doesent work

// Function Declaration / Hoisted/ you can use function before declaring it in code
function sayHello(){}

// Function Expression / you cant use function before expression
const sayGoodbye = function() {};
//-----------------

const c = new Circle(); // will throw error, classes can't be hoisted

// Class Declaration // Most popular declaration
class Circle{
}

// Class Expression
const Square = class{
};

