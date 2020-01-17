const Sequelize = require("sequelize");

const { dbName, host, port, user, password } = require("./../config/config").database;

//Sequelize(dbname,user,password,{})
const sequelize = new Sequelize(dbName, user, password, {
    dialect: "mysql",//指定数据库类型
    host,
    port,
    logging: true,//显示sql
    timezone: '+08:00',
    define: {

    }
});

module.exports = {
    db: sequelize
}