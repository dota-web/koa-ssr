// import Koa from 'koa';
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '666'
})

app.listen(9000)