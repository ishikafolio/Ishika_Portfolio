import '@fontsource/barlow-condensed/latin-500.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import './style.css';
import { projects, projectVisual, landscape } from './projects.js';
import { heroCharacter, aboutCharacter, contactCharacter } from './hero-character.js';

const arrow = '<span aria-hidden="true">↗</span>';
const diamond = '<span class="diamond" aria-hidden="true">◆</span>';
document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#work">Skip to selected work</a>
  <header class="site-header"><a href="#home" class="wordmark" aria-label="Ishika, home">ishika<span>✳</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a></nav><a class="header-contact" href="#contact">Let’s talk ${arrow}</a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></header>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden><a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Let’s talk ↗</a></nav>
  <main>
    <section class="hero" id="home" aria-labelledby="hero-title"><div class="hero-topline"><span>ISHIKA SHRIVASTAV / DESIGNER</span><span>SELECTED WORK / 2026</span></div><div class="hero-composition" data-expression="happy"><div class="hero-copy"><span class="eyebrow">HELLO, I’M</span><h1 id="hero-title">Ishika<br><span class="hero-last-name">Shrivastav<i>.</i></span></h1><p class="hero-role">UI/UX & Graphic Designer</p><p class="hero-description">Thoughtful experiences. Expressive identities.<br>A little curiosity in everything I create.</p><a href="#work" class="button button-cream">Explore my work <span aria-hidden="true">↓</span></a><span class="hero-copy-doodle" aria-hidden="true">✳</span></div>${heroCharacter}</div><div class="hero-bottom"><span><i></i> OPEN TO CREATIVE OPPORTUNITIES</span><a href="#work">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a><span>MADE WITH INTENTION & A LITTLE SOUL</span></div></section>
    <div class="discipline-strip" aria-label="Design disciplines"><span>UI/UX DESIGN</span>${diamond}<span>BRAND IDENTITIES</span>${diamond}<span>DIGITAL EXPERIENCES</span>${diamond}<span>VISUAL STORIES</span>${diamond}<span>DESIGN WITH PURPOSE</span>${diamond}</div>
    <section class="work section-wrap" id="work" aria-labelledby="work-title"><div class="section-kicker">01 / SELECTED WORK ${diamond}</div><div class="section-heading"><h2 id="work-title">WORK THAT<br><span class="serif-word">connects.</span></h2><div class="section-description"><p>Interfaces, packaging, campaigns and brand stories, shaped with clarity and character.</p><span class="small-note">${projects.filter(p=>p.kind==='project').length} SUPPLIED PROJECTS · ${projects.filter(p=>p.kind!=='project').length} SELF-INITIATED CONCEPTS</span></div></div><div class="filter-bar" role="group" aria-label="Filter projects"><button class="filter active" data-filter="all" aria-pressed="true">All work <sup>${String(projects.length).padStart(2,'0')}</sup></button>${[['uiux','UI/UX design'],['packaging','Packaging'],['branding','Brand identity'],['social','Social media'],['graphics','Graphic design']].map(([id,label])=>`<button class="filter" data-filter="${id}" aria-pressed="false">${label} <sup>${String(projects.filter(p=>p.category===id).length).padStart(2,'0')}</sup></button>`).join('')}</div><div class="project-grid">${projects.map(p => `<article class="project-card" data-category="${p.category}"><div class="project-meta"><div><span class="project-number">${p.number} / ${p.kind==='project'?'SELECTED PROJECT':'DESIGN CONCEPT'}</span><span class="project-discipline">${p.discipline}</span><h3><button data-project="${p.id}">${p.name}</button></h3><p class="project-subtitle">${p.subtitle}</p><p class="project-summary">${p.intro}</p><span class="project-year">${p.kind==='project'?'FROM THE PROJECT ARCHIVE':'2026 / CONCEPT'}</span></div><button class="circle-arrow" data-project="${p.id}" aria-label="Open ${p.name} case study">↗</button></div><button class="project-open" data-project="${p.id}" aria-label="View ${p.name} case study">${projectVisual(p.id)}<span class="project-hover">Explore project ${arrow}</span></button></article>`).join('')}</div><p class="work-footnote">Logo and visual identity concepts lead the collection, followed by selected artwork and other design concepts.</p><span class="sr-only" id="filter-status" role="status" aria-live="polite"></span></section>
    <section class="about" id="about" aria-labelledby="about-title"><div class="section-wrap"><div class="section-kicker light">02 / THE PERSON BEHIND THE PIXELS ${diamond}</div><div class="about-grid"><div class="about-art"><div class="about-art-inner"><span class="about-art-top">CURIOUS MIND<br>CREATIVE SOUL</span><span class="about-monogram">is<span>✳</span></span><span class="about-art-bottom">ISHIKA SHRIVASTAV<br>DESIGNER & VISUAL THINKER</span></div>${aboutCharacter}<div class="about-sticker">a little<br><i>different.</i><span>↗</span></div></div><div class="about-copy"><h2 id="about-title">GOOD DESIGN<br>BEGINS WITH<br><span class="serif-word">curiosity.</span></h2><p>I’m Ishika, a UI/UX and graphic designer who loves finding the sweet spot between something that works beautifully and something that feels right.</p><p>With 2 years of experience across digital products and visual communication, I turn ideas into intuitive interfaces, thoughtful design systems, and distinctive brand experiences.</p><p>My practice brings together structure and expression — a clear user flow, a considered typeface, a colour that makes you feel something.</p><a class="text-link" href="/Ishika_Shrivastav_CV.pdf" download>Download my résumé <span aria-hidden="true">↓</span></a></div></div><div class="background-grid"><div><h3>THE JOURNEY ${diamond}</h3><div class="timeline-item"><span>NOV 2024 — PRESENT</span><h4>UI/UX & Graphic Designer</h4><p>Silvercayde</p><small>Digital interfaces, reusable UI components,<br>brand assets & visual campaigns.</small></div><div class="timeline-item"><span>JUL 2024 — OCT 2024</span><h4>UI/UX & Graphic Design Intern</h4><p>Ambizor</p><small>Interface concepts, visual identities,<br>campaign creatives & print design.</small></div></div><div><h3>THE FOUNDATION ${diamond}</h3><div class="timeline-item"><span>JUN 2023 — FEB 2024</span><h4>Diploma in Web & UI/UX Design</h4><p>Frameboxx 2.0</p><small>Animation & Visual Effects College</small></div><div class="timeline-item"><span>AUG 2021 — OCT 2023</span><h4>Bachelor of Arts</h4><p>Maharaja Krishnakumarsinhji<br>Bhavnagar University</p></div></div><div class="toolkit"><h3>THE TOOLKIT ${diamond}</h3><div class="tool-icons"><span title="Figma" class="figma-icon"><i></i><i></i><i></i><i></i><i></i><i></i></span><span title="Adobe Photoshop">Ps</span><span title="Adobe Illustrator">Ai</span><span title="Adobe InDesign">Id</span></div><p>Figma · Photoshop · Illustrator<br>InDesign · Canva · Creatie</p><div class="skill-chips"><span>Wireframing</span><span>Prototyping</span><span>Design systems</span><span>Brand identity</span><span>Responsive UI</span><span>Typography</span></div><p class="extra-tools">ALSO EXPLORING WITH<br><span>Framer · Webflow · Wix Studio · Spline</span></p></div></div></div></section>
    <section class="process section-wrap" id="process" aria-labelledby="process-title"><div class="section-kicker">03 / HOW I THINK ${diamond}</div><div class="section-heading"><h2 id="process-title">FROM A LITTLE <span class="serif-word">what if</span><br>TO SOMETHING THAT WORKS.</h2><p class="section-description">A thoughtful process.<br>Room for a little unexpected.</p></div><div class="process-grid">${[['01','Discover','Start with people. Ask questions, understand the context, and find the problem worth solving.','◎'],['02','Define','Connect the dots. Shape the brief, map the journey, and give the idea a clear direction.','◇'],['03','Design','Make it tangible. Explore layouts, build visual systems, and turn ideas into prototypes.','✳'],['04','Refine','Sweat the details. Review, gather feedback, and iterate until every element feels considered.','↗']].map(([n,t,d,s])=>`<div class="process-step"><div class="process-step-top"><span>${n}</span><span class="process-symbol" aria-hidden="true">${s}</span></div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></section>
    <section class="contact" id="contact" aria-labelledby="contact-title"><div class="section-wrap"><div class="section-kicker light">04 / LET’S MAKE SOMETHING GOOD ${diamond}</div><div class="contact-heading"><h2 id="contact-title">HAVE A <span class="serif-word">little</span><br>BIG IDEA?</h2>${contactCharacter}<a href="mailto:iishikashrivastav@gmail.com" class="contact-arrow" aria-label="Email Ishika">↗</a></div><div class="contact-bottom"><div><p>A new project, a creative opportunity,<br>or just a good conversation. I’m all ears.</p><a class="contact-email" href="mailto:iishikashrivastav@gmail.com">iishikashrivastav@gmail.com ${arrow}</a></div><div class="contact-links"><a href="https://www.linkedin.com/in/ishika-shrivastav" target="_blank" rel="noopener noreferrer">LinkedIn ${arrow}</a><a href="tel:+917777958649">+91 77779 58649 ${arrow}</a><button id="copy-email">Copy email <span aria-hidden="true">⧉</span></button><span class="sr-only" id="copy-status" role="status"></span></div></div></div></section>
  </main><footer class="site-footer"><a class="wordmark" href="#home">ishika<span>✳</span></a><p>© ${new Date().getFullYear()} Ishika Shrivastav · Designed with intention.</p><a href="#home">BACK TO TOP ↑</a></footer>
  <dialog id="project-dialog" aria-labelledby="case-title"><div class="dialog-toolbar"><a class="wordmark" href="#work" id="dialog-home">ishika<span>✳</span></a><span>SELECTED WORK / PROJECT GALLERY</span><button id="close-project" aria-label="Close case study">Close <span aria-hidden="true">×</span></button></div><div id="case-content"></div></dialog>`;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const heroComposition = document.querySelector('.hero-composition');
const moodButton = document.querySelector('.anime-mood');
const expressions = ['happy', 'thoughtful', 'surprised', 'neutral'];
const emotionNotes = ['ready to create ✦', 'what if... ✳', 'oh, that’s good! ✦', 'finding the feeling ✳'];
let expressionIndex = 0;
function showExpression(index) {
  expressionIndex = index % expressions.length;
  const expression = expressions[expressionIndex];
  heroComposition.dataset.expression = expression;
  heroComposition.querySelector('.anime-emotion').textContent = emotionNotes[expressionIndex];
  moodButton.dataset.expression = expression;
  moodButton.setAttribute('aria-label', `Change character expression; currently ${expression}`);
  moodButton.querySelector('strong').textContent = expression.toUpperCase();
  moodButton.classList.remove('is-changing');
  void moodButton.offsetWidth;
  moodButton.classList.add('is-changing');
}
moodButton.addEventListener('click', () => showExpression(expressionIndex + 1));
moodButton.addEventListener('animationend', event => {
  if (event.target.classList.contains('anime-mood-face')) moodButton.classList.remove('is-changing');
});
window.setInterval(() => {
  if (reducedMotion.matches || document.hidden || heroComposition.getBoundingClientRect().bottom < 0) return;
  showExpression(expressionIndex + 1);
}, 7600);

// Elements remain visible before observation; the class only plays an entrance.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-in');
      motionObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.section-heading, .project-card, .about-art, .about-copy, .process-step, .contact-heading').forEach(element => motionObserver.observe(element));
}

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open menu'); }
menuToggle.addEventListener('click', () => { const open = mobileNav.hidden; mobileNav.hidden = !open; menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 701px)').addEventListener('change', e => { if(e.matches) closeMenu(); });

function updateProjectRevealDirections() {
  document.querySelectorAll('.project-card:not([hidden])').forEach((card, index) => {
    card.dataset.revealDirection = index % 2 === 0 ? 'left' : 'right';
  });
}
updateProjectRevealDirections();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => {b.classList.toggle('active', b === button);b.setAttribute('aria-pressed', String(b === button));});
  let count = 0;
  document.querySelectorAll('.project-card').forEach(card => {card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if(!card.hidden) count++;});
  updateProjectRevealDirections();
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown`;
}));

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#case-content');
let lastTrigger;
function closeProject() { dialog.close(); }
document.querySelector('#close-project').addEventListener('click', closeProject);
document.querySelector('#dialog-home').addEventListener('click', closeProject);
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); if(lastTrigger) lastTrigger.focus({preventScroll:true}); if(location.hash.startsWith('#project/')) history.replaceState(null, '', '#work');});
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
function openProject(id, trigger) {
  const p = projects.find(p=>p.id===id); if(!p) return;
  if(trigger) lastTrigger = trigger;
  if (p.kind === 'project') {
    const next = projects[(projects.indexOf(p) + 1) % projects.length];
    content.innerHTML = `<div class="case-hero case-hero--real"><span class="section-kicker">${p.number} / ${p.discipline}</span><div class="case-title-row"><h2 id="case-title">${p.name}<span>✦</span></h2><span class="concept-label">SELECTED PROJECT</span></div><h3>${p.subtitle}</h3><p>${p.intro}</p></div><div class="case-visual case-visual--real">${projectVisual(p.id)}</div><div class="case-body"><div class="gallery-intro"><span class="section-kicker">THE WORK</span><h3>Take a closer look.</h3><p>${p.galleryIntro}</p></div>${p.styleGuide?`<figure class="case-style-guide"><a href="${p.styleGuide}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.name} mobile style guide at full size"><img src="${p.styleGuide}" alt="${p.name} mobile style guide showing brand, colours, typography, icons, controls, and cards" loading="lazy"/></a><figcaption>Mobile style guide</figcaption></figure>`:''}<div class="project-gallery project-gallery--${p.id}">${p.gallery.map(([label, file], index) => `<figure><a href="/assets/projects/${file}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.name}: ${label} artwork at full size"><img src="/assets/projects/${file}" alt="${p.name}: ${label} artwork" loading="lazy"/></a><figcaption><span>${String(index + 1).padStart(2, '0')}</span>${label}</figcaption></figure>`).join('')}</div>${p.prototype?`<a class="prototype-link" href="${p.prototype}" target="_blank" rel="noopener noreferrer">Explore the interactive prototype <span aria-hidden="true">↗</span></a>`:''}<button class="next-project" data-next="${next.id}"><span>NEXT PROJECT</span><strong>${next.name} ↗</strong></button></div>`;
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open'); dialog.scrollTop = 0;
    history.replaceState(null, '', `#project/${id}`);
    document.querySelector('#close-project').focus({preventScroll:true});
    content.querySelector('[data-next]').addEventListener('click', e=>openProject(e.currentTarget.dataset.next));
    return;
  }
  if (id === 'logofolio' || id === 'morrow' || p.showcase) {
    const next = projects[(projects.indexOf(p) + 1) % projects.length];
    const detail = p.showcase
      ? `<span class="section-kicker">${p.showcase}</span><h3>${p.showcaseTitle}</h3><p>${p.showcaseText}</p>`
      : id === 'logofolio'
      ? '<span class="section-kicker">THE COLLECTION</span><h3>Six ways to leave a mark.</h3><p>Each logo explores a different tone through a compact symbol and wordmark. The shared monochrome board lets form, spacing, and character do the talking.</p>'
      : '<span class="section-kicker">THE IDENTITY</span><h3>One idea, many touchpoints.</h3><p>The sun symbol, confident wordmark, and repeating pattern create a family across packaging, cups, stationery, and social graphics.</p>';
    content.innerHTML = `<div class="case-hero"><span class="section-kicker">${p.number} / ${p.discipline}</span><div class="case-title-row"><h2 id="case-title">${p.name}<span>✳</span></h2><span class="concept-label">SELF-INITIATED CONCEPT</span></div><h3>${p.subtitle}</h3><p>${p.intro}</p></div><div class="case-visual">${projectVisual(p.id)}</div><div class="case-body"><div class="case-concept-gallery">${detail}</div><div class="case-brief"><div><span class="section-kicker">THE BRIEF</span><h3>A small idea.<br>A considered direction.</h3><p>${p.brief}</p></div><div><span class="section-kicker">CONCEPT DELIVERABLES</span><ul>${p.deliverables.map(x=>`<li>${x}</li>`).join('')}</ul></div></div><div class="case-two-col"><div><h3>The challenge</h3><p>${p.challenge}</p></div><div><h3>The approach</h3><p>${p.approach}</p></div></div><h3 class="case-section-title">The design decisions</h3><div class="case-decisions">${p.decisions.map(([n,t,d])=>`<div><span>${n}</span><h4>${t}</h4><p>${d}</p></div>`).join('')}</div><h3 class="case-section-title">A palette with purpose</h3><div class="palette">${p.palette.map(c=>`<div><i style="background:${c}"></i><span>${c.toUpperCase()}</span></div>`).join('')}</div><div class="case-outcome"><span class="section-kicker">WHERE THE CONCEPT LANDS</span><p>${p.outcome}</p></div><button class="next-project" data-next="${next.id}"><span>NEXT PROJECT</span><strong>${next.name} ↗</strong></button></div>`;
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open'); dialog.scrollTop = 0;
    history.replaceState(null, '', `#project/${id}`);
    document.querySelector('#close-project').focus({preventScroll:true});
    content.querySelector('[data-next]').addEventListener('click', e=>openProject(e.currentTarget.dataset.next));
    return;
  }
  content.innerHTML = `<div class="case-hero"><span class="section-kicker">${p.number} / ${p.discipline}</span><div class="case-title-row"><h2 id="case-title">${p.name}<span>✳</span></h2><span class="concept-label">SELF-INITIATED CONCEPT</span></div><h3>${p.subtitle}</h3><p>${p.intro}</p></div><div class="case-visual">${projectVisual(p.id)}</div><div class="case-body"><div class="case-brief"><div><span class="section-kicker">THE BRIEF</span><h3>A small idea.<br>A considered direction.</h3><p>${p.brief}</p></div><div><span class="section-kicker">CONCEPT DELIVERABLES</span><ul>${p.deliverables.map(x=>`<li>${x}</li>`).join('')}</ul></div></div><div class="case-two-col"><div><h3>The challenge</h3><p>${p.challenge}</p></div><div><h3>The approach</h3><p>${p.approach}</p></div></div><h3 class="case-section-title">The design decisions</h3><div class="case-decisions">${p.decisions.map(([n,t,d])=>`<div><span>${n}</span><h4>${t}</h4><p>${d}</p></div>`).join('')}</div><h3 class="case-section-title">A palette with purpose</h3><div class="palette">${p.palette.map(c=>`<div><i style="background:${c}"></i><span>${c.toUpperCase()}</span></div>`).join('')}</div>${p.id==='roam'?roamDemo():p.id==='folio'?folioDemo():p.id==='aara'?`<div class="brand-system"><div class="brand-wordmark">aara<span>TEA & STILLNESS</span></div><div><span class="section-kicker">THE BRAND IN A FEW WORDS</span><h3>Rooted. Warm.<br>Quietly expressive.</h3><p>A considered contrast of generous serif letterforms, restrained supporting type, and a small terracotta signature.</p></div></div>`:`<div class="campaign-system"><div><span>ART / MUSIC / CULTURE</span><h3>COLOUR<br>OUTSIDE<br>THE LINES<span>✳</span></h3><small>RANG — AN IMAGINED ARTS WEEKEND</small></div><div><span>YOUR WEEKEND.<br>REIMAGINED.</span><strong>रंग</strong><small>SHOW UP. MAKE SOMETHING.</small></div></div>`}<div class="case-outcome"><span class="section-kicker">WHERE THE CONCEPT LANDS</span><p>${p.outcome}</p></div><button class="next-project" data-next="${projects[(projects.indexOf(p)+1)%projects.length].id}"><span>NEXT CONCEPT</span><strong>${projects[(projects.indexOf(p)+1)%projects.length].name} ↗</strong></button></div>`;
  if(!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open'); dialog.scrollTop = 0;
  history.replaceState(null, '', `#project/${id}`);
  document.querySelector('#close-project').focus({preventScroll:true});
  content.querySelector('[data-next]').addEventListener('click', e=>openProject(e.currentTarget.dataset.next));
  if(id==='roam') wireRoam(); if(id==='folio') wireFolio();
}

