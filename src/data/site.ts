/**
 * Central personal configuration.
 * Everything a visitor can use to reach Pritam lives here.
 * Leave a field as an empty string ("") to hide its button everywhere on the site.
 */

export const site = {
  name: 'Pritam Haldar',
  shortName: 'Pritam',
  // Shown in <title>, Open Graph and the footer.
  role: 'Concert and Artist Photographer',
  url: 'https://pritam-haldar.vercel.app', // change to your final domain before deploying
  description:
    'Pritam Haldar is a concert and artist photographer, capturing artists, live performances and the energy of the show.',

  availability: {
    // Set `open` to false and the header / hire page will stop saying you are available.
    open: true,
    label: 'Available for opportunities',
    closedLabel: 'Not taking new work right now',
  },

  // Public contact options are Instagram and WhatsApp only.
  contact: {
    // Human-readable phone number, shown on the page.
    phoneDisplay: '+91 82406 80176',
    // E.164 digits only, no "+" or spaces. Used for tel: and WhatsApp links.
    phoneE164: '918240680176',
    // The same number is on WhatsApp. Set to false to hide WhatsApp buttons.
    whatsapp: true,
    whatsappMessage: "Hi Pritam, I found your portfolio and I'd like to talk about an opportunity.",
    // Full profile URL, e.g. https://www.instagram.com/<handle>/. Empty = Instagram links hidden.
    instagram: '',
    // Put your resume at public/resume.pdf and set this to '/resume.pdf'. Empty = all resume buttons hidden.
    resume: '',
    location: '',
  },

  // Optional: a Formspree (or compatible) endpoint for the hire form, e.g. https://formspree.io/f/abcdwxyz
  // Leave empty and the form opens the visitor's email app with the message filled in (honest mailto fallback).
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
} as const;

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/hire/', label: 'Hire me' },
] as const;

/** Production companies Pritam has worked with. */
export const companies = [
  { name: 'Eventures Entertainment', note: 'Live events & concert production' },
  { name: 'Hottogol', note: 'Live events & concert production' },
] as const;

/** Opportunity types listed on /hire. Set `offered: false` to hide one. */
export const opportunities = [
  {
    title: 'Concert & event photography',
    body: 'Full-show coverage for artists, bands and events: performance, stage, band and crowd frames, edited as one series.',
    offered: true,
  },
  {
    title: 'Concert photography for festivals & college fests',
    body: 'Concerts, artist nights and college fests, covered from the first song to the last.',
    offered: true,
  },
  {
    title: 'Artist photography',
    body: 'Portraits and live frames of artists and bands, on stage and around the show.',
    offered: true,
  },
  {
    title: 'Creative collaborations',
    body: 'Photographers, designers, production houses and independent artists looking for a photographer.',
    offered: true,
  },
] as const;

// ---- derived helpers (no need to edit) ----
const c = site.contact;
export const links = {
  whatsapp:
    c.whatsapp && c.phoneE164
      ? `https://wa.me/${c.phoneE164}?text=${encodeURIComponent(c.whatsappMessage)}`
      : '',
  instagram: c.instagram,
  resume: c.resume,
};
