import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';
import { ogCard } from '@/content/ui';
import { locales } from '@/lib/i18n';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = ogCard.alt.en;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Typographic social card. The visual uses Latin copy; page metadata is localized. */
export default async function Image() {
  const figure = profile.keyFigures[0]!;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#fcfbf9',
          color: '#1d1b1a',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 30, color: '#625d5a' }}>{profile.credentials.en}</div>
          <div style={{ fontSize: 96, fontWeight: 600, marginTop: 16, letterSpacing: -2 }}>{profile.name.en}</div>
          <div style={{ fontSize: 40, marginTop: 8 }}>{`${ogCard.title.en}, ${ogCard.place.en}`}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', borderTop: '2px solid #e4dedb', paddingTop: 32 }}>
          <div style={{ width: 6, height: 72, background: '#a80000', marginRight: 24 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 72, fontWeight: 600 }}>{figure.value}</div>
            <div style={{ fontSize: 28, color: '#625d5a' }}>{figure.label.en}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
