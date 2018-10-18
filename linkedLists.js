class LinkedList {
    constructor(value){
        this.head = {
            value,
            next:null
        }
    }

    //add a value to the head of the LinkedList
    addHead(val){
        this.head.value = val
        console.log(this.head);
    }
}

const linkedList = new LinkedList("hello");
console.log(linkedList);
console.log(linkedList.addHead(4));