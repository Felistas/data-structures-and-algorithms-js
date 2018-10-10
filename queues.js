class Queue {
    constructor(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    //adds a new element at the end of the queue
    enqueue(val){
        this.items[this.count] = val;
        this.count ++;
        return this.items;
    }

    //remove the first element from the queue
    dequeue(){
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return result;
    }

    //check if queue is empty
    isEmpty(){
        if(this.count - this.lowestCount === 0 ) {
            return console.log("Empty queue");
        }
    }

    //return the item added as the first one
    peek(){
        if (this.isEmpty()){
            return console.log("Empty queue");
        }
        else {
            return this.items[this.lowestCount];
        }
    }

    //clear the queue
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}

const queue = new Queue;
console.log(queue.enqueue(8),"enqueue");
console.log(queue.dequeue(),"denqueue");
console.log(queue.peek(),"peek");
console.log(queue.isEmpty(),"empty");
