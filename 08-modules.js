'use strict'

let myData = require('./08-my-data.js');

console.log(
    myData.name,
    myData.email,
    myData.phone
);

let Clock = require('./09-moduleClock.js'),
cucu = new Clock();