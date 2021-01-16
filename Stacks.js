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

    peek = () =>  (this.isEmpty()? "No cards to display!" : `${this.top.color}-${this.top.number}`);

    push = (color, number) => { 
        if(this.isFull()){
            console.log("Deck is already full.")
        }
        else {
        const newNode = new card (color, number, this.top);
        this.top = newNode;
        this.size++;
        }
    };

    pop = () => {
        if(this.isEmpty()) {
            console.log("Can't draw when the deck is empty.")
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
let player1 = [];
for (i=1; i<6; i++) {
    let cardarr = Deck.pop();
    player1[i-1] = cardarr;
    console.log(`${i}- ${cardarr[0]}-${cardarr[1]}`);
}


console.log(`---------\nPlayer 2: \n---------`);
let player2 = [];
for (i=1; i<6; i++) {
    let cardarr = Deck.pop();
    player2[i-1] = cardarr;
    console.log(`${i}- ${cardarr[0]}-${cardarr[1]}`);
}



console.log(`\n\n\n-------------\nFirst card in deck: ${Deck.peek()}\n-------------`);