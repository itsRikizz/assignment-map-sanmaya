import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, TeamOutlined, SettingOutlined } from "@ant-design/icons";
const { Sider } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
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
    <div>
      <Sider
        className='sider'
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={toggleSidebar}
        style={{ height: "100vh" }}
      >
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
    </div>
  );
}

export default Sidebar;
