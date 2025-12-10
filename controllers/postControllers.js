const postModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPostById = async (req, res) => {
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

const createNewPost = async (req, res) => {
    const post = req.body;
    console.log(post);
    try {
        const newPost = await postModel.create(post);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).send('Error creating post');
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createNewPost
};
