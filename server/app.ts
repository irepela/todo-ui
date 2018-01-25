import koa from 'koa';
import * as path from 'path';
import serveStatic from 'koa-static';
import compress from 'koa-compress';
import logger from 'koa-logger';
import send from 'koa-send';

const app = new koa();
app.use(logger());
app.use(compress());

const root = path.resolve(__dirname, '../');
app.use(serveStatic(path.resolve(root, 'todo-list')));

// this last middleware catches any request that isn't handled by
// koa-static or koa-router, ie your index.html in your example
app.use(async(ctx) => {
  await send(ctx, '/dist/todo-list/index.html');
});
app.listen(3000, () => console.log('server started 3000'));

export default app;
