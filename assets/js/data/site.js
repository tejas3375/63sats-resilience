/* ==========================================================================
   Site-wide settings — brand, contact channels, social, legal
   TODO(content): replace every placeholder value before external use.
   ========================================================================== */

export const site = {
  brand: {
    name: "63SATS",
    product: "Cyber Resilience",
    homeHref: "/",
  },

  contact: {
    salesPhone: { label: "+91 00000 00000", href: "tel:+910000000000" },        // placeholder
    incidentHotline: { label: "+91 00000 00001", href: "tel:+910000000001" },   // placeholder, 24×7
    email: { label: "resilience@63sats.com", href: "mailto:resilience@63sats.com" }, // placeholder
    hours: "Monday to Friday, 9:30 am to 6:30 pm IST",
  },

  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },  // placeholder URLs
    { label: "X", href: "https://x.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],

  legal: {
    copyrightHolder: "63SATS Cybertech",
    note: "A 63 moons group company.",
  },
};
