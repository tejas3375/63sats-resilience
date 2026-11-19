/* ==========================================================================
   Site navigation — single source of truth
   --------------------------------------------------------------------------
   The header, mobile drawer and footer are all rendered from this file.
   To add or rename a menu link, edit it here only.

   Link shape:        { label, href }
   Menu item shape:   { id, label, href }
     Each primary item is a plain link to its own page; there are no
     dropdowns.

   hrefs point to planned page paths. Create each page from
   /pages/_page-template.html as it is built.
   TODO(content): validate the service list against the current
   63SATS catalogue before sharing externally.
   ========================================================================== */

export const headerCta = {
  label: "Talk to an Expert",
  href: "/pages/contact.html",
};

export const primaryNav = [
  { id: "how-it-works", label: "How it Works",     href: "/pages/how-it-works.html" },
  { id: "solutions",    label: "Solutions",        href: "/pages/solutions.html" },
  { id: "why-63sats",   label: "Why 63SATS",       href: "/pages/why-63sats.html" },
  { id: "resources",    label: "Resources & FAQs", href: "/pages/resources.html" },
  { id: "contact",      label: "Contact",          href: "/pages/contact.html" },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/pages/platform/overview.html" },
      { label: "Resilience lifecycle", href: "/#lifecycle" },
      { label: "Command dashboard", href: "/pages/platform/dashboard.html" },
      { label: "24×7 security operations", href: "/pages/platform/soc.html" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Risk assessment", href: "/pages/services/risk-assessment.html" },
      { label: "VAPT and red teaming", href: "/pages/services/vapt.html" },
      { label: "Managed SOC", href: "/pages/services/managed-soc.html" },
      { label: "Incident response", href: "/pages/services/incident-response.html" },
      { label: "Digital forensics", href: "/pages/services/digital-forensics.html" },
      { label: "Compliance advisory", href: "/pages/services/grc-advisory.html" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Financial services", href: "/pages/solutions/bfsi.html" },
      { label: "Government and PSUs", href: "/pages/solutions/government.html" },
      { label: "Healthcare", href: "/pages/solutions/healthcare.html" },
      { label: "Manufacturing", href: "/pages/solutions/manufacturing.html" },
      { label: "GCCs and IT services", href: "/pages/solutions/gcc-it.html" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/pages/company/about.html" },
      { label: "Resources", href: "/pages/resources/articles.html" },
      { label: "Partners", href: "/pages/company/partners.html" },
      { label: "Careers", href: "/pages/company/careers.html" },
      { label: "Contact", href: "/pages/contact.html" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy policy", href: "/pages/legal/privacy.html" },
  { label: "Terms of use", href: "/pages/legal/terms.html" },
  { label: "Cookie policy", href: "/pages/legal/cookies.html" },
  { label: "Responsible disclosure", href: "/pages/legal/responsible-disclosure.html" },
];
