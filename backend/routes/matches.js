const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

router.get('/', async (req, res) => {
  try {
    const matches = await Match.find().sort({ startTime: 1 });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/live', async (req, res) => {
  try {
    const liveMatches = await Match.find({ status: 'Trực tiếp' });
    res.json(liveMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
