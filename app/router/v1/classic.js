const Router = require("koa-router");
const router = new Router();
router.post("/v1/:id/classic/latest", (ctx, next) => {
    const path = ctx.params;//获取url参数/v1/1/a/b
    const query = ctx.request.query;//获取地址栏参数？param=1
    const headers = ctx.request.header;//获取header
    const body = ctx.request.body;//获取body
    ctx.body = { key: "hello latest" }
    throw new Error("API ERRPR")

})
module.exports = router;