import type { StoryLink } from './story';

/** Descriptive internal links between Story, Experience, and Achievements. */
export const experienceLinks: StoryLink[] = [
  { label: { en: 'Read the career as a story, chapter by chapter', ar: 'اقرأ المسيرة كقصة، فصلاً بعد فصل' }, page: 'story' },
  { label: { en: 'See the project finance and capital raising achievements', ar: 'استعرض إنجازات تمويل المشاريع وجمع رأس المال' }, page: 'achievements', hash: 'lens-capital' },
];

export const achievementsLinks: StoryLink[] = [
  { label: { en: 'See the Mabanee project financings in context', ar: 'استعرض تمويلات مشاريع شركة المباني ضمن سياقها' }, page: 'experience', hash: 'role-mabanee' },
  { label: { en: 'Read how the Scale chapter unfolded', ar: 'اقرأ كيف تطور فصل التوسع' }, page: 'story', hash: 'chapter-scale' },
];

export const expertiseLinks: StoryLink[] = [
  { label: { en: 'See where this expertise was applied, role by role', ar: 'استعرض أين طُبقت هذه الخبرات، منصباً بعد منصب' }, page: 'experience' },
  { label: { en: 'Read the credentials behind it', ar: 'تعرّف على المؤهلات التي تدعمها' }, page: 'credentials' },
];
