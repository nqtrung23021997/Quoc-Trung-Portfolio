# NGUYEN QUOC TRUNG (ANDY) — PERSONAL PORTFOLIO WEBSITE
### Senior Electrical Project Engineer || Electrical BIM Services Designer || BIM Leader
*Adelaide, South Australia*

Website Portfolio cá nhân cao cấp dành riêng cho **Nguyễn Quốc Trung (Andy)**, được thiết kế theo phong cách tối giản hiện đại (Slightly Dark Mode), chuẩn thẩm mỹ quốc tế, tích hợp hiệu ứng canvas mô phỏng mạng lưới điện / BIM tương tác và hỗ trợ song ngữ (Tiếng Anh & Tiếng Việt).

---

## 1. TỔNG QUAN VÀ TÍNH NĂNG NỔI BẬT

- **Phong cách thiết kế**: Hiện đại, sang trọng, tối giản với bảng màu Slightly Dark Mode (`#09090B`, `#18181B`, `#8B5CF6`, `#06B6D4`), typography phân cấp sắc nét (`Space Grotesk`, `Inter`, `JetBrains Mono`).
- **Interactive Canvas Network**: Mô phỏng mạng lưới tọa độ BIM và vi mạch điện thông minh, tương tác mượt mà với con trỏ chuột, tự động tối ưu 60 FPS và hỗ trợ chế độ giảm chuyển động (`prefers-reduced-motion`).
- **Song ngữ hoàn chỉnh (Bilingual Switcher)**: Chuyển đổi tức thì 100% nội dung giữa Tiếng Việt và Tiếng Anh mà không cần reload trang; tự động lưu tùy chọn vào `localStorage`.
- **Dự án trọng điểm (Interactive Projects Modal)**: Trưng bày các dự án quy mô lớn:
  - *New Women’s and Children’s Hospital* ($3.2B AUD Mega Project)
  - *Chuỗi Hyperscale Data Centers* ($150M+ AUD mỗi trạm cho Microsoft, Aurecon, John Holland)
  - *PTA Western Australia Transit Lighting Renewal* ($1M+ AUD)
  - *Hạ tầng Sân bay Quốc tế Brisbane, Melbourne & Marina Bay Sands*
  - *Tòa nhà văn phòng thương mại cao tầng chuẩn NDY AU & UK*
- **Bộ lọc kỹ năng thông minh (Interactive Skills Matrix)**: Phân loại theo BIM & Kỹ thuật số, Kỹ thuật điện & Chiếu sáng, Tự động hóa & Lập trình, Tiêu chuẩn Úc & Quản trị dự án.
- **Dòng thời gian sự nghiệp (Interactive Timeline)**: Thể hiện lộ trình công tác tại *Lucid Consulting Australia*, *Oliver J. Nilsen*, *Aurecon Group*, *Indochine Engineering* cùng học vấn Thạc sĩ tại *Flinders University*.
- **Kết nối Google Sheets thực tế**: Form liên hệ kiểm tra dữ liệu theo thời gian thực (Real-time Validation) và truyền trực tiếp dữ liệu vào bảng tính Google Sheets của bạn thông qua Google Apps Script, đồng thời kích hoạt gửi email thông báo tự động.
- **Tương thích toàn diện (100% Responsive)**: Tối ưu trên Desktop, Laptop, Máy tính bảng và Điện thoại di động.

---

## 2. CẤU TRÚC THƯ MỤC DỰ ÁN

