import type { Lens, Localized } from './types';

/** Interface copy. Every visible label lives here, never in components. */
export const ui = {
  skipToContent: { en: 'Skip to content', ar: 'انتقل إلى المحتوى' },
  primaryNav: { en: 'Primary', ar: 'التنقل الرئيسي' },
  breadcrumb: { en: 'Breadcrumb', ar: 'مسار التنقل' },
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    story: { en: 'Story', ar: 'المسيرة' },
    experience: { en: 'Experience', ar: 'الخبرة' },
    achievements: { en: 'Achievements', ar: 'الإنجازات' },
    expertise: { en: 'Expertise', ar: 'الخبرات' },
    credentials: { en: 'Credentials', ar: 'المؤهلات' },
    about: { en: 'About', ar: 'نبذة' },
    contact: { en: 'Contact', ar: 'التواصل' },
  },
  localeToggle: {
    toEnglish: { en: 'English', ar: 'English' },
    toArabic: { en: 'العربية', ar: 'العربية' },
    arabicPending: { en: 'العربية (قريباً)', ar: 'العربية (قريباً)' },
    arabicPendingHint: { en: 'Arabic version in preparation', ar: 'النسخة العربية قيد الإعداد' },
  },
  eraFilter: {
    legend: { en: 'Filter by era', ar: 'التصفية حسب الفترة' },
    all: { en: 'All', ar: 'الكل' },
    unattributedNote: { en: 'Highlights from across the career.', ar: 'أبرز المحطات على امتداد المسيرة المهنية.' },
  },
  timeline: {
    label: { en: 'Career timeline, 2001 to present', ar: 'الخط الزمني للمسيرة المهنية من 2001 إلى الآن' },
    earlierGroup: { en: 'Earlier banking and investment roles', ar: 'أدوار سابقة في الخدمات المصرفية والاستثمار' },
    present: { en: 'present', ar: 'الآن' },
    to: { en: 'to', ar: 'إلى' },
  },
  marginNote: { close: { en: 'Close note', ar: 'إغلاق الملاحظة' } },
  progressRail: { label: { en: 'Chapters', ar: 'الفصول' } },
  keyFigures: { en: 'Key figures', ar: 'أرقام رئيسية' },
  chaptersHeading: { en: 'The story in three chapters', ar: 'المسيرة في ثلاثة فصول' },
  readChapter: { en: 'Read the chapter', ar: 'اقرأ الفصل' },
  footer: {
    linkedin: { en: 'LinkedIn', ar: 'لينكدإن' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
  },
  contact: {
    location: { en: 'Location', ar: 'الموقع' },
    phone: { en: 'Phone', ar: 'الهاتف' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    linkedin: { en: 'LinkedIn', ar: 'لينكدإن' },
  },
  credentials: {
    education: { en: 'Education and qualifications', ar: 'التعليم والمؤهلات' },
    training: { en: 'Training', ar: 'التدريب' },
  },
  expertise: { technicalSkills: { en: 'Technical skills', ar: 'المهارات التقنية' } },
  about: {
    executiveSummary: { en: 'Executive summary', ar: 'الملخص التنفيذي' },
    executiveProfile: { en: 'Executive profile', ar: 'الملف التنفيذي' },
    qualifications: { en: 'Qualifications', ar: 'المؤهلات' },
    areas: { en: 'Areas of practice', ar: 'مجالات الممارسة' },
    currentRole: { en: 'Current role', ar: 'المنصب الحالي' },
  },
  roleCard: { from: { en: 'from', ar: 'من' } },
} satisfies Record<string, unknown>;

export const lensOrder: Lens[] = ['capital', 'governance', 'transformation', 'operations', 'people'];

export const lensNames: Record<Lens, Localized> = {
  capital: { en: 'Capital Structuring and Fundraising', ar: 'هيكلة رأس المال وجمع التمويل' },
  governance: { en: 'Governance and Risk', ar: 'الحوكمة والمخاطر' },
  transformation: { en: 'Digital Finance Transformation', ar: 'التحول الرقمي للمالية' },
  operations: { en: 'Strategy and Operations', ar: 'الاستراتيجية والعمليات' },
  people: { en: 'People', ar: 'الكوادر' },
};

/** Subject areas named in the Person JSON-LD and rendered on About. */
export const knowsAbout: Localized[] = [
  { en: 'Corporate finance', ar: 'تمويل الشركات' },
  { en: 'Treasury', ar: 'الخزانة' },
  { en: 'Islamic finance', ar: 'التمويل الإسلامي' },
  { en: 'Project finance', ar: 'تمويل المشاريع' },
  { en: 'Sukuk', ar: 'الصكوك' },
  { en: 'Capital raising', ar: 'جمع رأس المال' },
  { en: 'Debt restructuring', ar: 'إعادة هيكلة الديون' },
  { en: 'Credit ratings', ar: 'التصنيفات الائتمانية' },
  { en: 'M&A', ar: 'الاندماج والاستحواذ' },
  { en: 'Basel III', ar: 'بازل 3' },
  { en: 'IFRS', ar: 'المعايير الدولية للتقارير المالية' },
  { en: 'ERP implementation', ar: 'تطبيق أنظمة تخطيط موارد المؤسسات' },
  { en: 'Business intelligence', ar: 'ذكاء الأعمال' },
];

/** Typographic Open Graph card: name, title, one figure. */
export const ogCard = {
  alt: { en: 'Zahid Kasmani, CFO, Central Circle Company', ar: 'زاهد كسماني، المدير المالي لشركة سنترال سيركل' },
  title: { en: 'CFO, Central Circle Company', ar: 'المدير المالي، شركة سنترال سيركل' },
  place: { en: 'Kuwait', ar: 'الكويت' },
};
