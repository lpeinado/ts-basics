"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.introduceYourself = exports.fetchData = exports.format = exports.addString = void 0;
// function with parameter and return type
function addNumber(a, b) {
    return a + b;
}
exports.default = addNumber;
// function with default parameter
var addString = function (a, b) {
    if (b === void 0) { b = ""; }
    return a + b;
};
exports.addString = addString;
// function with union type parameter
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// function with promise return type
var fetchData = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data is here");
        }, 2000);
    });
};
exports.fetchData = fetchData;
var introduceYourself = function (user) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "My name is ".concat(user, " and wanna say hello to ").concat(names.join(" "));
};
exports.introduceYourself = introduceYourself;
function getName(_a) {
    var string = _a.firstName, string = _a.lastName;
    return "".concat(firstName, " ").concat(lastName);
}
exports.getName = getName;
