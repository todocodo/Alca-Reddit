const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const PostsRoutes = require('./routes/post.routes');
require('./database')

const app = new Koa();
app.use(cors());

app.use(bodyParser());

app.use(PostsRoutes.routes()).use(PostsRoutes.allowedMethods());

app.listen(4000, err => {
    if (err) {
        console.log(err);
        return;
    }
});

console.log('Application is running on port 4000...')