/**
 * Technical Skills & Engineering Arsenal Data
 * Categorized for BIM, Electrical Engineering, Computational Automation, and Tools
 */

const skillsData = [
  // Category 1: BIM & Digital Engineering
  {
    category: "bim",
    name: "Autodesk Revit MEPF",
    level: "Expert / Lead",
    proficiency: 95,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    desc: {
      en: "Parametric electrical systems modeling, containment routing, busway design, and LOD 300-500 fabrication models.",
      vi: "Mô hình hóa hệ thống điện tham số, định tuyến máng cáp, busway và xuất mô hình chế tạo LOD 300-500."
    },
    tags: ["LOD 300-500", "MEPF Modeling", "Shop Drawings", "Parameters"]
  },
  {
    category: "bim",
    name: "Navisworks Manage & Clash Detection",
    level: "Advanced",
    proficiency: 92,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    desc: {
      en: "Federated multi-disciplinary model coordination, hard/soft clash matrix management, and constructability reviews.",
      vi: "Điều phối mô hình liên kết đa ngành, quản lý ma trận xung đột và thẩm tra biện pháp thi công."
    },
    tags: ["Clash Matrix", "Federation", "Timeliner 4D", "QA/QC"]
  },
  {
    category: "bim",
    name: "BIM 360 & Autodesk Construction Cloud (ACC)",
    level: "Advanced",
    proficiency: 90,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    desc: {
      en: "Common Data Environment (CDE) management, issue tracking, permission control, and cloud worksharing.",
      vi: "Quản lý môi trường dữ liệu chung (CDE), theo dõi lỗi, phân quyền và cộng tác đám mây đa địa điểm."
    },
    tags: ["CDE Management", "Cloud Worksharing", "Issue Tracking"]
  },
  {
    category: "bim",
    name: "Revizto Coordination",
    level: "Advanced",
    proficiency: 88,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`,
    desc: {
      en: "Real-time issue tracker and clash synchronization between engineering consultants and on-site contractors.",
      vi: "Đồng bộ hóa báo cáo xung đột thời gian thực giữa đơn vị tư vấn thiết kế và các nhà thầu ngoài công trường."
    },
    tags: ["Real-time Sync", "Issue Stamp", "Field BIM"]
  },
  {
    category: "bim",
    name: "Point Cloud & Laser Scanning Integration",
    level: "Proficient",
    proficiency: 85,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><circle cx="6" cy="6" r="1"></circle><circle cx="18" cy="6" r="1"></circle><circle cx="6" cy="18" r="1"></circle><circle cx="18" cy="18" r="1"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line></svg>`,
    desc: {
      en: "Integrating 3D laser scan point clouds into Revit for accurate brownfield retrofit and as-built verification.",
      vi: "Tích hợp dữ liệu quét laser đám mây điểm 3D vào Revit phục vụ cải tạo công trình hiện hữu và đo đạc hoàn công."
    },
    tags: ["As-Built Scan", "Laser Scanning", "Brownfield Retrofit"]
  },

  // Category 2: Electrical & Lighting Design
  {
    category: "electrical",
    name: "AGi32 Photometric Lighting Analysis",
    level: "Specialist",
    proficiency: 95,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    desc: {
      en: "Advanced photometric simulations, glare rating (UGR), lux calculation grids, and AS/NZS 1680 & 1158 compliance.",
      vi: "Mô phỏng trắc quang tiên tiến, đánh giá chỉ số chói UGR, lưới độ rọi lux và thẩm định chuẩn AS/NZS 1680 & 1158."
    },
    tags: ["Photometrics", "AS/NZS 1680", "AS/NZS 1158", "Dialux evo"]
  },
  {
    category: "electrical",
    name: "Power Supply & LV Distribution",
    level: "Senior",
    proficiency: 93,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    desc: {
      en: "Sizing main switchboards (MSB), distribution boards, busways, generator backup, and high-density power supply.",
      vi: "Tính toán tủ điện tổng MSB, tủ nhánh DB, thanh cái busway, máy phát điện dự phòng và phụ tải công suất cao."
    },
    tags: ["MSB / DB", "Substation", "Busduct", "PowerCAD"]
  },
  {
    category: "electrical",
    name: "Single Line Diagrams (SLD) & Schematics",
    level: "Expert",
    proficiency: 94,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    desc: {
      en: "Detailed design of electrical single line diagrams, protection discrimination, metering, and circuit breaker ratings.",
      vi: "Thiết kế chi tiết sơ đồ nguyên lý 1 sợi, phối hợp bảo vệ chọn lọc, đo đếm và chọn định mức aptomat."
    },
    tags: ["SLD", "Schematics", "Protection", "Switchgear"]
  },
  {
    category: "electrical",
    name: "Lightning Protection & Earthing (AS 1768)",
    level: "Advanced",
    proficiency: 90,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
    desc: {
      en: "Rolling sphere risk assessments, air terminal networks, down-conductors, and foundation earthing systems.",
      vi: "Đánh giá rủi ro quả cầu lăn, mạng kim thu sét, dây dẫn thoát sét và hệ thống tiếp địa cọc móng theo AS 1768."
    },
    tags: ["AS 1768", "Earthing Mesh", "Surge Protection", "Air Terminals"]
  },

  // Category 3: Computational BIM, Dev & Automation
  {
    category: "automation",
    name: "Dynamo Visual Programming",
    level: "Advanced",
    proficiency: 88,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    desc: {
      en: "Automating repetitive BIM tasks: automatic conduit/tray numbering, circuit parameter writing, and batch exports.",
      vi: "Tự động hóa tác vụ lặp lại trong BIM: tự động đánh số tuyến máng/ống, ghi tham số mạch điện và xuất hồ sơ hàng loạt."
    },
    tags: ["Visual Scripting", "BIM Automation", "Parameter Transfer"]
  },
  {
    category: "automation",
    name: "Python for BIM & pyRevit",
    level: "Intermediate / Applied",
    proficiency: 82,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    desc: {
      en: "Custom pyRevit scripts, Revit API querying, data harvesting into Excel/JSON, and automated model health audits.",
      vi: "Viết script pyRevit tùy biến, truy vấn Revit API, bóc tách dữ liệu sang Excel/JSON và kiểm toán chất lượng file BIM."
    },
    tags: ["pyRevit", "Python", "Revit API", "Data Parsing"]
  },
  {
    category: "automation",
    name: "Web BIM & Interactive 3D (HTML/JS/Three.js)",
    level: "Applied",
    proficiency: 80,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`,
    desc: {
      en: "Building responsive web interfaces, interactive canvas viewers, and web-based portfolio presentation tools.",
      vi: "Xây dựng giao diện web phản hồi nhanh, bộ hiển thị tương tác canvas và nền tảng trình chiếu đồ họa kỹ thuật."
    },
    tags: ["WebGL", "Three.js Canvas", "Modern Frontend", "Interactive UI"]
  },

  // Category 4: Standards, Codes & Project Governance
  {
    category: "standards",
    name: "Australian Standards (AS/NZS Codes)",
    level: "Expert",
    proficiency: 96,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    desc: {
      en: "Comprehensive mastery of AS/NZS 3000 (Wiring Rules), AS/NZS 1680 (Interior Lighting), AS/NZS 1158, AS/NZS 2293.",
      vi: "Làm chủ trọn vẹn AS/NZS 3000 (Quy chuẩn đi dây Úc), AS/NZS 1680 (Chiếu sáng), AS/NZS 1158 và chiếu sáng sự cố 2293."
    },
    tags: ["AS/NZS 3000", "AS/NZS 1680", "AS/NZS 2293", "BCA / NCC"]
  },
  {
    category: "standards",
    name: "Project Management & QA/QC Delivery",
    level: "Senior",
    proficiency: 92,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path></svg>`,
    desc: {
      en: "Leading quality assurance, delegating packages to external drafting assistants, and multi-disciplinary workshops.",
      vi: "Chỉ đạo kiểm soát chất lượng QA/QC, phân chia khối lượng cho đội ngũ cộng sự và tổ chức workshop đa ngành."
    },
    tags: ["QA/QC", "Offshore Management", "Risk Control", "Agile BIM"]
  },
  {
    category: "standards",
    name: "AutoCAD & Engineering Drafting",
    level: "Expert",
    proficiency: 95,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    desc: {
      en: "Precision 2D technical drawings, schematic generation, title block automation, and multi-scale plotting.",
      vi: "Vẽ kỹ thuật 2D chuẩn xác, hoàn thiện sơ đồ nguyên lý, tự động hóa khung tên và in ấn đa tỷ lệ."
    },
    tags: ["2D CAD", "Drafting Standards", "LISP / Scripts", "Detailing"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = skillsData;
}
