var express = require('express');
var router = express.Router();

//引入mongodb
var MongoClient = require('mongodb').MongoClient;
//构建连接字符串
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/maizuo';
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//登录请求
//localhost:8080/user/login
router.get('/login', function (req, res, next) {
    console.log(req.query)
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        if (err) {
            console.log('连接失败');
        } else {
            var conn = db.collection('user');
            conn.find({'username':req.query.username}).count(function (err, num) {
                if (num === 0) {
                    console.log(req.query);
                    conn.save(req.query);
                    res.send('登录成功！！');
                    db.close();
                } else {
                    conn.find(req.query).count(function (err, num) {
                        if (num === 0) {
                            res.send('密码错误！！');
                        } else {
                            res.send('登录成功！！');
                            db.close();
                        }
                    })
                }
            })
        }
    })
})

module.exports = router;
