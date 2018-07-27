'use strict';

const Express = require('express');
const Config = require('./config/config.js');

const config = new Config();
const app = new  Express();



// 先使用 urlencoded,就能解析到请求再匹配路由 
app.use(Express.urlencoded());
// config 'routes' and 'common response header'
config.doConfig(app);
// app.use(Express.json());




// 定义静态文件目录
// app.use(Express.static('public/test'));

app.use(Express.static('public'));

app.listen(3000,() => console.log('服务器在3000端口已启动'));



