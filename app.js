const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {//注册中间件
    console.log(1);
    await next()
});
app.use(async (ctx, next) => {
    console.log(2);
    await next();
});
app.listen(3000);