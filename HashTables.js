const prompt = require('prompt-sync')({sigint: true});

const students = [
    { name: "Jean-Luc Garza", score: 24 },
    { name: "Teddy Munoz", score: 79 },
    { name: "Georgia Ali", score: 17 },
    { name: "Vicky Calhoun", score: 8 },
    { name: "Awais Weaver", score: 65 },
    { name: "Athena Kline", score: 52 },
    { name: "Zacharia Whitaker", score: 38 },
    { name: "Clarice Davenport", score: 99 },
    { name: "Viktoria Flynn", score: 84 },
    { name: "Ianis Crossley", score: 20 },
    { name: "Johnnie Owens", score: 74 },
    { name: "Emily-Rose Erickson", score: 33 },
    { name: "Adeel Nieves", score: 100 },
    { name: "Dustin Villegas", score: 98 },
    { name: "Maxine Hughes", score: 65 },
    { name: "Bilaal Harding", score: 79 },
    { name: "Maddie Ventura", score: 71 },
    { name: "Leroy Rees", score: 44 },
    { name: "Wanda Frank", score: 73 },
    { name: "Margaux Herbert", score: 80 },
    { name: "Ali Rios", score: 70 },
    { name: "Nigel Santiago", score: 25 },
    { name: "Markus Greene", score: 78 },
    { name: "Harlan Parrish", score: 97 },
    { name: "Baran Davidson", score: 43 },
    { name: "Seth Rodriguezh", score: 67 },
    { name: "Diego Mayer", score: 100 },
]

class Node {
    constructor(name, score, next = null) {
      this.name = name;
      this.score = score;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(name, score) {
      this.head = new Node (name, score)
    }
  
    insertBeginning = (name, score) => {
      const newNode = new Node(name, score, this.head);
      this.head = newNode;
    };
    
    traverse = (x) => {
      let current = this.head;
      while (current) {
        console.log(`${current.name} is in Class ${x}`);
        current = current.next;
      };
    }
  }

class HashTable{
    constructor(classSize){
      this.classSize = classSize;
      this.classes = {A: [], B: [], C: [], D: [], Other: []};
      this.A = 0; 
        this.B = 0;
        this.C = 0;
        this.D = 0;
    }

    hash = (key) => {
        const encoded = new TextEncoder("utf-8").encode(key);
        const hashCode = encoded.reduce((a, b) => {
          return a + b;
        }, 0);
    
        return hashCode;
      };

    compress = (hashCode) => {
        return hashCode % this.classSize;
      };
    
    isFull = (x) =>  x >= classSize;
   
    insert = (key, value) => {
        const hashCode = this.hash(key);
        const index = this.compress(hashCode);
        if (value>=90 && (!this.isFull(this.A))) {
            let currentValue = this.classes.A[index];
            if (currentValue) {
                this.classes.A[index].insertBeginning(key, value);
            }
            else { 
              this.classes.A[index] = new LinkedList(key, value);
            }
            this.A++;
        } else if (value>=80 && !this.isFull(this.B)) {
            let currentValue = this.classes.B[index];
            if (currentValue) {
                this.classes.B[index].insertBeginning(key, value);
            }
            else { 
              this.classes.B[index] = new LinkedList(key, value);
            }
            this.B++;
        }  else if (value>=70 && !this.isFull(this.C)) {
            let currentValue = this.classes.C[index];
            if (currentValue) {
                this.classes.C[index].insertBeginning(key, value);
            }
            else { 
              this.classes.C[index] = new LinkedList(key, value);
            }
            this.C++;
        } else if  (value>=60 && !this.isFull(this.D)) {
            let currentValue = this.classes.D[index];
            if (currentValue) {
                this.classes.D[index].insertBeginning(key, value);
            }
            else { 
              this.classes.D[index] = new LinkedList(key, value);
            }
         this.D++; }
        }
    }



let classSize = prompt("Please insert the maximum class size.");
const Classes = new HashTable(classSize);
for (i=0; i<students.length; i++) {
    Classes.insert(students[i].name, students[i].score)
}
for (element of Classes.classes.A) if(element) element.traverse('A');
for (element of Classes.classes.B) if(element) element.traverse('B');
for (element of Classes.classes.C) if(element) element.traverse('C');
for (element of Classes.classes.D) if(element) element.traverse('D');