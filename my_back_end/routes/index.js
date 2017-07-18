var express = require('express');
var router = express.Router();

//引入http /https模块
var http = require('http');
var https = require('https');

//允许不同域请求数据
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

//轮播请求 localhost:8080/lunbo
router.get('/lunbo', function (req, res, next) {
    var d = new Date().getTime();
    http.get('http://m.maizuo.com/v4/api/billboard/home?__t='+d, function(value){
        var html = '';
        value.on('data', function(chunk){
            html += chunk;
        })
        value.on('end', function(){
            var obj = JSON.parse(html);
            res.send(obj);
        })
    })

})

//正在热映 localhost:8080/now
router.get('/now', function (req, res, next) {
    var d = new Date().getTime();
    http.get('http://m.maizuo.com/v4/api/film/now-playing?__t='+d+'&page=1&count=5', function(value){
        var html = '';
        value.on('data', function(chunk){
            html += chunk;
        })
        value.on('end', function(){
            var obj = JSON.parse(html);
            res.send(obj);
        })
    })

})

//正在热映 localhost:8080/coming
router.get('/coming', function (req, res, next) {
    var d = new Date().getTime();
    http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t'+d+'&page=1&count=3', function(value){
        var html = '';
        value.on('data', function(chunk){
            html += chunk;
        })
        value.on('end', function(){
            var obj = JSON.parse(html);
            res.send(obj);
        })
    })

})

module.exports = router;
