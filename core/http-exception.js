class HttpException extends Error {
    constructor(msg = "服务器异常", errorCode = 10000, status = 400) {
        super();
        this.errorCode = errorCode;
        this.status = status;
        this.msg = msg;
    }
}
module.exports = HttpException;