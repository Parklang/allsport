import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://allsport.onrender.com/api/news');
        setNews(res.data);
      } catch (err) {
        console.error("Lỗi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div style={{ padding: "2rem" }}>Đang tải tin tức từ Database...</div>;

  return (
    <div className="page" style={{ animation: "fadeIn 0.5s ease-in" }}>
      <h1 className="text-gradient">Tin Tức Thể Thao & Esports</h1>
      <div className="flex gap-4" style={{ flexWrap: "wrap", marginTop: "2rem" }}>
        {news.length > 0 ? news.map((item) => (
          <Link key={item._id} to={`/news/${item._id}`} className="glass-card" style={{ flex: "1 1 300px", padding: 0, overflow: "hidden", display: "block" }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover", transition: "transform 0.3s ease" }} />
            <div style={{ padding: "1.5rem" }}>
              <span style={{ color: "var(--accent-hover)", fontWeight: "500", fontSize: "0.85rem" }}>{item.category}</span>
              <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem", lineHeight: "1.4" }}>{item.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{item.excerpt}</p>
            </div>
          </Link>
        )) : <p style={{ color: "var(--text-secondary)" }}>Hiện tại Database chưa có bài viết nào.</p>}
      </div>
    </div>
  );
};

export default News;
