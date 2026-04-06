const mongoose = require('mongoose');

const standingSchema = new mongoose.Schema({
  sport: { type: String, required: true },
  league: { type: String, required: true },
  teamName: { type: String, required: true },
  played: { type: Number, default: 0 },
  won: { type: Number, default: 0 },
  drawn: { type: Number, default: 0 },
  lost: { type: Number, default: 0 },
  points: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Standing', standingSchema);
