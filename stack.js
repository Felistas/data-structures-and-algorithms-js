class Stack {
    //uses the LIFO principle, Last In First Out
    constructor(){
        this.items =[];
    }

    push(val){
        //only add new items at the top of the stack or end of the array
        this.items.push(val);
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
}