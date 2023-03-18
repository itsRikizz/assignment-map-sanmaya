import React from "react";
import { Layout, Button } from "antd";
const { Header: AntdHeader } = Layout;

function HeaderBar() {
  return (
    <AntdHeader
      className='site-layout-background'
      style={{ padding: 0, display: "flex", justifyContent: "flex-end" }}
      theme='light'
    >
      <Button type='primary' ghost style={{ margin: "16px" }}>
        Profile
      </Button>
      <Button type='primary' ghost style={{ margin: "16px" }}>
        Login
      </Button>
      <Button type='primary' ghost style={{ margin: "16px" }}>
        Logout
      </Button>
    </AntdHeader>
  );
}

export default HeaderBar;
