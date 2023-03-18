import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [position, setPosition] = useState([0, 0]);
  const [zoom, setZoom] = useState(1);

  function getLatLngForRegion(region) {
    switch (region) {
      case "United States":
        return [37.0902, -95.7129];
      case "India":
        return [20.5937, 78.9629];
      case "United Kingdom":
        return [55.3781, -3.436];
      default:
        return [0, 0];
    }
  }

  return (
    <>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='OpenStreetMap'
        />
        {/* <Marker position={position}>
          <Popup>Selected region: {getInfo(position)}</Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
}

export default Map;
