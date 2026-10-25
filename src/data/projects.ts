/**
 * Artists and bands. One entry = one page at /work/<slug>/.
 *
 * Content rules (October 2026):
 * - Pages are about the artist or band and their music, researched from Wikipedia and music press
 *   (Rolling Stone India, The Telegraph t2). No descriptions of the photographs, the stage or how they were shot.
 * - No biographies of individual members, no invented stories, no hype. If sources disagree (e.g. Fakira's
 *   founding year), leave it out.
 * - `year` is when Pritam photographed the show. `frames` is the number of photos in the edited set.
 * - `draft: true` hides a whole entry from the site.
 */

export interface Project {
  slug: string;
  artist: string;
  kind: 'band' | 'artist';
  kicker: string; // one-line tagline about the artist
  about: string; // one line on the artist and their music (Work page list)
  year: string; // year photographed; '' = hidden
  frames: number; // photos in the edited set
  origin: string;
  genre: string;
  role: string; // Pritam's role at the show
  cover: string; // photo id (landscape)
  summary: string;
  intro: string;
  sound: string;
  statement: string;
  known: string[]; // best-known songs, albums or soundtracks
  milestones: string[];
  sequence: string[]; // photo ids shown on the page, in order (landscape frames only)
  draft?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'fakira',
    artist: 'Fakira',
    kind: 'band',
    kicker: 'Bengali folk songs, carried onto the rock stage.',
    about: 'Kolkata folk-fusion band that brings Bengali folk and Baul songs, including Lalon Fakir’s, into rock.',
    year: '2026',
    frames: 45,
    origin: 'Kolkata',
    genre: 'Folk fusion',
    role: 'Concert photographer',
    cover: 'fakira-dsc-0817',
    summary:
      'Fakira is a Kolkata folk-fusion band that reworks Bengali folk songs for a rock line-up.',
    intro:
      'The band built its repertoire by researching folk songs at ashrams and akhras across Bengal, then arranging them for guitars, bass, drums and keys.',
    sound:
      'The songs come from Bengal’s folk tradition, with lyrics by Lalon Fakir, Radharomon and others, set against electric guitars and a rock rhythm section. One track, “Somoy Gele Shadhon”, doubles as a tribute to Pink Floyd.',
    statement:
      'Old Bengali folk songs, played as rock.',
    known: [
      'Debut album Itorpona (2014)',
      '“Chander Gaye Chand”',
      '“Nizamuddin Auliya”',
      '“Bhromor Koyo Giya”',
      '“Somoy Gele Shadhon”',
    ],
    milestones: [
      '2013: first concerts in the United States',
      '2014: debut album Itorpona released in Kolkata',
      '2015: Special Jury Award at the Mirchi Music Awards Bangla for Itorpona',
      'Concerts and television sessions in Bangladesh',
    ],
    sequence: [
      'fakira-dsc-0621', 'fakira-dsc-0637', 'fakira-dsc-0823', 'fakira-dsc-0858', 'fakira-dsc-0872',
      'fakira-dsc-0833', 'fakira-dsc-0918', 'fakira-dsc-0611', 'fakira-dsc-0786', 'fakira-dsc-0751',
      'fakira-dsc-0888', 'fakira-dsc-0959', 'fakira-dsc-0656', 'fakira-dsc-0902',
    ],
    featured: true,
  },
  {
    slug: 'cactus',
    artist: 'Cactus',
    kind: 'band',
    kicker: 'One of the first professional Bangla rock bands.',
    about: 'One of Bengal’s longest-running Bangla rock bands, playing out of Kolkata since 1992.',
    year: '2026',
    frames: 51,
    origin: 'Kolkata',
    genre: 'Bangla rock',
    role: 'Concert photographer',
    cover: 'cactus-dsc-0336',
    summary:
      'Cactus is a Bangla rock band from Kolkata, formed in 1992 and counted among the first professional bands of the genre.',
    intro:
      'The band played its first professional show in Kolkata in March 1993. Since then it has released five studio albums and played thousands of concerts in India and abroad.',
    sound:
      'Cactus writes and sings rock songs in Bengali, and has stayed part of Kolkata’s live music scene for more than three decades. The band also scored and performed the soundtrack of the Bengali film Nil Nirjane (2002).',
    statement:
      'Bangla rock, from almost the very beginning.',
    known: [
      '“Mon”, from the Nil Nirjane soundtrack',
      '“Bhalo Theko” and “Rater Pari”, from Tuccho',
      'Debut album Cactus (1999)',
    ],
    milestones: [
      '1992: formed in Kolkata',
      '1993: first professional show',
      '1999: debut album Cactus',
      '2002: soundtrack for the film Nil Nirjane',
      '2004, 2008, 2013: Rajar Raja, Tuccho and Blah Blah Blah',
    ],
    sequence: [
      'cactus-dsc-0267', 'cactus-dsc-0350', 'cactus-dsc-0336', 'cactus-dsc-0393', 'cactus-dsc-0136',
      'cactus-dsc-0113', 'cactus-dsc-0402', 'cactus-dsc-0275', 'cactus-dsc-0412', 'cactus-dsc-0166',
      'cactus-dsc-0339', 'cactus-dsc-0263', 'cactus-dsc-0152', 'cactus-dsc-0242',
    ],
    featured: true,
  },
  {
    slug: 'jeet-ganguly',
    artist: 'Jeet Ganguly',
    kind: 'artist',
    kicker: 'The composer behind Aashiqui 2.',
    about: 'Composer and singer behind a long run of Bengali and Hindi film soundtracks, including Aashiqui 2.',
    year: '2026',
    frames: 54,
    origin: 'Kolkata',
    genre: 'Film music · Bengali and Hindi',
    role: 'Concert photographer',
    cover: 'jeet-ganguly-dsc-0076',
    summary:
      'Jeet Ganguly is a composer and playback singer who writes for Bengali and Hindi cinema.',
    intro:
      'In Bengali cinema his soundtracks run from Chirodini Tumi Je Amar and Challenge to the Paglu and Boss films. In Hindi films he is best known for Aashiqui 2, Citylights and Hamari Adhuri Kahani.',
    sound:
      'He writes melody-led film songs, from romantic ballads such as “Chahun Main Ya Naa” and “Muskurane” to the songs of mainstream Bengali hits, and performs them live with a full band.',
    statement:
      'Film songs, sung live by the man who wrote them.',
    known: [
      '“Chahun Main Ya Naa” (Aashiqui 2)',
      '“Muskurane” (Citylights)',
      '“Suno Na Sangemarmar” (Youngistaan)',
      'Soundtracks for Chirodini Tumi Je Amar, Paglu and Boss: Born to Rule',
    ],
    milestones: [
      '2005: Filmfare Award East for Best Music Director, Yuddho',
      '2014: Filmfare Award for Best Music Director, Aashiqui 2 (shared)',
      '2015: Mirchi Music Award for Music Composer of the Year, “Muskurane”',
    ],
    sequence: [
      'jeet-ganguly-dsc-0100', 'jeet-ganguly-dsc-0908', 'jeet-ganguly-dsc-0103', 'jeet-ganguly-dsc-0076', 'jeet-ganguly-dsc-0835',
      'jeet-ganguly-dsc-0136', 'jeet-ganguly-dsc-0001', 'jeet-ganguly-dsc-0149', 'jeet-ganguly-dsc-0880', 'jeet-ganguly-dsc-0075',
      'jeet-ganguly-dsc-1000', 'jeet-ganguly-dsc-0120', 'jeet-ganguly-dsc-0794', 'jeet-ganguly-dsc-0928',
    ],
    featured: true,
  },
  {
    slug: 'fossils',
    artist: 'Fossils',
    kind: 'band',
    kicker: 'Kolkata hard rock, since 1998.',
    about: 'Kolkata hard-rock band formed in 1998, among the acts that brought Bangla rock to big stages.',
    year: '2024',
    frames: 38,
    origin: 'Kolkata',
    genre: 'Bangla rock · Hard rock',
    role: 'Concert photographer',
    cover: 'fossils-dsc-2123-l',
    summary:
      'Fossils is a Kolkata hard-rock band formed in 1998 by Rupam Islam, and one of the pioneering acts of Bengali rock.',
    intro:
      'The band played its first show at Nazrul Mancha, Kolkata, in January 1999 and released its debut album in 2002. A run of albums followed, from Fossils 2 and Mission F to Fossils 6.',
    sound:
      'Fossils mix hard rock with blues and psychedelia, sung in Bengali, and are known for lyrics with social commentary. The band has also spoken up for causes such as the welfare of HIV-positive people.',
    statement:
      'Bengali hard rock with something to say.',
    known: [
      '“Hasnuhana”',
      '“Bishakto Manush”',
      '“Ekla Ghor”',
      '“Acid”',
      '“Bicycle Chor”',
    ],
    milestones: [
      '1999: first concert, at Nazrul Mancha, Kolkata',
      '2002: debut album Fossils',
      '2006: Mission F, Kolkata’s best-selling album of the year in a Radio Mirchi survey',
      '2009: Fossils 3 wins Best Non-Film Album at the Anandalok Awards',
      '2023: 25th-anniversary concert in Kolkata',
    ],
    sequence: [
      'fossils-dsc-2189-l', 'fossils-dsc-2123-l', 'fossils-dsc-2288-l', 'fossils-dsc-2339-l', 'fossils-dsc-2352-l',
      'fossils-dsc-2365-l', 'fossils-dsc-2034-l', 'fossils-dsc-2214-l', 'fossils-dsc-2100-l', 'fossils-dsc-2287-l',
      'fossils-dsc-2055-l', 'fossils-dsc-2522-l',
    ],
    featured: true,
  },
  {
    slug: 'monali-thakur',
    artist: 'Monali Thakur',
    kind: 'artist',
    kicker: 'The voice of “Moh Moh Ke Dhaage”.',
    about: 'Playback singer behind Hindi and Bengali film songs such as “Sawaar Loon” and “Moh Moh Ke Dhaage”.',
    year: '2024',
    frames: 31,
    origin: 'Kolkata',
    genre: 'Playback · Hindi and Bengali',
    role: 'Concert photographer',
    cover: 'monali-thakur-img-0952-l',
    summary:
      'Monali Thakur is a playback singer and live performer who sings in Hindi, Bengali and other Indian languages.',
    intro:
      'She came to wide notice on Indian Idol and had her breakthrough with “Zara Zara Touch Me” from Race (2008). She has since sung for films including Lootera, Dum Laga Ke Haisha and Badrinath Ki Dulhania.',
    sound:
      'Her film songs range from upbeat dance tracks to slower, melodic songs like “Sawaar Loon”. Alongside playback she releases independent singles, and she has acted in films such as Lakshmi (2014).',
    statement:
      'A National Award-winning voice, live on stage.',
    known: [
      '“Moh Moh Ke Dhaage” (Dum Laga Ke Haisha)',
      '“Sawaar Loon” (Lootera)',
      '“Zara Zara Touch Me” (Race)',
      '“Cham Cham” (Baaghi)',
    ],
    milestones: [
      '2008: breakthrough with “Zara Zara Touch Me”',
      '2014: Filmfare Award for Best Female Playback Singer, “Sawaar Loon”',
      '63rd National Film Awards: Best Female Playback Singer, “Moh Moh Ke Dhaage”',
      'IIFA Award for Best Female Playback Singer, “Moh Moh Ke Dhaage”',
    ],
    sequence: [
      'monali-thakur-img-0952-l', 'monali-thakur-img-0886-l', 'monali-thakur-img-0808-l', 'monali-thakur-img-0981-l', 'monali-thakur-img-0908-l',
      'monali-thakur-img-1018-l', 'monali-thakur-img-0778-l', 'monali-thakur-img-0991-l', 'monali-thakur-img-0812-l', 'monali-thakur-img-0945-l',
      'monali-thakur-img-1264-l', 'monali-thakur-img-0973-l',
    ],
    featured: true,
  },
  {
    slug: 'anupam-roy',
    artist: 'Anupam Roy',
    kind: 'artist',
    kicker: 'A songwriter’s songs, played as a band.',
    about: 'Kolkata singer-songwriter known for Bengali film songs and the Piku soundtrack, on stage with the Anupam Roy Band.',
    year: '2023',
    frames: 35,
    origin: 'Kolkata',
    genre: 'Singer-songwriter · Bengali',
    role: 'Concert photographer',
    cover: 'anupam-roy-856828',
    summary:
      'Anupam Roy is a Kolkata singer-songwriter and composer who performs live with the Anupam Roy Band.',
    intro:
      'His first songs reached listeners through the Bengali film Autograph (2010). He has since written soundtracks for films such as Baishe Srabon, Hemlock Society and Praktan, and composed the music for the Hindi film Piku (2015).',
    sound:
      'He writes the words as well as the music, and his songs are known for their lyrics as much as their melodies. He also releases independent albums, from Durbine Chokh Rakhbo Na (2012) to Adrishyo Nagordolar Trip (2023).',
    statement:
      'Songs where the words matter as much as the tune.',
    known: [
      '“Amake Amar Moto Thakte Dao” (Autograph)',
      '“Benche Thakar Gaan” (Autograph)',
      '“Tumi Jaake Bhalobasho” (Praktan)',
      'The Piku soundtrack and score',
    ],
    milestones: [
      '2010: debut with songs in the film Autograph',
      '2015: Bollywood debut with Piku',
      '2016: Filmfare Award for Best Background Score, Piku',
      '64th National Film Awards: Best Lyrics, “Tumi Jaake Bhalobasho”',
    ],
    sequence: [
      'anupam-roy-874559', 'anupam-roy-901965', 'anupam-roy-905730', 'anupam-roy-023191', 'anupam-roy-042660',
      'anupam-roy-219633', 'anupam-roy-169508', 'anupam-roy-183334', 'anupam-roy-211841', 'anupam-roy-053478',
      'anupam-roy-031362',
    ],
    featured: false,
  },
];

export const published = projects.filter((p) => !p.draft);
export const projectBySlug = (slug: string) => published.find((p) => p.slug === slug);
