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
        <Popup>{region.name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
