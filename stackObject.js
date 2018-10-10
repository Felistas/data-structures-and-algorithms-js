class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }

    //add an item to the stack
    push(val){
        this.items[this.count] = val;
        this.count++;
    }

    //check if the stack is empty or not
    isEmpty(){
        if (this.count === 0) {
            return false;
        }
        else {
            return console.log("Object not empty");
        }
    }

    //get the size of the stack
    size(){
        return console.log(this.count);
    }

    //remove an item from the stack
    pop(){
        if (this.isEmpty){
            return undefined;
        }
        else{
            this.count --;
            delete this.items[this.count]
            return this.items;
        }
    }

    //return the first item in the stack
    peek(){
        if (this.isEmpty){
            return undefined;
        }
        else{
            this.count --;
            return this.items[this.count];
        }
    }

    //remove all the elements from the stack
    clear(){
        this.count = 0;
        return this.items = {};

    }
}

//complexity used is 0(1) because we can access the element we want in the object and perform any operation to it.

const stack = new Stack();
stack.push(7);
stack.push(8);
stack.clear();

console.log(stack.peek(),"stack");
console.log(stack.clear(),"stack cleared");