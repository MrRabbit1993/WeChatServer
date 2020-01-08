const Koa = require('koa');

const app = new Koa();

app.use((ctx,next) => {//注册中间件
    console.log(1);
    next()
});
app.use((ctx,next) => {
    console.log(2)
});
app.listen(3000);