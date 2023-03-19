import React, { useState } from "react";
import { Select, Button } from "antd";
import "./form.css";
import regions from "../utils/region";

const { Option } = Select;

function RegionInput({ onSelect }) {
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
