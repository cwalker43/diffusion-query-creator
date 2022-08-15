import './App.css';
import 'antd/dist/antd.min.css'
import {Content, Header} from "antd/es/layout/layout";
import { Layout, Menu } from 'antd';
import React from 'react';
import DiffusionForm from "./diffusionForm";

const App = () => {
  return (
      <Layout>
          <Header
              style={{
                  position: 'fixed',
                  zIndex: 1,
                  width: '100%',
              }}
          >
              <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  items={[{
                      key: 1,
                      label: `Stable Diffusion`,
                  }]}
              />
          </Header>
          <Content
              className="site-layout"
              style={{
                  padding: '0 50px',
                  marginTop: 64,
              }}
          >
              <div
                  className="site-layout-background"
                  style={{
                      padding: 24,
                      minHeight: 500,
                  }}
              >
                  <DiffusionForm/>
              </div>
          </Content>
      </Layout>
  );
}

export default App;
