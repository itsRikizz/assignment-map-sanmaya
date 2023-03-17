import React from "react";
import { Select } from "antd";

const { Option } = Select;

function RegionInput({ regions, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Select defaultValue="" style={{ width: 120 }} onChange={onChange}>
        {regions.map((region) => (
          <Option key={region.code} value={region.code}>
            {region.name}
          </Option>
        ))}
      </Select>
      <button type="submit">Load</button>
    </form>
  );
}

export default RegionInput;
