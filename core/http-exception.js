//异常基类
class HttpException extends Error {
    constructor(msg = "服务器异常", errorCode = 10000, status = 400) {
        super();
        this.errorCode = errorCode;
        this.status = status;
        this.msg = msg;
    }
}

//参数错误
class ParameterException extends HttpException {
    constructor(msg = "参数错误", errorCode = 10000) {
        super();
        this.status = 400;
        this.msg = msg;
        this.errorCode = errorCode;
    }
}

module.exports = {
    HttpException,
    ParameterException
};