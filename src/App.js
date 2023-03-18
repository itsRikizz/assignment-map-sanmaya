import React, { useState } from "react";
import { Layout, Button, Menu } from "antd";
import "leaflet/dist/leaflet.css";
import { HomeOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
import RegionInput from "./component/RegionInput";
import Map from "./component/Map";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState({
    name: "World",
    center: [51.505, -0.091],
    zoom: 13,
  });

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <TeamOutlined />,
      label: "Users",
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className='sider'
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={toggleSidebar}
      >
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          <Button type='primary' ghost style={{ margin: "16px" }}>
            Profile
          </Button>
        </Header>
        <Content style={{ margin: "16px" }}>
          <RegionInput onSelect={handleSelectRegion} />

          <Map region={selectedRegion} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Map App ©2023 Created by Sanmay
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
