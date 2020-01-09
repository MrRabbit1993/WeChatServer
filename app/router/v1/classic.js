const Router = require("koa-router");
const router = new Router();
router.get("/a/a", (ctx, next) => {
    ctx.body = { key: "hello koa" }
})
module.exports = router;