const destinations = [
  {name:'Munnar',state:'Kerala',type:'Nature',duration:'3 days',cost:'₹8,500',description:'Tea gardens, misty trails, and a slower start to the morning.',plan:['Arrive & wander the tea gardens','Walk the hill trails at sunrise','A quiet café morning before heading home']},
  {name:'Jaipur',state:'Rajasthan',type:'Culture',duration:'2 days',cost:'₹7,000',description:'Pink streets, local craft, and stories around every corner.',plan:['Explore the old city & its craft markets','Visit Amber Fort, then find a rooftop sunset']},
  {name:'Gokarna',state:'Karnataka',type:'Nature',duration:'3 days',cost:'₹9,000',description:'Coastal walks, small beach cafés, and nothing on the clock.',plan:['Settle in & walk along the shore','Explore the coastal trail','Slow breakfast & one last swim']}
];
function roamDemo() { return `<section class="prototype"><div class="prototype-heading"><div><span class="section-kicker">TRY THE INTERACTION</span><h3>Your next little escape.</h3></div><span>INTERACTIVE CONCEPT</span></div><div class="roam-demo"><div class="demo-nav"><strong>roam✳</strong><button id="show-saved" aria-pressed="false">♡ Saved <span id="saved-count">0</span></button></div><div class="demo-filters" role="group" aria-label="Destination type"><button class="selected" data-type="All" aria-pressed="true">For you</button><button data-type="Nature" aria-pressed="false">Nature</button><button data-type="Culture" aria-pressed="false">Culture</button></div><div id="destination-list"></div><p class="demo-disclaimer">Illustrative trips and budgets. This is a design prototype.</p><div class="sr-only" role="status" id="roam-status"></div></div></section>`; }
function wireRoam(){
  const saved = new Set();let type='All', savedOnly=false;
  const render=()=>{
    const list=destinations.filter(d=>(type==='All'||d.type===type)&&(!savedOnly||saved.has(d.name)));
    content.querySelector('#destination-list').innerHTML=list.length?list.map(d=>`<article class="destination-card"><div class="destination-art ${d.name.toLowerCase()}">${landscape}</div><div><span>${d.state} · ${d.duration}</span><h4>${d.name}</h4><p>${d.description}</p><small>Sample budget ${d.cost} / person</small><details><summary>Explore itinerary</summary><ol>${d.plan.map(x=>`<li>${x}</li>`).join('')}</ol></details></div><button class="save-place" data-save="${d.name}" aria-label="${saved.has(d.name)?'Unsave':'Save'} ${d.name}" aria-pressed="${saved.has(d.name)}">${saved.has(d.name)?'♥':'♡'}</button></article>`).join(''):'<p class="empty-state">Your next adventure starts with a little inspiration.<br>Save a place from For you to find it here.</p>';
    content.querySelector('#saved-count').textContent=saved.size;
    content.querySelectorAll('[data-save]').forEach(b=>b.addEventListener('click',()=>{const name=b.dataset.save;saved.has(name)?saved.delete(name):saved.add(name);render();content.querySelector('#roam-status').textContent=`${name} ${saved.has(name)?'saved':'removed from saved places'}`;content.querySelector(`[data-save="${name}"]`)?.focus();}));
  };
  content.querySelectorAll('[data-type]').forEach(b=>b.addEventListener('click',()=>{type=b.dataset.type;savedOnly=false;content.querySelector('#show-saved').setAttribute('aria-pressed','false');content.querySelectorAll('[data-type]').forEach(el=>{el.classList.toggle('selected',el===b);el.setAttribute('aria-pressed',String(el===b));});render();}));
  content.querySelector('#show-saved').addEventListener('click',e=>{savedOnly=!savedOnly;type='All';e.currentTarget.setAttribute('aria-pressed',String(savedOnly));content.querySelectorAll('[data-type]').forEach(el=>{el.classList.toggle('selected',!savedOnly&&el.dataset.type==='All');el.setAttribute('aria-pressed',String(!savedOnly&&el.dataset.type==='All'));});render();});render();
}
function folioDemo(){return `<section class="prototype"><div class="prototype-heading"><div><span class="section-kicker">TRY THE INTERACTION</span><h3>Your little reading corner.</h3></div><span>INTERACTIVE CONCEPT</span></div><div class="folio-demo"><div class="demo-nav"><strong>folio✳</strong><span>A LITTLE EVERY DAY.</span></div><div class="demo-reading"><div class="book-cover book-small">THE<br>QUIET<br><i>HOURS</i></div><div><span>CURRENTLY READING</span><h4>The Quiet Hours</h4><label for="reading-progress" id="reading-label">84 of 240 pages</label><progress id="reading-progress" max="240" value="84">35%</progress><button id="log-reading">Read 12 more pages +</button><button class="reset-reading" id="reset-reading">Reset demo</button><span class="sr-only" id="reading-status" role="status"></span></div></div><div class="demo-filters" role="group" aria-label="Bookshelf filter"><button class="selected" data-shelf="all" aria-pressed="true">All books</button><button data-shelf="reading" aria-pressed="false">Reading</button><button data-shelf="to-read" aria-pressed="false">To read</button><button data-shelf="finished" aria-pressed="false">Finished</button></div><div class="demo-books"><div data-book="reading" class="book-cover book-small">THE<br>QUIET<br><i>HOURS</i></div><div data-book="to-read" class="book-cover book-peach">A PLACE<br><i>between</i><br>WORLDS</div><div data-book="to-read" class="book-cover book-green">THE ART<br>OF<br><i>noticing</i></div><div data-book="finished" class="book-cover book-blue">UNDER<br>THE SAME<br><i>sky</i></div></div><p id="shelf-status" class="demo-disclaimer" aria-live="polite">4 books on this shelf. Book titles are fictional concept content.</p></div></section>`;}
function wireFolio(){let pages=84;const log=content.querySelector('#log-reading');const currentBook=content.querySelector('[data-book="reading"]');let shelf='all';const filterBooks=()=>{let n=0;content.querySelectorAll('[data-book]').forEach(b=>{b.hidden=shelf!=='all'&&b.dataset.book!==shelf;if(!b.hidden)n++;});content.querySelector('#shelf-status').textContent=`${n} ${n===1?'book':'books'} on this shelf. Book titles are fictional concept content.`;};const update=()=>{content.querySelector('#reading-progress').value=pages;content.querySelector('#reading-label').textContent=`${pages} of 240 pages`;log.disabled=pages===240;log.textContent=pages===240?'Book finished ✓':'Read 12 more pages +';currentBook.dataset.book=pages===240?'finished':'reading';content.querySelector('#reading-status').textContent=pages===240?'Book finished. Moved to your Finished shelf.':`Reading progress: ${pages} of 240 pages`;filterBooks();};log.addEventListener('click',()=>{pages=Math.min(240,pages+12);update();});content.querySelector('#reset-reading').addEventListener('click',()=>{pages=84;update();});content.querySelectorAll('[data-shelf]').forEach(b=>b.addEventListener('click',()=>{shelf=b.dataset.shelf;content.querySelectorAll('[data-shelf]').forEach(el=>{el.classList.toggle('selected',el===b);el.setAttribute('aria-pressed',String(el===b));});filterBooks();}));}

document.querySelector('#copy-email').addEventListener('click', async e=>{const button=e.currentTarget;try {await navigator.clipboard.writeText('iishikashrivastav@gmail.com');button.innerHTML='Email copied <span aria-hidden="true">✓</span>';document.querySelector('#copy-status').textContent='Email address copied to clipboard.';setTimeout(()=>{button.innerHTML='Copy email <span aria-hidden="true">⧉</span>';},2500);}catch {document.querySelector('#copy-status').textContent='Copy is unavailable. The email address is displayed alongside this button.';button.textContent='Select the email to copy';}});
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.site-header nav a').forEach(a=>a.classList.toggle('current',a.hash===`#${entry.target.id}`));}});},{rootMargin:'-20% 0px -60% 0px'});
document.querySelectorAll('main>section[id]').forEach(section=>navObserver.observe(section));
function handleHash(){if(location.hash.startsWith('#project/'))openProject(location.hash.split('/')[1]);else if(dialog.open)closeProject();}
window.addEventListener('hashchange',handleHash);handleHash();
