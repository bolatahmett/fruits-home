import './App.css';
import React, { ReactNode } from 'react';
import { Row, Col, Layout, Alert } from 'antd';
import 'antd/dist/antd.css';
import FHMenu from './components/FHMenu';
import FHHeader from './components/FHHeader';
import FHContent from './components/FHContent';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import BasketResult from './pages/BasketResult';

const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component<any, any> {

  render() {

    return (
      <>
        <Row style={{ paddingLeft: "2px", paddingRight: "2px" }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Router>
              <Layout>
                <Header>
                  <FHHeader />
                </Header>
                <Layout style={{ height: "100%" }}>
                  <Content>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/basket-result" component={BasketResult} />
                    <Route path="/detail-page/fruits/strawberry" component={() => <DetailPage typeOfContent={"fruits"} typeOfSubContent={"strawberry"} />} />
                    <Route path="/detail-page/fruits/orange" component={() => <DetailPage typeOfContent={"fruits"} typeOfSubContent={"orange"} />} />
                    <Route path="/detail-page/fruits/grapefruit" component={() => <DetailPage typeOfContent={"fruits"} typeOfSubContent={"grapefruit"} />} />
                    <Route path="/detail-page/vegetable/tomatoes" component={() => <DetailPage typeOfContent={"vegetable"} typeOfSubContent={"tomatoes"} />} />
                  </Content>
                </Layout>
                <Footer>Created By Ahmet Bolat</Footer>
              </Layout>
            </Router>
          </Col>
        </Row>
      </>
    );
  }
}
