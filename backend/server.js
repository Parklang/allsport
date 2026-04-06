const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const matchRoutes = require('./routes/matches');
const newsRoutes = require('./routes/news');
const standingRoutes = require('./routes/standings');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Đã kết nối với MongoDB'))
  .catch((err) => console.error('❌ Lỗi kết nối MongoDB:', err));

app.get('/api', (req, res) => {
  res.json({ message: 'Chào mừng đến với API của AllSport' });
});

app.use('/api/matches', matchRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/standings', standingRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
