var http=require('http')
var fs=require('fs')
var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, { "Content-Type":"text/html" });
    fs.createReadStream('home.html').pipe(res);
  }
  else if (req.url === '/server'&& req.method === 'POST') {
    varrawData = '';
    req.on('data', function (input) {
      rawData += input;
    });
    req.on('end', function () {
      varinputdata = newURLSearchParams(rawData);
      res.writeHead(200, { "Content-Type":"text/html" });
      res.write("<table border='1'>")
      res.write("<h1 style='color:blue;position: relative;left: 40%;'>User Submited details</h1 > ")
  res.write("<table border=1 cellspacing=0 style='color:blue; position: relative; left: 35 %; width: 450px; '>")
      res.write("<tr><td style='padding:10px;'> Name </td><td style = 'padding:10px;' > " +inputdata.get('name') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> Password </td><td style = 'padding:10px;' > " +inputdata.get('pass') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> Age </td><td style = 'padding:10px;' > " +inputdata.get('age') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> Mobile Number </td><td style = 'padding:10px;' > " +inputdata.get('mobile') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> Email </td><td style = 'padding:10px;' > " +inputdata.get('email') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> Gender </td><td style = 'padding:10px;' > " +inputdata.get('gender') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> State </td><td style = 'padding:10px;' > " +inputdata.get('state') + '</td></tr>');
  res.write("<tr><td style='padding:10px;'> Skills </td><td style = 'padding:10px;' ></table>");

          res.end();
    });
  }
})
server.listen(5050, function () {
  console.log("Server is running");
})


