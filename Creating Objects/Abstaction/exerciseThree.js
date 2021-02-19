function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function(){console.log('focused')}

const e = new HtmlElement();

function HtmlSelectElement(){
    this.items = [],
    this.addItem = function(item){
        this.items.push(item)
    },
    this.removeItem = function(item){
       this.items.splice(this.items.indexOf(item), 1);
    }
}

 
HtmlSelectElement.prototype = new HtmlElement(); 

const s = new HtmlSelectElement();



// s.addItem(5);
// s.addItem(6);


