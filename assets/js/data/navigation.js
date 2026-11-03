/* ==========================================================================
   Site navigation — single source of truth
   --------------------------------------------------------------------------
   The header, mega menus, mobile drawer and footer are all rendered from
   this file. To add or rename a menu link, edit it here only.

   Link shape:        { label, href, description? }
   Menu item shape:   { id, label, href?, menu? }
     - With `menu`, the item opens a mega menu panel.
     - Without `menu`, it renders as a plain link.
   Menu shape:        { intro: { title, text },
                        groups: [{ title, links: [Link] }],
                        feature?: { title, text, cta: Link } }

   hrefs point to planned page paths. Create each page from
   /pages/_page-template.html as it is built.
   TODO(content): validate the service list against the current
   63SATS catalogue before sharing externally.
   ========================================================================== */

export const utilityLinks = [
  { label: "Partners", href: "/pages/company/partners.html" },
  { label: "Careers", href: "/pages/company/careers.html" },
  { label: "Client login", href: "/pages/client-login.html" },
  { label: "Contact", href: "/#contact" },
];

export const headerCta = {
  label: "Book a resilience review",
  href: "/#contact",
};

export const primaryNav = [
  {
    id: "platform",
    label: "Platform",
    menu: {
      intro: {
        title: "One platform, every stage of resilience",
        text: "See your risk, defences and recovery readiness in one place, run by a single accountable team.",
      },
      groups: [
        {
          title: "Platform",
          links: [
            { label: "Platform overview", href: "/pages/platform/overview.html", description: "How the pieces fit together" },
            { label: "Resilience lifecycle", href: "/#lifecycle", description: "Govern, identify, protect, detect, respond, recover" },
            { label: "Command dashboard", href: "/pages/platform/dashboard.html", description: "Posture, alerts and reporting in one view" },
            { label: "Integrations", href: "/pages/platform/integrations.html", description: "Work with the tools you already run" },
          ],
        },
        {
          title: "Delivery",
          links: [
            { label: "24×7 security operations", href: "/pages/platform/soc.html" },
            { label: "Engagement model", href: "/pages/platform/engagement-model.html" },
            { label: "Service levels", href: "/pages/platform/service-levels.html" },
          ],
        },
      ],
      feature: {
        title: "Take the 5-minute resilience check",
        text: "Answer ten questions and get a score across all six stages.",
        cta: { label: "Start the check", href: "/pages/tools/resilience-assessment.html" },
      },
    },
  },
  {
    id: "services",
    label: "Services",
    menu: {
      intro: {
        title: "Services mapped to the lifecycle",
        text: "Pick a single service or hand us the whole programme.",
      },
      groups: [
        {
          title: "Govern",
          links: [
            { label: "GRC and compliance advisory", href: "/pages/services/grc-advisory.html" },
            { label: "ISO 27001 readiness", href: "/pages/services/iso-27001.html" },
            { label: "Board risk reporting", href: "/pages/services/board-reporting.html" },
          ],
        },
        {
          title: "Identify",
          links: [
            { label: "Cyber risk assessment", href: "/pages/services/risk-assessment.html" },
            { label: "Vulnerability assessment and penetration testing", href: "/pages/services/vapt.html" },
            { label: "Red team assessment", href: "/pages/services/red-team.html" },
            { label: "Secure code audit", href: "/pages/services/secure-code-audit.html" },
          ],
        },
        {
          title: "Protect",
          links: [
            { label: "Endpoint and malware protection", href: "/pages/services/endpoint-protection.html" },
            { label: "Mobile threat defence", href: "/pages/services/mobile-threat-defence.html" },
            { label: "Cloud security", href: "/pages/services/cloud-security.html" },
            { label: "Email security", href: "/pages/services/email-security.html" },
          ],
        },
        {
          title: "Detect",
          links: [
            { label: "Managed SOC", href: "/pages/services/managed-soc.html" },
            { label: "Threat intelligence", href: "/pages/services/threat-intelligence.html" },
            { label: "Brand and credential monitoring", href: "/pages/services/brand-monitoring.html" },
          ],
        },
        {
          title: "Respond",
          links: [
            { label: "Incident response", href: "/pages/services/incident-response.html" },
            { label: "Digital forensics", href: "/pages/services/digital-forensics.html" },
          ],
        },
        {
          title: "Recover",
          links: [
            { label: "Business continuity planning", href: "/pages/services/business-continuity.html" },
            { label: "Crisis simulation exercises", href: "/pages/services/crisis-simulation.html" },
            { label: "Post-incident hardening", href: "/pages/services/post-incident-hardening.html" },
          ],
        },
      ],
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    menu: {
      intro: {
        title: "Built for how you operate",
        text: "Resilience programmes shaped by your sector, your regulators and your size.",
      },
      groups: [
        {
          title: "By industry",
          links: [
            { label: "Banking and financial services", href: "/pages/solutions/bfsi.html" },
            { label: "Government and PSUs", href: "/pages/solutions/government.html" },
            { label: "Healthcare", href: "/pages/solutions/healthcare.html" },
            { label: "Manufacturing", href: "/pages/solutions/manufacturing.html" },
            { label: "GCCs and IT services", href: "/pages/solutions/gcc-it.html" },
          ],
        },
        {
          title: "By need",
          links: [
            { label: "Meet a regulatory deadline", href: "/pages/solutions/regulatory-compliance.html" },
            { label: "Recover from an incident", href: "/pages/solutions/incident-recovery.html" },
            { label: "Replace a fragmented vendor stack", href: "/pages/solutions/vendor-consolidation.html" },
            { label: "Secure a cloud migration", href: "/pages/solutions/cloud-migration.html" },
          ],
        },
        {
          title: "By organisation",
          links: [
            { label: "Small and medium businesses", href: "/pages/solutions/smb.html" },
            { label: "Mid-market", href: "/pages/solutions/mid-market.html" },
            { label: "Large enterprises", href: "/pages/solutions/enterprise.html" },
          ],
        },
      ],
    },
  },
  {
    id: "resources",
    label: "Resources",
    menu: {
      intro: {
        title: "Learn and prepare",
        text: "Research, playbooks and briefings for security and business leaders.",
      },
      groups: [
        {
          title: "Read",
          links: [
            { label: "Articles", href: "/pages/resources/articles.html" },
            { label: "Case studies", href: "/pages/resources/case-studies.html" },
            { label: "Whitepapers", href: "/pages/resources/whitepapers.html" },
            { label: "Threat briefings", href: "/pages/resources/threat-briefings.html" },
          ],
        },
        {
          title: "Tools",
          links: [
            { label: "Resilience assessment", href: "/pages/tools/resilience-assessment.html" },
            { label: "Breach cost estimator", href: "/pages/tools/breach-cost-estimator.html" },
            { label: "Regulation tracker", href: "/pages/tools/regulation-tracker.html" },
          ],
        },
      ],
    },
  },
  {
    id: "company",
    label: "Company",
    menu: {
      intro: {
        title: "About 63SATS",
        text: "The cybersecurity company of the 63 moons group.",
      },
      groups: [
        {
          title: "Company",
          links: [
            { label: "About us", href: "/pages/company/about.html" },
            { label: "Leadership", href: "/pages/company/leadership.html" },
            { label: "Certifications", href: "/pages/company/certifications.html" },
            { label: "Newsroom", href: "/pages/company/newsroom.html" },
          ],
        },
        {
          title: "Work with us",
          links: [
            { label: "Partners", href: "/pages/company/partners.html" },
            { label: "Careers", href: "/pages/company/careers.html" },
            { label: "Contact", href: "/#contact" },
          ],
        },
      ],
    },
  },
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
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy policy", href: "/pages/legal/privacy.html" },
  { label: "Terms of use", href: "/pages/legal/terms.html" },
  { label: "Cookie policy", href: "/pages/legal/cookies.html" },
  { label: "Responsible disclosure", href: "/pages/legal/responsible-disclosure.html" },
];
