import { CalendarCheck, PackageCheck, WashingMachine, Truck, Home } from "lucide-react";

export const trackingStages = [
  { key: "booked", label: "Order Booked", icon: CalendarCheck, time: "9:02 AM", desc: "We received your order" },
  { key: "pickup", label: "Picked Up", icon: PackageCheck, time: "10:15 AM", desc: "Collected from your door" },
  { key: "cleaning", label: "Cleaning", icon: WashingMachine, time: "11:40 AM", desc: "Washing & quality check" },
  { key: "delivery", label: "Out for Delivery", icon: Truck, time: "5:20 PM", desc: "Rider on the way to you" },
  { key: "delivered", label: "Delivered", icon: Home, time: "6:00 PM", desc: "Fresh at your doorstep" },
];

export const demoOrder = {
  id: "LF-2481",
  service: "Wash & Fold · 6 kg",
  items: [
    { name: "Shirts", qty: 8 },
    { name: "Trousers", qty: 4 },
    { name: "Bedsheets", qty: 2 },
  ],
  total: "₹594",
  pickup: "Today, 10:15 AM",
  delivery: "Today, by 6:00 PM",
  rider: { name: "Ramesh Kumar", phone: "+91 98765 43210", vehicle: "DL 3S AB 1234" },
  address: "3A, Green Park, New Delhi",
  route: [
    { lat: 28.5677, lng: 77.2433 }, // facility (Lajpat Nagar)
    { lat: 28.5590, lng: 77.2060 }, // en route
    { lat: 28.5590, lng: 77.2060 }, // destination (Green Park)
  ],
};
