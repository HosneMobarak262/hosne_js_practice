// let fs = require('fs');
// var http = require('http');
//
//
// var server = http.createServer(function (req, res){
//     if(req.url=="/"){
//     //    Sync Rename file
//
//         let error = fs.renameSync('demo5.txt','demo6.txt');
//         console.log(error);
//         if(error === undefined){
//             console.log(error);
//
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write("File Rename Failed.");
//             res.end();
//         } else {
//             console.log(error);
//
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write("File Rename Success.");
//             res.end();
//         }
//     }
// });
//
// server.listen(4040);
// console.log("Server running on port 4040");
//


let fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        try {
            fs.renameSync('demo6.txt', 'demo7.txt');
            console.log("File Rename Success.");

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Success.");
            res.end();
        } catch (error) {
            console.log("File Rename Failed:", error);

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Failed.");
            res.end();
        }
    }1
});

server.listen(4040);
console.log("Server running on port 4040");

