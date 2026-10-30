import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { chapters } from '@/content/story';
import { pages } from '@/content/pages';
import { profile } from '@/content/profile';
import { ui } from '@/content/ui';
import Figure from '@/components/Figure';
import FigureReveal from '@/components/FigureReveal';
import JsonLd from '@/components/JsonLd';
import T from '@/components/T';
import { chapterIntro, shownKeyFigures, shortEmployer } from '@/lib/content';
import { localeHref, tx } from '@/lib/i18n';
import { resolveLocale, type LocaleParams } from '@/lib/page';
import { buildMetadata, graph, websiteNode } from '@/lib/seo';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return buildMetadata('home', await resolveLocale(params));
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const copy = pages.home;
  const figures = shownKeyFigures();

  return (
    <div className="shell">
      <JsonLd data={graph([websiteNode(locale)])} />

      <section className="hero-grid pt-8 pb-14 sm:pt-12">
        <div className="flex flex-col justify-center py-6">
          <p className="text-sm tracking-wide text-muted"><T field={profile.credentials} locale={locale} /></p>
          <h1 className="mt-3 max-w-[17ch] font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <T field={copy.h1} locale={locale} />
          </h1>
          <p className="measure mt-6 text-lg leading-relaxed text-ink/90">
            <T field={copy.summary} locale={locale} />
          </p>
          <p className="mt-6 text-sm font-semibold text-accent"><T field={profile.currentRole} locale={locale} /></p>
        </div>
        <div className="hero-portrait" aria-hidden="true">
          <Image
            src="/images/zahid-kasmani-crossed.png"
            alt=""
            width={1086}
            height={1448}
            className="h-full w-full object-cover object-top"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </section>

      <figure data-scroll-reveal className="statement-card">
        <blockquote className="measure font-serif text-2xl leading-snug sm:text-3xl">
          <p><T field={profile.hero} locale={locale} /></p>
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted">
          <T field={profile.name} locale={locale} />
          <span aria-hidden="true" className="mx-2">/</span>
          <T field={profile.headline} locale={locale} />
        </figcaption>
      </figure>

      <section aria-labelledby="key-figures" className="py-14">
        <h2 id="key-figures" className="font-serif text-2xl font-semibold"><T field={ui.keyFigures} locale={locale} /></h2>
        <ul className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {figures.map((f) => (
            <li key={f.ref} data-reveal-trigger data-scroll-reveal className="metric-card">
              <Figure value={f.value} locale={locale} />
              <p className="mt-3 font-semibold leading-snug"><T field={f.label} locale={locale} /></p>
              <p className="mt-2 text-sm text-muted">
                <T field={f.bullet.text} locale={locale} />{' '}
                <Link href={localeHref(locale, 'experience', `role-${f.role.id}`)} className="text-ink underline decoration-rule underline-offset-4 hover:decoration-accent">
                  <bdi>{shortEmployer(tx(f.role.employer, locale))}</bdi>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="chapters" className="border-t border-rule py-14">
        <h2 id="chapters" className="font-serif text-2xl font-semibold"><T field={ui.chaptersHeading} locale={locale} /></h2>
        <ol className="mt-8 grid gap-10 lg:grid-cols-3">
          {chapters.map((c, i) => (
            <li key={c.id} data-scroll-reveal className="chapter-card">
              <p className="text-sm text-muted tabular">
                {String(i + 1).padStart(2, '0')}
                <span aria-hidden="true" className="mx-2">/</span>
                <T field={c.span} locale={locale} />
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold"><T field={c.title} locale={locale} /></h3>
              <p className="mt-3 text-[0.975rem] text-ink/90">
                <T field={chapterIntro(c)[0]!.text} locale={locale} />
              </p>
              <Link
                href={localeHref(locale, 'story', `chapter-${c.id}`)}
                className="mt-4 inline-block text-sm underline decoration-accent underline-offset-4"
              >
                {tx(ui.readChapter, locale)}
                <span className="sr-only">: {tx(c.title, locale)}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <FigureReveal />
    </div>
  );
}
