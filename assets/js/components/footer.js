/* ==========================================================================
   Footer component
   Renders: brand + contact block, link columns, social, legal row.
   ========================================================================== */

import { footerColumns, legalLinks } from "../data/navigation.js";
import { site } from "../data/site.js";
import { escapeHtml as e, renderList } from "../utils/dom.js";
import { brandMark } from "./header.js";

function linkColumn(column) {
  return `
    <div class="site-footer__column">
      <h2 class="site-footer__heading">${e(column.title)}</h2>
      <ul class="site-footer__list" role="list">
        ${renderList(column.links, (link) => `<li><a href="${e(link.href)}">${e(link.label)}</a></li>`)}
      </ul>
    </div>`;
}

export function renderFooter(container) {
  const { contact, social, legal } = site;
  const year = new Date().getFullYear();

  container.classList.add("site-footer");
  container.innerHTML = `
    <div class="container">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          ${brandMark()}
          <p class="site-footer__summary">
            End-to-end cyber resilience: assess, protect, detect, respond and recover with one accountable team.
          </p>
          <dl class="site-footer__contact">
            <div><dt>Sales</dt><dd><a href="${e(contact.salesPhone.href)}">${e(contact.salesPhone.label)}</a></dd></div>
            <div><dt>Incident hotline (24×7)</dt><dd><a href="${e(contact.incidentHotline.href)}">${e(contact.incidentHotline.label)}</a></dd></div>
            <div><dt>Email</dt><dd><a href="${e(contact.email.href)}">${e(contact.email.label)}</a></dd></div>
          </dl>
        </div>

        <nav class="site-footer__columns" aria-label="Footer">
          ${renderList(footerColumns, linkColumn)}
        </nav>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__legal">
          © ${year} ${e(legal.copyrightHolder)}. ${e(legal.note)}
        </p>
        <ul class="site-footer__legal-links" role="list">
          ${renderList(legalLinks, (link) => `<li><a href="${e(link.href)}">${e(link.label)}</a></li>`)}
        </ul>
        <ul class="site-footer__social" role="list" aria-label="Social media">
          ${renderList(social, (link) => `<li><a href="${e(link.href)}" rel="noopener" target="_blank">${e(link.label)}</a></li>`)}
        </ul>
      </div>
    </div>`;
}
