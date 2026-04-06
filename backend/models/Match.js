const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  homeTeam: { type: String, required: true, trim: true },
  awayTeam: { type: String, required: true, trim: true },
  sport: { type: String, required: true }, // VD: 'Bóng đá', 'LoL', 'CS:GO'
  league: { type: String, required: true },
  startTime: { type: Date, required: true },
  status: { type: String, enum: ['Sắp diễn ra', 'Trực tiếp', 'Đã kết thúc'], default: 'Sắp diễn ra' },
  score: {
    home: { type: Number, default: 0 },
    away: { type: Number, default: 0 }
  },
  liveUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Match', matchSchema);
