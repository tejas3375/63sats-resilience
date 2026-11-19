/* ==========================================================================
   Header component
   Renders: utility bar, brand, primary nav links, header CTA, mobile menu
   toggle. Data comes from data/navigation.js and data/site.js.
   Drawer behaviour (open/close on mobile) lives in modules/nav-drawer.js.
   ========================================================================== */

import { primaryNav, headerCta } from "../data/navigation.js";
import { site } from "../data/site.js";
import { escapeHtml as e, renderList } from "../utils/dom.js";

export function brandMark() {
  const { name, homeHref, logo } = site.brand;

  return `
    <a class="brand" href="${e(homeHref)}" aria-label="${e(name)} home">
      <img class="brand__logo" src="${e(logo.src)}" alt="" width="${e(logo.width)}" height="${e(logo.height)}">
    </a>`;
}

function utilityBar() {
  return `
    <div class="utility-bar">
      <p class="utility-bar__alert">
        Facing an active incident?
        <a href="${e(site.contact.incidentHotline.href)}">Call the 24×7 hotline</a>
      </p>
    </div>`;
}

// Marks the link for the page being viewed, so the header shows where you are
function navItem(item) {
  const isCurrent = window.location.pathname === item.href;

  return `
    <li class="primary-nav__item">
      <a class="primary-nav__link" href="${e(item.href)}"${isCurrent ? ' aria-current="page"' : ""}>${e(item.label)}</a>
    </li>`;
}

export function renderHeader(container) {
  container.classList.add("site-header");
  container.innerHTML = `
    ${utilityBar()}
    <div class="site-header__main">
      <div class="container site-header__inner">
        ${brandMark()}

        <nav class="primary-nav" id="primary-nav" aria-label="Main" data-primary-nav>
          <ul class="primary-nav__list" role="list">
            ${renderList(primaryNav, navItem)}
          </ul>
          <div class="primary-nav__mobile-footer">
            <a class="button button--primary" href="${e(headerCta.href)}">${e(headerCta.label)}</a>
          </div>
        </nav>

        <div class="site-header__actions">
          <a class="button button--primary site-header__cta" href="${e(headerCta.href)}">${e(headerCta.label)}</a>
          <button class="menu-toggle" type="button" aria-expanded="false"
                  aria-controls="primary-nav" data-menu-toggle>
            <span class="menu-toggle__bars" aria-hidden="true"></span>
            <span class="visually-hidden">Menu</span>
          </button>
        </div>
      </div>
    </div>`;
}
