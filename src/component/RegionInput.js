import React, { useState } from "react";
import { Select, Button } from "antd";

const { Option } = Select;

function RegionInput({ onSelect }) {
  const regions = {
    "United States": {
      center: [37.8, -96],
      zoom: 4,
    },
    India: {
      center: [22, 77],
      zoom: 4.2,
    },
    "United Kingdom": {
      center: [54.5, -3],
      zoom: 3,
    },
  };

  const [selectedRegion, setSelectedRegion] = useState("Select Region");

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadMap = () => {
    onSelect(regions[selectedRegion]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Select
        value={selectedRegion}
        style={{ width: 200 }}
        onChange={handleChange}
      >
        {Object.keys(regions).map((region) => (
          <Option key={region} value={region}>
            {region}
          </Option>
        ))}
      </Select>
      <Button
        type='primary'
        style={{ marginLeft: "16px" }}
        onClick={handleLoadMap}
      >
        Load
      </Button>
    </div>
  );
}

export default RegionInput;
