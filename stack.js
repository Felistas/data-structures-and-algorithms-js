class Stack {
    //uses the LIFO principle, Last In First Out
    constructor(){
        this.items =[];
    }

    push(...val){
        //only add new items at the top of the stack or end of the array
        this.items.push(...val);
    }
    pop(){
        //we use the pop method in an array since it removes the last item added in that array
        //following the LIFO principle
        return this.items.pop();
    }
    peek(){
        //get the last item in the array
        const x = this.items.length;
        return this.items[x-1];
    }
    clear(){
        //remove items in the stack
        this.items = [];
    }
    size(){
        //returns the size of the stack
        return this.items.length;
    }
    isEmpty(){
        if (this.items.length > 0 ){
            return console.log("Stack is not empty");
        }
        else {
            return console.log("Stack is empty");
        }
    }
}

//complexity used is 0(1) because we can access the element we want in the object and perform any operation to it.

const stack = new Stack();
stack.push(6,8,9);
stack.push(7);
stack.peek();
stack.push(11);
stack.push(13);
console.log(stack, "Stack");
console.log(stack.peek(), "peek");
console.log(stack.size(), "size");
console.log(stack.isEmpty(), "isEmpty");
console.log(stack.pop(), "pop");
console.log(stack.size(), "size");