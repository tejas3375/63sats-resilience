/* ==========================================================================
   63SATS Cyber Resilience — JavaScript entry point
   Loaded on every page as: <script type="module" src="/assets/js/main.js">

   1. Render shared components (header, footer) into their placeholders.
   2. Initialise behaviour modules for whatever the page contains.
   Each init function exits quietly when its markup is absent.
   ========================================================================== */

import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

import { initMegaMenu } from "./modules/mega-menu.js";
import { initSectionNav } from "./modules/section-nav.js";
import { initAllTabs } from "./modules/tabs.js";
import { initAllLeadForms } from "./modules/lead-form.js";
import { initModals } from "./modules/modal.js";
import { initCookieBanner } from "./modules/cookie-banner.js";

/* 1. Shared components ---------------------------------------------------- */
const header = document.querySelector('[data-component="site-header"]');
const footer = document.querySelector('[data-component="site-footer"]');

if (header) renderHeader(header);
if (footer) renderFooter(footer);

/* 2. Behaviour ------------------------------------------------------------ */
initMegaMenu(header);
initSectionNav(document.querySelector("[data-section-nav]"));
initAllTabs();
initAllLeadForms();
initModals();
initCookieBanner(document.querySelector("[data-cookie-banner]"));
