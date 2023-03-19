import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ region }) => {
  const position = region.center;

  return (
    <MapContainer
      key={`${position[0]}-${position[1]}`}
      center={position}
      zoom={region.zoom}
      style={{ height: "65vh", width: "100%" }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>
          <div>
            <h2>Region Info</h2>
            <p>Currency: {region.currency}</p>
            <p>Speed Unit: {region.speed}</p>
            <p>Distance Unit: {region.distance}</p>
            <p>Volume Unit: {region.volume}</p>
            <p>Timezone: {region.timezone}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
