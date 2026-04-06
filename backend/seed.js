const mongoose = require('mongoose');
require('dotenv').config();

const Match = require('./models/Match');
const News = require('./models/News');
const Standing = require('./models/Standing');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Đã kết nối MongoDB để rải dữ liệu');

    // Xóa dữ liệu cũ
    await Promise.all([
      Match.deleteMany({}),
      News.deleteMany({}),
      Standing.deleteMany({})
    ]);

    // Thêm Matches
    await Match.create([
      { homeTeam: 'T1', awayTeam: 'Gen.G', sport: 'Esports', league: 'LCK', startTime: new Date(), status: 'Trực tiếp', score: { home: 1, away: 0 }, liveUrl: '#' },
      { homeTeam: 'Hà Nội FC', awayTeam: 'Công An Hà Nội', sport: 'Bóng đá', league: 'V-League', startTime: new Date(Date.now() + 86400000), status: 'Sắp diễn ra' },
      { homeTeam: 'Manchester Utd', awayTeam: 'Arsenal', sport: 'Bóng đá', league: 'Premier League', startTime: new Date(Date.now() - 86400000), status: 'Đã kết thúc', score: { home: 2, away: 1 } }
    ]);

    // Thêm News
    await News.create([
      { title: 'T1 lọt vào chung kết thế giới 2026', excerpt: 'Faker và đồng đội lại tiếp tục làm nên kỳ tích...', content: 'Nội dung chi tiết về trận đấu của T1...', category: 'Esports', imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800' },
      { title: 'Bóng đá Việt Nam: Chờ đổi thay', excerpt: 'Sau nhiều biến động, đội tuyển đang hướng tới mục tiêu mới.', content: 'Chi tiết về tương lai của đội tuyển...', category: 'Bóng đá', imageUrl: 'https://images.unsplash.com/photo-1518605368461-1e1e38ce8ba9?auto=format&fit=crop&q=80&w=800' }
    ]);

    // Thêm Standings
    await Standing.create([
      { sport: 'Bóng đá', league: 'Premier League', teamName: 'Manchester City', played: 10, won: 8, drawn: 1, lost: 1, points: 25 },
      { sport: 'Bóng đá', league: 'Premier League', teamName: 'Arsenal', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
      { sport: 'Esports', league: 'LCK', teamName: 'T1', played: 18, won: 15, drawn: 0, lost: 3, points: 15 }
    ]);

    console.log('🎉 Đã seed dữ liệu thành công!');
    process.exit(0);
  } catch (error) {
    console.error('Lỗi khi seed dữ liệu:', error);
    process.exit(1);
  }
};

seedData();
