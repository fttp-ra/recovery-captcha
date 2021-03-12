var express = require('express')
var app = express();
var Tesseract = require('tesseract.js');
var Jimp = require('jimp')
var file = __dirname + "/Rcaptcha.jpg"

Jimp.read(__dirname + '/captcha.jpg', function(err, img){
    if(err) throw err.message;
    img.normalize().pixelate(1).contrast(.55).threshold({max:41, 
        replace: 250}).dither565().color([
        {apply: "mix", params: ["white",5]},
        {apply: "mix", params: ["black",1]},
    ]).write(file, function(err,img){
        if(err) throw err.message;
        Tesseract.recognize(file)
        .then(function(result){
            const text = result.data.text.trim()
            console.log(text)
        })
    })
})

app.listen(3000)