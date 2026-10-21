/**
 * Case studies. One entry = one page at /work/<slug>/.
 *
 * Honesty rules used for this file (checked against the photos and their file metadata, October 2026):
 * - Every sentence describes something visible in the photos, something in the file metadata
 *   (camera, date, editing software), or the approach the photos show. No claims about who used
 *   the photos afterwards, what was delivered to whom, or results.
 * - Every frame carries the "Pritam Haldar Photography" signature. The Monali Thakur files also list
 *   another creator in their metadata: see docs/TO_VERIFY.md before sharing that set widely.
 * - Facts that are not confirmed yet (exact date, venue, which production company, numbers)
 *   are left as '' or []. Empty fields are hidden on the page. Fill them in when confirmed.
 * - `draft: true` hides a whole project from the site.
 */

export interface Project {
  slug: string;
  artist: string;
  title: string;
  kicker: string; // one-line poster tagline
  year: string; // '' = unknown, hidden
  venue: string; // '' = hidden
  company: string; // production partner for this show, '' = hidden
  role: string;
  category: string;
  cover: string; // photo id
  summary: string;
  context: string;
  challenge: string;
  idea: string;
  execution: string[];
  // verified: facts that can be checked (counts, file metadata). shows: what the photos show.
  outcomes: { verified: string[]; shows: string[] };
  notes: string; // "what I took from it": an opinion, in Pritam's voice
  sequence: string[]; // photo ids shown in the case study, in order
  draft?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'fakira',
    artist: 'Fakira',
    title: 'Fakira, live',
    kicker: 'Fire on the screen, white kurtas on stage.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'fakira-dsc-0817',
    summary:
      'A Fakira set shot from the front of the stage: the band, the LED visuals behind them, and fans holding up their own signs.',
    context:
      'Fakira perform in white kurtas in front of big LED graphics, from Bengali lettering to walls of fire. At this show, fans held up hand-made posters and signs.',
    challenge:
      'The light swung from near-dark to a full screen of fire within the set. The frames still had to hold together as one series.',
    idea:
      'Work three layers through the set: the face (emotion), the stage (scale and production) and the crowd (people who showed up).',
    execution: [
      'Portraits timed with the screen graphics, so the artist and the visuals share the frame.',
      'Monochrome versions where the colour distracted from the expression.',
      'Crowd frames of the fan-made posters and signs.',
      'Edited in Adobe Lightroom Classic as one series.',
    ],
    outcomes: {
      verified: ['45 frames in the edited set', 'Shot on a Nikon D5300, edited in Adobe Lightroom Classic (file metadata)'],
      shows: [
        'Band members on stage, wide stage frames and crowd frames.',
        'Fan-made posters held up in the crowd.',
      ],
    },
    notes:
      'The crowd shots are the ones people stop on. A wall of fire is impressive; a fan holding up a hand-drawn portrait is convincing.',
    sequence: [
      'fakira-dsc-0600', 'fakira-dsc-0621', 'fakira-dsc-0637', 'fakira-dsc-0823', 'fakira-dsc-0858',
      'fakira-dsc-0872', 'fakira-dsc-0972', 'fakira-dsc-0833', 'fakira-dsc-0910', 'fakira-dsc-0918',
      'fakira-dsc-0489', 'fakira-dsc-0611', 'fakira-dsc-0786', 'fakira-dsc-0751',
    ],
    featured: true,
  },
  {
    slug: 'cactus',
    artist: 'Cactus',
    title: 'Cactus, open air',
    kicker: 'Confetti, flame effects and phones in the air.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Production',
    cover: 'cactus-dsc-0241',
    summary:
      'An open-air Cactus show with CO2, flame effects, confetti and a big LED rig, covered wide and close.',
    context:
      'Cactus are a long-running Bengali rock band. This show had a large outdoor stage with a full lighting rig, LED screens and stage effects.',
    challenge:
      'Confetti and flame effects last a second or two. Miss the moment and you miss the frame that shows the scale of the production.',
    idea:
      'Stay wide for the effects, go tight on the vocalists in between, and come back to the crowd at the peaks.',
    execution: [
      'Wide frames of the full stage, rig and crowd.',
      'Confetti and flame moments.',
      'Close frames of both vocalists under green, magenta, blue and orange light.',
      'Crowd silhouettes and phones in the air, with no identifiable faces.',
    ],
    outcomes: {
      verified: ['51 frames in the edited set', 'Shot on a Nikon D5300, edited in Adobe Lightroom Classic (file metadata)'],
      shows: [
        'The production at full scale: stage, rig, effects and crowd.',
        'A range of looks of the vocalists from a single night.',
      ],
    },
    notes:
      'A wide shot of the whole stage and crowd says more about a show than ten close-ups. Close-ups are for the artist; wides show the scale.',
    sequence: [
      'cactus-dsc-0267', 'cactus-dsc-0114', 'cactus-dsc-0350', 'cactus-dsc-0129', 'cactus-dsc-0336',
      'cactus-dsc-0393', 'cactus-dsc-0136', 'cactus-dsc-0113', 'cactus-dsc-0361', 'cactus-dsc-0230',
      'cactus-dsc-0370', 'cactus-dsc-0161', 'cactus-dsc-0402', 'cactus-dsc-0275',
    ],
    featured: true,
  },
  {
    slug: 'jeet-ganguly',
    artist: 'Jeet Ganguly',
    title: 'Jeet Ganguly, with the sponsor on screen',
    kicker: 'The artist, the band, and the sponsor on the LED wall.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Sponsor visibility',
    cover: 'jeet-ganguly-dsc-0084',
    summary:
      'A Jeet Ganguly concert with sponsor branding on the LED wall, framed so the branding stays readable behind the artist.',
    context:
      'The sponsor’s branding ran on the LED screens behind the stage. A sponsor wants to be seen in the photos; an artist wants photos that look like a concert, not an advert.',
    challenge:
      'Keeping the sponsor’s name readable while the artist stays the clear subject of the frame.',
    idea:
      'Use the branded screen as the backdrop, not the subject. Frame the artist in front of it, and let the wide shots show the whole stage.',
    execution: [
      'Mid shots of the artist with the branding readable behind.',
      'Wide frames of the full stage and crowd.',
      'CO2 and confetti moments.',
      'The band: guitar, keys, drums and percussion.',
      'Monochrome frames where the colour wasn’t needed.',
    ],
    outcomes: {
      verified: [
        '54 frames in the edited set',
        'Sponsor branding readable in several wide and mid shots',
        'Shot on a Nikon D5300, edited in Adobe Lightroom Classic (file metadata)',
      ],
      shows: ['Frames for the artist, frames that show the sponsor, and wide frames of the whole show.'],
    },
    notes:
      'A sponsor’s logo matters most in the frames people actually share. Get the artist right first, then make sure the brand is in the frame.',
    sequence: [
      'jeet-ganguly-dsc-0100', 'jeet-ganguly-dsc-0026', 'jeet-ganguly-dsc-0908', 'jeet-ganguly-dsc-0103',
      'jeet-ganguly-dsc-0076', 'jeet-ganguly-dsc-0835', 'jeet-ganguly-dsc-0838', 'jeet-ganguly-dsc-0136',
      'jeet-ganguly-dsc-0001', 'jeet-ganguly-dsc-0931', 'jeet-ganguly-dsc-0780', 'jeet-ganguly-dsc-0756',
      'jeet-ganguly-dsc-0149', 'jeet-ganguly-dsc-0880',
    ],
    featured: true,
  },
  {
    slug: 'fossils',
    artist: 'Fossils',
    title: 'Fossils, in black and gold',
    kicker: 'A rock frontman, a striped scarf, and a lot of truss.',
    year: '2023',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'fossils-dsc-2132-l',
    summary:
      'Fossils on a big stage in December 2023, shot in colour and monochrome under hard backlight.',
    context:
      'Fossils are one of the best-known Bengali rock bands. The frontman’s look, with curls, glasses and a striped scarf, is instantly recognisable on stage.',
    challenge:
      'Strong backlight and haze, very little light on faces, and a busy stage set behind the band.',
    idea:
      'Use monochrome where the light was harsh, keep colour where it helped (the red and gold frames), and use wide frames to show the stage.',
    execution: [
      'Colour frames in red, gold and teal light.',
      'A monochrome series for the hardest-lit moments.',
      'Wide frames with confetti, CO2 and the full stage.',
      'Band details, like the drum kit in front of the Fossils emblem.',
    ],
    outcomes: {
      verified: [
        '38 frames in the edited set',
        'Shot on a Nikon Z 6II in December 2023, edited in Adobe Lightroom Classic and Photoshop (file metadata)',
      ],
      shows: ['One consistent look across the colour and monochrome frames.'],
    },
    notes:
      'Monochrome isn’t there to rescue a bad shot. It’s a choice about what the band stands for.',
    sequence: [
      'fossils-dsc-2016-l', 'fossils-dsc-2023-l', 'fossils-dsc-2046-l', 'fossils-dsc-2189-l', 'fossils-dsc-2123-l',
      'fossils-dsc-2184-l', 'fossils-dsc-2240-l', 'fossils-dsc-2026-l', 'fossils-dsc-2288-l', 'fossils-dsc-2339-l',
      'fossils-dsc-2352-l', 'fossils-dsc-2365-l',
    ],
    featured: true,
  },
  {
    slug: 'monali-thakur',
    artist: 'Monali Thakur',
    title: 'Monali Thakur, in colour',
    kicker: 'Kaleidoscope screens and a performer in constant motion.',
    year: '2023',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'monali-thakur-img-0947-l',
    summary:
      'A Monali Thakur concert in December 2023 with very graphic LED visuals, framed so the artist and the screen design read as one image.',
    context:
      'Monali Thakur is a playback singer and live performer. The screen content that night was bold: mandalas, starbursts and stars.',
    challenge:
      'The singer kept moving, and so did the screens. A sharp frame with the right graphic behind it meant timing both at once.',
    idea:
      'Pick the background first: find the angle where the screen design frames the singer, then wait for the moment.',
    execution: [
      'Colour frames built around the screen graphics.',
      'Close monochrome portraits.',
      'Band frames with the guitarists.',
    ],
    outcomes: {
      verified: ['31 frames in the edited set', 'Shot in December 2023 (file metadata)'],
      shows: ['The show’s visual design as much as the singer.'],
    },
    notes:
      'Laughter photographs better than perfect poses. The frames people remember are the ones where the joy on stage is obvious.',
    sequence: [
      'monali-thakur-img-0952-l', 'monali-thakur-img-0769-l', 'monali-thakur-img-0941-l', 'monali-thakur-img-0886-l',
      'monali-thakur-img-0808-l', 'monali-thakur-img-0917-l', 'monali-thakur-img-0981-l', 'monali-thakur-img-0949-l',
      'monali-thakur-img-0908-l', 'monali-thakur-img-0826-l', 'monali-thakur-img-1018-l', 'monali-thakur-img-0778-l',
    ],
    featured: true,
  },
  {
    slug: 'anupam-roy',
    artist: 'Anupam Roy',
    title: 'The Anupam Roy Band',
    kicker: 'A singer-songwriter, an electric guitar, and beams in every colour.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'anupam-roy-856828',
    summary:
      'The Anupam Roy Band live, with the band’s logo on stage, LED landscapes and saturated beams.',
    context:
      'Anupam Roy is a Bengali singer-songwriter who performs with The Anupam Roy Band. The band’s logo and screen visuals are part of the stage.',
    challenge:
      'The light changed colour from song to song. The set needed variety without looking like it came from different shows.',
    idea:
      'Let the light change and keep the composition steady: centred frames for the frontman, looser frames for the band.',
    execution: [
      'Frames of Anupam Roy in front of the band logo and the LED landscapes.',
      'Band frames: guitar, keys and drums.',
      'Monochrome close portraits.',
    ],
    outcomes: {
      verified: ['35 frames in the edited set', 'Supplied as 2048 px web exports, so shown at that size'],
      shows: ['The frontman and the band, together and apart.'],
    },
    notes: 'Symmetry is a cheap way to make a busy stage look intentional.',
    sequence: [
      'anupam-roy-874559', 'anupam-roy-901965', 'anupam-roy-890887', 'anupam-roy-209750', 'anupam-roy-905730',
      'anupam-roy-023191', 'anupam-roy-025633', 'anupam-roy-220569', 'anupam-roy-042660', 'anupam-roy-219633',
      'anupam-roy-853178',
    ],
    featured: false,
  },
];

export const published = projects.filter((p) => !p.draft);
export const projectBySlug = (slug: string) => published.find((p) => p.slug === slug);

/** Edited frames for a show, read from its first verified outcome ("54 frames in the …"). 0 if not stated. */
export const editedFrames = (p: Project) => Number(p.outcomes.verified[0]?.match(/^(\d+) frames\b/)?.[1] ?? 0);
