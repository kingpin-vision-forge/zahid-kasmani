import type { ExpertiseGroup, Lens, Localized } from './types';

export const expertise: ExpertiseGroup[] = [
  {
    group: { en: 'Strategic Finance and Leadership', ar: 'التمويل الاستراتيجي والقيادة' },
    items: [
      { en: 'Islamic banking', ar: 'الصيرفة الإسلامية' },
      { en: 'Treasury and asset management', ar: 'إدارة الخزانة والأصول' },
      { en: 'M&A advisory and deal structuring (SPVs, sukuk)', ar: 'استشارات الاندماج والاستحواذ وهيكلة الصفقات (الشركات ذات الأغراض الخاصة والصكوك)' },
      { en: 'Structured debt and equity funding', ar: 'تمويل الديون وحقوق الملكية المهيكل' },
      { en: 'Project finance', ar: 'تمويل المشاريع' },
      { en: 'Capital raising (debt and equity)', ar: 'جمع رأس المال (ديون وحقوق ملكية)' },
      { en: 'Budgeting, forecasting, and funds transfer pricing', ar: 'إعداد الميزانيات والتنبؤ وتسعير تحويل الأموال' },
      { en: 'Credit ratings', ar: 'التصنيفات الائتمانية' },
      { en: 'Risk and regulatory compliance (Basel III, ICAAP, FATCA)', ar: 'المخاطر والامتثال التنظيمي (Basel III وICAAP وFATCA)' },
    ],
  },
  {
    group: { en: 'Operational Excellence and Transformation', ar: 'التميز التشغيلي والتحول' },
    items: [
      { en: 'Corporate strategy formulation', ar: 'صياغة استراتيجية الشركات' },
      { en: 'Business model optimization', ar: 'تحسين نماذج الأعمال' },
      { en: 'Cost reduction and process re-engineering', ar: 'خفض التكاليف وإعادة هندسة العمليات' },
      { en: 'Enterprise performance management', ar: 'إدارة أداء المؤسسات' },
      { en: 'Multi-subsidiary consolidation', ar: 'توحيد أعمال الشركات التابعة المتعددة' },
      { en: 'ALM, liquidity, and risk oversight', ar: 'إدارة الأصول والخصوم والسيولة والإشراف على المخاطر' },
      { en: 'MIS, dashboards, and BI-driven decision support', ar: 'نظم المعلومات الإدارية ولوحات المؤشرات ودعم القرار القائم على ذكاء الأعمال' },
      { en: 'Data-driven decision making', ar: 'اتخاذ القرار المبني على البيانات' },
    ],
  },
  {
    group: { en: 'Technology and Systems', ar: 'التقنية والأنظمة' },
    items: [
      { en: 'ERP implementation (Oracle, Yardi)', ar: 'تطبيق أنظمة تخطيط موارد المؤسسات (Oracle وYardi)' },
      { en: 'BI tools (Power BI, SAP/Oracle analytics, Business Objects, Excel VBA, SQL)', ar: 'أدوات ذكاء الأعمال (Power BI وتحليلات SAP/Oracle وBusiness Objects وExcel VBA وSQL)' },
      { en: 'Optimization and automation', ar: 'التحسين والأتمتة' },
      { en: 'Treasury, asset, and fund management platforms', ar: 'منصات إدارة الخزانة والأصول والصناديق' },
      { en: 'Financial modeling and advanced Excel', ar: 'النمذجة المالية وExcel المتقدم' },
      { en: 'Programming foundations (C++, Java, e-commerce systems)', ar: 'أساسيات البرمجة (C++ وJava وأنظمة التجارة الإلكترونية)' },
    ],
  },
  {
    group: { en: 'Leadership and Governance', ar: 'القيادة والحوكمة' },
    items: [
      { en: 'Trusted partner to Board, CEO, and C-suite', ar: 'شريك موثوق لمجلس الإدارة والرئيس التنفيذي والقيادات التنفيذية' },
      { en: 'Governance and strategic advisory roles', ar: 'أدوار استشارية في الحوكمة والاستراتيجية' },
      { en: 'Cross-functional leadership', ar: 'قيادة الفرق متعددة الوظائف' },
      { en: 'Change management', ar: 'إدارة التغيير' },
      { en: 'Talent development', ar: 'تطوير المواهب' },
      { en: 'Team building', ar: 'بناء الفرق' },
    ],
  },
];

export const technicalSkills: Localized[] = [
  { en: 'BI tools, Oracle ERP, Yardi, Business Objects, SQL, Excel VBA', ar: 'أدوات ذكاء الأعمال وOracle ERP وYardi وBusiness Objects وSQL وExcel VBA' },
  { en: 'Financial and business modeling', ar: 'النمذجة المالية ونمذجة الأعمال' },
  { en: 'Banking and asset management systems', ar: 'أنظمة الخدمات المصرفية وإدارة الأصول' },
  { en: 'E-commerce development (C++, Java)', ar: 'تطوير التجارة الإلكترونية (C++ وJava)' },
];

/**
 * Lens mapping used only by the era filter to decide whether a tag is dimmed.
 * Not rendered. Keyed by the group index of `expertise` above.
 */
export const expertiseLenses: Lens[][] = [
  ['capital', 'governance'],
  ['operations', 'transformation', 'governance'],
  ['transformation'],
  ['governance', 'people'],
];
