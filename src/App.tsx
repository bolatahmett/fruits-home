import './App.css';
import React, { ReactNode } from 'react';
import { Row, Col, Layout } from 'antd';
import 'antd/dist/antd.css';
import FHMenu from './components/FHMenu';
import FHHeader from './components/FHHeader';
import FHContent from './components/FHContent';

const { Header, Footer, Sider, Content } = Layout;



export default class App extends React.Component<any, any> {


  render() {

    return (
      <>
        <Row style={{ paddingLeft: "2px", paddingRight: "2px" }}>
          <Col span={24}>
            <Layout>
              <Header>
                <FHHeader />
              </Header>
              <Layout style={{ height: "100%" }}>
                <Sider>
                  <FHMenu></FHMenu>
                </Sider>
                <Content>
                  <FHContent />
                </Content>
              </Layout>
              <Footer>Created By Ahmet Bolat</Footer>
            </Layout>
          </Col>
        </Row>
      </>
    );
  }
}
