var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myString = "Luigi Mario Rastafari";
var myBoolean = true;
;
//myBoolean+= " RASTAFARI LUIGI";
console.log(myBoolean);
var myRegex = /foo/;
var names = myString.split(" ");
var names2 = __spreadArray(__spreadArray([], names, true), ["maria"], false);
console.table(names);
console.table(names2);
var person = {
    firstName: "Luigi",
    lastName: "Rastafari",
    age: 50,
    cool: true,
};
console.table(person);
var ids = { 10: "mammy", 20: "papa", 30: "luigi", 40: "maria" };
ids[30] = "blah blah blah";
console.table(ids);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", "Rastafari");
