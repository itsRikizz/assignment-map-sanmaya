import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { ThemeContext } from "../Context/ThemeContext";
import {
  ProfileTwoTone,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

function HeaderBar() {
  const { isDarkMode } = useContext(ThemeContext);

  const menuItems = [
    {
      key: "1",
      icon: <ProfileTwoTone />,
      label: "Profile",
    },
    {
      key: "2",
      icon: <LoginOutlined />,
      label: "Login",
    },
    {
      key: "3",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        background: isDarkMode ? "#001529" : "#fff",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Menu
        theme={isDarkMode ? "dark" : "light"}
        mode='horizontal'
        defaultSelectedKeys={["1"]}
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default HeaderBar;
