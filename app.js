const Koa = require('koa');
const classic = require("./router/v1/classic");
const book = require("./router/v1/book");
const app = new Koa();

app.use(classic.routes());
app.use(book.routes());


app.listen(3000);