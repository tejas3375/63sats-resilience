/* ==========================================================================
   Cookie consent banner
   Stores the choice locally so the banner shows once per browser.
   TODO(compliance): wire "Accept all" to analytics loading once chosen.
   ========================================================================== */

import { storage } from "../utils/dom.js";

const STORAGE_KEY = "63sats-cookie-consent";

export function initCookieBanner(banner) {
  if (!banner) return;
  if (storage.get(STORAGE_KEY)) return;

  banner.hidden = false;

  banner.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-consent]")?.dataset.consent;
    if (!choice) return;
    storage.set(STORAGE_KEY, choice);
    banner.hidden = true;
  });
}
