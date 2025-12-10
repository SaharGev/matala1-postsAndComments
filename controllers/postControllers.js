const postModel = require('../models/postModel');

getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

getPostById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await postModel.findById(id);  
        if (!post) {
            return res.status(404).send('post not found');
        }
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('error getting post by id');
    }   
};

module.exports = {
    getAllPosts,
    getPostById
};