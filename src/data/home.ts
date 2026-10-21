/**
 * Home page copy and infographic data, in one place.
 * Rules (docs/plan/first-3-seconds.plan.xml): the hero must say who, what and the proof in the first screen;
 * every number is computed from the content files; nothing claims turnaround or reach.
 */
import { site, companies, links } from './site';
import { published, editedFrames } from './projects';

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
/** 6 → "six"; numbers above ten stay as digits. */
export const say = (n: number) => WORDS[n] ?? String(n);
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/** ["a", "b", "c"] → "a, b and c" */
export const listOf = (xs: readonly string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs.at(-1)}`);

export const artists = published.map((p) => p.artist);
export const totalFrames = published.reduce((n, p) => n + editedFrames(p), 0);

export const hero = {
  name: site.name,
  role: site.role,
  title: 'Concert photos that sell the next show.',
  sub: `I shoot live shows with ${listOf(companies.map((c) => c.name))}, framing every set for the artist’s feed, the sponsor’s report and the promoter’s next poster.`,
  proofLabel: 'Shot live',
  primary: { label: `See the ${say(published.length)} shows`, href: '#shows' },
  secondary: links.whatsapp ? { label: 'WhatsApp me', href: links.whatsapp } : { label: 'Hire me', href: '/hire/' },
} as const;

export interface FrameMark {
  n: number;
  x: number; // marker position, % of frame width
  y: number; // marker position, % of frame height
  side: 'left' | 'right'; // which side of the marker the label sits on (desktop)
  who: string;
  job: string;
}

/** The hero infographic: one real frame, annotated with who each part of it works for. */
export const frame = {
  photo: 'cactus-dsc-0350',
  caption: 'One frame, three jobs. Cactus, open air.',
  marks: [
    { n: 1, x: 64.5, y: 30, side: 'right', who: 'The face', job: 'the artist’s post' },
    { n: 2, x: 90, y: 13, side: 'left', who: 'The stage', job: 'the sponsor’s proof' },
    { n: 3, x: 21, y: 87, side: 'right', who: 'The crowd', job: 'the next show’s poster' },
  ] satisfies FrameMark[],
  pass: { photo: 'pritam-haldar-portrait', label: 'Photo' },
};

/** The show ledger: one row per show, bar length = edited frames. */
export const ledger = {
  label: 'On record',
  note: 'Bar length = edited frames delivered',
  heading: `${cap(say(artists.length))} artists. ${totalFrames}\u00a0edited\u00a0frames.`, // number stays with its noun when wrapping
  rows: published.map((p) => ({ slug: p.slug, artist: p.artist, year: p.year, frames: editedFrames(p) })),
};
