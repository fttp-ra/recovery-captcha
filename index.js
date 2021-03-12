const http = require('http')
const fs = require('fs')
const url = "http://contribuyente.seniat.gob.ve/BuscaRif/Captcha.jpg"

var petition = http.get(url, function(response, err){
    if(response.statusCode === 200){
        const file = fs.createWriteStream("captcha.jpg")
        response.pipe(file)
    }
})