import type { Localized } from './types';

export type PageKey = 'home' | 'story' | 'experience' | 'achievements' | 'expertise' | 'credentials' | 'about' | 'contact';

export interface PageCopy {
  /** Path segment after the locale ('' for Home). */
  path: string;
  /** <title>, 50 to 60 characters. */
  title: Localized;
  /** Meta description, 150 to 160 characters. */
  description: Localized;
  h1: Localized;
  /** 2 to 3 sentence plain-language summary that opens the page. */
  summary: Localized;
  /** Short name for breadcrumbs. */
  crumb: Localized;
}

export const pageOrder: PageKey[] = ['home', 'story', 'experience', 'achievements', 'expertise', 'credentials', 'about', 'contact'];

export const pages: Record<PageKey, PageCopy> = {
  home: {
    path: '',
    title: { en: 'Zahid Kasmani | CFO in Kuwait, Finance and Treasury', ar: 'زاهد كسماني | مدير مالي في الكويت والتمويل والخزانة' },
    description: { en: 'Zahid Kasmani, CFO of Central Circle Company in Kuwait. At Mabanee Company: a USD 5B debt portfolio managed and four project financings worth USD 2.75B closed.', ar: 'زاهد كسماني، المدير المالي لشركة سنترال سيركل في الكويت. أدار محفظة ديون بقيمة USD 5B في شركة المباني وأغلق أربعة تمويلات مشاريع بقيمة USD 2.75B.' },
    h1: { en: 'Zahid Kasmani, CFO in Kuwait', ar: 'زاهد كسماني، مدير مالي في الكويت' },
    summary: { en: 'Zahid Kasmani is a CFO based in Kuwait and has been CFO of Central Circle Company since August 2022. As CFO of Mabanee Company from 2015 to 2022, Zahid managed a USD 5B debt portfolio, raised USD 1B in new funding, restructured USD 1.5B, and closed four project financings worth USD 2.75B. The career spans more than 30 years in banking, real estate, investments, and financial services in the GCC.', ar: 'زاهد كسماني مدير مالي مقيم في الكويت، ويتولى منصب المدير المالي لشركة سنترال سيركل منذ أغسطس 2022. خلال عمله مديراً مالياً لشركة المباني بين 2015 و2022، أدار محفظة ديون بقيمة USD 5B، وجمع تمويلاً جديداً بقيمة USD 1B، وأعاد هيكلة USD 1.5B، وأغلق أربعة تمويلات مشاريع بقيمة USD 2.75B. تمتد مسيرته لأكثر من 30 عاماً في قطاعات البنوك والعقارات والاستثمار والخدمات المالية في دول الخليج.' },
    crumb: { en: 'Home', ar: 'الرئيسية' },
  },
  story: {
    path: 'story',
    title: { en: 'Career Story in Three Chapters | Zahid Kasmani, Kuwait', ar: 'المسيرة المهنية في ثلاثة فصول | زاهد كسماني، الكويت' },
    description: { en: 'Three chapters of a Gulf finance career: Chartered Accountant in 1994, CFO of Mabanee Company with a USD 5B debt portfolio, then CFO of Central Circle Company.', ar: 'ثلاثة فصول من مسيرة مالية خليجية: محاسب قانوني في 1994، ومدير مالي لشركة المباني مع محفظة ديون بقيمة USD 5B، ثم مدير مالي لشركة سنترال سيركل.' },
    h1: { en: 'A finance career in three chapters', ar: 'مسيرة مالية في ثلاثة فصول' },
    summary: { en: 'This is the career of Zahid Kasmani, CFO of Central Circle Company in Kuwait, read as three chapters: Foundations, Scale, and Stewardship. It runs from qualifying as a Chartered Accountant in 1994, through a USD 5B debt portfolio at Mabanee Company, to recurring annual savings exceeding KWD 1M at Central Circle Company.', ar: 'هذه مسيرة زاهد كسماني، المدير المالي لشركة سنترال سيركل في الكويت، ضمن ثلاثة فصول: التأسيس، والتوسع، والريادة والمسؤولية. تبدأ بحصوله على تأهيل المحاسب القانوني عام 1994، وتمر بإدارة محفظة ديون بقيمة USD 5B في شركة المباني، وصولاً إلى تحقيق وفورات سنوية متكررة تتجاوز KWD 1M في سنترال سيركل.' },
    crumb: { en: 'Story', ar: 'المسيرة' },
  },
  experience: {
    path: 'experience',
    title: { en: 'CFO Experience in Kuwait, Group Treasury | Zahid Kasmani', ar: 'خبرة المدير المالي والخزانة في الكويت | زاهد كسماني' },
    description: { en: 'CFO experience in Kuwait since 2005: First Investment Company, AlRajhi Bank, Kuwait International Bank, Mabanee Company, and Central Circle Company, by year.', ar: 'خبرة في الإدارة المالية بالكويت منذ 2005: الأولى للاستثمار، ومصرف الراجحي، وبنك الكويت الدولي، وشركة المباني، وشركة سنترال سيركل، مرتبة حسب السنوات.' },
    h1: { en: 'CFO experience in Kuwait and the Gulf', ar: 'خبرة في الإدارة المالية بالكويت والخليج' },
    summary: { en: 'Zahid Kasmani has held CFO and finance leadership roles in Kuwait since 2005, and is CFO of Central Circle Company. As CFO of Mabanee Company from 2015 to 2022, Zahid led group treasury and fundraising and managed a USD 5B debt portfolio. Use the timeline and the era filter to move through each role.', ar: 'شغل زاهد كسماني مناصب قيادية في الإدارة المالية بالكويت منذ 2005، ويتولى حالياً منصب المدير المالي لشركة سنترال سيركل. وبين 2015 و2022، قاد خزانة المجموعة وجمع التمويل في شركة المباني وأدار محفظة ديون بقيمة USD 5B. استخدم الخط الزمني ومرشح المراحل لاستعراض كل منصب.' },
    crumb: { en: 'Experience', ar: 'الخبرة' },
  },
  achievements: {
    path: 'achievements',
    title: { en: 'Project Finance in Kuwait and the GCC | Zahid Kasmani', ar: 'تمويل المشاريع في الكويت والخليج | زاهد كسماني' },
    description: { en: 'Project finance in Kuwait and the GCC: four project financings worth USD 2.75B, USD 1.5B restructured, USD 1B raised, and recurring annual savings above KWD 1M.', ar: 'تمويل المشاريع في الكويت والخليج: أربعة تمويلات بقيمة USD 2.75B، وإعادة هيكلة USD 1.5B، وجمع USD 1B، ووفورات سنوية متكررة تتجاوز KWD 1M.' },
    h1: { en: 'Project finance in Kuwait and the GCC, and other achievements', ar: 'تمويل المشاريع في الكويت والخليج وإنجازات أخرى' },
    summary: { en: 'These are the project finance, capital raising, governance, and transformation achievements of Zahid Kasmani, CFO of Central Circle Company in Kuwait. At Mabanee Company, four project financings worth USD 2.75B were closed and USD 1.5B was restructured; at Central Circle Company, process optimization generated recurring annual savings exceeding KWD 1M.', ar: 'هذه أبرز إنجازات زاهد كسماني في تمويل المشاريع وجمع رأس المال والحوكمة والتحول، بصفته المدير المالي لشركة سنترال سيركل في الكويت. في شركة المباني، أغلق أربعة تمويلات مشاريع بقيمة USD 2.75B وأعاد هيكلة USD 1.5B؛ وفي سنترال سيركل، حقق تحسين العمليات وفورات سنوية متكررة تتجاوز KWD 1M.' },
    crumb: { en: 'Achievements', ar: 'الإنجازات' },
  },
  expertise: {
    path: 'expertise',
    title: { en: 'Islamic Finance CFO Expertise and Treasury | Zahid Kasmani', ar: 'خبرة الإدارة المالية الإسلامية والخزانة | زاهد كسماني' },
    description: { en: 'Islamic finance CFO expertise: Islamic banking, sukuk structuring, treasury, capital raising, project finance, Basel III, IFRS, Oracle ERP, and Yardi.', ar: 'خبرة في الإدارة المالية الإسلامية: الصيرفة الإسلامية، وهيكلة الصكوك، والخزانة، وجمع رأس المال، وتمويل المشاريع، وبازل III، وIFRS، وOracle ERP، وYardi.' },
    h1: { en: 'Islamic finance CFO expertise', ar: 'خبرة في الإدارة المالية الإسلامية' },
    summary: { en: 'Zahid Kasmani is a CFO in Kuwait with expertise in Islamic banking, treasury, capital raising, project finance, and sukuk structuring. The work has spanned conventional and Islamic finance in the Gulf region, with system implementations including Oracle ERP, Yardi, and BI platforms.', ar: 'زاهد كسماني مدير مالي في الكويت يتمتع بخبرة في الصيرفة الإسلامية والخزانة وجمع رأس المال وتمويل المشاريع وهيكلة الصكوك. امتد عمله عبر التمويل التقليدي والإسلامي في منطقة الخليج، وشمل تطبيق أنظمة Oracle ERP وYardi ومنصات ذكاء الأعمال.' },
    crumb: { en: 'Expertise', ar: 'الخبرات' },
  },
  credentials: {
    path: 'credentials',
    title: { en: 'Chartered Accountant and CMA in Kuwait | Zahid Kasmani', ar: 'محاسب قانوني وCMA في الكويت | زاهد كسماني' },
    description: { en: 'Chartered Accountant (1994, ranked 28th, All India Rank), CMA (2013), MBA from Bentley University (2015), and the London Business School CFO Programme in 2021.', ar: 'محاسب قانوني (1994، المرتبة 28 على مستوى الهند)، وCMA (2013)، وMBA من جامعة بنتلي (2015)، وبرنامج المدير المالي من كلية لندن للأعمال في 2021.' },
    h1: { en: 'Chartered Accountant and CMA, based in Kuwait', ar: 'محاسب قانوني وحاصل على CMA، مقيم في الكويت' },
    summary: { en: 'Zahid Kasmani, CFO of Central Circle Company in Kuwait, is a Chartered Accountant (1994) and a Certified Management Accountant (2013). Further qualifications include an MBA from Bentley University (2015) and the CFO Programme at London Business School (2021).', ar: 'زاهد كسماني، المدير المالي لشركة سنترال سيركل في الكويت، محاسب قانوني منذ 1994 ومحاسب إداري معتمد منذ 2013. وتشمل مؤهلاته الأخرى ماجستير إدارة الأعمال من جامعة بنتلي عام 2015 وبرنامج المدير المالي من كلية لندن للأعمال عام 2021.' },
    crumb: { en: 'Credentials', ar: 'المؤهلات' },
  },
  about: {
    path: 'about',
    title: { en: 'About Zahid Kasmani | CFO Profile, Kuwait and the Gulf', ar: 'نبذة عن زاهد كسماني | مدير مالي في الكويت والخليج' },
    description: { en: 'About Zahid Kasmani: more than 30 years in Gulf banking, real estate, and investments, 20 of them leading finance and treasury. CFO of Central Circle Company.', ar: 'نبذة عن زاهد كسماني: أكثر من 30 عاماً في البنوك والعقارات والاستثمار بالخليج، منها 20 عاماً في قيادة المالية والخزانة. المدير المالي لشركة سنترال سيركل.' },
    h1: { en: 'About Zahid Kasmani', ar: 'نبذة عن زاهد كسماني' },
    summary: { en: 'Zahid Kasmani is the CFO of Central Circle Company in Kuwait, with more than 30 years in banking, real estate, investments, and financial services, twenty of them leading finance and treasury. At Mabanee Company, Zahid managed a USD 5B+ debt portfolio.', ar: 'زاهد كسماني هو المدير المالي لشركة سنترال سيركل في الكويت، ويتمتع بخبرة تتجاوز 30 عاماً في البنوك والعقارات والاستثمار والخدمات المالية، منها عشرون عاماً في قيادة المالية والخزانة. وفي شركة المباني، أدار محفظة ديون تتجاوز USD 5B.' },
    crumb: { en: 'About', ar: 'نبذة' },
  },
  contact: {
    path: 'contact',
    title: { en: 'Contact Zahid Kasmani | CFO, Central Circle Company Kuwait', ar: 'تواصل مع زاهد كسماني | المدير المالي لسنترال سيركل' },
    description: { en: 'Contact Zahid Kasmani, CFO of Central Circle Company in Kuwait, by email, phone, or LinkedIn. Over 30 years in GCC banking, real estate, and investments.', ar: 'تواصل مع زاهد كسماني، المدير المالي لشركة سنترال سيركل في الكويت، عبر البريد الإلكتروني أو الهاتف أو LinkedIn. خبرة تتجاوز 30 عاماً في دول الخليج.' },
    h1: { en: 'Contact Zahid Kasmani', ar: 'تواصل مع زاهد كسماني' },
    summary: { en: 'Zahid Kasmani is CFO of Central Circle Company and is based in Kuwait. Reach Zahid by email, phone, or LinkedIn.', ar: 'زاهد كسماني هو المدير المالي لشركة سنترال سيركل ومقيم في الكويت. يمكنك التواصل معه عبر البريد الإلكتروني أو الهاتف أو LinkedIn.' },
    crumb: { en: 'Contact', ar: 'تواصل' },
  },
};
