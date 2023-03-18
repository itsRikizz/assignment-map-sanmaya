import React, { useState } from "react";
import { Layout, Button, Menu } from "antd";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HomeOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
import RegionInput from "./component/RegionInput";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className='sider'
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={toggleSidebar}
      >
        <Menu theme='light' mode='inline' defaultSelectedKeys={["1"]}>
          <Menu.Item key='1' icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key='2' icon={<TeamOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key='3' icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          <Button type='primary' ghost style={{ margin: "16px" }}>
            Profile
          </Button>
        </Header>
        <Content style={{ margin: "16px" }}>
          <RegionInput onSelect={handleSelectRegion} />

          {selectedRegion && (
            <MapContainer
              style={{ height: "70vh", width: "100%" }}
              center={[selectedRegion.lat, selectedRegion.lng]}
              zoom={selectedRegion.zoom}
            >
              <TileLayer
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
            </MapContainer>
          )}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Map App ©2023 Created by Sanmay
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
