import React from "react";
import { Row, Col, Input, Popover, Carousel, Alert, Badge } from "antd";
import { PhoneOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import FHHeaderMenu from "./FHHeaderMenu";
import TextLoop from 'react-text-loop';
import FHBasket from "./FHBasket";

const { Text } = Typography;

class FHHeader extends React.Component<any, any> {

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
                            <FHBasket></FHBasket>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={24} sm={24} md={24} lg={20} xl={18} style={{ textAlign: "center" }}>
                            <FHHeaderMenu></FHHeaderMenu>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                            <Text type="warning">дома/помидоры</Text>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                            <Alert
                                banner
                                message={
                                    <TextLoop mask>
                                        <div>Помидор продается</div>
                                        <div>Рекомендуется брать клубнику</div>
                                        <div>Грейпфрут Та скидка</div>
                                    </TextLoop>
                                }
                            />
                        </Col>
                    </Row>
                </Row>

            </>);
    }
}

export default FHHeader;