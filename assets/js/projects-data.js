/**
 * Standout Projects Portfolio Data
 * Easily maintainable and extensible project catalog
 * Supports dual language (EN & VI)
 */

const projectsData = [
  {
    id: "project-nwch",
    featured: true,
    tag: {
      en: "Healthcare Mega Project",
      vi: "Dự Án Y Tế Trọng Điểm"
    },
    title: {
      en: "New Women’s and Children’s Hospital",
      vi: "Bệnh Viện Phụ Sản & Nhi Đồng Mới (nWCH)"
    },
    client: "South Australian Government / Healthcare Sector",
    scale: "$3.2 Billion AUD",
    location: "Adelaide, South Australia",
    period: "2024 - Present",
    role: {
      en: "Digital Professional | Electrical Services Designer | BIM Lead",
      vi: "Chuyên Viên Kỹ Thuật Số | Thiết Kế Điện | Trưởng Nhóm BIM Điện"
    },
    shortDesc: {
      en: "Comprehensive BIM execution and complex photometric lighting calculations for one of Australia's largest high-tier healthcare infrastructure investments ($3.2B AUD).",
      vi: "Thực thi mô hình BIM toàn diện và tính toán chiếu sáng trắc quang phức tạp cho một trong những dự án y tế quy mô lớn nhất nước Úc trị giá 3.2 tỷ AUD."
    },
    fullDesc: {
      en: "The New Women's and Children’s Hospital is a landmark $3.2B AUD state-of-the-art medical and research campus in South Australia. As a core member of the Healthcare Sector Design Team at Lucid Consulting Australia, Quoc Trung spearheads the end-to-end electrical BIM services, ensuring seamless integration between power distribution, lighting systems, cable containment, and multi-disciplinary services.",
      vi: "Dự án Bệnh viện Phụ sản và Nhi đồng Mới là đại công trình nghiên cứu và chăm sóc sức khỏe hiện đại trị giá 3.2 tỷ AUD tại Nam Úc. Với vai trò thành viên nòng cốt trong Đội ngũ Thiết kế Y tế tại Lucid Consulting Australia, Quốc Trung trực tiếp chỉ đạo giải pháp BIM kỹ thuật điện toàn diện, đảm bảo tích hợp tối ưu giữa nguồn điện, hệ thống chiếu sáng, máng cáp và phối hợp đa bộ môn."
    },
    metrics: [
      { label: { en: "Project Value", vi: "Tổng Mức Đầu Tư" }, value: "$3.2B AUD" },
      { label: { en: "BIM Level", vi: "Cấp Độ BIM" }, value: "LOD 400 - 500" },
      { label: { en: "Discipline", vi: "Chuyên Ngành" }, value: "Electrical & BIM" },
      { label: { en: "Standard", vi: "Tiêu Chuẩn Áp Dụng" }, value: "AS/NZS 3000 & 1680" }
    ],
    tools: [
      "Autodesk Revit MEPF",
      "AGi32 Lighting",
      "Navisworks Manage",
      "Revizto",
      "BIM 360 / ACC",
      "AS/NZS 3000",
      "AS/NZS 1680"
    ],
    keyHighlights: {
      en: [
        "Conducted complex photometric lighting simulations in AGi32 for sterile surgical suites, pediatric ICUs, and general ward areas strictly compliant with AS/NZS 1680.",
        "Modeled heavy electrical containment, busway distribution risers, and lightning protection system down-conductors in Revit MEPF with zero clash tolerance.",
        "Managed multi-disciplinary federated models in Navisworks and Revizto, proactively resolving over 250+ clashes prior to site execution.",
        "Coordinated with external resource assistants, leading QA/QC reviews and validating shop drawing deliverable packages."
      ],
      vi: [
        "Thực hiện mô phỏng chiếu sáng trắc quang AGi32 cho các phòng phẫu thuật vô trùng, ICU nhi khoa và khu nội trú, tuân thủ nghiêm ngặt tiêu chuẩn AS/NZS 1680.",
        "Thiết kế và mô hình hóa hệ thống máng cáp nặng, thanh dẫn busway và hệ thống chống sét trên Revit MEPF với độ chính xác cao.",
        "Điều phối mô hình liên kết đa ngành trên Navisworks và Revizto, xử lý trước hơn 250 xung đột kỹ thuật trước khi ra công trường.",
        "Quản lý chất lượng (QA/QC), phân chia công việc cho nhân sự hỗ trợ và phê duyệt hồ sơ bản vẽ thi công trước khi bàn giao cho chủ đầu tư."
      ]
    },
    image: "assets/images/project-nwch.svg",
    badge: "Featured / Landmark"
  },
  {
    id: "project-datacenters",
    featured: true,
    tag: {
      en: "Mission Critical Infrastructure",
      vi: "Hạ Tầng Trung Tâm Dữ Liệu"
    },
    title: {
      en: "Hyperscale Data Centers Portfolio",
      vi: "Chuỗi Trung Tâm Dữ Liệu Hyperscale Cấp Cao"
    },
    client: "Oliver. J. Nilsen / Aurecon / Microsoft / John Holland",
    scale: "$150M+ AUD per facility",
    location: "Melbourne & Adelaide, Australia",
    period: "2023 - 2024",
    role: {
      en: "BIM Modeler & Coordinator",
      vi: "Kỹ Sư Điều Phối & Mô Hình Hóa BIM Điện"
    },
    shortDesc: {
      en: "Developed critical BIM infrastructure, busway systems, and detailed electrical shop drawings for hyperscale facilities including MEL04, MEL05, MEL07, MEL11, and NEXTDC A1.",
      vi: "Phát triển hạ tầng BIM trọng yếu, hệ thống busway và bản vẽ thi công điện chi tiết cho các trung tâm dữ liệu siêu quy mô MEL04, MEL05, MEL07, MEL11 và NEXTDC A1."
    },
    fullDesc: {
      en: "Hyperscale data centers require Tier III/IV uptime reliability, massive power density, and millimeter-level spatial coordination. Working with Oliver. J. Nilsen and partnering with Aurecon, Microsoft, and John Holland, Quoc Trung coordinated high-power electrical distribution, main switchboards (MSB), standby generator couplings, and server hall cable tray topologies.",
      vi: "Các trung tâm dữ liệu siêu quy mô đòi hỏi tiêu chuẩn vận hành Tier III/IV khắt khe, mật độ công suất cực lớn và mức độ chuẩn xác không gian đến từng milimet. Làm việc tại Oliver. J. Nilsen cùng các đối tác hàng đầu như Aurecon, Microsoft và John Holland, Quốc Trung trực tiếp điều phối mạng lưới phân phối điện công suất lớn, tủ điện tổng (MSB), máy phát dự phòng và hạ tầng máng cáp phòng server."
    },
    metrics: [
      { label: { en: "Facility Scope", vi: "Quy Mô" }, value: "5+ Data Centers" },
      { label: { en: "Facility Value", vi: "Giá Trị Mỗi Trạm" }, value: "$150M+ AUD" },
      { label: { en: "Reliability", vi: "Cấp Độ Tin Cậy" }, value: "Tier III / IV" },
      { label: { en: "Containment", vi: "Hệ Thống Máng" }, value: "Multi-tier Heavy Tray" }
    ],
    tools: [
      "Autodesk Revit",
      "Navisworks Manage",
      "PowerCAD",
      "AutoCAD",
      "BIM 360",
      "Substation SLD",
      "High-Density Busways"
    ],
    keyHighlights: {
      en: [
        "Constructed LOD 400 fabrication-ready models for high-ampere busway runs, cable ladders, and seismic bracings.",
        "Collaborated directly with client technical managers (Microsoft & Aurecon) to adapt to fast-evolving rack layout specifications.",
        "Facilitated constructability reviews that expedited procurement and reduced on-site installation rework by 30%.",
        "Exported precise as-built asset parameters for digital twin handover and operations management."
      ],
      vi: [
        "Xây dựng mô hình chế tạo LOD 400 cho các tuyến busway dòng điện lớn, thang cáp chịu tải cao và hệ thống giằng chống động đất.",
        "Phối hợp trực tiếp với quản lý kỹ thuật của khách hàng (Microsoft & Aurecon) để thích ứng linh hoạt theo cấu hình rack máy chủ thay đổi liên tục.",
        "Tham gia rà soát biện pháp thi công, tối ưu hóa vật tư và giảm thiểu hơn 30% thời gian chỉnh sửa tại công trường.",
        "Trích xuất tham số dữ liệu As-Built phục vụ bàn giao mô hình số số hóa vận hành (Digital Twin)."
      ]
    },
    image: "assets/images/project-datacenter.svg",
    badge: "Mission Critical"
  },
  {
    id: "project-pta-wa",
    featured: true,
    tag: {
      en: "Public Infrastructure & Transport",
      vi: "Hạ Tầng Giao Thông Công Cộng"
    },
    title: {
      en: "PTA Western Australia Lighting Renewal",
      vi: "Dự Án Nâng Cấp Chiếu Sáng Cơ Quan Vận Tải Nam/Tây Úc (PTA)"
    },
    client: "Public Transport Authority (Western Australia) / Lucid Consulting",
    scale: "$1.0M+ AUD",
    location: "Western Australia",
    period: "2024",
    role: {
      en: "Lead Lighting Designer & Verification Engineer",
      vi: "Kỹ Sư Chủ Trì Thiết Kế Chiếu Sáng & Thẩm Định Trắc Quang"
    },
    shortDesc: {
      en: "Spearheaded advanced photometric lighting calculations, energy efficiency optimization, and compliance verification using AGi32 for railway stations and passenger corridors.",
      vi: "Chủ trì tính toán chiếu sáng trắc quang nâng cao, tối ưu năng lượng và thẩm định tuân thủ tiêu chuẩn bằng AGi32 cho hệ thống nhà ga xe lửa và hành lang giao thông."
    },
    fullDesc: {
      en: "The Public Transport Authority of Western Australia required an extensive infrastructure renewal to enhance pedestrian safety, CCTV visual clarity, and reduce energy consumption across rail corridors and transit interchanges. Quoc Trung utilized AGi32 to simulate complex luminaire optics, verify uniformity ratios, and guarantee compliance with AS/NZS 1158 (Lighting for roads and public spaces) and AS/NZS 1680.",
      vi: "Cơ quan Vận tải Công cộng Tây Úc triển khai dự án nâng cấp quy mô nhằm tăng cường an toàn hành khách, cải thiện độ rõ nét cho hệ thống camera giám sát và cắt giảm năng lượng tiêu thụ trên các hành lang đường sắt và trạm trung chuyển. Quốc Trung sử dụng AGi32 để mô phỏng quang phổ đèn phức tạp, kiểm tra độ đồng đều ánh sáng và đảm bảo tuân thủ tiêu chuẩn AS/NZS 1158 và AS/NZS 1680."
    },
    metrics: [
      { label: { en: "Safety Compliance", vi: "Tiêu Chuẩn An Toàn" }, value: "100% AS/NZS" },
      { label: { en: "Software", vi: "Phần Mềm Chủ Đạo" }, value: "AGi32 Photometrics" },
      { label: { en: "Sector", vi: "Lĩnh Vực" }, value: "Transit & Rail" },
      { label: { en: "Energy Savings", vi: "Hiệu Quả Năng Lượng" }, value: "LED Retrofit" }
    ],
    tools: [
      "AGi32",
      "Dialux evo",
      "AS/NZS 1158",
      "AS/NZS 1680",
      "AutoCAD",
      "Excel Photometric Engine"
    ],
    keyHighlights: {
      en: [
        "Modeled complex curved passenger platform geometries and calculated illuminance grids with sub-lux accuracy.",
        "Produced comprehensive engineering compliance reports that directly passed independent government peer review.",
        "Optimized luminaire spacing and selection, decreasing total operational wattage while exceeding minimum safety lux thresholds.",
        "Formulated switchboard zoning schedules and emergency lighting battery autonomy plans."
      ],
      vi: [
        "Mô hình hóa hình học sân ga cong phức tạp và tính toán lưới độ rọi với độ chính xác dưới từng đơn vị lux.",
        "Lập báo cáo kỹ thuật toàn diện, vượt qua các vòng thẩm tra độc lập từ cơ quan chính phủ.",
        "Tối ưu khoảng cách và công suất đèn LED, giúp tiết kiệm điện năng tiêu thụ đồng thời vượt ngưỡng an toàn yêu cầu.",
        "Thiết lập sơ đồ phân vùng điều khiển tủ điện và kế hoạch dự phòng cho hệ thống đèn chiếu sáng khẩn cấp."
      ]
    },
    image: "assets/images/project-transport.svg",
    badge: "Infrastructure"
  },
  {
    id: "project-aviation",
    featured: false,
    tag: {
      en: "Aviation & Iconic Landmarks",
      vi: "Hàng Không & Công Trình Biểu Tượng"
    },
    title: {
      en: "Aviation & Commercial Hubs (Brisbane & Melbourne Airport)",
      vi: "Hạ Tầng Sân Bay Quốc Tế Brisbane, Melbourne & Marina Bay Sands"
    },
    client: "Aurecon Group Offshoring Team",
    scale: "Multi-Million Global Packages",
    location: "Australia & Singapore",
    period: "2021 - 2022",
    role: {
      en: "Electrical Engineer | Offshoring BIM Team",
      vi: "Kỹ Sư Điện | Đội Ngũ BIM Offshore"
    },
    shortDesc: {
      en: "Reviewed electrical engineering designs, single line diagrams (SLDs), and coordinated BIM containment packages for world-class airports and commercial landmarks.",
      vi: "Thẩm tra thiết kế kỹ thuật điện, sơ đồ nguyên lý một sợi (SLD) và điều phối các gói mô hình BIM cho các sân bay quốc tế và công trình điểm nhấn."
    },
    fullDesc: {
      en: "During his tenure at Aurecon Group, Quoc Trung contributed to major international engineering packages across Australia and Singapore. Responsibilities covered rigorous review of single line diagrams, cable routing optimization through heavy passenger terminals, and BIM delivery across concept, tender, and detailed design phases.",
      vi: "Trong thời gian làm việc tại Aurecon Group, Quốc Trung đã đóng góp vào các gói hồ sơ kỹ thuật quốc tế lớn tại Úc và Singapore. Trách nhiệm bao gồm thẩm tra nghiêm ngặt sơ đồ nguyên lý một sợi, tối ưu hóa đường đi dây cáp qua các nhà ga sân bay đông đúc và hoàn thiện hồ sơ BIM từ giai đoạn thiết kế ý tưởng, đấu thầu đến thiết kế kỹ thuật thi công."
    },
    metrics: [
      { label: { en: "Market", vi: "Thị Trường" }, value: "Australia & Singapore" },
      { label: { en: "Key Portfolios", vi: "Dự Án Tiêu Biểu" }, value: "BNE, MEL, MBS" },
      { label: { en: "Methodology", vi: "Mô Hình Phối Hợp" }, value: "Global Cross-Border" },
      { label: { en: "Scope", vi: "Hạng Mục" }, value: "HV/LV & SLD Schemes" }
    ],
    tools: [
      "Autodesk Revit MEPF",
      "AutoCAD",
      "Navisworks",
      "SLD Schematic Design",
      "Aurecon Engineering Standards"
    ],
    keyHighlights: {
      en: [
        "Verified electrical drawings against Australian and Singaporean Codes of Practice (CP5, AS/NZS 3000).",
        "Conducted detailed design markup reviews, elevating drawing accuracy and preventing procurement delays.",
        "Collaborated with offshore engineering teams to streamline documentation turnaround times."
      ],
      vi: [
        "Thẩm tra bản vẽ điện theo quy chuẩn thực hành của Úc và Singapore (CP5, AS/NZS 3000).",
        "Rà soát và đưa ra các chỉnh sửa thiết kế chi tiết (markups), nâng cao độ chuẩn xác và phòng tránh chậm tiến độ vật tư.",
        "Làm việc ăn ý cùng các kỹ sư liên quốc gia, đẩy nhanh tốc độ hoàn thành hồ sơ kỹ thuật."
      ]
    },
    image: "assets/images/project-aviation.svg",
    badge: "Aviation"
  },
  {
    id: "project-commercial-ndy",
    featured: false,
    tag: {
      en: "Commercial & High-Rise",
      vi: "Thương Mại & Tòa Nhà Cao Tầng"
    },
    title: {
      en: "Commercial Tower & Institutional Facilities (NDY Projects)",
      vi: "Tòa Nhà Thương Mại & Cơ Sở Giáo Dục Quốc Tế (Norman Disney & Young)"
    },
    client: "Indochine Engineering (Offshore for NDY Australia - UK)",
    scale: "Various Major Projects",
    location: "Australia, UK & Vietnam",
    period: "2020",
    role: {
      en: "Electrical Engineering Offshoring Specialist",
      vi: "Kỹ Sư Thiết Kế Điện Offshore"
    },
    shortDesc: {
      en: "Delivered electrical system schematics, power distribution layouts, and BIM models for major commercial clients across the Australian and UK markets.",
      vi: "Triển khai sơ đồ nguyên lý điện, bố trí hệ thống phân phối nguồn và mô hình hóa BIM cho các khách hàng thương mại lớn tại thị trường Úc và Vương quốc Anh."
    },
    fullDesc: {
      en: "At Indochine Engineering, Quoc Trung served on the dedicated offshore engineering team for NDY (Norman Disney & Young). He performed electrical design verification, single line diagrams (SLD), switchboard load balancing, and BIM coordination for top-tier commercial office towers and higher education campuses.",
      vi: "Tại Indochine Engineering, Quốc Trung là thành viên đội ngũ kỹ thuật offshore chuyên trách cho NDY (Norman Disney & Young). Anh trực tiếp thẩm định thiết kế điện, sơ đồ nguyên lý (SLD), cân bằng phụ tải tủ điện và điều phối mô hình BIM cho các tòa nhà văn phòng hạng A và các trường đại học."
    },
    metrics: [
      { label: { en: "Market", vi: "Thị Trường" }, value: "AU & UK Standards" },
      { label: { en: "Discipline", vi: "Chuyên Đề" }, value: "Power & Containment" },
      { label: { en: "Deliverables", vi: "Sản Phẩm" }, value: "Tender & As-Built" },
      { label: { en: "Load Analysis", vi: "Cân Bằng Tải" }, value: "Three-Phase SLD" }
    ],
    tools: [
      "Revit MEP",
      "AutoCAD MEP",
      "Excel Engineering Tools",
      "Cable Calculation Software",
      "BS / AS Standards"
    ],
    keyHighlights: {
      en: [
        "Balanced multi-level 3-phase switchboard load schedules, preventing phase imbalance issues.",
        "Produced comprehensive schematic drawings and equipment schedules for tender packages.",
        "Fostered strong cross-border technical communication between local and international lead consultants."
      ],
      vi: [
        "Cân bằng phụ tải tủ phân phối 3 pha nhiều tầng, loại bỏ triệt để hiện tượng lệch pha.",
        "Xuất hồ sơ sơ đồ nguyên lý và bảng thông số thiết bị hoàn chỉnh cho gói thầu.",
        "Duy trì kênh trao đổi kỹ thuật chặt chẽ giữa đội ngũ thiết kế trong nước và các kỹ sư tư vấn trưởng quốc tế."
      ]
    },
    image: "assets/images/project-commercial.svg",
    badge: "Commercial"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
