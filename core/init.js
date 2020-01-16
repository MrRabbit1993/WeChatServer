const requireDirectory = require("require-directory");
const Router = require("koa-router");

const whenLoadModule = (obj) => {
    if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
    }
}
class InitManager {//初始化管理器
    static initCore(app) {//入口方法
        InitManager.app = app;
        InitManager.initLoadRouters();//调取静态方法
        InitManager.loadHttpException();//调取静态方法(引入错误异常类)
        InitManager.loadConfig();//调取静态方法(引入配置文件)
    }

    static loadConfig(path = "") {
        const configPath = path || `${process.cwd()}/config/config.js`;
        const config = require(configPath);
        global.config = config;
    }

    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/router`;//process.cwd() 得到根目录
        requireDirectory(module, apiDirectory, { visit: whenLoadModule });
    }

    static loadHttpException() {
        const errors = require("./http-exception");
        global.errs = errors;
    }
}
module.exports = InitManager