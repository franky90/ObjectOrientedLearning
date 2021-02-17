// Avoid Extending and modificating Build-in Objects 

Array.prototype.shuffle = function (){
    //..
}

// Dont modify objects you dont own!
const array = []
array.shuffle(); // It can cause error when function is wrong