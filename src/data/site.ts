/**
 * Central personal configuration.
 * Everything a visitor can use to reach Pritam lives here.
 * Leave a field as an empty string ("") to hide its button everywhere on the site.
 */

export const site = {
  name: 'Pritam Haldar',
  shortName: 'Pritam',
  // Shown in <title>, Open Graph and the footer.
  role: 'Concert photography & show marketing',
  url: 'https://pritam-haldar.vercel.app', // change to your final domain before deploying
  description:
    'Pritam Haldar photographs concerts and turns live nights into marketing: artist content, sponsor visibility and promotion, working with Eventures Entertainment and Hottogol.',

  availability: {
    // Set `open` to false and the header / hire page will stop saying you are available.
    open: true,
    label: 'Available for opportunities',
    closedLabel: 'Not taking new work right now',
  },

  contact: {
    email: 'pritamhaldar.my@gmail.com',
    // Human-readable phone number, shown on the page.
    phoneDisplay: '+91 82406 80176',
    // E.164 digits only, no "+" or spaces. Used for tel: and WhatsApp links.
    phoneE164: '918240680176',
    // The same number is on WhatsApp. Set to false to hide WhatsApp buttons.
    whatsapp: true,
    whatsappMessage: "Hi Pritam, I found your portfolio and I'd like to talk about an opportunity.",
    linkedin: 'https://www.linkedin.com/in/pritam-haldar/',
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
  { href: '/archive/', label: 'Archive' },
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
    body: 'Full-show coverage for artists, promoters and festivals: stage, crowd, production and sponsor frames, edited as one series.',
    offered: true,
  },
  {
    title: 'Marketing internships & entry roles',
    body: 'Brand, growth or event marketing teams that need someone who has worked the ground floor of live shows.',
    offered: true,
  },
  {
    title: 'Event marketing & operations',
    body: 'Concerts, artist nights, college fests — promotion before the show and coordination on the day.',
    offered: true,
  },
  {
    title: 'Sponsorships & partnerships',
    body: 'Finding brands that fit an audience, pitching them, and making sure they are visible on the night.',
    offered: true,
  },
  {
    title: 'Artist & show promotion',
    body: 'Campaigns that turn an announcement into a full room: content calendars, on-ground activations, community push.',
    offered: true,
  },
  {
    title: 'Creative collaborations',
    body: 'Photographers, designers, production houses and independent artists looking for a marketing partner.',
    offered: true,
  },
] as const;

// ---- derived helpers (no need to edit) ----
const c = site.contact;
export const links = {
  email: c.email ? `mailto:${c.email}` : '',
  phone: c.phoneE164 ? `tel:+${c.phoneE164}` : '',
  whatsapp:
    c.whatsapp && c.phoneE164
      ? `https://wa.me/${c.phoneE164}?text=${encodeURIComponent(c.whatsappMessage)}`
      : '',
  linkedin: c.linkedin,
  instagram: c.instagram,
  resume: c.resume,
};
