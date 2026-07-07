export type Area = {
  name: string;
  zone: string;
  x: number; // % position on map panel
  y: number;
};

export const areas: Area[] = [
  { name: "Dwarka", zone: "West Delhi", x: 18, y: 62 },
  { name: "Rohini", zone: "North Delhi", x: 30, y: 18 },
  { name: "Pitampura", zone: "North Delhi", x: 38, y: 28 },
  { name: "Hauz Khas", zone: "South Delhi", x: 48, y: 66 },
  { name: "Saket", zone: "South Delhi", x: 52, y: 78 },
  { name: "Green Park", zone: "South Delhi", x: 46, y: 60 },
  { name: "Vasant Kunj", zone: "South West", x: 34, y: 74 },
  { name: "Lajpat Nagar", zone: "South East", x: 62, y: 64 },
  { name: "Karol Bagh", zone: "Central Delhi", x: 44, y: 40 },
  { name: "Connaught Place", zone: "Central Delhi", x: 52, y: 46 },
  { name: "Mayur Vihar", zone: "East Delhi", x: 78, y: 48 },
  { name: "Noida Sector 18", zone: "Noida", x: 86, y: 62 },
];
