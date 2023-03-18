import React, { useState } from "react";
import { Select, Button } from "antd";
import "./form.css";

const { Option } = Select;

function RegionInput({ onSelect }) {
  const regions = {
    India: {
      name: "India",
      center: [22, 77],
      zoom: 4.5,
    },
    "United States": {
      name: "United States",
      center: [37.8, -96],
      zoom: 4,
    },
    China: {
      name: "China",
      center: [35.9, 104.2],
      zoom: 4.5,
    },
    Japan: {
      name: "Japan",
      center: [36.2, 138.4],
      zoom: 6,
    },
    Germany: {
      name: "Germany",
      center: [51, 9],
      zoom: 6,
    },
    United_Kingdom: {
      name: "United Kingdom",
      center: [54.5, -3],
      zoom: 6,
    },
    France: {
      name: "France",
      center: [46.8, 2.3],
      zoom: 6,
    },
    Italy: {
      name: "Italy",
      center: [41.9, 12.6],
      zoom: 6,
    },
    Brazil: {
      name: "Brazil",
      center: [-14.2, -51.9],
      zoom: 4,
    },
    Canada: {
      name: "Canada",
      center: [60.4, -96.7],
      zoom: 4,
    },
    South_Korea: {
      name: "South Korea",
      center: [36.3, 127.6],
      zoom: 6,
    },
  };

  const [selectedRegion, setSelectedRegion] = useState("Select Region");

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadMap = () => {
    if (regions[selectedRegion]) {
      onSelect(regions[selectedRegion]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Select
        className='select'
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
