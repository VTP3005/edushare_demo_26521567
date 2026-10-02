# 📚 EduShare — Hệ Thống Học Liệu Chuyển Tiếp & Tủ Sách Xoay Vòng Hợp Pháp

> **Đề xuất Giải pháp Sơ tuyển AI Club UIT 2026**
> [
> 🔗 **Website Demo Trực Tuyến:**](https://vtp3005.github.io/edushare_demo_26521567/) 
> 📄 **Báo Cáo Chi Tiết (Google Doc/PDF):** [Đường dẫn tới file Báo cáo PDF của bạn]

---

## 📌 1. Bối Cảnh & Bài Toán Đặt Ra

Trong những tuần đầu năm học, tình trạng thiếu hụt sách giáo khoa cục bộ tại một số địa phương khiến học sinh thiếu tài liệu học tập. Việc tự ý sao chụp (photocopy) nguyên cuốn sách giáo khoa tuy nhanh chóng nhưng cấu thành hành vi **xâm phạm quyền tác giả** theo Điều 28 Luật Sở hữu Trí tuệ (SHTT).

**EduShare** được thiết kế như một mô hình vận hành chuyển tiếp (2–4 tuần) đáp ứng đồng thời 6 tiêu chí:
1. **Không ngắt quãng việc học:** Cung cấp tài liệu tóm tắt kiến thức cốt lõi ngay từ Tuần 1.
2. **Tuân thủ 100% Luật SHTT:** Áp dụng ngoại lệ trích dẫn hợp lý tại Điều 25 Luật SHTT 2022.
3. **Chi phí $0đ – tiệm cận 0đ:** Tận dụng hạ tầng in ấn sẵn có và nguồn sách cũ quyên góp.
4. **Triển khai nhanh:** Kích hoạt tại trường học trong vòng 24–48 giờ.
5. **Khai thác tài nguyên sẵn có:** Kết hợp Thư viện trường và Cổng học liệu mở của NXB.
6. **Tính chất chuyển tiếp:** Tự động kết thúc khi nguồn sách chính thức được bàn giao đủ.

---

## 🏗️ 2. Mô Hình Giải Pháp (3 Trụ Cột Cốt Lõi)

- 📖 **Trụ cột 1: Ngân hàng Sách cũ (EduBank Library)**  
  Tổ chức tủ sách dùng chung tại góc lớp học và điều phối lịch mượn trả ngắn hạn (24h–48h) về nhà cho học sinh chưa có sách.
  
- 📝 **Trụ cột 2: Hệ thống Phiếu Học Tập Tuần (Weekly Study Worksheet)**  
  Tổ chuyên môn biên soạn tài liệu tóm tắt (2–4 trang A4/môn/tuần) gồm: Kiến thức cốt lõi, Ví dụ minh họa và Bài tập tự luyện do giáo viên tự thiết kế.

- 🌐 **Trụ cột 3: Khai thác Học liệu Mở & Đọc tại chỗ**  
  Hướng dẫn tra cứu bản đọc thử công khai từ các Nhà xuất bản (*Hành trang số*, *Hoc10*) và mở rộng khung giờ đọc tại chỗ của thư viện trường.

---

## 🛠️ 3. Công Nghệ Sử Dụng (Prototype)

Mô hình Web Demo được xây dựng theo tiêu chí tối giản, mượt mà và không phụ thuộc hạ tầng đắt đỏ:

* **HTML5 / CSS3 / JavaScript (Vanilla JS):** Xử lý chuyển đổi giao diện linh hoạt, tự động cập nhật dữ liệu học liệu 3 khối lớp (10, 11, 12).
* **Tailwind CSS (via CDN):** Thiết kế giao diện hiện đại, chuẩn Responsive trên cả máy tính và điện thoại.
* **FontAwesome:** Hệ thống biểu tượng trực quan.
* **GitHub Pages:** Nền tảng phân phối trang web chạy thực tế.

---

## 🚀 4. Hướng Dẫn Chạy Cục Bộ (Local Setup)

Bạn có thể chạy thử trang web trên máy tính cá nhân mà không cần cài đặt môi trường phức tạp:

1. Clone repository này về máy:
   ```bash
   git clone [https://github.com/](https://github.com/)<ten-user-github>/<ten-repository>.git
