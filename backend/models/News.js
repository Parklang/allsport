const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, default: 'https://via.placeholder.com/600x400' },
  category: { type: String, required: true }, // e.g., 'Bóng đá', 'Esports', 'Chung'
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);
