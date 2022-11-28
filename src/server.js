const express = require('express');
const server = express();
const routes = require("./routes")



server.set('view engine', 'ejs')
server.use(express.urlencoded({extended:true}))

server.use(express.static("public"))
server.use(routes);

server.get('/', (req,res)=>{
    return res.sendFile(__dirname + "/views/index.html")
})

server.listen(3000, ()=>console.log("Running"));