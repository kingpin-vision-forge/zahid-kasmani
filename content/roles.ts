import type { Localized, Role } from './types';

export const roles: Role[] = [
  {
    id: 'central-circle',
    employer: { en: 'Central Circle Company', ar: 'شركة سنترال سيركل' },
    title: { en: 'CFO', ar: 'المدير المالي' },
    start: '2022-08', end: 'present', era: 'e4',
    summary: {
      en: 'Leads finance, treasury, investments, and fundraising for group operations across multiple subsidiaries.',
      ar: 'يقود أعمال المالية والخزانة والاستثمار وجمع التمويل لعمليات المجموعة عبر عدد من الشركات التابعة.',
    },
    bullets: [
      { id: 'cc-debt-platform', status: 'verify', lens: ['capital'],
        text: { en: 'Pioneered a first-of-its-kind debt platform in the region, closing two transactions, including a USD 300M long-term funding line with unique terms for a specific business vertical.', ar: 'أطلق منصة دين هي الأولى من نوعها في المنطقة، وأغلق صفقتين، إحداهما خط تمويل طويل الأجل بقيمة USD 300M وبشروط فريدة لقطاع أعمال محدد.' },
        callout: { en: 'First-of-its-kind debt platform', ar: 'منصة دين هي الأولى من نوعها' } },
      { id: 'cc-core-system', status: 'confirmed', lens: ['transformation'],
        text: { en: 'Upgraded the core system, including implementation of data-driven decision-making tools.', ar: 'طوّر النظام الأساسي، بما في ذلك تطبيق أدوات لاتخاذ القرار قائمة على البيانات.' },
        callout: { en: 'Core system upgrade', ar: 'تطوير النظام الأساسي' } },
      { id: 'cc-transformation', status: 'confirmed', lens: ['transformation', 'governance'],
        text: { en: 'Led finance transformation through enhanced systems, controls, and reporting.', ar: 'قاد التحول المالي عبر تطوير الأنظمة والضوابط والتقارير.' },
        callout: { en: 'Finance transformation', ar: 'التحول المالي' } },
      { id: 'cc-savings', status: 'confirmed', lens: ['operations'],
        text: { en: 'Process optimization and transformation initiatives generated recurring annual savings exceeding KWD 1M.', ar: 'حققت مبادرات تحسين العمليات والتحول وفورات سنوية متكررة تتجاوز KWD 1M.' },
        callout: { en: 'KWD 1M+ recurring savings', ar: 'وفورات متكررة تتجاوز KWD 1M' } },
      { id: 'cc-low-margin', status: 'confirmed', lens: ['operations'],
        text: { en: 'Reduced low-margin business verticals, optimizing absolute profitability and improving key ratios.', ar: 'قلّص قطاعات الأعمال منخفضة الهامش، ما عزز الربحية المطلقة وحسّن المؤشرات الرئيسية.' },
        callout: { en: 'Profitability over volume', ar: 'الربحية قبل حجم الأعمال' } },
    ],
  },
  {
    id: 'mabanee',
    employer: { en: 'Mabanee Company (The Avenues), Kuwait, KSA, and Bahrain', ar: 'شركة المباني (الأفنيوز)، الكويت والسعودية والبحرين' },
    title: { en: 'CFO', ar: 'المدير المالي' },
    start: '2015-08', end: '2022-08', era: 'e3',
    summary: {
      en: 'Led finance, group treasury, investments, and multibillion-dollar fundraising (debt, equity, and structured non-recourse project finance) for expansion projects across the region.',
      ar: 'قاد المالية وخزانة المجموعة والاستثمارات وجمع تمويلات بمليارات الدولارات، شملت الدين وحقوق الملكية وتمويل المشاريع المهيكل دون حق الرجوع، لمشاريع التوسع في المنطقة.',
    },
    bullets: [
      { id: 'mab-debt-portfolio', status: 'confirmed', lens: ['capital'], text: { en: 'Managed a USD 5B debt portfolio.', ar: 'أدار محفظة ديون بقيمة USD 5B.' }, callout: { en: 'USD 5B debt portfolio', ar: 'محفظة ديون بقيمة USD 5B' } },
      { id: 'mab-raised', status: 'confirmed', lens: ['capital'], text: { en: 'Raised USD 1B in new funding.', ar: 'جمع تمويلاً جديداً بقيمة USD 1B.' }, callout: { en: 'USD 1B raised', ar: 'جمع USD 1B' } },
      { id: 'mab-restructured', status: 'confirmed', lens: ['capital'], text: { en: 'Restructured USD 1.5B to extend maturities and reduce cost of funding.', ar: 'أعاد هيكلة USD 1.5B لتمديد آجال الاستحقاق وخفض تكلفة التمويل.' }, callout: { en: 'USD 1.5B restructured', ar: 'إعادة هيكلة USD 1.5B' } },
      { id: 'mab-project-finance', status: 'confirmed', lens: ['capital'], text: { en: 'Closed four large-scale project financings worth USD 2.75B.', ar: 'أغلق أربعة تمويلات مشاريع كبرى بقيمة USD 2.75B.' }, callout: { en: 'USD 2.75B across four projects', ar: 'USD 2.75B عبر أربعة مشاريع' } },
      { id: 'mab-sar', status: 'verify', lens: ['capital'], text: { en: 'Secured SAR 10B non-recourse project financing.', ar: 'أمّن تمويل مشاريع دون حق الرجوع بقيمة SAR 10B.' }, callout: { en: 'SAR 10B non-recourse', ar: 'SAR 10B دون حق الرجوع' } },
      { id: 'mab-systems', status: 'confirmed', lens: ['transformation'], text: { en: 'Oversaw system upgrades, including Oracle ERP, Yardi, and BI platforms.', ar: 'أشرف على تطوير الأنظمة، بما فيها Oracle ERP وYardi ومنصات ذكاء الأعمال.' }, callout: { en: 'Oracle ERP, Yardi, BI', ar: 'Oracle ERP وYardi وذكاء الأعمال' } },
      { id: 'mab-subsidiaries', status: 'confirmed', lens: ['operations'], text: { en: 'Managed and consolidated subsidiaries, including several international ones.', ar: 'أدار الشركات التابعة ووحّد حساباتها، بما فيها عدد من الشركات الدولية.' }, callout: { en: 'Subsidiary consolidation', ar: 'توحيد الشركات التابعة' } },
      { id: 'mab-reporting', status: 'confirmed', lens: ['governance'], text: { en: 'Prepared financial statements, MIS, and investor relations materials for a listed company, and supported market disclosures, analyst engagement, and Board communications.', ar: 'أعد القوائم المالية وتقارير نظم المعلومات الإدارية ومواد علاقات المستثمرين لشركة مدرجة، ودعم إفصاحات السوق والتواصل مع المحللين ومجلس الإدارة.' }, callout: { en: 'Listed-company reporting', ar: 'تقارير الشركات المدرجة' } },
      { id: 'mab-stakeholders', status: 'confirmed', lens: ['governance'], text: { en: 'Worked with Board committees, lenders, investors, regulators, and auditors.', ar: 'عمل مع لجان مجلس الإدارة والمقرضين والمستثمرين والجهات الرقابية والمدققين.' }, callout: { en: 'Board and lender interface', ar: 'التواصل مع المجلس والمقرضين' } },
    ],
  },
  {
    id: 'kib', employer: { en: 'Kuwait International Bank', ar: 'بنك الكويت الدولي' },
    title: { en: 'AGM, Finance and Acting CFO', ar: 'مساعد المدير العام للشؤون المالية والمدير المالي بالإنابة' },
    start: '2011-04', end: '2014-07', era: 'e2', summary: null,
    bullets: [{ id: 'kib-rating', status: 'confirmed', lens: ['governance', 'capital'], text: { en: 'Negotiated a double credit rating upgrade (A- to A+).', ar: 'تفاوض على ترقية مزدوجة للتصنيف الائتماني من A- إلى A+.' }, callout: { en: 'A- to A+ upgrade', ar: 'ترقية من A- إلى A+' } }],
  },
  { id: 'alrajhi', employer: { en: 'AlRajhi Bank, Kuwait', ar: 'مصرف الراجحي، الكويت' }, title: { en: 'Finance Manager (CFO)', ar: 'مدير المالية (المدير المالي)' }, start: '2010-04', end: '2011-03', era: 'e5', summary: null, bullets: [] },
  { id: 'altanmya', employer: { en: 'AlTanmya International Investment Co.', ar: 'شركة التنمية الدولية للاستثمار' }, title: { en: 'Financial Controller (CFO)', ar: 'المراقب المالي (المدير المالي)' }, start: '2008-11', end: '2010-04', era: 'e5', summary: null, bullets: [] },
  { id: 'first-investment', employer: { en: 'First Investment Company KSC, Kuwait', ar: 'شركة الأولى للاستثمار ش.م.ك، الكويت' }, title: { en: 'CFO', ar: 'المدير المالي' }, start: '2005-02', end: '2008-09', era: 'e1', summary: null, bullets: [] },
  { id: 'gulf-bank', employer: { en: 'Gulf Bank, Kuwait', ar: 'بنك الخليج، الكويت' }, title: { en: 'Various Roles', ar: 'مناصب متعددة' }, start: '2001-06', end: '2005-01', era: 'e1', summary: { en: 'Earlier roles available on request.', ar: 'تفاصيل المناصب السابقة متاحة عند الطلب.' }, bullets: [] },
];

export const earlierFirms: Localized[] = [
  { en: 'BNP Paribas', ar: 'بي إن بي باريبا' },
  { en: 'Banque Saudi Fransi', ar: 'البنك السعودي الفرنسي' },
  { en: 'AllianceBernstein', ar: 'أليانس برنستين' },
  { en: 'Citibank N.A.', ar: 'سيتي بنك' },
];
