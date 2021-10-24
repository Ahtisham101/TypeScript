"use strict";
exports.__esModule = true;
exports.createAdder = exports.arrayMutate = exports.printToFile = void 0;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
exports.printToFile = printToFile;
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
var myNewMutateFunc = function (v) { return v * 100; };
console.log(arrayMutate([1, 20, 3], function (v) { return v * 10; }));
function createAdder(num) {
    return function (val) { return num + val; };
}
exports.createAdder = createAdder;
var addOne = createAdder(1);
console.log(addOne(55));
