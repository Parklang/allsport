import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`https://allsport.onrender.com/api/news/${id}`);
        setArticle(res.data);
      } catch (err) {
        console.error("Lỗi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <div style={{ padding: "2rem" }}>Đang kết nối thư viện, lấy nguồn bài viết...</div>;
  if (!article) return <div style={{ padding: "2rem", color: "var(--text-secondary)" }}>Không tìm thấy bài viết hoặc bài đã bị xóa.</div>;

  return (
    <div className="page" style={{ animation: "fadeIn 0.5s ease-in", maxWidth: "800px", margin: "0 auto", paddingBottom: "4rem" }}>
      <Link to="/news" style={{ display: "inline-block", color: "var(--accent-color)", fontWeight: "600", marginBottom: "2rem", transition: "all 0.3s" }}>
        ← Quay lại Danh mục
      </Link>

      <span style={{ display: "block", color: "var(--accent-hover)", fontWeight: "700", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "0.5rem" }}>
        {article.category}
      </span>

      <h1 className="text-gradient" style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.3" }}>
        {article.title}
      </h1>

      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "2rem", fontStyle: "italic" }}>
        Ngày đăng: {new Date(article.createdAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
      </p>
      
      <img src={article.imageUrl} alt={article.title} style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover", borderRadius: "12px", marginBottom: "2.5rem", boxShadow: "var(--card-shadow)" }} />
      
      <div style={{ fontSize: "1.15rem", lineHeight: "2", color: "var(--text-primary)", whiteSpace: "pre-line", textAlign: "justify" }}>
        {article.content}
      </div>
    </div>
  );
};

export default NewsDetail;
