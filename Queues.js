class Node {
    constructor(groupSize, next=null) {
        this.groupSize = groupSize;
        this.next = next;
    }

}

class Queue {
    constructor() {
        // const newNode = new Node(10);
        this.front = null;
        this.back = null;
        this.limit = 20;
        this.length = 0;

    }

    isFull = () => this.length === this.limit;

    isEmpty = () => this.length === 0;

    peek = () => (this.Empty? "Be the first in queue!" : this.front.data);

    enqueue = (groupSize) => {
        if(this.isFull()) {
            console.log('Please wait. The queue is full.')
        } else {
            let newNode = new Node(groupSize);
            while (groupSize > 12) {
               let newNode = new Node(12);
                if(this.isEmpty()) {
                    this.front = newNode;
                    this.back = newNode;
            } else {
                this.back.next = newNode;
                this.back = newNode;
            }
        this.length ++ ;
        groupSize -= 12;
            }
            newNode = new Node(groupSize);
            if(this.isEmpty()) {
                this.front = newNode;
                this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length ++ ;
        }
}

    dequeue = () => {
        if(this.isEmpty()) {
            console.log('The queue is empty!')
        } else {
            const removed = this.front;
            if (this.length === 1) {
                this.front = null;
                this.back = null;
            } else {
            this.front = removed.groupSize;
            }
            this.length --;
            return removed.groupSize;
    }
}

    displayWT = () => {
        console.log(`Your current waiting time is: ${this.length * 30} seconds`); 
    }
}

Park = new Queue ();
Park.displayWT();
Park.enqueue(10);
Park.enqueue(100);
Park.enqueue(2);
Park.enqueue(5);
Park.displayWT();
console.log(Park.dequeue());
Park.displayWT();






