//routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createNewPost);
router.put('/:id', postController.updatePost);
router.get('/:postId/comments', postController.getCommentsByPostId);

module.exports = router;
