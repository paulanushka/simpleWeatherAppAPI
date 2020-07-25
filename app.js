var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=0e24d54c334ad6bafc1d2a7ea13319d8';
var server=http.createServer(function(request, response){
    var request = require('request');
    request(url, function(err,res,body){
        var data=JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>"+'City Name - : '+data['name']+'<br>'+ "</h1");
        response.write("<h2>"+'Temperature - : '+ data.main['temp']+'<br>'+"</h2>");
        response.write("<h2>"+'SunSet Time - : '+new Date(data.sys['sunset']*1000)+"</h2");
        response.write("</div></body></htm>");
        response.end();

        
    });
    
}).listen(8081);