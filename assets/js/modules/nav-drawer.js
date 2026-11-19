/* ==========================================================================
   Mobile nav drawer
   - Below 1080px the menu toggle opens the primary nav as a drawer.
   - Escape closes it and returns focus to the toggle.
   - Following a link, or crossing to the desktop layout, closes it.
   ========================================================================== */

export function initNavDrawer(header) {
  if (!header) return;

  const menuToggle = header.querySelector("[data-menu-toggle]");
  const nav = header.querySelector("[data-primary-nav]");
  if (!menuToggle || !nav) return;

  function setDrawer(open) {
    if (open) {
      // Pin the drawer directly under the header row, whether or not the
      // utility bar is currently scrolled out of view.
      const rowBottom = header.querySelector(".site-header__main").getBoundingClientRect().bottom;
      nav.style.setProperty("--drawer-top", `${rowBottom}px`);
    }
    menuToggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("has-drawer-open", open);
  }

  menuToggle.addEventListener("click", () => {
    setDrawer(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setDrawer(false);
      menuToggle.focus();
    }
  });

  // Close after following a link (e.g. "/#lifecycle" on the same page)
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setDrawer(false);
  });

  // Reset state when crossing the desktop/mobile breakpoint
  window.matchMedia("(min-width: 1080px)").addEventListener("change", () => setDrawer(false));
}
