//爬虫
var http =require('http');
var url ='http://www.imooc.com/learn/348';
var cheerio =require('cheerio'); 

function filterChapters(html){
  var $ = cheerio.load(html)
  var chapters = $('.chapter')
  // console.log(chapters);

  var courseData =[];
  chapters.each(function(item){
     var chapter = $(this);
     var chapterTitle = chapter.find('strong').text();
 
    courseData.push(chapterTitle)
  
  })
  return courseData

}

http.get(url,function(res){
   var html =''
   res.on('data',function(data){
   	html += data
   });
   res.on('end',function(){

   var courseData =	filterChapters(html);
   console.log(courseData)

   }).on('error',function(){
   	console.log('获取出错')
   });
})