let express = require('express');

// 获取路由对象
let router = express.Router();

// 在路由上挂载地址
router.get('/add',(req,res)=>{
    res.send('商品增加');
})
router.get('/update',(req,res)=>{
    res.send('商品修改');
})
router.get('/delete',(req,res)=>{
    res.send('商品删除');
})
router.get('/search',(req,res)=>{
    res.send('商品搜索');
})



// 暴露出去
module.exports = router;