```text
Trung website html/
│
├── index.html                           # Giao diện chính Semantic HTML5
├── vercel.json                          # Cấu hình tối ưu deploy production Vercel
├── README.md                            # Hướng dẫn chi tiết dự án
├── Avatar.jpg                           # Ảnh đại diện cá nhân chính thức
├── CV_Quoc Trung Nguyen_0431 494 898.docx # File CV gốc để khách tải về
│
├── assets/
│   ├── css/
│   │   └── style.css                    # Toàn bộ mã định dạng CSS hiện đại, biến màu sắc, responsive
│   ├── js/
│   │   ├── i18n-data.js                 # Từ điển dữ liệu song ngữ (Tiếng Việt & English)
│   │   ├── projects-data.js             # Dữ liệu danh mục dự án nổi bật và thông số kỹ thuật
│   │   ├── skills-data.js               # Danh mục kỹ năng, phần mềm và mức độ chuyên môn
│   │   ├── experience-data.js           # Dữ liệu dòng thời gian kinh nghiệm và trách nhiệm
│   │   ├── canvas-bg.js                 # Canvas đồ họa tương tác vi mạch điện / mạng lưới BIM
│   │   └── main.js                      # Logic điều khiển, render giao diện, validate form và gửi Webhook
│   └── images/
│       ├── project-nwch.svg             # Minh họa kỹ thuật Bệnh viện $3.2B AUD
│       ├── project-datacenter.svg       # Minh họa kỹ thuật Hyperscale Data Centers
│       ├── project-transport.svg        # Minh họa kỹ thuật Chiếu sáng giao thông PTA WA
│       ├── project-aviation.svg         # Minh họa kỹ thuật Sân bay quốc tế & Marina Bay Sands
│       └── project-commercial.svg       # Minh họa kỹ thuật Tòa nhà cao tầng & Tủ điện MSB
│
└── google-sheets-integration/
    ├── Code.gs                          # Mã nguồn Google Apps Script sẵn sàng copy-paste
    └── SETUP_GUIDE.md                   # Hướng dẫn từng bước kết nối Google Sheet trong 2 phút
```

---

## 3. HƯỚNG DẪN CHẠY DỰ ÁN TẠI MÁY CỤC BỘ (LOCAL)

Dự án được xây dựng bằng công nghệ Web tiêu chuẩn cao cấp (HTML5, CSS3, ES6 JavaScript) mà không bắt buộc cài đặt npm phức tạp:

### Cách 1: Mở trực tiếp bằng trình duyệt
- Nhấp đúp chuột (Double click) vào file `index.html` để mở ngay trên Chrome, Edge, Safari hoặc Firefox.

### Cách 2: Sử dụng VS Code Live Server (Khuyên dùng)
1. Mở thư mục `Trung website html` bằng **Visual Studio Code**.
2. Cài đặt tiện ích mở rộng **Live Server** (của Ritwick Dey).
3. Nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.
4. Website sẽ tự động mở tại `http://127.0.0.1:5500`.

### Cách 3: Sử dụng Python
Nếu máy tính đã cài đặt Python, mở terminal tại thư mục này và chạy:
```bash
python -m http.server 8000
```
Sau đó truy cập trình duyệt tại: `http://localhost:8000`.

---

## 4. HƯỚNG DẪN TÙY CHỈNH THÔNG TIN CÁ NHÂN

Dữ liệu của website đã được tách biệt hoàn toàn khỏi giao diện HTML, giúp việc cập nhật cực kỳ nhanh chóng và không lo vỡ layout:

### Thay đổi thông tin cá nhân & bản dịch:
- Mở file `assets/js/i18n-data.js`:
  - Mục `en` chứa toàn bộ văn bản tiếng Anh.
  - Mục `vi` chứa toàn bộ văn bản tiếng Việt.
  - Có thể chỉnh sửa tiêu đề nghề nghiệp, đoạn văn tự sự, số năm kinh nghiệm, mục tiêu phát triển.

### Thêm hoặc sửa dự án:
- Mở file `assets/js/projects-data.js`:
  - Mỗi dự án là một object chứa `title`, `scale`, `client`, `location`, `shortDesc`, `fullDesc`, `metrics`, `tools`, `keyHighlights`.
  - Chỉ cần copy một object dự án mẫu và điền thông tin dự án mới, giao diện sẽ tự động cập nhật cả thẻ bài viết lẫn cửa sổ modal chi tiết!

