export const projects = [
  {
    id: 'careconnect', name: 'CareConnect', subtitle: 'Everyday warmth, designed for care.', category: 'uiux', discipline: 'MOBILE UI · PRODUCT DESIGN', number: '01', kind: 'project',
    intro: 'A ten-screen mobile UI concept that helps a parent manage daily medicine and check-ins while giving family caregivers clear, permission-based updates.',
    cover: '/assets/projects/careconnect-mobile-style-guide.png', coverAlt: 'CareConnect mobile style guide showing the brand, palette, typography, icons, controls, and cards',
    styleGuide: '/assets/projects/careconnect-mobile-style-guide.png',
    galleryIntro: 'The mobile style guide sets the colour, type, icon, control, and card system. The parent flow covers onboarding, medicine reminders, sharing and help. The caregiver flow makes updates and medicine management easy to scan. The supplied prototype illustrates these interactions; care records and alerts are sample content.',
    gallery: [
      ['Welcome & Connect', 'careconnect-01.png'], ['Parent Home', 'careconnect-02.png'],
      ['Medicine Reminder', 'careconnect-03.png'], ['My Medicines', 'careconnect-04.png'],
      ['My Family & Sharing', 'careconnect-05.png'], ['SOS / Help', 'careconnect-06.png'],
      ['Caregiver Home', 'careconnect-07.png'], ['Parent Details', 'careconnect-08.png'],
      ['Manage Medicines', 'careconnect-09.png'], ['Caregiver Settings', 'careconnect-10.png']
    ],
    prototype: '/assets/projects/careconnect-prototype.html'
  },
  {
    id: 'progelato', name: 'No Cheat Progelato', subtitle: 'Seven flavours. One visual family.', category: 'packaging', discipline: 'PACKAGING · PRODUCT VISUALS', number: '02', kind: 'project',
    intro: 'A seven-flavour packaging range for No Cheat Progelato, presented through pouch artwork, individual mockups, and a full-family visual.',
    cover: '/assets/projects/progelato-hero.jpg', coverAlt: 'Seven colourful No Cheat Progelato pouches arranged together on a podium',
    galleryIntro: 'The flavour colours give each pouch its own personality while the shared layout, product imagery, and information hierarchy keep the range together.',
    gallery: [
      ['Blueberry Muffin', 'progelato-blueberry-muffin.jpg'], ['Butterly Crunch', 'progelato-butterly-crunch.jpg'],
      ['Chocolicious', 'progelato-chocolicious.jpg'], ["Cookieej ’N’ Cream", 'progelato-cookieej-n-cream.jpg'],
      ['Creamy Strawberry', 'progelato-creamy-strawberry.jpg'], ['Mastana Mango', 'progelato-mastana-mango.jpg'],
      ['Shahi Zaffran Pista', 'progelato-shahi-zaffran-pista.jpg']
    ]
  },
  {
    id: 'eunoia', name: 'Eunoia Designtech', subtitle: 'One voice across five visuals.', category: 'branding', discipline: 'BRAND COMMUNICATION · GRAPHIC DESIGN', number: '03', kind: 'project',
    intro: 'A coordinated collection of Eunoia Designtech graphics covering identity, packaging, digital marketing, a lead ad, and the studio’s point of view.',
    cover: '/assets/projects/eunoia-branding.jpg', coverAlt: 'Eunoia Designtech branding and logo design graphic',
    galleryIntro: 'Deep navy, electric blue, and direct typography connect the five pieces while each graphic focuses on a different studio service or message.',
    gallery: [
      ['Branding & logo', 'eunoia-branding.jpg'], ['Packaging design', 'eunoia-packaging.jpg'],
      ['Digital marketing', 'eunoia-marketing.jpg'], ['Meta lead ad', 'eunoia-lead-ad.jpg'],
      ['Why Eunoia', 'eunoia-why.jpg']
    ]
  },
  {
    id: 'properi', name: 'ProPeri Campaign', subtitle: 'A spicy story in four frames.', category: 'graphics', discipline: 'SOCIAL CAMPAIGN · ART DIRECTION', number: '04', kind: 'project',
    intro: 'A four-slide carousel for No Cheat’s ProPeri protein spread, moving from a bold opening question through product details to a final call to action.',
    cover: '/assets/projects/properi-01.jpg', coverAlt: 'Opening slide of the red and yellow No Cheat ProPeri social carousel',
    galleryIntro: 'Read the four slides in order. The red and yellow palette, oversized headlines, product imagery, and changing pace carry the story from curiosity to product reveal.',
    gallery: [
      ['01 / The hook', 'properi-01.jpg'], ['02 / Product reveal', 'properi-02.jpg'],
      ['03 / The details', 'properi-03.jpg'], ['04 / Closing frame', 'properi-04.jpg']
    ]
  },
  {
    id: 'roam', name: 'Roam', subtitle: 'Less planning. More getting lost.', category: 'uiux', discipline: 'UI/UX · MOBILE APP', number: '05', color: '#dc6d43',
    intro: 'A slower, more personal way to discover a place. Roam brings curated escapes, a clear itinerary, and saved discoveries into one travel companion.',
    brief: 'Design a travel discovery experience for people who want a memorable short escape without opening a dozen tabs. The concept focuses on the decision between discovering a destination and saving it for later.',
    challenge: 'Travel discovery often mixes too many choices with too little context. A beautiful destination is only useful when the traveller can understand the experience, duration, and budget.',
    approach: 'A destination-first hierarchy makes the place the hero. Short, scannable details sit beside every experience, while a persistent saved list keeps inspiration from getting lost.',
    deliverables: ['Discovery & saved screens', 'Destination detail flow', 'Mobile component library', 'Interactive discovery prototype'],
    decisions: [['01', 'Make choosing feel lighter', 'A small set of mood filters helps people start with how they want a trip to feel.'], ['02', 'Keep the essentials close', 'Duration and indicative cost are visible before opening a destination.'], ['03', 'Let inspiration accumulate', 'Saving a place updates a dedicated list without interrupting browsing.']],
    palette: ['#243f39', '#f4eee3', '#dc6d43', '#b6c9b5'],
    outcome: 'The prototype connects discovery, filtering, destination details, and saved places. A next step would be moderated usability testing of the save-and-return flow; no user testing or business impact is claimed.'
  },
  {
    id: 'aara', name: 'Aara', subtitle: 'A quieter kind of everyday ritual.', category: 'branding', discipline: 'BRAND IDENTITY · PACKAGING', number: '06', color: '#67704b',
    intro: 'An identity for an imagined Indian tea label, rooted in a simple idea: a little stillness belongs in every day. Earthy colour, expressive serif type, and delicate botanicals bring it to life.',
    brief: 'Create a premium but approachable tea identity that feels at home on a kitchen shelf and in a thoughtful gift. The identity needs to work across packaging, stationery, and digital touchpoints.',
    challenge: 'Premium tea can feel either overly ornate or clinically minimal. This concept looks for warmth and a recognisable shelf presence while keeping the product easy to understand.',
    approach: 'A generous lowercase wordmark pairs with a restrained botanical language. Forest and cream create a clear product family, with a small terracotta dot as a consistent identifying detail.',
    deliverables: ['Wordmark & identity direction', 'Colour & typography system', 'Tea box and tin concepts', 'Stationery application'],
    decisions: [['01', 'An unhurried wordmark', 'Soft lowercase letters and a high contrast serif communicate care and a slower pace.'], ['02', 'A palette from the ritual', 'Tea-leaf greens, warm paper, and clay create a natural visual connection to the product.'], ['03', 'One family, many formats', 'The botanical illustration and accent dot carry through the box, tin, and stationery.']],
    palette: ['#343d28', '#7b805b', '#efe8d6', '#b7794e'],
    outcome: 'An original visual direction with packaging and stationery applications. The presentation image is an AI-assisted concept mockup; production dielines, print proofs, and trademark clearance are outside this concept.'
  },
  {
    id: 'folio', name: 'Folio', subtitle: 'Make a little room for reading.', category: 'uiux', discipline: 'PRODUCT DESIGN · WEB APP', number: '07', color: '#716190',
    intro: 'A calm digital bookshelf for the books you love and the ones you keep meaning to read. Folio brings your reading list, progress, and next chapter into a considered little space.',
    brief: 'Create a focused reading companion that makes a personal collection easy to navigate and progress satisfying to record, without turning reading into another productivity task.',
    challenge: 'Reading trackers can put targets and statistics ahead of the books themselves. The challenge is to support a habit while preserving the pleasure of reading at your own pace.',
    approach: 'A quiet editorial layout keeps book covers and the current read in focus. Simple shelf filters and a small progress interaction provide structure without demanding constant attention.',
    deliverables: ['Responsive bookshelf interface', 'Shelf filtering & progress flow', 'Book cover visual system', 'Interactive bookshelf prototype'],
    decisions: [['01', 'Give books breathing room', 'A soft neutral canvas and a generous grid put each book ahead of the interface.'], ['02', 'Pick up where you left off', 'The current book has a clear progress indicator and a quick way to log a reading session.'], ['03', 'Organise in familiar language', 'All books, Reading, and To read keep the shelf structure understandable at a glance.']],
    palette: ['#655779', '#e9e2ef', '#f9f6f0', '#c69577'],
    outcome: 'A working bookshelf demo with shelf filters and reading progress. The next research step would explore whether the progress interaction feels encouraging to occasional readers. No research findings or measured outcomes are invented.'
  },
  {
    id: 'rang', name: 'Rang', subtitle: 'A city. A canvas. A little chaos.', category: 'graphics', discipline: 'ART DIRECTION · CAMPAIGN DESIGN', number: '08', color: '#bd3b2a',
    intro: 'An expressive campaign for an imagined independent arts weekend. Bold typography, electric colour, and rhythmic geometric forms give the festival a visual voice of its own.',
    brief: 'Build a flexible campaign identity that can introduce a new arts festival, announce its programme, and create an instantly recognisable presence in print and social feeds.',
    challenge: 'A festival poster needs to create excitement from across a street while still communicating clearly up close. The same identity also has to hold together on a small phone screen.',
    approach: 'A tightly controlled palette meets deliberately oversized typography. A repeating flower-like symbol becomes a flexible framing device, connecting posters and square social tiles.',
    deliverables: ['Festival identity & art direction', 'Main campaign poster', 'Social media launch tiles', 'Adaptable type & motif system'],
    decisions: [['01', 'A name with presence', 'Heavy condensed lettering gives a short name a strong silhouette at every scale.'], ['02', 'Movement from repetition', 'A geometric bloom adds energy while remaining simple enough to repeat across formats.'], ['03', 'Keep the details grounded', 'Small, structured information blocks balance the playful headline and graphic treatment.']],
    palette: ['#e54c30', '#f5d957', '#50244c', '#f9eee0'],
    outcome: 'A coordinated poster and social campaign for a fictional event. The dates and festival details are illustrative; no real event or client commission is implied.'
  },
  {
    id: 'logofolio', name: 'Logo Folio', subtitle: 'Six ideas, six distinct signatures.', category: 'branding', discipline: 'LOGO DESIGN · MARK EXPLORATION', number: '09',
    intro: 'A collection of six original logo directions for imagined brands, from a quiet editorial monogram to an expressive movement mark.',
    brief: 'Explore how a mark can express a different personality with only type, shape, and proportion. Each logo is a standalone direction for a fictional brief.',
    challenge: 'A logo has to feel distinct at a glance and remain clear when it is small. The collection also needs variety without relying on decorative detail.',
    approach: 'Each direction begins with one recognisable idea: an arch, a spark, a seed, a folded letter, a rising sun, or a playful loop. The marks are presented in black on warm paper so their silhouettes lead.',
    deliverables: ['Six original logo directions', 'Wordmarks and symbols', 'Monochrome presentation board'],
    decisions: [['01', 'Start with a silhouette', 'Every mark has a simple shape that can be recognised before its name is read.'], ['02', 'Let the type speak', 'Different letterforms help each imagined brand find its own tone.'], ['03', 'Keep the test honest', 'A shared monochrome board reveals the strength of the marks without colour doing the work.']],
    palette: ['#171b2e', '#f8efe1', '#7775ef', '#ed7950'],
    outcome: 'Six self-initiated logo explorations for fictional brands. They are portfolio concepts, not commissioned identities or trademark-cleared marks.'
  },
  {
    id: 'morrow', name: 'Morrow Coffee', subtitle: 'A brighter start, made to travel.', category: 'branding', discipline: 'VISUAL IDENTITY · BRAND SYSTEM', number: '10',
    intro: 'A visual identity concept for an imagined coffee label, built around a sunburst, bright cobalt, and a warm paper palette.',
    brief: 'Create a recognisable identity for a small coffee brand that can move from a bag on a shelf to a cup, card, and social post.',
    challenge: 'The system has to feel energetic in a crowded café while leaving enough room for practical product information.',
    approach: 'A compact sunburst symbol and bold lowercase wordmark anchor the identity. Repeated rays become a flexible pattern, while cobalt and apricot distinguish the brand across touchpoints.',
    deliverables: ['Wordmark and sun symbol', 'Colour and type direction', 'Packaging concept', 'Cup, card, and social applications'],
    decisions: [['01', 'Make the morning visible', 'The sunburst gives the name an immediate visual link to a new day.'], ['02', 'Use colour as a cue', 'Cobalt provides a distinctive field for the warmer apricot accent.'], ['03', 'Build a repeatable system', 'The same symbol, rays, and type arrangement work across large and small formats.']],
    palette: ['#262b86', '#f6eee0', '#f3a363', '#151632'],
    outcome: 'A self-initiated visual identity concept for a fictional coffee label, presented with editable vector-style applications. No production packaging or client launch is implied.'
  }
];

