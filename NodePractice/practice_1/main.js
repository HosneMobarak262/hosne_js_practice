var http=require('http');
var URL=require('url');

var server = http.createServer(function (req, res){
    var myUrl = "https://rabbil.com/courseDetails?id=632d7ebfbe4399c3d8ca0590";

    var myUrlObj = URL.parse(myUrl,true);

    var myHostName = myUrlObj.host;
    var myPathName = myUrlObj.pathname;
    var mySearchName = myUrlObj.search;

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(myHostName);
    res.end();

});

server.listen(5050);

console.log("Server Running Sucessfully.");
