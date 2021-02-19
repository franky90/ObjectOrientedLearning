// Stack we can add items to stack but when removing we will start from last added element
const _stackArray = new WeakMap();
class Stack{
    constructor(){
        _stackArray.set(this, []);
        }

    
    
    pop(){
        if(_stackArray.get(this).length > 0)
        _stackArray.get(this).pop();
        else
        throw new Error('Stack is empty')
    }

    peek(){
        if(_stackArray.get(this).length > 0)
        console.log(_stackArray.get(this)[_stackArray.get(this).length - 1]);
        else
        throw new Error('Stack is empty')
    }

    get count(){  // get makes it read only
    return _stackArray.get(this)
    }

    push(){
    _stackArray.get(this).push();
    }
}

const stack = new Stack();



