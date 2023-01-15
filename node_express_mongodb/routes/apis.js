const express = require('express');
const controllers = require('../controllers/apis');
const router = express.Router();

router.get('/users', controllers.getUsersApi);

router.get('/posts', controllers.getPostsApi);

router.get('/messages', controllers.getMessagesApi);

router.get('/networks', controllers.getNetworksApi);

module.exports = router;
