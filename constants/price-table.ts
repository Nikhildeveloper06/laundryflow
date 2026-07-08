export type PriceCategory = {
  category: string;
  items: { name: string; wash?: string; iron?: string; dryClean?: string }[];
};

export const priceTable: PriceCategory[] = [
  {
    category: "Men's Wear",
    items: [
      { name: "Shirt", wash: "₹40", iron: "₹15", dryClean: "₹99" },
      { name: "T-Shirt", wash: "₹35", iron: "₹15", dryClean: "₹90" },
      { name: "Trousers / Jeans", wash: "₹50", iron: "₹20", dryClean: "₹120" },
      { name: "Kurta Pyjama", wash: "₹80", iron: "₹40", dryClean: "₹180" },
      { name: "Suit (2 pc)", dryClean: "₹399" },
      { name: "Blazer", dryClean: "₹249" },
    ],
  },
  {
    category: "Women's Wear",
    items: [
      { name: "Saree (plain)", wash: "₹120", iron: "₹60", dryClean: "₹199" },
      { name: "Saree (heavy work)", dryClean: "₹349" },
      { name: "Salwar Suit (3 pc)", wash: "₹100", iron: "₹50", dryClean: "₹220" },
      { name: "Dress / Gown", dryClean: "₹299" },
      { name: "Lehenga (heavy)", dryClean: "₹699" },
      { name: "Dupatta", wash: "₹40", iron: "₹20", dryClean: "₹99" },
    ],
  },
  {
    category: "Home & Bedding",
    items: [
      { name: "Bedsheet (single)", wash: "₹80", iron: "₹40" },
      { name: "Bedsheet (double)", wash: "₹120", iron: "₹60" },
      { name: "Blanket / Quilt", wash: "₹299" },
      { name: "Curtain (per panel)", wash: "₹150", dryClean: "₹250" },
      { name: "Sofa Cover (per seat)", wash: "₹120" },
      { name: "Pillow Cover", wash: "₹30", iron: "₹15" },
    ],
  },
  {
    category: "Specialty",
    items: [
      { name: "Sneakers (per pair)", dryClean: "₹349" },
      { name: "Leather Shoes", dryClean: "₹399" },
      { name: "Handbag (leather)", dryClean: "₹499" },
      { name: "Soft Toy (medium)", wash: "₹199" },
      { name: "Woollen Sweater", wash: "₹90", dryClean: "₹150" },
      { name: "Jacket (winter)", dryClean: "₹299" },
    ],
  },
];