// Lead with the logo collection and the visual identity project.
const featuredProjects = new Map([['logofolio', 0], ['morrow', 1]]);
projects.sort((a, b) => (featuredProjects.get(a.id) ?? 2) - (featuredProjects.get(b.id) ?? 2));
projects.forEach((project, index) => { project.number = String(index + 1).padStart(2, '0'); });

export const landscape = `<svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#bfd5cb"/><stop offset="1" stop-color="#f0d9b3"/></linearGradient></defs><path fill="url(#sky)" d="M0 0h500v360H0z"/><circle cx="376" cy="90" r="35" fill="#f7e8c9"/><path d="M0 234 99 119 180 214 285 83 440 249 500 174v186H0" fill="#8da998"/><path d="m0 306 150-140 100 100L366 160l134 114v86H0" fill="#577d70"/><path d="m0 315 128-75 128 92 110-81 134 56v53H0" fill="#294f43"/><path d="m312 245-16 22 40 23-59 25 10 45h44l-28-42 58-31-39-25 4-17" fill="#cdd7b3"/></svg>`;

export function roamVisual() { return `<div class="roam-art project-art"><div class="art-wordmark">roam<span>✳</span></div><p class="art-caption">GO SOMEWHERE<br>THAT FEELS LIKE YOU.</p><div class="phone phone-back"><div class="phone-speaker"></div><div class="destination-picture">${landscape}</div><div class="phone-detail"><small>THE SLOW ESCAPE</small><h4>Somewhere<br>in the hills.</h4><p>Munnar, Kerala · 3 days</p><div class="tiny-button">Explore this escape ↗</div></div></div><div class="phone phone-front"><div class="phone-speaker"></div><div class="phone-top">9:41 <span>▂ ▃ ▅</span></div><div class="phone-content"><small>A LITTLE WANDERLUST</small><h4>Where to<br>next, Ishika?</h4><div class="mock-search">⌕ &nbsp; Find your next escape</div><div class="mock-tabs"><b>For you</b><span>Nature</span><span>Culture</span></div><div class="mock-landscape">${landscape}<span>Munnar<br><small>Find your kind of quiet ↗</small></span></div><div class="phone-bottom">⌂ <span>♡</span><span>◎</span></div></div></div><span class="art-corner">DISCOVER. WANDER. REPEAT.</span></div>`; }
export function folioVisual() { return `<div class="folio-art project-art"><span class="folio-background-word">one more<br><i>chapter.</i></span><div class="browser-mock"><div class="browser-bar"><i></i><i></i><i></i><span>your little reading corner</span></div><div class="folio-layout"><aside><strong>folio<span>✳</span></strong><span class="mock-active">▦ &nbsp; My bookshelf</span><span>◷ &nbsp; Reading journal</span><span>♡ &nbsp; Favourites</span><small>A little every day<br>goes a long way.</small></aside><div class="folio-screen"><div class="mock-greeting"><small>YOUR PERSONAL LIBRARY</small><span>IS</span></div><h4>Good stories.<br>Great company.</h4><p>Make a little room for reading today.</p><div class="reading-card"><div class="book-cover book-small">THE<br>QUIET<br><i>HOURS</i></div><div><small>CURRENTLY READING</small><h5>The Quiet Hours</h5><span>A story worth slowing down for.</span><div class="progress"><i></i></div><small>84 of 240 pages</small></div></div><h5>Your bookshelf <span>View all ↗</span></h5><div class="mini-books"><div class="book-cover book-peach">A PLACE<br><i>between</i><br>WORLDS</div><div class="book-cover book-green">THE ART<br>OF<br><i>noticing</i></div><div class="book-cover book-blue">UNDER<br>THE SAME<br><i>sky</i></div></div></div></div></div><span class="art-corner">A CALMER CHAPTER OF THE INTERNET.</span></div>`; }
export function rangVisual() { return `<div class="rang-art project-art"><div class="rang-poster"><div class="poster-small">AN INDEPENDENT<br>ARTS WEEKEND <span>EDITION<br>01 / 2026</span></div><div class="rang-title">RANG<span>रंग</span></div><div class="rang-flower">✺</div><div class="poster-bottom">A CITY.<br>A CANVAS.<br>A LITTLE CHAOS.<span>ART / MUSIC / CULTURE<br>24—25 OCTOBER<br>CONCEPT FESTIVAL</span></div></div><div class="rang-tile"><span>MAKE<br>SOME</span><b>noise.</b><i>✳</i><small>RANG / THE ARTS WEEKEND</small></div><span class="art-corner">COLOUR OUTSIDE THE LINES.</span></div>`; }
const logoMarks = [
  ['solis', '✳', 'solis', 'A little more light'],
  ['noka', '◒', 'noka', 'Objects for living'],
  ['forma', 'F', 'FORMA', 'Creative practice'],
  ['arc', '⌒', 'arc', 'Spaces with feeling'],
  ['kefi', '↗', 'kefi', 'Made for movement'],
  ['cove', '✦', 'COVE', 'Find your stillness']
];
export function logoVisual() { return `<div class="project-art logo-art"><div class="logo-board">${logoMarks.map(([style, mark, name, line]) => `<div class="logo-tile logo-${style}"><span class="logo-symbol" aria-hidden="true">${mark}</span><strong>${name}</strong><small>${line}</small></div>`).join('')}</div></div>`; }
export function morrowVisual() { return `<div class="project-art morrow-art"><div class="morrow-board"><div class="morrow-tile morrow-wordmark"><span class="morrow-sun" aria-hidden="true">✳</span><strong>morrow<span>.</span></strong><small>GOOD DAYS START HERE / COFFEE CO.</small></div><div class="morrow-tile morrow-seal"><span>GOOD<br>DAYS<br>START<br>HERE.</span><i aria-hidden="true">✳</i></div><div class="morrow-tile morrow-pattern" aria-label="Repeating sunrise symbol pattern"><span>✳ ✳ ✳ ✳<br>✳ ✳ ✳ ✳<br>✳ ✳ ✳ ✳</span></div><div class="morrow-tile morrow-packaging"><div class="coffee-bag"><span>✳</span><strong>morrow.</strong><small>EVERYDAY BLEND<br>WHOLE BEAN COFFEE / 250G</small></div><div class="coffee-cup"><span>✳</span><strong>morrow.</strong></div></div><div class="morrow-tile morrow-card"><span>HELLO,<br>MORNING.</span><strong>morrow.</strong><small>YOUR DAILY CUP OF POSSIBLE.</small></div><div class="morrow-tile morrow-colours"><span style="background:#262b86"></span><span style="background:#f6eee0"></span><span style="background:#f3a363"></span><span style="background:#151632"></span></div></div></div>`; }
export function projectVisual(id) {
  const project = projects.find(item => item.id === id);
  if (id === 'logofolio') return logoVisual();
  if (id === 'morrow') return morrowVisual();
  if (project?.cover) {
    if (id === 'careconnect') return `<div class="project-art real-project-art real-project-careconnect"><img src="${project.cover}" alt="${project.coverAlt}" loading="lazy"/></div>`;
    if (id === 'progelato') return `<div class="project-art real-project-art real-project-progelato"><img src="${project.cover}" alt="${project.coverAlt}" loading="lazy"/></div>`;
    const images = project.gallery.slice(0, 5);
    return `<div class="project-art real-project-art real-project-${id}"><div class="real-project-mosaic">${images.map(([label,file])=>`<div class="mosaic-tile"><img src="/assets/projects/${file}" alt="${project.name}: ${label}" loading="lazy"/></div>`).join('')}</div></div>`;
  }
  return id === 'roam' ? roamVisual() : id === 'folio' ? folioVisual() : id === 'rang' ? rangVisual() : `<div class="aara-art project-art"><img src="/assets/aara-brand.webp" alt="Aara tea identity concept: cream and forest green packaging, botanical illustrations, a tea tin and stationery" loading="lazy" width="1536" height="1024"/><span class="image-note">CONCEPT VISUAL</span></div>`;
}
