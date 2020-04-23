import './App.css';
import React from 'react';
import { Menu, Row, Col, Card, Avatar, Layout, Space, Input, Carousel, Popover, Button } from 'antd';
import { PhoneOutlined, HomeOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import FHMenu from './components/FHMenu';
import FHTitle from './components/FHTitle';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

export default class App extends React.Component {

  constructor(props: any) {
    super(props);

  }
  handleClick = (e: any) => {
    console.log('click ', e);
  };


  render() {

    return (
      <>

        <Row style={{ paddingLeft: "2px", paddingRight: "2px" }}>
          <Col span={24}>
            <Layout>



              <Header>
                <Row style={{ width: "100%" }}>

                  <Row style={{ width: "100%" }}>
                    <Col span={8} style={{ textAlign: "center" }}>
                      <PhoneOutlined />
                      +7 925 353-03-43
                      </Col>
                    <Col span={8} style={{ textAlign: "center" }}>
                      <h1 className={"header-text"}> FRUITS HOME</h1>
                    </Col>
                    <Col span={5} style={{ textAlign: "center" }}>
                      <Input placeholder={"поиск"}></Input>
                    </Col>
                    <Col span={2} offset={1}>
                      <Popover content={<div>
                        <p>
                          нуль</p>
                      </div>} title="корзина">
                        <ShoppingCartOutlined style={{ fontSize: '22px', color: '#08c' }} />
                      </Popover>
                    </Col>
                  </Row>
                  <Row style={{ width: "100%" }}>
                    <Col span={24} style={{ textAlign: "center" }}>
                      <Menu onClick={this.handleClick} mode="horizontal">
                        <Menu.Item key="mail">
                          <HomeOutlined />
                          дома
                          </Menu.Item>
                        <SubMenu
                          title={
                            <span className="submenu-title-wrapper">
                              <SettingOutlined />
                              фрукты
                               </span>
                          }
                        >
                          <Menu.Item key="setting:1">клубника</Menu.Item>
                          <Menu.Item key="setting:2">оранжевый</Menu.Item>
                          <Menu.Item key="setting:2">грейпфрут</Menu.Item>
                        </SubMenu>
                        <SubMenu
                          title={
                            <span className="submenu-title-wrapper">
                              <SettingOutlined />
                              овощной
                              </span>
                          }
                        >
                          <Menu.Item key="setting:1">помидоры</Menu.Item>
                        </SubMenu>
                      </Menu>
                    </Col>
                  </Row>
                  <Row style={{ width: "100%" }}>
                    <Col span={24}>
                      дома/помидоры
                      </Col>
                  </Row>
                  <Row style={{ width: "100%" }}>
                    <Col span={24}>
                      <Carousel autoplay dots={{ className: "dots-button" }}>
                        <div>
                          <img
                            alt="example"
                            src={require("./images/header4.jpeg")}
                          />
                        </div>

                        <div style={{ contain: " content" }}>
                          <img
                            alt="example"
                            src={require("./images/domates.jpeg")}

                          />
                        </div>

                        <div style={{ contain: " content" }}>
                          <img
                            alt="example"
                            src={require("./images/header3.jpeg")}
                          />
                        </div>

                        <div style={{ contain: " content" }}>
                          <img
                            alt="example"
                            src={require("./images/header.jpeg")}

                          />
                        </div>

                      </Carousel>

                    </Col>
                  </Row>
                </Row>

              </Header>

              <Layout style={{ height: "100%" }}>
                <Sider>
                  <FHMenu></FHMenu>
                </Sider>
                <Content >
                  <Row>
                    <Col span={9} offset={3}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/domates.jpeg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                    <Col span={9} offset={1}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/portakal.jpg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="оранжевый"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <p></p>
                  <Row>
                    <Col span={9} offset={3}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/domates.jpeg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                    <Col span={9} offset={1}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/portakal.jpg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <p></p>
                  <Row>
                    <Col span={9} offset={3}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/domates.jpeg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                    <Col span={9} offset={1}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/portakal.jpg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <p></p>
                  <Row>
                    <Col span={9} offset={3}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/domates.jpeg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                    <Col span={9} offset={1}>
                      <Card

                        cover={
                          <img
                            alt="example"
                            src={require("./images/portakal.jpg")}
                            className={"card-image"}
                          />
                        }
                        actions={[
                          <SettingOutlined key="setting" />,
                          <EditOutlined key="edit" />,
                          <EllipsisOutlined key="ellipsis" />,
                        ]}
                      >
                        <Meta
                          title="помидоры"
                          description="подробное объяснение"
                        />
                        <p></p>
                        <p></p>
                        <div className="additional">
                          <p className="price">цена: <span className="quantity">20рубль</span></p>
                          <p>229р. за 1 кг.</p>
                          <p className="status">Состояние на складе: <span className="quantity">В наличии</span></p>
                        </div>
                      </Card>
                    </Col>
                  </Row>
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
