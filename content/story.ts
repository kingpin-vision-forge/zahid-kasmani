import type { Localized } from './types';

export type ChapterId = 'foundations' | 'scale' | 'stewardship';

export interface IntroSentence {
  text: Localized;
  /** Bullet id this sentence depends on; dropped when that bullet is hidden. */
  requires?: string;
}

export interface StoryLink { label: Localized; page: 'experience' | 'achievements' | 'credentials' | 'story' | 'expertise' | 'about' | 'contact'; hash?: string; }

export interface Chapter {
  id: ChapterId;
  title: Localized;
  span: Localized;
  intro: IntroSentence[];
  /** Role ids, in reading order. */
  roles: string[];
  showQualifications?: boolean;
  showEarlierFirms?: boolean;
  links: StoryLink[];
}

/** Qualifications referenced in Chapter 1, by education title. */
export const foundationQualifications = ['B.Com', 'Cost & Management Accountant (ACWA)', 'Chartered Accountant'];

export const chapters: Chapter[] = [
  {
    id: 'foundations',
    title: { en: 'Foundations', ar: 'التأسيس' },
    span: { en: '1992 to 2010', ar: '1992 إلى 2010' },
    intro: [
      { text: { en: 'The foundations were laid in India: a B.Com from Mumbai University in 1992, the ACWA qualification in 1993, and qualification as a Chartered Accountant in 1994, ranked 28th in the All India Rank on the first attempt.', ar: 'وُضعت أسس المسيرة في الهند: بكالوريوس التجارة من جامعة مومباي عام 1992، وتأهيل ACWA عام 1993، ثم تأهيل المحاسب القانوني عام 1994 مع إحراز المرتبة 28 على مستوى الهند من المحاولة الأولى.' } },
      { text: { en: 'The years that followed were spent in Gulf banking and investment: Gulf Bank in Kuwait from 2001, CFO of First Investment Company from 2005, and Financial Controller (CFO) of AlTanmya International Investment Co. from 2008, alongside earlier roles at international banks.', ar: 'قضى السنوات التالية في البنوك والاستثمار بالخليج: في بنك الخليج بالكويت منذ 2001، ثم مديراً مالياً لشركة الأولى للاستثمار منذ 2005، ومراقباً مالياً ومديراً مالياً لشركة التنمية الدولية للاستثمار منذ 2008، إلى جانب مناصب سابقة في بنوك دولية.' } },
    ],
    roles: ['gulf-bank', 'first-investment', 'altanmya'],
    showQualifications: true,
    showEarlierFirms: true,
    links: [
      { label: { en: 'See every qualification and certification', ar: 'استعرض جميع المؤهلات والشهادات' }, page: 'credentials' },
    ],
  },
  {
    id: 'scale',
    title: { en: 'Scale', ar: 'التوسع' },
    span: { en: '2010 to 2022', ar: '2010 إلى 2022' },
    intro: [
      { text: { en: 'In 2010 the role became Finance Manager (CFO) at AlRajhi Bank, Kuwait, and in 2011 AGM, Finance and Acting CFO at Kuwait International Bank, where a double credit rating upgrade from A- to A+ was negotiated.', ar: 'في 2010، تولى منصب مدير المالية والمدير المالي في مصرف الراجحي بالكويت، ثم أصبح في 2011 مساعد المدير العام للشؤون المالية والمدير المالي بالإنابة في بنك الكويت الدولي، حيث تفاوض على ترقية مزدوجة للتصنيف الائتماني من A- إلى A+.' } },
      { text: { en: 'From 2015 to 2022, as CFO of Mabanee Company, the work included a USD 5B debt portfolio, USD 1B in new funding, USD 1.5B restructured, and four project financings worth USD 2.75B.', ar: 'من 2015 إلى 2022، بصفته المدير المالي لشركة المباني، شمل عمله إدارة محفظة ديون بقيمة USD 5B، وجمع تمويل جديد بقيمة USD 1B، وإعادة هيكلة USD 1.5B، وإغلاق أربعة تمويلات مشاريع بقيمة USD 2.75B.' } },
      { text: { en: 'SAR 10B of non-recourse project financing was also secured.', ar: 'كما أمّن تمويل مشاريع دون حق الرجوع بقيمة SAR 10B.' }, requires: 'mab-sar' },
    ],
    roles: ['alrajhi', 'kib', 'mabanee'],
    links: [
      { label: { en: 'See the Mabanee project financings', ar: 'استعرض تمويلات مشاريع شركة المباني' }, page: 'experience', hash: 'role-mabanee' },
      { label: { en: 'Read the capital structuring and fundraising achievements', ar: 'اقرأ إنجازات هيكلة رأس المال وجمع التمويل' }, page: 'achievements', hash: 'lens-capital' },
    ],
  },
  {
    id: 'stewardship',
    title: { en: 'Stewardship', ar: 'الريادة والمسؤولية' },
    span: { en: '2022 to present', ar: '2022 إلى الآن' },
    intro: [
      { text: { en: 'Since August 2022, as CFO of Central Circle Company, the work has been leading finance, treasury, investments, and fundraising for group operations across multiple subsidiaries.', ar: 'منذ أغسطس 2022، وبصفته المدير المالي لشركة سنترال سيركل، يقود أعمال المالية والخزانة والاستثمار وجمع التمويل لعمليات المجموعة عبر عدة شركات تابعة.' } },
      { text: { en: 'A first-of-its-kind debt platform in the region closed two transactions.', ar: 'أغلقت منصة دين هي الأولى من نوعها في المنطقة صفقتين.' }, requires: 'cc-debt-platform' },
      { text: { en: 'Finance transformation through enhanced systems, controls, and reporting, with process optimization, has generated recurring annual savings exceeding KWD 1M.', ar: 'حقق التحول المالي عبر تطوير الأنظمة والضوابط والتقارير وتحسين العمليات وفورات سنوية متكررة تتجاوز KWD 1M.' } },
    ],
    roles: ['central-circle'],
    links: [
      { label: { en: 'See the Central Circle role on the timeline', ar: 'استعرض دور سنترال سيركل على الخط الزمني' }, page: 'experience', hash: 'role-central-circle' },
      { label: { en: 'Read the digital finance transformation achievements', ar: 'اقرأ إنجازات التحول المالي الرقمي' }, page: 'achievements', hash: 'lens-transformation' },
    ],
  },
];
