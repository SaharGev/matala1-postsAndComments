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

// Create a new comment
const createComment = async (req, res) => {
    const comment = req.body;
    try {
        const newComment = await commentModel.create(comment);
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get comment by ID
const getCommentById = async (req, res) => {
    const id = req.params.id;
    try {
        const comment = await commentModel.findById(id);
        if (!comment) {
            return res.status(404).send('Comment not found');
        }   
        res.json(comment);
    } catch (err) {
        res.status(500).send('Error retrieving comment');
    }       
};

// Delete a comment 
const deleteComment = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await commentModel.findByIdAndDelete(id);
        if (!deleted) return res.status(404).send('Comment not found');
        res.send('Comment deleted');
    } catch (err) {
        res.status(500).send('Error deleting comment');
    }
};

//Update a comment
const updateComment = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const updatedComment = await commentModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedComment) {
            return res.status(404).send('Comment not found');
        }   
        res.json(updatedComment);
    } catch (err) {
        res.status(500).send('Error updating comment');
    }
};

// Get all comments by Post ID
const getCommentsByPostId = async (req, res) => {
    const { postId } = req.query; 
    try {
        let comments;
        if (postId && mongoose.Types.ObjectId.isValid(postId)) {
            comments = await commentModel.find({ postId: postId });
        } else {
            comments = await commentModel.find();
        }

        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getAllComments,
    createComment,
    getCommentById,
    deleteComment,
    updateComment,
    getCommentsByPostId
};