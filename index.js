const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'koa';
    console.log("async function start");
    await next();          //dispatch.bind(null, i + 1)
    console.log("async function end")
});

app.use(function* f1(next) {
    console.log("f1 start");
    yield  next;
    console.log("f1 end");
})

app.use(function *(next) {
    console.log("f2 start");
    yield  next;
    console.log("f2 end")
})


// http.createServer(app.callback()).listen(3001)
app.listen(3001);
console.log('app started at port 3001')




// const convert = require('koa-convert');
//
// app.use(convert(function *(next) {
//     const start = new Date();
//     yield next;
//     const ms = new Date() - start;
//     console.log(`${this.method} ${this.url} - ${ms}ms`);
// }));




