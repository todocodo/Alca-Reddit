const {getAll, save, deleteRow} = require('../database/posts.dao');

const createPost = async ({username, title, thread}) => {
    const post = {
        username,
        title,
        thread
    }
    return await save(post);
}

const getPosts = async () => {
    return await getAll();
}

const deletePost = async ({id}) => {
    const post = {
        id
    }
    return await deleteRow(post);
}

module.exports = { createPost, getPosts, deletePost };