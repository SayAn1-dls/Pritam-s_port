import manifest from './photos.json';

export interface PhotoEntry {
  id: string;
  original: string;
  artist: string;
  project: string;
  category: string;
  tone: 'mono' | 'colour' | string;
  caption: string;
  alt: string;
  focus?: string;
  credit?: string;
  public: boolean;
  downloadable?: boolean;
  width: number;
  height: number;
  widths?: number[];
}

const all = manifest.photos as PhotoEntry[];

/** The photographer's own picture (About page and the photo pass), not part of the portfolio. */
export const SELF = 'pritam';

/**
 * Only photos approved for public display (and actually built) ever reach a page.
 * Portfolio frames are landscape only: a portrait-orientation concert frame never reaches a page.
 */
export const photos = all.filter((p) => p.public && p.width && p.height && (p.project === SELF || p.width > p.height));

export const photoById = (id: string) => photos.find((p) => p.id === id);
export const photosFor = (project: string) => photos.filter((p) => p.project === project);

const base = '/assets/photos';
export const fullSrc = (p: PhotoEntry, w?: number) => {
  // The requested width, or the next size up; the full viewer copy only when nothing smaller fits.
  const fit = w ? p.widths?.find((x) => x >= w) : undefined;
  if (fit) return `${base}/w/${p.id}-${fit}.webp`;
  return `${base}/full/${p.id}.webp`;
};
export const srcset = (p: PhotoEntry) =>
  [...(p.widths ?? []).map((w) => `${base}/w/${p.id}-${w}.webp ${w}w`), `${base}/full/${p.id}.webp ${p.width}w`].join(', ');
