'use strict'

let num = 33721;
let multi = eval(num.toString().split('').join('*'));
let pow = multi ** 3;

console.log(multi);
alert(pow.toString().substring(0, 2));