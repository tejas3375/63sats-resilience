/* ==========================================================================
   Header component
   Renders: utility bar, brand, primary nav with mega menus, header CTA,
   mobile menu toggle. Data comes from data/navigation.js and data/site.js.
   Behaviour (open/close) lives in modules/mega-menu.js.
   ========================================================================== */

import { primaryNav, utilityLinks, headerCta } from "../data/navigation.js";
import { site } from "../data/site.js";
import { escapeHtml as e, renderList, chevronIcon } from "../utils/dom.js";

/* Brand mark — placeholder. Replace with the official 63SATS logo file:
   <img src="/assets/img/63sats-logo.svg" alt="63SATS" width="..." height="..."> */
export function brandMark() {
  return `
    <a class="brand" href="${e(site.brand.homeHref)}" aria-label="${e(site.brand.name)} ${e(site.brand.product)} home">
      <svg class="brand__mark" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
        <circle cx="16" cy="16" r="5" fill="currentColor"/>
        <ellipse cx="16" cy="16" rx="14" ry="6.5" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(-24 16 16)"/>
        <circle cx="28.2" cy="10.6" r="2" fill="var(--color-orbit)"/>
      </svg>
      <span class="brand__text">
        <span class="brand__name">${e(site.brand.name)}</span>
        <span class="brand__product">${e(site.brand.product)}</span>
      </span>
    </a>`;
}

function utilityBar() {
  return `
    <div class="utility-bar">
      <div class="container utility-bar__inner">
        <p class="utility-bar__alert">
          Facing an active incident?
          <a href="${e(site.contact.incidentHotline.href)}">Call the 24×7 hotline</a>
        </p>
        <ul class="utility-bar__links" role="list">
          ${renderList(utilityLinks, (link) => `<li><a href="${e(link.href)}">${e(link.label)}</a></li>`)}
        </ul>
      </div>
    </div>`;
}

function megaMenuLink(link) {
  return `
    <li>
      <a class="mega-menu__link" href="${e(link.href)}">
        <span class="mega-menu__link-label">${e(link.label)}</span>
        ${link.description ? `<span class="mega-menu__link-desc">${e(link.description)}</span>` : ""}
      </a>
    </li>`;
}

function megaMenu(item) {
  const { intro, groups, feature } = item.menu;
  const groupCount = Math.min(groups.length, 6);

  return `
    <div class="mega-menu" id="menu-${e(item.id)}" data-mega-menu hidden>
      <div class="container mega-menu__inner">
        <div class="mega-menu__intro">
          <p class="mega-menu__title">${e(intro.title)}</p>
          <p class="mega-menu__text">${e(intro.text)}</p>
        </div>

        <div class="mega-menu__groups" style="--group-count: ${groupCount}">
          ${renderList(groups, (group) => `
            <div class="mega-menu__group">
              <p class="mega-menu__group-title">${e(group.title)}</p>
              <ul class="mega-menu__list" role="list">
                ${renderList(group.links, megaMenuLink)}
              </ul>
            </div>`)}
        </div>

        ${feature ? `
          <aside class="mega-menu__feature">
            <p class="mega-menu__feature-title">${e(feature.title)}</p>
            <p class="mega-menu__feature-text">${e(feature.text)}</p>
            <a class="button button--primary button--small" href="${e(feature.cta.href)}">${e(feature.cta.label)}</a>
          </aside>` : ""}
      </div>
    </div>`;
}

function navItem(item) {
  if (!item.menu) {
    return `
      <li class="primary-nav__item">
        <a class="primary-nav__link" href="${e(item.href)}">${e(item.label)}</a>
      </li>`;
  }

  return `
    <li class="primary-nav__item">
      <button class="primary-nav__trigger" type="button"
              aria-expanded="false" aria-controls="menu-${e(item.id)}" data-menu-trigger>
        ${e(item.label)} ${chevronIcon}
      </button>
      ${megaMenu(item)}
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
            <ul class="primary-nav__utility" role="list">
              ${renderList(utilityLinks, (link) => `<li><a href="${e(link.href)}">${e(link.label)}</a></li>`)}
            </ul>
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
