const prompt = require('prompt-sync')({sigint: true});

class Node {
    constructor(year, highlight, next = null) {
      this.year = year;
      this.highlight = highlight;
      this.next = next;
    }
  }
  
  class LifeStory {
    constructor(year, highlight) {
      this.head = new Node (year, highlight);
    }
  
    insertBeginning = (year, highlight) => {
      const newNode = new Node(year, highlight, this.head);
      this.head = newNode;
    };
    
    traverse = () => {
      let current = this.head;
      while (current) {
        console.log(`Year: ${current.year}, highlight: ${current.highlight}`);
        current = current.next;
      };
    }
  
    insert = (age) => {
        let current = this.head;
        while (current.year < age) {
        let currentYear = current.year +1;
        if (current.next && current.next.year === currentYear){
            current = current.next;
        }
        else {
            let newNode = new Node (currentYear, prompt(`Please insert the highlight for Year ${currentYear} `, current.next));
            current.next = newNode;
            current = newNode;
        }
        }
    }
    
  }
  

const userLife = new LifeStory (7, "I turned seven.");
userLife.insertBeginning (3, "I started walking.");
userLife.insertBeginning (1, "I was born.");

const age = prompt("Please insert your age");
userLife.insert(age);
userLife.traverse();
