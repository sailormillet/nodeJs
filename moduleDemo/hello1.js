'use strict'
let s = 'hello'
function say(name){
   console.log(s +' '+ name)
}
function hello() {
    console.log('Hello, world!');
}
//module.exports = {
//     say: say,
//     hello:hello
//}
exports.hello = hello
exports.say = say
