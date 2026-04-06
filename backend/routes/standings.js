const express = require('express');
const router = express.Router();
const Standing = require('../models/Standing');

router.get('/', async (req, res) => {
  try {
    const { sport, league } = req.query;
    let query = {};
    if (sport) query.sport = sport;
    if (league) query.league = league;
    
    const standings = await Standing.find(query).sort({ points: -1, won: -1 });
    res.json(standings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
