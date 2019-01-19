var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//product of two numbers
router.get('/product/:a1/:a2', function(req, res) {
  var num1 = parseInt(req.params.a1);
  var num2 = parseInt(req.params.a2);
  if(isNaN(num1) || isNaN(num2)){
    res.status(400);
    res.end("Please Type a Number");
    }
    else{
        res.end((num1*num2).toString());
    }
});
//accepts a file content and writes them to the disk.
router.get('/fileContent/:inputvalue', function(req, res) {
    var fileContent = req.params.inputvalue;
    fs.writeFile("readtextfile.txt", fileContent, function(err) {
        if(err) {
            res.end(err);
        }
        res.end(fileContent);
    });
  });

//accepts a String as an input name and returns the first non-repeating character in the String.

router.get('/stringvalue/:str1',function(req,res){
  var value = req.params.str1;
  if(value==" "){
    res.end('please type the string')
  }
  else{
    for (var i = 0; i < value.length; i++) {
      var c = value.charAt(i);
      if (value.indexOf(c) == i && value.indexOf(c, i + 1) == -1) {
          res.end(c);
      }
  }

}
})



//Web Crawler program
router.get('/webcrawler',function(req,res){
  var arr=[];
var request = require('request');
var cheerio = require('cheerio');
var searchTerm = 'screen+scraping';
var url = "https://wiprodigital.com/";
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //jquery get all hyperlinks
  $(links).each(function(i, link){
    arr.push($(link).attr('href'));
    fs.writeFile('testfile.txt',arr,function(err){
      if(err) {
        return console.log(err);
    }
    res.end(arr.join('\r\n'));
    })
  });

});
})
module.exports = router;
