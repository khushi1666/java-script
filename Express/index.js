const express = require("express");
const app=express();// app is object

//console.dir(app);

let port=8080;
//.listen is method you can search more about it
app.listen(port,()=>{
    console.log(`app is listening on port : ${port}`);
});

//for different page different responces
app.get("/",(req,res)=>{
    res.send("You contacted root path");
});

app.get("/apple",(req,res)=>{
    res.send("You contacted apple path");
});

app.get("/banana",(req,res)=>{
    res.send("You contacted banana path");
});

//query string
app.get("/search",(req,res)=>{
    let {q}= req.query;
    if(!q){
        res.send(`you searched nothing`);
    }
    res.send(`you searched for query: ${q}`);
});

//params and can also send html responce
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("hello,i am root of vary");
})






// app.get("*",(req,res)=>{
//     res.send("path not exist");
// });
// app.post("/",(req,res)=>{
//     res.send("request found");
// });


//.use is also method you can search abot it 
//for same responce to multiple path
// app.use((req,res)=>{
//    // console.log("request accepted");
//    let code="<h1>Fruits</h1><ul> <li>mango</li><li>banana</li></ul>";
//     res.send(code);
// })