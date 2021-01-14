class card {
    constructor(color, number, next = null) {
        this.color = color;
        this.number = number;
        this.next = next;
    }
}


class deck {
    constructor(size = 0, limit = 20) {
        this.top = null;
        this.size = size;
        this.limit = limit;
    }

    isFull = () => this.size === this.limit;
 
    isEmpty = () => this.size === 0;

    peek = () =>  (this.isEmpty()? "Sorry buddy, nothing here" : `${this.top.color}-${this.top.number}`);

    push = (color, number) => { 
        if(this.isFull()){
            console.log("closed for business we're full.")
        }
        else {
        const newNode = new card (color, number, this.top);
        this.top = newNode;
        this.size++;
        }
    };

    pop = () => {
        if(this.isEmpty()) {
            console.log("nothing to give.")
        }
        else {const popped = this.top;
        this.top = popped.next;
        this.size--;
        return [popped.color, popped.number];
    }
}
}

const Deck = new deck ();
const arrcolor = ['Red', 'Blue', 'Green', 'Yellow']
while (!Deck.isFull()) {
    let color_index = Math.floor(Math.random() * 4);
    let color = arrcolor[color_index];
    let number = Math.floor(Math.random() * 9  + 1);
    Deck.push(color, number);
}

console.log(`---------\nPlayer 1: \n---------`);
for (i=1; i<6; i++) {
    let cardarr = Deck.pop()
console.log(`${i}- ${cardarr[0]}-${cardarr[1]}`)}


console.log(`---------\nPlayer 2: \n---------`);
for (i=1; i<6; i++) {
    let cardarr = Deck.pop()
console.log(`${i}- ${cardarr[0]}-${cardarr[1]}`)}



console.log(`\n\n\n-------------\nFirst card in deck: ${Deck.peek()}\n-------------`);

