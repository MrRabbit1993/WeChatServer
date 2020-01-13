const { HttpException } = require("./../core/http-exception");
const catError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        if (error instanceof HttpException) {//已知异常
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.status
        }
    }
}
module.exports = catError;