import React, { useState } from "react";
import { Select } from "antd";
import Map from "./Map";

const { Option } = Select;

function RegionInput({ onSelect }) {
  const regions = {
    World: { lat: 0, lng: 0, zoom: 2 },
    "United States": { lat: 39.8283, lng: -98.5795, zoom: 4 },
    India: { lat: 20.5937, lng: 78.9629, zoom: 4 },
    "United Kingdom": { lat: 54.7024, lng: -3.2766, zoom: 4 },
  };

  const [selectedRegion, setSelectedRegion] = useState([]);

  const handleSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelect(regions[selectedRegion]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        name='region'
        defaultValue='World'
        style={{ width: 120 }}
        onSelect={handleSelect}
      >
        <Option value='World'>World</Option>
        <Option value='United States'>United States</Option>
        <Option value='India'>India</Option>
        <Option value='United Kingdom'>United Kingdom</Option>
      </Select>
      <button type='submit'>Load</button>
      <Map center={regions[selectedRegion]} />
    </form>
  );
}

export default RegionInput;
