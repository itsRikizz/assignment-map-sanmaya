import React, { useState } from "react";
import { Layout } from "antd";
import "leaflet/dist/leaflet.css";
import RegionInput from "./component/RegionInput";
import Map from "./component/Map";
import HeaderBar from "./component/HeaderBar";
import Sidebar from "./component/Sidebar";
import Footerbar from "./component/Footerbar";

const { Content } = Layout;

function App() {
  const [selectedRegion, setSelectedRegion] = useState({
    name: "World",
    center: [51.505, -0.091],
    zoom: 13,
  });

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className='site-layout'>
        <HeaderBar />
        <Content style={{ margin: "16px" }}>
          <RegionInput onSelect={handleSelectRegion} />

          <Map region={selectedRegion} />
        </Content>
        <Footerbar />
      </Layout>
    </Layout>
  );
}

export default App;
