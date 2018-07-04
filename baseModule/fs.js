//读写文件fs
'user strict'
var fs = require('fs')
fs.readFile('sample.txt', 'utf-8', function (err, data) {
       if(err){
          console.log(err) 
       }else{
          console.log(data)   
       }
})

//读图片

fs.readFile('poster.png', function(err, data){
      if(err){
        console.log(err)
      }else{
        console.log(data)
        var text = data.toString('utf-8') 
        console.log(text)
        console.log(Buffer.from(text,'utf-8'))
      }
});

//写文件

var data = 'my name is amy'

fs.writeFile('output.text',data, function(err){
     if(err){
       console.log(err)
     }else{
       console.log('ok')
     }
})
