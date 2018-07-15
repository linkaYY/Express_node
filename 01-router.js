let express = require("express");

let proRouter = require('./productsRoute/productRoutes');


// 创建app
let app = express();
// console.log(app);


// 挂载自己写的路由模块
app.use('/pro',proRouter)

app.listen(80, "127.0.0.1", () => {
    console.log("127.0.0.1:80  succcess");
  });
  
