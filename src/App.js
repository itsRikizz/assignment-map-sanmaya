import React from 'react';
import { Layout, Button, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from './redux/regionSlice';
import 'leaflet/dist/leaflet.css';
import FormInput from './component/RegionInput';
import RegionInfo from './component/RegionInfo';
import OSMMap from './component/Map';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.region);

  const onRegionChange = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Login/Logout
          </Menu.Item>
        </Menu>
        <FormInput onRegionChange={onRegionChange} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button type="primary" ghost style={{ margin: '16px' }}>
            Profile
          </Button>
        </Header>
        <Content style={{ margin: '16px' }}>
          <RegionInfo />
          <MapContainer style={{ height: '100%', width: '100%' }} center={[51.505, -0.09]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {region && <OSMMap region={region} />}
          </MapContainer>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Map App ©2023 Created by You</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
