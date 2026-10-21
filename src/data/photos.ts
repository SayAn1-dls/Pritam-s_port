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

/** Only photos approved for public display (and actually built) ever reach a page. */
export const photos = all.filter((p) => p.public && p.width && p.height);

export const photoById = (id: string) => photos.find((p) => p.id === id);
export const photosFor = (project: string) => photos.filter((p) => p.project === project);

const base = '/assets/photos';
export const fullSrc = (p: PhotoEntry, w?: number) => {
  if (w && p.widths?.includes(w)) return `${base}/w/${p.id}-${w}.webp`;
  return `${base}/full/${p.id}.webp`;
};
export const srcset = (p: PhotoEntry) =>
  [...(p.widths ?? []).map((w) => `${base}/w/${p.id}-${w}.webp ${w}w`), `${base}/full/${p.id}.webp ${p.width}w`].join(', ');

export const orientation = (p: PhotoEntry) =>
  p.width > p.height * 1.05 ? 'landscape' : p.height > p.width * 1.05 ? 'portrait' : 'square';
