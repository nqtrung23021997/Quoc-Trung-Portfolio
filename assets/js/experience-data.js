/**
 * Career Experience & Academic Timeline Data
 * Supports dual language (EN & VI)
 */

const experienceData = [
  {
    id: "exp-lucid",
    company: "Lucid Consulting Australia",
    location: "Adelaide, South Australia",
    period: {
      en: "May 2024 — Present",
      vi: "Tháng 05/2024 — Hiện Tại"
    },
    badge: {
      en: "Current Role",
      vi: "Vị Trí Hiện Tại"
    },
    role: {
      en: "Digital Professional | Electrical Services Designer | BIM Lead Electrical",
      vi: "Chuyên Viên Kỹ Thuật Số | Thiết Kế Điện | Trưởng Nhóm BIM Điện"
    },
    summary: {
      en: "Providing detailed electrical services design, technical consultancy, and leading the BIM Electrical workflow across major high-profile healthcare, commercial, educational, and mission-critical facilities.",
      vi: "Chủ trì thiết kế kỹ thuật điện, tư vấn chuyên môn và dẫn dắt quy trình BIM Điện cho các dự án y tế quy mô lớn, thương mại, giáo dục và hạ tầng trọng yếu."
    },
    duties: {
      en: [
        "Lead end-to-end electrical engineering packages (power supply, cable containment, lightning protection) from concept through to as-built shop drawings.",
        "Perform advanced photometric lighting simulations using AGi32 software, ensuring strict compliance with Australian Standards (AS/NZS 1680 & 1158).",
        "Direct BIM Project Coordination, driving rigorous QA/QC standards, delegating tasks to external resource assistants, and validating models prior to client delivery.",
        "Facilitate inter-disciplinary coordination workshops in Navisworks and Revizto with mechanical, hydraulic, and structural consultants."
      ],
      vi: [
        "Chủ trì hoàn thiện hồ sơ kỹ thuật điện toàn diện (nguồn điện, máng cáp, chống sét) từ thiết kế cơ sở đến bản vẽ thi công hoàn công.",
        "Thực hiện mô phỏng chiếu sáng trắc quang AGi32 chuyên sâu, đảm bảo đáp ứng nghiêm ngặt tiêu chuẩn chiếu sáng Úc (AS/NZS 1680 & 1158).",
        "Điều phối dự án BIM, kiểm soát chất lượng QA/QC, phân chia công việc cho nhân sự hỗ trợ và phê duyệt hồ sơ trước khi gửi khách hàng.",
        "Chủ trì các buổi họp giải quyết xung đột trên Navisworks và Revizto cùng các đối tác Cơ, Nước và Kết cấu."
      ]
    },
    achievements: {
      en: [
        "New Women's and Children’s Hospital ($3.2B AUD): Core member of the Healthcare Design Team, leading BIM execution and critical lighting calculations.",
        "PTA Western Australia Lighting Renewal ($1M+ AUD): Spearheaded photometric modeling and verification in AGi32 for public rail infrastructure.",
        "Multi-Sector Delivery: Successfully coordinated diverse engineering packages valued between $100k and $1M across airport, industrial, and education sectors."
      ],
      vi: [
        "Bệnh viện Phụ sản & Nhi đồng Mới ($3.2B AUD): Thành viên nòng cốt đội ngũ thiết kế y tế, trực tiếp thực thi mô hình BIM và tính toán chiếu sáng khu vực quan trọng.",
        "Dự án Chiếu sáng PTA Western Australia ($1M+ AUD): Chủ trì mô hình hóa và thẩm định trắc quang AGi32 cho hạ tầng giao thông đường sắt công cộng.",
        "Giao nộp đa ngành: Hoàn thành xuất sắc nhiều gói dự án trị giá $100k - $1M thuộc các lĩnh vực sân bay, công nghiệp và cơ sở giáo dục."
      ]
    },
    technologies: ["Revit MEPF", "AGi32", "Navisworks", "Revizto", "BIM 360", "AS/NZS 3000", "AS/NZS 1680"]
  },
  {
    id: "exp-nilsen",
    company: "Oliver. J. Nilsen Company",
    location: "Adelaide, South Australia",
    period: {
      en: "March 2023 — May 2024",
      vi: "Tháng 03/2023 — Tháng 05/2024"
    },
    badge: {
      en: "Tier 1 Electrical Contractor",
      vi: "Nhà Thầu Cơ Điện Cấp 1"
    },
    role: {
      en: "BIM Modeler and Coordinator",
      vi: "Kỹ Sư Điều Phối & Mô Hình Hóa BIM Điện"
    },
    summary: {
      en: "Spearheaded electrical BIM modeling, contractor requirement coordination, and installation shop drawing packages for major tier-4 hyperscale data centers.",
      vi: "Chủ trì mô hình hóa BIM điện, điều phối yêu cầu nhà thầu và lập hồ sơ bản vẽ chế tạo lắp đặt cho các trung tâm dữ liệu siêu quy mô."
    },
    duties: {
      en: [
        "Reviewed complex electrical systems design, single line diagrams, and managed contractor requirements.",
        "Collaborated directly with major industry stakeholders including Aurecon, John Holland, and Microsoft technical leads.",
        "Created fabrication-level LOD 400 models for heavy cable trays, busducts, main switchboards (MSB), and generator interfaces.",
        "Finalized detailed installation and shop drawings for fast-track modular site construction."
      ],
      vi: [
        "Thẩm định thiết kế hệ thống điện phức tạp, sơ đồ nguyên lý và điều phối các yêu cầu kỹ thuật từ nhà thầu.",
        "Làm việc trực tiếp cùng các bên liên quan lớn như Aurecon, John Holland và đại diện kỹ thuật của Microsoft.",
        "Xây dựng mô hình chế tạo LOD 400 cho máng cáp nặng, thanh dẫn busduct, tủ phân phối tổng (MSB) và đấu nối máy phát điện.",
        "Hoàn thiện bản vẽ chế tạo và lắp đặt phục vụ thi công lắp ghép dạng module tốc độ cao."
      ]
    },
    achievements: {
      en: [
        "Hyperscale Data Centers ($150M+ AUD each): Successfully developed BIM infrastructure for MEL04, MEL05, MEL07, MEL11 (Melbourne), and NEXTDC A1 (Adelaide).",
        "Significantly mitigated site rework by resolving high-density electrical clashes with mechanical chilled water pipes."
      ],
      vi: [
        "Chuỗi Data Center Hyperscale ($150M+ AUD/trung tâm): Xây dựng hạ tầng BIM cho các trạm MEL04, MEL05, MEL07, MEL11 (Melbourne) và NEXTDC A1 (Adelaide).",
        "Cắt giảm đáng kể việc chỉnh sửa lại ở công trường nhờ xử lý triệt để xung đột giữa hệ thống điện dày đặc và đường ống nước lạnh cơ điện."
      ]
    },
    technologies: ["Revit MEPF", "Navisworks Manage", "PowerCAD", "AutoCAD", "BIM 360", "Busway Systems"]
  },
  {
    id: "exp-aurecon",
    company: "Aurecon Group",
    location: "Global Offshoring Delivery",
    period: {
      en: "July 2021 — January 2022",
      vi: "Tháng 07/2021 — Tháng 01/2022"
    },
    badge: {
      en: "Global Engineering Consultancy",
      vi: "Tập Đoàn Tư Vấn Kỹ Thuật Toàn Cầu"
    },
    role: {
      en: "Electrical Engineer, Offshoring Team",
      vi: "Kỹ Sư Điện, Đội Ngũ Offshore Toàn Cầu"
    },
    summary: {
      en: "Conducted electrical design checks, SLD markup reviews, and contributed to BIM documentation for mega infrastructure across Australia and Singapore.",
      vi: "Thực hiện thẩm định thiết kế điện, rà soát sơ đồ nguyên lý SLD và hoàn thiện hồ sơ BIM cho các siêu dự án hạ tầng tại Úc và Singapore."
    },
    duties: {
      en: [
        "Checked electrical designs and single line diagrams against strict Aurecon standards for Australian and Singaporean markets.",
        "Generated markups and resolved technical inquiries to ensure complete code compliance.",
        "Coordinated electrical models across concept, tender, and as-built phases."
      ],
      vi: [
        "Kiểm tra thiết kế điện và sơ đồ một sợi theo các tiêu chuẩn khắt khe của Aurecon cho thị trường Úc và Singapore.",
        "Đưa ra các bản vẽ đánh dấu chỉnh sửa (markups) và giải quyết các vấn đề kỹ thuật đảm bảo tuân thủ tiêu chuẩn.",
        "Điều phối mô hình điện qua các giai đoạn thiết kế ý tưởng, hồ sơ mời thầu và hồ sơ hoàn công."
      ]
    },
    achievements: {
      en: [
        "Delivered engineering packages for high-profile assets including Brisbane Airport, Melbourne Airport, Marina Bay Sands expansions, and regional Data Centers."
      ],
      vi: [
        "Giao nộp thành công các gói kỹ thuật cho các tài sản danh tiếng: Sân bay Quốc tế Brisbane, Sân bay Melbourne, tổ hợp Marina Bay Sands và các Data Center khu vực."
      ]
    },
    technologies: ["Revit MEPF", "AutoCAD", "Navisworks", "SLD Schematics", "AS/NZS Standards", "Singapore CP5"]
  },
  {
    id: "exp-indochine",
    company: "Indochine Engineering Company",
    location: "Vietnam & International Client Delivery",
    period: {
      en: "May 2020 — December 2020",
      vi: "Tháng 05/2020 — Tháng 12/2020"
    },
    badge: {
      en: "Consulting Engineering Partner",
      vi: "Đối Tác Tư Vấn Kỹ Thuật Quốc Tế"
    },
    role: {
      en: "Electrical Engineering, Offshoring Team",
      vi: "Kỹ Sư Kỹ Thuật Điện, Đội Ngũ Offshore"
    },
    summary: {
      en: "Specialized in electrical design reviews and BIM documentation for Norman Disney & Young (NDY), servicing the Australian and United Kingdom markets.",
      vi: "Chuyên trách thẩm tra thiết kế điện và triển khai hồ sơ BIM cho Norman Disney & Young (NDY) phục vụ thị trường Úc và Vương quốc Anh."
    },
    duties: {
      en: [
        "Reviewed electrical designs and single line diagrams to ensure alignment with NDY and UK/Australian guidelines.",
        "Finalized detailed design packages and coordinated clash-free electrical pathways."
      ],
      vi: [
        "Thẩm tra hồ sơ thiết kế điện và sơ đồ đơn tuyến đảm bảo tuân thủ quy chuẩn của NDY và các tiêu chuẩn Úc/Anh.",
        "Hoàn thiện các bộ hồ sơ thiết kế chi tiết và bố trí mạng lưới đường dây điện không xung đột."
      ]
    },
    achievements: {
      en: [
        "Successfully delivered BIM packages from concept to tender on multiple commercial towers and institutional facilities."
      ],
      vi: [
        "Bàn giao thành công nhiều gói mô hình BIM từ giai đoạn ý tưởng đến mời thầu cho các tòa nhà thương mại và cơ sở giáo dục."
      ]
    },
    technologies: ["Revit MEP", "AutoCAD", "Switchboard Schedules", "Load Balancing"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = experienceData;
}
