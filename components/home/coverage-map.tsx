"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { areas } from "@/constants/areas";

export default function CoverageMap({ active }: { active: number | null }) {
  return (
    <MapContainer
      center={[28.6, 77.2]}
      zoom={11}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "transparent" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {areas.map((area, i) => (
        <CircleMarker
          key={area.name}
          center={[area.lat, area.lng]}
          radius={active === i ? 12 : 7}
          pathOptions={{
            color: "#4F46E5",
            fillColor: "#4F46E5",
            fillOpacity: active === i ? 0.9 : 0.5,
            weight: active === i ? 3 : 1.5,
          }}
        >
          <Tooltip>{area.name}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
