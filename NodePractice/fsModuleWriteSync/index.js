let fs = require('fs');
var http = require('http');


var server = http.createServer(function (req, res){
    if(req.url=="/"){
    //    Async file write Sync

        let error   =   fs.writeFileSync('sync.txt','This is synchronous File write');

        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File write Failed.");
            res.end();
        } else {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File write Success.");
            res.end();
        }

    }
});

server.listen(4040);
console.log("Server running on port 4040");