const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/"

routes.get('/',(req,res) => res.render(views + "index"))
routes.get('/test',(req,res) => res.render( views + "test"))
routes.post('/test',(req,res) => {
    console.log(req.body)
})
routes.get('/test/edit',(req,res) => res.render( views + "test-edit"))
routes.get('/profile',(req,res) => res.render( views + "profile"))

module.exports = routes;    