export type Location = {
  id: string;
  city: string;
  street: string;
  postalCode: string;
  /** Zapytanie do Google Maps (bez polskich znaków kodowanych ręcznie). */
  mapsQuery: string;
  /** Godziny otwarcia; `null`, gdy nie są jeszcze podane na stronie. */
  hours: { days: string; time: string }[] | null;
};

export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61586080679602";
export const CONTACT_EMAIL = "plaskurekcoffee@o2.pl";

/** Godziny otwarcia — takie same w obu piekarniach. */
const OPENING_HOURS: Location["hours"] = [
  { days: "Pn–Pt", time: "6:30 – 20:00" },
  { days: "Sob", time: "8:00 – 20:00" },
  { days: "Nd", time: "9:00 – 20:00" },
];

export const locations: Location[] = [
  {
    id: "staszow",
    city: "Staszów",
    street: "ul. 11 Listopada 59a",
    postalCode: "28-200",
    mapsQuery: "11 Listopada 59a, 28-200 Staszów",
    hours: OPENING_HOURS,
  },
  {
    id: "busko-zdroj",
    city: "Busko-Zdrój",
    street: "ul. Ludwika Waryńskiego 33A",
    postalCode: "28-100",
    mapsQuery: "Ludwika Waryńskiego 33A, 28-100 Busko-Zdrój",
    hours: OPENING_HOURS,
  },
];

export function mapsSearchUrl(location: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location.mapsQuery
  )}`;
}

export function mapsEmbedUrl(location: Location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    location.mapsQuery
  )}&output=embed&hl=pl`;
}
