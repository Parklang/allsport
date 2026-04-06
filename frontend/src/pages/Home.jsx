import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [liveMatches, setLiveMatches] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [matchesRes, newsRes] = await Promise.all([
          axios.get('https://allsport.onrender.com/api/matches/live'),
          axios.get('https://allsport.onrender.com/api/news')
        ]);
        setLiveMatches(matchesRes.data);
        setNews(newsRes.data.slice(0, 3));
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;

  return (
    <div className="home-page">
      <h1 className="text-gradient" style={{ marginBottom: "2rem" }}>Trang Tổng Quan Thể Thao & Esports</h1>

      <section className="live-matches" style={{ marginBottom: "3rem" }}>
        <h2>🔴 Đang Trực Tiếp</h2>
        <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
          {liveMatches.length > 0 ? liveMatches.map((match) => (
            <div key={match._id} className="glass-card" style={{ flex: "1 1 300px" }}>
              <div className="flex justify-between" style={{ marginBottom: "1rem" }}>
                <span style={{ color: "var(--accent-color)", fontWeight: "500", fontSize: "0.9rem" }}>
                  {match.sport} • {match.league}
                </span>
                <span className="live-badge" style={{ color: "#ef4444", fontWeight: "bold", padding: "2px 8px", background: "rgba(239, 68, 68, 0.1)", borderRadius: "4px" }}>
                  LIVE
                </span>
              </div>
              <div className="flex justify-between align-center" style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                <span>{match.homeTeam}</span>
                <span className="text-gradient" style={{ fontSize: "1.8rem", padding: "0 10px" }}>
                  {match.score?.home} - {match.score?.away}
                </span>
                <span>{match.awayTeam}</span>
              </div>
            </div>
          )) : <p style={{ color: "var(--text-secondary)" }}>Hiện không có trận đấu nào đang trực tiếp.</p>}
        </div>
      </section>

      <section className="latest-news">
        <h2>📰 Tin Tức Mới Nhất</h2>
        <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
          {news.length > 0 ? news.map((item) => (
            <div key={item._id} className="glass-card" style={{ flex: "1 1 300px", padding: 0, overflow: "hidden" }}>
              <img src={item.imageUrl} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "1.5rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--accent-hover)", fontWeight: "500" }}>{item.category}</span>
                <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>{item.excerpt}</p>
              </div>
            </div>
          )) : <p>Đang cập nhật tin tức.</p>}
        </div>
      </section>
    </div>
  );
};

export default Home;
