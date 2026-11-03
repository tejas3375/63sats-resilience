/* ==========================================================================
   In-page section navigation (scroll spy)
   Highlights the link for the section currently in view.
   Markup: <nav data-section-nav> containing <a href="#section-id"> links.
   ========================================================================== */

export function initSectionNav(nav) {
  if (!nav) return;

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter(Boolean);

  // Keep the active link visible when the bar scrolls horizontally (mobile).
  // Adjusts the bar's own scrollLeft so page scrolling is never interrupted.
  const scroller = nav.querySelector("[data-section-nav-scroller]") || nav;
  function keepVisible(link) {
    const left = link.offsetLeft; // scroller is position: relative (offsetParent)
    const right = left + link.offsetWidth;
    if (left < scroller.scrollLeft) scroller.scrollLeft = left - 16;
    else if (right > scroller.scrollLeft + scroller.clientWidth) {
      scroller.scrollLeft = right - scroller.clientWidth + 16;
    }
  }

  function setActive(id) {
    links.forEach((link) => {
      const active = link.hash === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "location");
        keepVisible(link);
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    },
    // A thin band below the sticky bars counts as "in view"
    { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));

  // The last section may be too short to reach the observer band, so treat
  // "scrolled to the bottom" as being on the last section.
  window.addEventListener("scroll", () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom && sections.length) setActive(sections.at(-1).id);
  }, { passive: true });
}
