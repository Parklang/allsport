import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/standings');
        setStandings(res.data);
      } catch (err) {
        console.error("Lỗi tải Bảng xếp hạng:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStandings();
  }, []);

  if (loading) return <div style={{ padding: "2rem" }}>Đang tải dữ liệu thực tế...</div>;

  const groupedStandings = standings.reduce((acc, curr) => {
    const key = `${curr.league} (${curr.sport})`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(curr);
    return acc;
  }, {});

  return (
    <div className="standings-page" style={{ animation: "fadeIn 0.5s ease-in" }}>
      <h1 className="text-gradient" style={{ marginBottom: "2rem" }}>Bảng Xếp Hạng</h1>
      
      {Object.keys(groupedStandings).length > 0 ? Object.keys(groupedStandings).map((leagueKey) => (
        <div key={leagueKey} style={{ marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "1rem", color: "var(--accent-hover)", fontSize: "1.4rem" }}>{leagueKey}</h2>
          <div className="glass-card" style={{ overflowX: "auto", padding: 0 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead style={{ background: "rgba(0,0,0,0.2)" }}>
                <tr>
                  <th style={{ padding: "1rem 1.5rem" }}>Đội tuyển / CLB</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center" }}>Số Trận</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center" }}>Thắng</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center" }}>Hòa</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center" }}>Thua</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "center", color: "var(--accent-color)" }}>Điểm</th>
                </tr>
              </thead>
              <tbody>
                {groupedStandings[leagueKey].map((item) => (
                  <tr key={item._id} style={{ borderBottom: "1px solid var(--glass-border)", transition: "background 0.3s" }} className="table-row-hover">
                    <td style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>{item.teamName}</td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center" }}>{item.played}</td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center" }}>{item.won}</td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center" }}>{item.drawn}</td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center" }}>{item.lost}</td>
                    <td style={{ padding: "1rem 1.5rem", textAlign: "center", fontWeight: "bold", color: "var(--accent-color)", fontSize: "1.1rem" }}>{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )) : (
        <div style={{ padding: "2rem", color: "var(--text-secondary)" }}>Không có dữ liệu giải đấu nào.</div>
      )}

      <style>{`
        .table-row-hover:hover { background: rgba(255,255,255,0.02); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default Standings;
