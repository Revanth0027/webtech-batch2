const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
if(req.url==='/'){
    
res.writeHead(200,{"Content-Type": "text/html"});
fs.createReadStream('home.html').pipe(res);
}
else if(req.url ==='/signup' && req.method == 'POST'){
var rawData = '';
req.on('data',function(data){
rawData += data;
})
req.on('end',function(){
var inputdata = new URLSearchParams(rawData);
res.writeHead(200,{"Content-Type": "text/html"});
res.write("<table border='1'>")
res.write("<h1 style='color:blue;position: relative;left: 40%;'>User Submited details</h1 > ")
res.write("<table border=1 cellspacing=0 style='color:blue; position: relative; left: 35%; width: 450px; '>")
res.write("<tr><td style='padding:10px;'> Name: </td><td style = 'padding:10px;' > " +inputdata.get('name') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> Password: </td><td style = 'padding:10px;' > " +inputdata.get('pass') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> Age </td><td style = 'padding:10px;' > " +inputdata.get('age') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> Mobile Number </td><td style = 'padding:10px;' > " +inputdata.get('mobile') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> Email </td><td style = 'padding:10px;' > " +inputdata.get('email') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> Gender </td><td style = 'padding:10px;' > " +inputdata.get('gender') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> State </td><td style = 'padding:10px;' > " +inputdata.get('state') + '</td></tr>');
res.write("<tr><td style='padding:10px;'> Skills </td><td style = 'padding:10px;' >"+inputdata.get('skills')+"</td></tr>");
res.write("</table>");
          res.end();
});
}
});
server.listen(2000,function(){
console.log('listening at 2000')
});