### Thêm hoặc sửa kỹ năng:
- Mở file `assets/js/skills-data.js`:
  - Thêm kỹ năng vào các danh mục: `bim`, `electrical`, `automation`, hoặc `standards`.

### Cập nhật kinh nghiệm làm việc:
- Mở file `assets/js/experience-data.js`:
  - Thêm công ty mới, cập nhật chức danh, trách nhiệm hoặc thành tựu.

---

## 5. HƯỚNG DẪN KẾT NỐI GOOGLE SHEETS CHO FORM LIÊN HỆ

Form liên hệ đã được lập trình sẵn sàng để gửi dữ liệu về Google Sheets cá nhân của bạn mà không cần cơ sở dữ liệu:

1. Đọc chi tiết tài liệu hướng dẫn tại [google-sheets-integration/SETUP_GUIDE.md](google-sheets-integration/SETUP_GUIDE.md).
2. Tạo 1 bảng Google Sheet và dán mã từ file [google-sheets-integration/Code.gs](google-sheets-integration/Code.gs) vào mục **Extensions -> Apps Script**.
3. Deploy dưới dạng **Web app** với quyền truy cập **Anyone**.
4. Sao chép đường link URL nhận được và dán vào file `assets/js/main.js` tại dòng:
   ```javascript
   const CONFIG = {
     GOOGLE_SHEET_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycb.../exec"
   };
   ```
5. Khi người dùng bấm gửi tin nhắn trên website:
   - Dữ liệu được xác thực chuẩn xác (họ tên, email, điện thoại, nội dung).
   - Tự động ghi một dòng mới vào bảng Google Sheet của bạn.
   - Tự động gửi email thông báo về địa chỉ `nqtrung23021997@gmail.com`.
   - Nếu bạn chưa dán link Webhook, website sẽ hiện thông báo chân thực và cung cấp nút bấm gửi email trực tiếp, tuyệt đối không giả lập thành công ảo.

---

## 6. HƯỚNG DẪN TRIỂN KHAI LÊN VERCEL (DEPLOY TO PRODUCTION)

Website đã đi kèm file `vercel.json` tối ưu sẵn bộ nhớ đệm cache và bảo mật.

### Cách triển khai miễn phí trong 1 phút:
1. Đăng ký/Đăng nhập tài khoản tại [Vercel.com](https://vercel.com).
2. Tải toàn bộ thư mục `Trung website html` lên một repository trên **GitHub** của bạn (ví dụ: `andy-portfolio`).
3. Trên trang quản trị Vercel, nhấn **Add New** -> **Project**.
4. Chọn repository GitHub vừa tạo và nhấn **Deploy**.
5. Vercel sẽ tự động build và cấp phát cho bạn một tên miền miễn phí cực nhanh dạng: `https://andy-trung-portfolio.vercel.app` (hỗ trợ SSL/HTTPS miễn phí).
6. Bạn cũng có thể liên kết tên miền riêng (ví dụ: `trungnguyen.com` hoặc `andybim.com`) chỉ với vài thao tác trong mục **Settings -> Domains**.

---

## 7. TIÊU CHUẨN KỸ THUẬT VÀ TỐI ƯU HÓA

- **Hiệu năng (Performance)**: Điểm số Lighthouse lý tưởng, không tải thừa thư viện cồng kềnh, hình ảnh vector SVG siêu nhẹ (<15KB) hiển thị sắc nét trên màn hình Retina 4K.
- **Tiêu chuẩn SEO**: Tích hợp Open Graph, Twitter Cards, Semantic Tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Khả năng tiếp cận (Accessibility - a11y)**: Đạt độ tương phản màu chuẩn WCAG AAA trên nền Slightly Dark Mode, hỗ trợ điều hướng bằng bàn phím (`tabindex`, phím ESC đóng modal), nhãn `aria-label` đầy đủ.
- **Chế độ giảm chuyển động**: Tự động nhận diện khi người dùng bật chế độ `prefers-reduced-motion` trong hệ điều hành để tắt các hiệu ứng chuyển động mạnh, bảo vệ thị giác.
