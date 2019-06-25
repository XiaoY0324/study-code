/**
 * 真正的程序总要去接触肮脏的世界
 * IO是把不纯的操作包起来丢出去
 */
 var fs = require('fs');

 import _ from 'lodash';
 var compose = _.flowRight;

 var IO = function(f) {
     this.__value = f;
 }

 IO.of = function(x) {
    return new IO(x);
 }

 IO.prototype.map = function(f) {
    return new IO(compose(f, this.__value));
 }

 // 抛出这样一个函数
 var readFile = function(filename) {
    return new IO(function() {
        return fs.readFileSync(filename, 'utf-8');
    });
 }

 readFile('./text.txt'); // IO {__value: f} 
