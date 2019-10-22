const Koa = require('koa/lib/application');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'hello world';
    console.log("async");
});

app.use(function* f1(next) {
    console.log("f1 start");
    yield  next;
    console.log("f1 end")
})

app.use(function* f2(next) {
    console.log("f2 start");
    yield  next;
    console.log("f2 end")
})


// http.createServer(app.callback()).listen(3001)
app.listen(3001);
