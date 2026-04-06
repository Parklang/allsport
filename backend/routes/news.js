const express = require('express');
const router = express.Router();
const News = require('../models/News');

router.get('/', async (req, res) => {
  try {
    const newsList = await News.find().sort({ createdAt: -1 });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
