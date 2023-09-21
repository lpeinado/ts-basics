let myString = "Luigi Mario Rastafari";
let myBoolean =true;

interface User {
    firstName: string,
    lastName: string,
    age: number,
    cool: boolean,
};

//myBoolean+= " RASTAFARI LUIGI";
console.log(myBoolean);

let myRegex = /foo/;

const names: string[] = myString.split(" ");
const names2: Array<string> =[...names, "maria"];
console.table(names);
console.table(names2);

const person: User = {
    firstName: "Luigi",
    lastName: "Rastafari",
    age:50,
    cool: true,
};

console.table(person);


const ids: Record<number, string> = {10:"mammy", 20:"papa", 30:"luigi", 40:"maria"};

ids[30] = "blah blah blah";

console.table(ids);

for(let i = 0; i < 10; i++){
    console.log(i);
}


// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }

  greet("Brendan","Rastafari");


[1,2,3].forEach(v => console.log(v))
const out = [4, 5, 6].map(v => v*3);
console.log(out);