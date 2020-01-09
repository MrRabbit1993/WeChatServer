const Router = require("koa-router");
const router = new Router();
router.get("/a/b", (ctx, next) => {
    ctx.body = { key: "hello koa book" }
})
module.exports = router;