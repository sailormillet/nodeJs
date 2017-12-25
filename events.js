var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
//addEventListener
life.setMaxListeners(11)
function water(who){
 console.log('给'+ who+'倒水')
}
life.on('qiuanwei',water)
life.on('qiuanwei',function(who){
  console.log('给'+ who+'揉肩')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'盛饭')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'按摩')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'玩游戏')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'打豆豆')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'打豆豆')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'打豆豆')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'打豆豆')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'打豆豆')
})
life.on('qiuanwei',function(who){
  console.log('给'+ who+'打豆豆')
})
life.on('qiuniai',function(who){
  console.log('给'+ who+'买衣服')
})
life.on('qiuniai',function(who){
  console.log('给'+ who+'交工资')
})
life.removeListener('qiuanwei',water)
life.removeAllListeners('qiuanwei')

var hasConfortListener = life.emit('qiuanwei','hanzi')
var haslovedListener = life.emit('qiuniai','妹子')
// var hasPlayedListener = life.emit('qiuwanhuai','hanzihemeizi')

console.log(life.listeners('qiuanwei').length)
console.log(EventEmitter.listenerCount(life , 'qiuanwei'))

// console.log(hasConfortListener)
// console.log(haslovedListener)
// console.log(hasPlayedListener)