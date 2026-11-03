/* ==========================================================================
   Small DOM helpers shared by components and modules
   ========================================================================== */

/** Escape a string for safe insertion into HTML text or attributes. */
export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Render a list of items with a template function and join the result. */
export function renderList(items = [], template) {
  return items.map(template).join("");
}

/** True when the page is on a wide, hover-capable layout (desktop menus). */
export function isDesktopLayout() {
  return window.matchMedia("(min-width: 1080px)").matches;
}

/** Safe localStorage wrapper — storage can be blocked or unavailable. */
export const storage = {
  get(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* ignore */ }
  },
};

/** Inline chevron used by menu triggers. */
export const chevronIcon = `
  <svg class="icon icon--chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
