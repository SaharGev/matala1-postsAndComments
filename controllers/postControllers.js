const postModel = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};