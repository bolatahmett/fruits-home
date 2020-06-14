import './App.css';
import React, { Suspense } from 'react';
import { Row, Col, Layout } from 'antd';
import 'antd/dist/antd.css';
import FHHeader from './components/FHHeader';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import BasketResult from './pages/BasketResult';
import LoginPage from './pages/LoginPage';
import EditContent from './pages/EditContent';

const { Header, Footer, Content } = Layout;

export default class App extends React.Component<any, any> {

  render() {

    return (
      <>
        <Suspense fallback={null}>
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
                      <Route exact path="/login" component={LoginPage} />
                      <Route exact path="/edit-content" component={EditContent} />
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
        </Suspense>
      </>
    );
  }
}
