/**
 * Case studies. One entry = one page at /work/<slug>/.
 *
 * Honesty rules used for this file:
 * - Every photo was shot by Pritam (the "Pritam Haldar Photography" signature is on each frame).
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
  deliverables: string[];
  outcomes: { verified: string[]; qualitative: string[] };
  notes: string; // "what I took from it"
  sequence: string[]; // photo ids shown in the case study, in order
  draft?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'fakira',
    artist: 'Fakira',
    title: 'Fakira, live',
    kicker: 'Fire on the screen, folk in the room.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'fakira-dsc-0817',
    summary:
      'A Fakira night shot for what it would be used for afterwards: frames the band could post that night, and frames a promoter could use to sell the next one.',
    context:
      'Fakira’s shows are loud with colour: white kurtas, Bengali lyrics thrown up on LED walls, a crowd that brings its own hand-painted signs. All of that is the marketing, as long as somebody gets it into the frame.',
    challenge:
      'The light swung from pitch dark to a full screen of fire within a single song. The set needed to work across very different lighting and still hang together as one story about this band.',
    idea:
      'Shoot three layers every song: the face (emotion), the stage (scale and production value), and the crowd (proof people showed up). Each layer answers a different question a future audience or sponsor asks.',
    execution: [
      'Tight portraits timed to the screen graphics, so the visuals and the artist land in the same frame.',
      'Monochrome when the colour got in the way of the expression.',
      'Turned around for the crowd: fan posters and signs are the most persuasive pictures of the night.',
      'Edited and graded the full set in Lightroom so every frame reads as one series.',
    ],
    deliverables: ['Edited photo set (45 frames)', 'Portrait, landscape and monochrome selects for social formats'],
    outcomes: {
      verified: ['45 frames in the final edited set'],
      qualitative: [
        'Covers every member of the band, plus stage-wide and crowd frames a promoter can reuse.',
        'Fan-made posters documented in the set, which is real evidence of the band’s following.',
      ],
    },
    notes:
      'The crowd shots are the ones people stop on. A wall of fire is impressive; a stranger holding up a hand-drawn portrait of the singer is convincing.',
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
    kicker: 'Confetti, flame bars and a whole field singing back.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Production documentation',
    cover: 'cactus-dsc-0241',
    summary:
      'An open-air Cactus concert with full production: CO2, flame effects, confetti and a big LED rig. Documented so the production itself becomes selling material.',
    context:
      'Cactus have been part of Bengali rock for decades and the audience spans generations. The production team built a big outdoor stage, and that scale is part of what the next show sells.',
    challenge:
      'Pyro, smoke and confetti last a second and then they are gone. Missing the cue means missing the shot that shows what the production cost and what the night felt like.',
    idea:
      'Know the cues before they happen. Stay wide for the effects moments, go tight on the vocalists in between, and come back to the crowd at the peaks.',
    execution: [
      'Wide frames of the full stage, rig and crowd for promoter and sponsor decks.',
      'Confetti and flame moments caught from the front of house.',
      'Tight frames of both vocalists across very different light (green, magenta, deep blue, orange smoke).',
      'Crowd silhouettes and phones-in-the-air frames that show engagement without identifying faces.',
    ],
    deliverables: ['Edited photo set (51 frames)', 'Wide production selects', 'Artist portrait selects'],
    outcomes: {
      verified: ['51 frames in the final edited set'],
      qualitative: [
        'Shows the production at full scale, which is exactly what a promoter needs to pitch the next edition.',
        'Gives the artist a range of looks from a single night.',
      ],
    },
    notes:
      'A wide shot with the whole field lit up does more for the next ticket sale than ten close-ups. Close-ups are for the artist; wides are for the business.',
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
    title: 'Jeet Ganguly, with a title partner',
    kicker: 'The artist, the crowd, and the brand that paid for the screen.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Sponsor visibility',
    cover: 'jeet-ganguly-dsc-0084',
    summary:
      'A big-ground concert with sponsor branding on the LED wall. Shot so the sponsor shows up in the photos naturally, instead of being cropped out.',
    context:
      'At sponsored shows the brand on the screen helps pay for the night. The sponsor’s team wants proof they were seen, and the artist’s team wants photos that look like a concert, not an advert.',
    challenge:
      'Doing both in the same frame: the sponsor’s name readable and the artist clearly the hero, without the photo turning into a billboard.',
    idea:
      'Use the branded screen as a backdrop, not a subject. Frame the artist in front of it, and in the wide shots let the branding sit where the eye passes through.',
    execution: [
      'Mid shots of the artist with the partner’s branding readable in the background.',
      'Wide frames of the full stage and packed ground for the sponsor’s recap.',
      'CO2 and confetti moments, plus the whole band: guitar, bass, keys, drums, percussion.',
      'Monochrome frames for the artist’s own channels, where branding is less important.',
    ],
    deliverables: ['Edited photo set (54 frames)', 'Sponsor-visibility selects', 'Band member selects'],
    outcomes: {
      verified: ['54 frames in the final edited set', 'Sponsor branding readable in multiple wide and mid shots'],
      qualitative: [
        'One shoot produced assets for three audiences: the artist, the sponsor and the organiser.',
      ],
    },
    notes:
      'Sponsors don’t want their logo in every frame. They want it in the frames people will actually share. Get the hero shot first, then make sure the brand is in it.',
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
      'Fossils on a big festival stage, shot leaning into monochrome and hard backlight. A rock band should look like a rock band.',
    context:
      'Fossils are among the best-known Bengali rock bands, and the frontman’s look (curls, glasses, striped scarf) is a brand in itself. The photos had to protect that look.',
    challenge:
      'Heavy backlight and haze, very little light on faces, and a huge, ornate stage set competing for attention.',
    idea:
      'Treat it like a rock poster. Use monochrome where the light was harsh, keep colour where it helped the mood (red rooms, gold rigs), and use the stage architecture to show the scale.',
    execution: [
      'Underexposed for highlights to keep the drama in the lights.',
      'Monochrome selects for the hardest-lit moments.',
      'Wide festival frames showing confetti, CO2 and the full stage.',
      'Band details like the drum kit in front of the Fossils emblem.',
    ],
    deliverables: ['Edited photo set (38 frames)', 'Monochrome series', 'Wide festival selects'],
    outcomes: {
      verified: ['38 frames in the final edited set'],
      qualitative: ['A consistent visual identity across the set, so it can be posted as one series.'],
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
    kicker: 'Kaleidoscope screens and a performer who never stood still.',
    year: '2023',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'monali-thakur-img-0947-l',
    summary:
      'A Monali Thakur concert with very graphic LED visuals. The aim was frames where the artist and the screen design work as one image.',
    context:
      'Monali Thakur is a playback singer with a big, energetic stage presence. The screen content that night was bold: mandalas, starbursts, neon stars.',
    challenge:
      'The performer never stopped moving, and neither did the screens. A sharp, flattering frame with the right graphic in the background meant timing two moving things at once.',
    idea:
      'Pick the background first. Find the angle where the screen design frames the singer, wait for the graphic, then shoot the movement into it.',
    execution: [
      'Colour frames built around the screen graphics.',
      'Close monochrome portraits for the quieter, emotional songs.',
      'Band frames to credit the musicians on stage.',
    ],
    deliverables: ['Edited photo set (31 frames)', 'Colour and monochrome selects'],
    outcomes: {
      verified: ['31 frames in the final edited set'],
      qualitative: ['Frames that sell the show’s visual design as much as the singer.'],
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
    kicker: 'A singer-songwriter, a Telecaster, and beams in every colour.',
    year: '',
    venue: '',
    company: '',
    role: 'Concert photographer',
    category: 'Live music · Artist content',
    cover: 'anupam-roy-856828',
    summary:
      'The Anupam Roy Band live, with the band logo, LED landscapes and saturated beams. The set covers the frontman and every member of the band.',
    context:
      'Anupam Roy is a singer-songwriter with a loyal audience. On stage the band’s identity, logo and screen visuals are part of the experience.',
    challenge:
      'The rig changed colour from song to song. The set needed variety without looking like it came from six different shows.',
    idea:
      'Let the light change and keep the composition consistent: centred, symmetrical frames for the frontman and looser frames for the band.',
    execution: [
      'Hero frames of the frontman framed by the band logo and the LED landscapes.',
      'Band coverage: guitar, drums, keys.',
      'Monochrome close portraits.',
    ],
    deliverables: ['Edited photo set (35 frames, web-size versions)'],
    outcomes: {
      verified: ['35 frames in the edited set'],
      qualitative: ['A full-band set in which every member is credited visually.'],
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
