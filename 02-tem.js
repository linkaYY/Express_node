var express = require('express');
var app = express();

// 注册基于express的模板引擎
app.engine('art', require('express-art-template'));

// 模板引擎默认放的路径是views文件夹里，但是我们可以自定义设置
// 设置模板页的路径
app.set('views','./temFile')

// 设置模板引擎的一些选项，课忽略
// app.set('view options', {
//     debug: process.env.NODE_ENV !== 'production'
// });

app.get('/', function (req, res) {
    res.render('index.art', {
        // 这里面是要填坑用是数据
        name:'LinkaYY',
        skill:'play code'
    });
});

// 开启监听
app.listen(80,'127.0.0.1',()=>{
    console.log('success');
});