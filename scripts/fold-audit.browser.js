/**
 * First-viewport audit. Paste into the browser console (or run through a browser tool) on the home page.
 * Returns the text a visitor can read without scrolling, and checks it against the
 * "first 3 seconds" rules in docs/plan/first-3-seconds.plan.xml.
 *
 * Not part of the build: it needs a real layout engine, so it runs in a browser.
 */
(() => {
  const REQUIRED = [
    /Pritam Haldar/i,                // who
    /photograph/i,                   // what (craft)
    /market/i,                       // what (angle)
    /concert|live show/i,            // where
    /Eventures Entertainment/i,      // proof: partners
    /Hottogol/i,
  ];
  const ARTISTS = ['Fakira', 'Cactus', 'Jeet Ganguly', 'Fossils', 'Monali Thakur', 'Anupam Roy'];

  const inView = (el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < innerHeight && r.width > 0 && getComputedStyle(el).visibility !== 'hidden';
  };
  const texts = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode()); ) {
    const t = n.textContent.replace(/\s+/g, ' ').trim();
    if (t && n.parentElement && inView(n.parentElement)) texts.push(t);
  }
  const visible = texts.join(' ');
  const actions = [...document.querySelectorAll('[data-hero] a.btn')];
  const actionsInView = actions.filter((a) => a.getBoundingClientRect().bottom <= innerHeight).length;
  const frame = document.querySelector('[data-hero] figure img');

  const checks = {
    required: REQUIRED.map((re) => [String(re), re.test(visible)]),
    artistsVisible: ARTISTS.filter((a) => visible.includes(a)).length,
    actionsInView,
    workFrameInView: !!frame && inView(frame),
  };
  const pass =
    checks.required.every(([, ok]) => ok) && checks.artistsVisible >= 3 && checks.actionsInView >= 1 && checks.workFrameInView;
  return { viewport: `${innerWidth}x${innerHeight}`, pass, checks, words: visible.split(' ').length, visible };
})();
