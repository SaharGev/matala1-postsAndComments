//conrollers/commentController.js
const commentModel = require('../models/commentModel');

// Get all comments
const getAllComments = async (req, res) => {
    try {
        const comments = await commentModel.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getAllComments,
};