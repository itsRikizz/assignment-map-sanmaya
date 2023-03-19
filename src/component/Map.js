import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./map.css";

const Map = ({ region }) => {
  const position = region?.center;
  const markerIcon = new L.Icon({
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/009/393/369/original/pin-icon-sign-symbol-design-free-png.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl:
      "https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-round-gradient-black-shadow-png-image_4317601.png",
    shadowSize: [25, 70],
    shadowAnchor: [12, 41],
  });
  return (
    <MapContainer
      key={`${position[0]}-${position[1]}`}
      center={position}
      zoom={region.zoom}
      style={{ height: "65vh", width: "100%" }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {region.name === "INDIA" ? null : (
        <Marker position={position} icon={markerIcon}>
          <Popup className='popup'>
            <h2>{region.name}</h2>
            <div className='cards'>
              <h5>
                Currency: <b>{region.currency}</b>
              </h5>
              <h5>Speed Unit: {region.speed}</h5>
              <h5>Distance Unit: {region.distance}</h5>
              <h5>Volume Unit: {region.volume}</h5>
              <h5>Timezone: {region.timezone}</h5>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
