import addNumber, { addString, format, fetchData, introduceYourself, getName } from './functions';

// IMPORTANT: RUN THIS "npx ts-node functions.test.ts" to make things work
console.log(addNumber(10,20));
console.log(addNumber(10,9));

console.log(addString("Luigi"));

console.log(format("Hello", "Luigi"));
console.log(format("Hello", 89));

fetchData().then((data) => {
    console.log(data);
});

console.log(introduceYourself("Mao", "Luigi", "Maria", "Rastafari"));

const myName ={ firstName: "Lluis", lastName:"Ras"}
console.log(getName(myName));