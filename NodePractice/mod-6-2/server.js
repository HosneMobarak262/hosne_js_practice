const express = require('express');
// console.log(express);
const port = 5050;

const app = express();
// console.log(app);

// app.all("*", (req, res) =>{
//     res.send("<h1>hello express</h1>");
// });

app.all("/", (req, res) =>{
    res.send("<h1>hello express js home path</h1>");
});

app.listen(port, ()=>{
    console.log("Server running on port: ", port);
})