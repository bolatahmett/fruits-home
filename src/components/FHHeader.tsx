import React from "react";
import { Row, Col, Input, Popover, Menu, Carousel } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { PhoneOutlined, HomeOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Text } = Typography;

export default class FHHeader extends React.Component<any, any> {

    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render(): React.ReactNode {
        return (
            <>
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
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={24} sm={24} md={24} lg={20} xl={18} style={{ textAlign: "center" }}>
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
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                            <Text type="warning">дома/помидоры</Text>

                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                            <Carousel autoplay dots={{ className: "dots-button" }}>
                                <div>
                                    <img
                                        alt="example"
                                        src={require("./../images/header4.jpeg")}
                                    />
                                </div>

                                <div style={{ contain: " content" }}>
                                    <img
                                        alt="example"
                                        src={require("./../images/domates.jpeg")}

                                    />
                                </div>

                                <div style={{ contain: " content" }}>
                                    <img
                                        alt="example"
                                        src={require("./../images/header3.jpeg")}
                                    />
                                </div>

                                <div style={{ contain: " content" }}>
                                    <img
                                        alt="example"
                                        src={require("./../images/header.jpeg")}

                                    />
                                </div>

                            </Carousel>

                        </Col>
                    </Row>
                </Row>

            </>);
    }
}