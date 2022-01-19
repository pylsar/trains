const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get posts
router.get('/', async (req, res) => {
    // res.send('hello ');
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

//Add Posts

//Delete Posts


async function loadPostsCollection(){
    const client = mongodb.MongoClient.connect('mongodb+srv://train:ParolHeroes@cluster0.bu2wa.mongodb.net/poezda?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('trains').collection('posts')
}


module.exports = router;