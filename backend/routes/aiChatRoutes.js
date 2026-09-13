// backend/routes/aiChatRoutes.js
const express = require('express');
const router = express.Router();
const aiChatController = require('../controllers/aiChatController');

// Define AI Chat API routes
router.post('/ai-chat', aiChatController.sendMessage);

module.exports = router;
