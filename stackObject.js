class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }
    push(val){
        this.items[this.count] = val;
        this.count++;
    }
    isEmpty(){
        if (this.count === 0) {
            return false;
        }
        else {
            return console.log("Object not empty");
        }
    }
    size(){
        return console.log(this.count);
    }
    pop(){
        if (this.count === 0){
            return undefined;
        }
        else{
            this.count --;
            delete this.items[this.count]
            return this.items;
        }
    }
    peek(){
        if (this.count === 0 ){
            return undefined;
        }
        else{
            this.count --;
            return this.items[this.count];
        }
    }
    clear(){
        this.count = 0;
        return this.items = {};

    }
}

//complexity used is 0(1) because we can access the element we want in the object and perform any operation to it.

const stack = new Stack();
stack.push(7);
stack.push(8);
stack.push(9);

console.log(stack.peek(),"stack");
console.log(stack.clear(),"stack cleared");