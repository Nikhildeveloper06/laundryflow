export type Area = {
  name: string;
  zone: string;
  lat: number;
  lng: number;
};

export const areas: Area[] = [
  { name: "Dwarka", zone: "West Delhi", lat: 28.5921, lng: 77.0460 },
  { name: "Rohini", zone: "North Delhi", lat: 28.7365, lng: 77.1174 },
  { name: "Pitampura", zone: "North Delhi", lat: 28.6980, lng: 77.1325 },
  { name: "Hauz Khas", zone: "South Delhi", lat: 28.5494, lng: 77.2001 },
  { name: "Saket", zone: "South Delhi", lat: 28.5245, lng: 77.2066 },
  { name: "Green Park", zone: "South Delhi", lat: 28.5590, lng: 77.2060 },
  { name: "Vasant Kunj", zone: "South West", lat: 28.5200, lng: 77.1591 },
  { name: "Lajpat Nagar", zone: "South East", lat: 28.5677, lng: 77.2433 },
  { name: "Karol Bagh", zone: "Central Delhi", lat: 28.6512, lng: 77.1906 },
  { name: "Connaught Place", zone: "Central Delhi", lat: 28.6315, lng: 77.2167 },
  { name: "Mayur Vihar", zone: "East Delhi", lat: 28.6089, lng: 77.2951 },
  { name: "Noida Sector 18", zone: "Noida", lat: 28.5706, lng: 77.3260 },
];
