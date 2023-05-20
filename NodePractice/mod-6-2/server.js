const express = require('express');
// console.log(express);
const port = 5050;

const app = express();
// console.log(app);

app.use(express.static('public'));


// app.all("*", (req, res) =>{
//     res.send("<h1>hello express</h1>");
// });

// app.all("/", (req, res) =>{
//     res.send("<h1>hello express js home path</h1>");
// });

// app.all("/ostad", (req, res) =>{
//     res.send("<h1>hello express js Ostad path</h1>");
// });

app.get("/", (req, res)=>{
    res.send("<h1>Hello express js get page</h1>");
});

app.post("/", (req, res)=>{
    // res.send("<h1>Hello express js post page</h1>");
    res.json({
        "name": "Hosne Mobarak",
        "city": "Dhaka"
    });
});

app.put("/", (req, res) =>{
    res.send("<h1>Hello express js put page</h1>");
});

app.patch("/", (req, res) => {
    res.send("<h1>Hello express js patch page</h1>");
});

app.delete("/", (req, res) => {
    res.send("<h1>Hello express js delete page</h1>");
});


app.listen(port, ()=>{
    console.log("Server running on port: ", port);
})