const posts = require('.').db('threads').collection('threads');
const mongodb = require('mongodb');

const save = async ({username, title, thread}) => {
    const result = await posts.insertOne({username, title, thread});

    return result.ops[0];
    };

const getAll = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
    };

const deleteRow = async ({id}) => {
    const result = await posts.deleteOne({_id: new mongodb.ObjectID(id)});

    return result.ops[0];
    };
    
    module.exports = {save, getAll, deleteRow};