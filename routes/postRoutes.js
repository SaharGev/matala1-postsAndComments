const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createNewPost);

module.exports = router;
