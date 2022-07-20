const Router = require('koa-router');
const { createPost, getPosts, deletePost } = require('../api/posts.api');

const router = new Router({
    prefix: '/threads'
    });
    router.get('/', async ctx => {
        ctx.body = await getPosts();
    });
    router.post('/create-thread', async ctx => {
        let post = ctx.request.body;
        post = await createPost(post);
        ctx.response.status = 200;
        ctx.body = post;
    });
    router.delete('/delete-thread/:id', async ctx => {
        // console.log(ctx.params);
        let idPost = ctx.params;
        idPost = await deletePost(idPost);
    });

module.exports = router;