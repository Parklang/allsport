import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/matches');
        setMatches(res.data);
      } catch (err) {
        console.error("Lỗi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  if (loading) return <div style={{ padding: "2rem" }}>Đang tải lịch thi đấu từ Database...</div>;

  return (
    <div className="page" style={{ animation: "fadeIn 0.5s ease-in" }}>
      <h1 className="text-gradient">Lịch Thi Đấu & Kết Quả</h1>
      <div className="flex gap-4" style={{ flexDirection: "column", marginTop: "2rem" }}>
        {matches.length > 0 ? matches.map((match) => (
          <div key={match._id} className="glass-card flex justify-between align-center" style={{ padding: "1.5rem 2rem" }}>
            <div>
              <span style={{ color: "var(--accent-color)", fontWeight: "500", fontSize: "0.9rem" }}>{match.sport} • {match.league}</span>
              <div style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "0.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <span>{match.homeTeam}</span>
                <span style={{color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: "normal"}}>vs</span>
                <span>{match.awayTeam}</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500", color: match.status === 'Trực tiếp' ? '#ef4444' : 'var(--text-secondary)'}}>
                {match.status}
              </span>
              <span style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                {match.status !== 'Sắp diễn ra' ? `${match.score?.home || 0} - ${match.score?.away || 0}` : new Date(match.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        )) : <p style={{ color: "var(--text-secondary)" }}>Hiện tại Database chưa có lịch thi đấu.</p>}
      </div>
    </div>
  );
};

export default Schedule;
