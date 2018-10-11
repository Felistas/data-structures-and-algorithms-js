class Dequeue {
    constructor(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    //add an element at the back of the dequeue
    addBack(val){
        this.items[this.count] = val;
        this.count ++;
        return this.items;
    }


    //add an element at the front of the queue
    addFront(val){
        if (this.isEmpty()){
            this.addBack(val);
        }
        this.initialIndex = 0;
        const values = Object.values(dequeue.items);
        this.items = {};
        let x = 1;
        this.items[this.lowestCount] = val;
        this.lowestCount ++;
        for (var i=1; i<=values.length; i++){
                this.items[i] = values[this.initialIndex];
                this.initialIndex ++;
        }
        return this.items;
    }

    //check if the dequeue is empty
    isEmpty(){
        if(this.items === 0){
            return true;
        }
    }

    //remove an element from the fron of the queue
    removeBack(){
        if (this.isEmpty()){
            return console.log("Dequeue is Empty");
        }
        const dequeueLength = Object.values(this.items).length;
        delete this.items[dequeueLength-1];
        return this.items;
    }

    //remove element at the back of the dequeue
    removeFront(){
        if(this.isEmpty()){
            return "Dequeue Empty";
        }
        delete this.items[0];
        const values = Object.values(this.items);
        for (var i=0; i<values.length-1; i++){
                this.items[i]=values[i];
                //fix bug
        }
        return this.items
    }

}


let dequeue =  new Dequeue;
dequeue.addBack(5);
dequeue.addBack(6);
dequeue.addBack(7);
//console.log(dequeue.addFront(8));
console.log(dequeue.removeFront());
