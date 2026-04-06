# 🏆 AllSport - Nền Tảng Cập Nhật Thể Thao & Esports Toàn Diện

![AllSport Banner](https://images.unsplash.com/photo-1541534741688-2947dfeb6f0d?auto=format&fit=crop&q=80&w=1200)

🌍 **[▶ TRUY CẬP TRANG WEB TRỰC TIẾP TẠI ĐÂY (Live Demo) ◀](https://allsport-live.vercel.app)**  
*(Lưu ý: Link hiển thị là mẫu minh họa. Vui lòng xem hướng dẫn [Deploy](#-hướng-dẫn-đưa-lên-mạng-deploy) bên dưới để tự cấu hình thành link thật mang tên bạn)*

**AllSport** là một ứng dụng web toàn diện (Full-Stack MERN) chuyên cung cấp thông tin, lịch thi đấu, bảng xếp hạng và tin tức thuộc lĩnh vực Thể thao truyền thống & Thể thao điện tử (Esports). 

Dự án thiết kế với giao diện cao cấp (Premium UI) mang phong cách Dark-mode, tích hợp các hiệu ứng Glassmorphism hiện đại giúp mang lại trải nghiệm thao tác mượt mà và trực quan nhất cho người dùng.

---

## ✨ Tính Năng Nổi Bật

- 🔴 **Trực Tiếp (Live):** Theo dõi tỷ số trực tiếp của các sự kiện thể thao đang diễn ra với hiệu ứng nhịp đập nổi bật.
- 📅 **Lịch Thi Đấu:** Tự động sắp xếp, hiển thị chi tiết các trận sắp bắt đầu và cập nhật tỷ số trực tiếp.
- 🏆 **Bảng Xếp Hạng Thông Minh:** Bảng điểm phân bổ tự động thành từng khu vực giải đấu riêng biệt (Premier League, LCK, CS:GO v.v.).
- 📰 **Tin Tức Nhanh:** Theo dõi tin tức nóng hổi hằng ngày kèm hình ảnh sắc nét.
- ⚙️ **Quản Trị Linh Hoạt:** Toàn bộ 100% dữ liệu được lưu trữ và thao tác hoàn toàn qua **MongoDB Database**. Cam kết không có chi tiết thừa thãi được "cứng hóa" bằng code.

---

## 🛠 Tech Stack (Công Nghệ)

Dự án được cấu trúc bài bản theo hướng Kiến trúc **M.E.R.N**:

- **Frontend:** React JS (Khởi tạo bằng `Vite` cực nhanh), sử dụng `react-router-dom`.
- **Giao Diện/Khung hình:** Vanilla CSS tự lập trình bám sát style Glassmorphism, Micro-animation, Responsive.
- **Backend:** Node.js, Express.js.
- **Cơ sở dữ liệu:** MongoDB kết hợp với thư viện Mongoose ODM.
- **Dữ liệu mồi (Seeding):** Có sẵn Script rải DB tự động chỉ bằng một lệnh ngắn.

---

## 📂 Tổ Chức Thư Mục

Dự án lấy Frontend và Backend làm 2 cụm lõi hoàn toàn tách biệt:

```text
allsport/
├── backend/                  # Chạy tại cổng 5000 (Cung cấp API tĩnh)
│   ├── models/               # Khung xương CSDL (Match, News, Standing)
│   ├── routes/               # Tuyến đường API (GET /api/matches...)
│   ├── seed.js               # Kịch bản nạp dữ liệu mồi
│   └── server.js             # File tổng hợp và chạy máy chủ
│
└── frontend/                 # Chạy tại cổng 5173
    ├── src/
    │   ├── components/       # Các chi tiết nhỏ tái sử dụng (Bảng Menu)
    │   ├── pages/            # 4 Trang view chính (Trang Chủ, Lịch, Tin Tức, BXH)
    │   ├── App.jsx           # Hệ thống Điều hướng 
    │   └── index.css         # Hệ thống Style Design chủ đạo
    └── package.json
```

---

## 🚀 Hướng Dẫn Cài Đặt (Chạy Local)

Để trải nghiệm ứng dụng ngay trên máy tính của bạn, cần chắc chắn máy tính đã cài đặt sẵn Node.js và dịch vụ MongoDB Community Server.

### Bước 1: Kéo Code về Máy
```bash
git clone https://github.com/Parklang/allsport.git
cd allsport
```

### Bước 2: Bật "Bộ Não" Backend
Mở Terminal 1 và nhảy vào thư mục `backend`:
```bash
cd backend
npm install
```
Dùng script để điền trước một số dữ liệu mẫu tự động vào MongoDB:
```bash
node seed.js
```
Kích hoạt máy chủ:
```bash
npm run dev
```

### Bước 3: Bật "Bộ Mặt" Frontend
Mở một lớp cửa sổ Terminal 2, nhảy vào thư mục `frontend`:
```bash
cd frontend
npm install
npm run dev
```

### Bước 4: Tận Hưởng
Truy cập qua URL mà bộ mô phỏng báo lại (Thường là: `http://localhost:5173/`). Các thông tin DB sẽ tự động hiển thị ra bên ngoài Web, việc quản trị Database chỉ cần làm thông qua ứng dụng `MongoDB Compass` rất tiện dụng.

---

## ☁️ Hướng Dẫn Đưa Lên Mạng (Deploy)

Vì AllSport là kiến trúc Full-Stack, để website chạy trên nền tảng Internet cho toàn thế giới truy cập, hãy tuân theo 3 bước deploy hoàn toàn miễn phí này:

1. **Đưa CSDL lên Đám mây (MongoDB Atlas):** Truy cập trang chủ [MongoDB Atlas](https://www.mongodb.com/atlas/database), tạo một Cluster miễn phí 100%. Mở quyền truy cập IP `= 0.0.0.0/0`. Lấy chuỗi *Connection String* của Atlas và thay vào dòng `MONGODB_URI` trong file `backend/.env`.
2. **Đưa Backend lên Render (hoặc Railway):** Truy cập [Render.com](https://render.com/), tạo Web Service mới, tự động kết nối với repo GitHub này. Khai báo Root Directory là `backend`, Build Command là `npm install`, Start Command là `node server.js`. Hãy nhớ khai báo các môi trường (Environment Variables) trên Render trùng với file `.env`. Sau khi deploy, bạn sẽ được cấp một URL máy chủ Backend (VD: `https://allsport-api.onrender.com`).
3. **Đưa Frontend lên Vercel:** 
   - Quay lại code trên máy tính, sử dụng cửa sổ tìm kiếm toàn diện (Ctrl+Shift+F trên VSCode) để tìm chữ `http://localhost:5000` và đổi toàn bộ chúng thành *URL máy chủ Backend mà Render vừa cấp*. Đẩy code lên GitHub lần cuối (`git push origin main`).
   - Đăng nhập [Vercel.com](https://vercel.com/) bằng tài khoản GitHub, nhấn **Import Project** và chọn repo `allsport` của bạn. Sửa Root Directory thành thư mục `frontend` -> Nhấn **Deploy**.
   - Chưa tới 1 phút, Vercel sẽ vinh danh bạn bằng một link trang chủ Frontend thật. Bây giờ bạn chỉ việc thay đường link đó vào đầu cái README này, và gửi nó cho bạn bè để khoe trang web thể thao của riêng bạn!

---

*Cảm ơn đã xem qua GitHub của tôi! Xin vui lòng để lại Đánh giá hoặc Star ⭐️ nếu nó có ích với bạn.*
