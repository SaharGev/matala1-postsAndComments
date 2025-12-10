const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

router.get('/', postController.getAllPosts);
router.post('/', postController.createNewPost);

module.exports = router;
