import React from "react";

function RegionInfo({
  currency,
  speedUnit,
  distanceUnit,
  volumeUnit,
  timezone,
}) {
  return (
    <div>
      <h2>Region Info</h2>
      <p>Currency: {currency}</p>
      <p>Speed Unit: {speedUnit}</p>
      <p>Distance Unit: {distanceUnit}</p>
      <p>Volume Unit: {volumeUnit}</p>
      <p>Timezone: {timezone}</p>
    </div>
  );
}

export default RegionInfo;
