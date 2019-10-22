const Koa = require('koa/lib/application');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});

app.listen(3001);
