import React from "react";
import { Row, Col, Input, Popover, Carousel, Alert, Badge, Divider, Button } from "antd";
import { PhoneOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import FHHeaderMenu from "./FHHeaderMenu";
import TextLoop from 'react-text-loop';
import FHBasket from "./FHBasket";
import HeaderLoginButton from "./HeaderLoginButton";
import { SearchOutlined } from '@ant-design/icons';
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
import FHMenu from "./FHMenu";

const { Text } = Typography;

class FHHeader extends React.Component<any, any> {


    state = { searchVisible: false };

    render(): React.ReactNode {
        return (
            <>
                <Row style={{ width: "100%" }}>
                    <Row justify="center" style={{ width: "100%" }}>
                        <Col xs={2} sm={3} md={2} lg={2} xl={2} style={{ textAlign: "left" }}>
                            <Button shape="circle" icon={<SearchOutlined />} onClick={() => {
                                this.setState({ searchVisible: !this.state.searchVisible })
                            }} />
                        </Col>
                        <Col xs={15} sm={13} md={13} lg={14} xl={14} style={{ textAlign: "center" }} >
                            <Link to={"/"}>
                                <h1 className={"header-text"}> FRUITS HOME</h1>
                            </Link>
                        </Col>
                        <Col xs={3} sm={2} md={2} lg={1} xl={1} style={{ textAlign: "right" }}>
                            <HeaderLoginButton></HeaderLoginButton>
                        </Col>
                        <Col xs={3} sm={2} md={2} lg={1} xl={1} style={{ textAlign: "right" }}>
                            <FHBasket></FHBasket>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%" }} justify={"center"}>
                        <Col xs={20} sm={20} md={18} lg={12} xl={12} style={{ textAlign: "center" }}>
                            {this.state.searchVisible && <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ marginRight: "20px" }}
                            />}
                        </Col>
                    </Row>
                    <Divider />
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