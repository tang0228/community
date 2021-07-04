const express = require("express");
const app = express();
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");

// 映射public目录中的静态资源
app.use(express.static(staticRoot));

// 加入token中间件
app.use(require('./tokenMiddleware'));

// 解析application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析application/json 格式的请求体
app.use(express.json());

// 处理api请求
app.use('/user', require('./api/user'));
app.use('/fee', require('./api/fee'));
app.use('/msg', require('./api/msg'));

// 处理错误的中间件
app.use(require('./errorMiddleware'));

app.listen(2000, () => {
    console.log("server listen 2000");
})