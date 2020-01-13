 const catError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.body = "服务器挂了"
    }
}
module.exports = catError;