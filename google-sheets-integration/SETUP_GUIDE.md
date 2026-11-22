# HƯỚNG DẪN KẾT NỐI GOOGLE SHEET CHO FORM LIÊN HỆ
## GOOGLE APPS SCRIPT WEBHOOK SETUP GUIDE

Tài liệu này hướng dẫn cách kết nối form liên hệ trên website portfolio của **Nguyễn Quốc Trung (Andy)** trực tiếp về Google Sheets cá nhân mà không cần backend hay database phức tạp. Hoàn toàn miễn phí, an toàn và tự động gửi email thông báo khi có khách hàng/nhà tuyển dụng để lại lời nhắn.

---

### BƯỚC 1: TẠO BẢNG TÍNH GOOGLE SHEETS
1. Truy cập [Google Sheets](https://sheets.google.com) và tạo một bảng tính mới.
2. Đặt tên bảng tính, ví dụ: `Trung_Nguyen_Portfolio_Inquiries`.
3. Tại dòng đầu tiên (Row 1), tạo các tiêu đề cột sau:
   - **A1**: `Thời Gian (Timestamp)`
   - **B1**: `Họ Và Tên (Full Name)`
   - **C1**: `Số Điện Thoại (Phone)`
   - **D1**: `Email`
   - **E1**: `Dịch Vụ / Nội Dung (Service)`
   - **F1**: `Lời Nhắn (Message)`
   - **G1**: `Trạng Thái (Status)`

---

### BƯỚC 2: CÀI ĐẶT APPS SCRIPT
1. Trên thanh menu của Google Sheets, chọn **Tiện ích mở rộng (Extensions)** -> **Apps Script**.
2. Xóa toàn bộ mã mặc định có trong file `Code.gs`.
3. Mở file [google-sheets-integration/Code.gs](file:///c:/Trung%20Website/Trung%20website%20html/google-sheets-integration/Code.gs), sao chép toàn bộ nội dung và dán vào cửa sổ Apps Script.
4. Nhấn biểu tượng **Lưu (Save / Ctrl + S)**.

---

### BƯỚC 3: TRIỂN KHAI DƯỚI DẠNG WEB APP (DEPLOY)
1. Ở góc trên bên phải màn hình Apps Script, nhấn nút màu xanh **Triển khai (Deploy)** -> Chọn **Tùy chọn triển khai mới (New deployment)**.
2. Nhấn vào biểu tượng bánh răng **Chọn loại (Select type)** -> Chọn **Ứng dụng web (Web app)**.
3. Điền các thông tin:
   - **Mô tả (Description)**: `Portfolio Inquiries Webhook`
   - **Thực thi dưới dạng (Execute as)**: `Tôi (Me - địa chỉ email Google của bạn)`
   - **Ai có quyền truy cập (Who has access)**: `Bất kỳ ai (Anyone)` *(Rất quan trọng: Phải chọn 'Anyone' để khách truy cập website có thể gửi dữ liệu vào sheet)*.
4. Nhấn nút **Triển khai (Deploy)**.
5. Google sẽ yêu cầu ủy quyền cấp quyền truy cập bảng tính:
   - Nhấn **Xem lại quyền truy cập (Authorize access)**.
   - Chọn tài khoản Google của bạn.
   - Nhấn **Nâng cao (Advanced)** -> Chọn **Đi tới dự án (Không an toàn) / Go to project (unsafe)**.
   - Nhấn **Cho phép (Allow)**.
6. Sau khi hoàn tất, Google sẽ cấp cho bạn một đường dẫn **Web app URL** có dạng:
   `https://script.google.com/macros/s/AKfycbx.../exec`
7. Hãy sao chép đường link này!

---

### BƯỚC 4: KẾT NỐI VÀO WEBSITE CỦA BẠN
1. Mở file `assets/js/main.js`.
2. Tìm đến biến cấu hình `CONFIG`:
   ```javascript
   const CONFIG = {
     // Dán đường link Web app URL vừa copy vào đây:
     GOOGLE_SHEET_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbx.../exec"
   };
   ```
3. Lưu file lại.
4. Bây giờ, khi bất kỳ ai điền form liên hệ trên website, dữ liệu sẽ được truyền trực tiếp vào Google Sheet của bạn ngay tức thì, đồng thời gửi email thông báo về hộp thư `nqtrung23021997@gmail.com`!
