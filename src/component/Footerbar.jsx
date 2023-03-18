import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

function Footerbar() {
  const currentDate = new Date().toLocaleString();
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        Map App ©2023 Created by Sanmay <br />
        {currentDate}
      </Footer>
    </div>
  );
}

export default Footerbar;
