let fs = require('fs');
var http = require('http');


var server = http.createServer(function (req, res){
    if(req.url=="/"){
    //    Async file write

        fs.rename('demo.txt','demo2.txt',function (error){
           if(error){
               res.writeHead(200,{'Content-Type':'text/html'});
               res.write("File Rename Failed.");
               res.end();
           } else {
               res.writeHead(200,{'Content-Type':'text/html'});
               res.write("File Rename Success.");
               res.end();
           }
        });

    }
});

server.listen(4040);
console.log("Server running on port 4040");