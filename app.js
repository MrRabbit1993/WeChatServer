const Koa = require('koa');

const parser = require("koa-bodyparser");//解决post请求的参数

const InitManager = require("./core/init");

const catError = require("./middlewares/exception");//异常中间件

const app = new Koa();

// app.use(catError())
app.use(catError)
app.use(parser())

InitManager.initCore(app);

app.listen(3000);