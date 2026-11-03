/* ==========================================================================
   Mega menu + mobile drawer behaviour
   - Desktop: click or hover a trigger to open its panel; one open at a time.
   - Mobile: the menu toggle opens a drawer; triggers expand inline.
   - Escape closes and returns focus; clicking outside closes.
   ========================================================================== */

import { isDesktopLayout } from "../utils/dom.js";

const HOVER_OPEN_DELAY = 120;
const HOVER_CLOSE_DELAY = 200;

export function initMegaMenu(header) {
  if (!header) return;

  const triggers = [...header.querySelectorAll("[data-menu-trigger]")];
  const menuToggle = header.querySelector("[data-menu-toggle]");
  const nav = header.querySelector("[data-primary-nav]");
  let hoverTimer;

  /* Panel helpers ------------------------------------------------------- */

  const panelFor = (trigger) => document.getElementById(trigger.getAttribute("aria-controls"));

  function openPanel(trigger) {
    triggers.forEach((other) => other !== trigger && closePanel(other));
    trigger.setAttribute("aria-expanded", "true");
    panelFor(trigger).hidden = false;
    header.classList.add("has-open-menu");
  }

  function closePanel(trigger) {
    trigger.setAttribute("aria-expanded", "false");
    panelFor(trigger).hidden = true;
    if (!triggers.some((t) => t.getAttribute("aria-expanded") === "true")) {
      header.classList.remove("has-open-menu");
    }
  }

  const closeAllPanels = () => triggers.forEach(closePanel);
  const isOpen = (trigger) => trigger.getAttribute("aria-expanded") === "true";

  /* Mobile drawer ------------------------------------------------------- */

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
    if (!open) closeAllPanels();
  }

  menuToggle?.addEventListener("click", () => {
    setDrawer(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  /* Triggers ------------------------------------------------------------ */

  triggers.forEach((trigger) => {
    const item = trigger.closest(".primary-nav__item");

    trigger.addEventListener("click", () => {
      isOpen(trigger) ? closePanel(trigger) : openPanel(trigger);
    });

    // Hover intent on desktop only
    item.addEventListener("mouseenter", () => {
      if (!isDesktopLayout()) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => openPanel(trigger), HOVER_OPEN_DELAY);
    });

    item.addEventListener("mouseleave", () => {
      if (!isDesktopLayout()) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => closePanel(trigger), HOVER_CLOSE_DELAY);
    });
  });

  /* Global dismissal ---------------------------------------------------- */

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openTrigger = triggers.find(isOpen);
    if (openTrigger) {
      closePanel(openTrigger);
      openTrigger.focus();
    } else if (nav.classList.contains("is-open")) {
      setDrawer(false);
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (isDesktopLayout() && !header.contains(event.target)) closeAllPanels();
  });

  // Close everything after following an in-page link (e.g. "/#contact")
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeAllPanels();
      setDrawer(false);
    }
  });

  // Reset state when crossing the desktop/mobile breakpoint
  window.matchMedia("(min-width: 1080px)").addEventListener("change", () => setDrawer(false));
}
