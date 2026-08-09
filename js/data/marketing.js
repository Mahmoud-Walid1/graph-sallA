/* js/data/marketing.js - Marketing & Digital Media Services Data */
const marketingSizingNote = "يتم تنفيذ التصميم بالمقاسات القياسية المتعارف عليها للمنتج المطلوب، وإذا كان لديك مقاسات أو أبعاد خاصة، يرجى كتابتها بوضوح في حقل الملاحظات عند الطلب.";

window.marketingServices = [
  // الإعلانات التعليمية
  {
    id: "mkt-1",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم إعلان فعالية",
    price: "20 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "تصميم إعلان جذاب للأنشطة والفعاليات التعليمية والمدرسية يلفت الانتباه ويحفز على المشاركة.",
    requirements: "عنوان الفعالية، التاريخ والوقت، المكان، المنظمين، اللوجو، ووسائل التواصل.",
    note: marketingSizingNote
  },
  {
    id: "mkt-2",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم بانر تعليمي",
    price: "20 ر.س",
    time: "24-48 ساعة",
    format: "PDF + PSD",
    description: "بانر إعلاني أو توجيهي للمواقع الإلكترونية أو القاعات التعليمية والمنصات.",
    requirements: "العنوان الرئيسي، العبارات الفرعية، الشعار، الأبعاد المحددة.",
    note: marketingSizingNote
  },
  {
    id: "mkt-3",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم رول أب إعلاني",
    price: "39 ر.س",
    time: "24-48 ساعة",
    format: "PDF + PSD",
    description: "تصميم Stand Roll-Up عمودي فخم للمعارض والملتقيات والمؤسسات التعليمية.",
    requirements: "محتوى الرول أب، المحاور الرئيسية، الشعار بدقة عالية، والمقاسات المطلوب طباعتها.",
    note: marketingSizingNote
  },
  {
    id: "mkt-4",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم لوحة إعلانية",
    price: "49 ر.س",
    time: "48 ساعة",
    format: "PDF + PSD",
    description: "تصميم لوحات إعلانية خارجية وداخلية بمقاسات كبيرة وتوضيح عالي.",
    requirements: "مقاس اللوحة بالسم/المتر، المحتوى النصي، اللوجو، والصور ذات الجودة العالية.",
    note: marketingSizingNote
  },
  {
    id: "mkt-5",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم إعلان تسجيل",
    price: "20 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "بوستر إعلاني مخصص لفتح باب التسجيل بالمدارس، الأكاديميات، أو الدورات.",
    requirements: "فترة التسجيل، الشروط، الفئات المستهدفة، طرق التواصل واللوجو.",
    note: marketingSizingNote
  },
  {
    id: "mkt-6",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم إعلان اختبارات",
    price: "20 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "تصميم توجيهي أو إعلاني لمواعيد وتعليمات الاختبارات للطلاب وأولياء الأمور.",
    requirements: "مواعيد الاختبارات، النص والملاحظات الهامة، الشعار.",
    note: marketingSizingNote
  },
  {
    id: "mkt-7",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم إعلان دورة تدريبية",
    price: "20 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "تصميم تسويقي لورش العمل والدورات التدريبية يبرز المحاور ورابط التسجيل.",
    requirements: "اسم الدورة، المدرب، المحاور، التاريخ، السعر، والشعار.",
    note: marketingSizingNote
  },
  {
    id: "mkt-8",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الإعلانات التعليمية",
    title: "تصميم إعلان مناسبة وطنية",
    price: "20 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "بوستر احترافي مخصص للمناسبات والأعياد الوطنية واليوم الوطني وتأسيس المملكة.",
    requirements: "اسم المنشأة/المدرسة، التهاني، اللوجو الرسمي.",
    note: marketingSizingNote
  },

  // تصميم السوشيال ميديا
  {
    id: "mkt-9",
    category: "التسويق والإعلام الرقمي",
    subCategory: "تصميم السوشيال ميديا",
    title: "تصميم منشور احترافي (Post)",
    price: "15 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "تصميم بوست مبتكر ومخصص لمنصات (إنستغرام، إكس، فيسبوك، لينكد إن).",
    requirements: "محتوى المنشور، المنصة المطلوبة، اللوجو، الهوية البصرية.",
    note: marketingSizingNote
  },
  {
    id: "mkt-10",
    category: "التسويق والإعلام الرقمي",
    subCategory: "تصميم السوشيال ميديا",
    title: "تصميم ستوري (Story / Snap)",
    price: "10 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "تصميم طولي سينمائي مخصص للسناب شات، إنستجرام ستوري، وواتساب.",
    requirements: "نص الستوري، اللوجو، الدعوة للإجراء (Call to Action).",
    note: marketingSizingNote
  },
  {
    id: "mkt-11",
    category: "التسويق والإعلام الرقمي",
    subCategory: "تصميم السوشيال ميديا",
    title: "تصميم غلاف حساب (Cover Header)",
    price: "20 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "غلاف حسابات منصات التواصل الاجتماعي يعبر عن هوية المؤسسة ورؤيتها.",
    requirements: "اسم الحساب، الخدمات الأساسية، الشعار، بيانت التواصل.",
    note: marketingSizingNote
  },
  {
    id: "mkt-12",
    category: "التسويق والإعلام الرقمي",
    subCategory: "تصميم السوشيال ميديا",
    title: "تصميم مناسبات سوشيال ميديا",
    price: "15 ر.س",
    time: "24 ساعة",
    format: "PDF + PSD",
    description: "تصاميم معايدة ومناسبات رسمية واجتماعية مخصصة للمشاركة الرقمية.",
    requirements: "نوع المناسبة، نص التهنئة، الشعار.",
    note: marketingSizingNote
  },
  {
    id: "mkt-13",
    category: "التسويق والإعلام الرقمي",
    subCategory: "تصميم السوشيال ميديا",
    title: "تصميم حملة إعلانية متكاملة",
    price: "79 ر.س",
    time: "48-72 ساعة",
    format: "PDF + PSD",
    description: "حزمة تصاميم تسويقية متكاملة تشمل البوستات والستوريات والغلاف وقياسات متعددة.",
    requirements: "تفاصيل الحملة، المنتجات/الخدمات المعروضة، الهوية البصرية واللوجو.",
    note: marketingSizingNote
  },

  // الموشين جرافيك
  {
    id: "mkt-14",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الموشين جرافيك",
    title: "تحريك شعار (Logo Animation)",
    price: "49 ر.س",
    time: "48 ساعة",
    format: "MP4 + Source",
    description: "تحريك احترافي وديناميكي للشعار لإبراز هويتكم في الفيديوهات والمقدمات.",
    requirements: "ملف الشعار بصيغة مفتوحة (AI / EPS / PSD شفاف).",
    note: marketingSizingNote
  },
  {
    id: "mkt-15",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الموشين جرافيك",
    title: "مقدمة وخاتمة فيديو (Intro / Outro)",
    price: "39 ر.س",
    time: "48 ساعة",
    format: "MP4",
    description: "تصميم وتحريك انترو وأوترو احترافي بقوالب سينمائية لجميع الفيديوهات.",
    requirements: "اللوجو، اسم القناة/المنشأة، وسائط التواصل الاجتماعية.",
    note: marketingSizingNote
  },
  {
    id: "mkt-16",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الموشين جرافيك",
    title: "فيديو موشن جرافيك (30 ثانية)",
    price: "99 ر.س",
    time: "48-72 ساعة",
    format: "MP4 (1080p / 4K)",
    description: "فيديو متحرك بدقة عالية 30 ثانية لشرح فكرة أو منتج مع المؤثرات الصوتية.",
    requirements: "السيناريو/السكربت، التعليق الصوتي (إن وجد)، الشعار.",
    note: marketingSizingNote
  },
  {
    id: "mkt-17",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الموشين جرافيك",
    title: "فيديو موشن تعليمي",
    price: "79 ر.س",
    time: "48-72 ساعة",
    format: "MP4",
    description: "فيديو موشن جرافيك مبسط لشرح المناهج الدراسية والقواعد التعليمية.",
    requirements: "مادة الدرس، المحاور الرئيسية، التعليق الصوتي أو المؤثرات.",
    note: marketingSizingNote
  },
  {
    id: "mkt-18",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الموشين جرافيك",
    title: "إعلان متحرك (Motion Ad)",
    price: "79 ر.س",
    time: "48-72 ساعة",
    format: "MP4",
    description: "إعلان متحرك جذاب ومنسق لسناب شات وتيك توك وإنستغرام.",
    requirements: "نص الإعلان، العرض التجاري، اللوجو ورابط رفع الشاشة.",
    note: marketingSizingNote
  },
  {
    id: "mkt-19",
    category: "التسويق والإعلام الرقمي",
    subCategory: "الموشين جرافيك",
    title: "فيديو تعريفي للمؤسسة",
    price: "79 ر.س",
    time: "48-72 ساعة",
    format: "MP4",
    description: "فيديو تعريفي بدقة عالية يعرض خدمات ورؤية المؤسسة بأسلوب بصرى مبهر.",
    requirements: "نبذة عن المؤسسة، الرؤية والخدمات، الشعار ومعلومات الاتصال.",
    note: marketingSizingNote
  }
];
