//routes/commentRoute.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:id', commentController.getCommentById);
router.get('/', commentController.getCommentsByPostId);
router.post('/', commentController.createComment);
router.delete('/:id', commentController.deleteComment);
router.put('/:id', commentController.updateComment);

module.exports = router;
