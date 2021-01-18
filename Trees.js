const prompt = require('prompt-sync')({sigint: true});

class TreeNode {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild = (node) => {
        if(this.children.length<2){
        this.children.push(node); 
    }
    }
    removeChild = (node) => {
        this.children = this.children.filter((child) => child !== node);
    }

    childExists = (input) => this.children.some((name) => name === input)

    traverse = () => {
        let nodes = [this];
        while(nodes.length>0) {
            let current = nodes.pop();
            console.log(current.name);
            nodes = [...nodes, ...current.children]
        }
    }

    
}

const family = new TreeNode(prompt("Please enter the family name")); 
let fullName = prompt("Please enter child full name.")

while(fullName !== "done") {
let names = fullName.split(" ").reverse();
if (family.name === names[0]){
    if(names.length = 2) {
        family.addChild(new TreeNode (names[1]));
}
else if (names.length === 3)
{
    let index = family.children.findIndex((name) => name === names[1])
    family.children[index].addChild(new TreeNode (names[2]));
    }
}
// else if (names.length === 4)
// {
//     
// }
console.log(`Added a child to ${names[names.length - 1]}`);
fullName = prompt("Please enter child full name.");
}
family.traverse();

