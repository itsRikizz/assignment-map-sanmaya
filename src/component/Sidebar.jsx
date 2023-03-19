import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  SettingOutlined,
  BulbOutlined,
  BulbTwoTone,
} from "@ant-design/icons";
import { ThemeContext } from "../Context/ThemeContext";
const { Sider } = Layout;

function Sidebar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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
    {
      key: "4",
      icon: isDarkMode ? <BulbTwoTone /> : <BulbOutlined />,
      label: isDarkMode ? "Dark Mode" : "Light Mode",
      onClick: toggleTheme,
    },
  ];

  return (
    <div>
      <Sider
        className='sider'
        theme={isDarkMode ? "dark" : "light"} // use isDarkMode to determine the theme
        collapsible
        collapsed={collapsed}
        onCollapse={toggleSidebar}
        style={{ height: "100vh" }}
      >
        <Menu
          theme={isDarkMode ? "dark" : "light"} // use isDarkMode to determine the theme
          mode='inline'
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
    </div>
  );
}

export default Sidebar;
