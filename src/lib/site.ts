export const SITE = {
  name: "TEOM TRAVEL",
  legalName: "GARANTI GRUP TURIZM OTOMOTIV GAYRIMENKUL INSAAT LTD STI",
  address: "Sultanahmet, Istanbul, Türkiye",
  tagline: "YOUR GLOBAL TRAVEL PARTNER",
  email: "info@teomtravel.com",

  whatsappNumber: "+90 540 001 12 11",
  whatsappRaw: "905400011211",
  waLink: (msg?: string) =>
    `https://wa.me/905400011211${msg ? `?text=${encodeURIComponent(msg)}` : ""}`,
  price: "€299",
  currency: "EUR",
  packageNights: "3 Nights / 4 Days",
  hours: "Mon – Sun · 09:00 – 21:00 (GMT+3)",
} as const;
