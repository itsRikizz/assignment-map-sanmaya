import React, { useState, useContext } from "react";
import { Layout } from "antd";
import "leaflet/dist/leaflet.css";
import RegionInput from "./component/RegionInput";
import Map from "./component/Map";
import HeaderBar from "./component/HeaderBar";
import Sidebar from "./component/Sidebar";
import Footerbar from "./component/Footerbar";
import { ThemeContext } from "./Context/ThemeContext";

const { Content } = Layout;

function App() {
  const [selectedRegion, setSelectedRegion] = useState({
    name: "INDIA",
    center: [28.613939, 77.209023],
    zoom: 13,
  });

  const { isDarkMode } = useContext(ThemeContext);

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const contentStyle = {
    margin: "10px",
    background: isDarkMode ? "#2c3e50" : "#fff",
  };

  return (
    <Layout>
      <Sidebar />
      <Layout className='site-layout'>
        <HeaderBar />
        <Content>
          <RegionInput onSelect={handleSelectRegion} />
          <Map region={selectedRegion} style={contentStyle} />
        </Content>
        <Footerbar />
      </Layout>
    </Layout>
  );
}

export default App;
