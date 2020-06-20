import React, { useState } from "react";
import { Row, Col, Alert, Divider, Button } from "antd";
import TextLoop from 'react-text-loop';
import FHBasket from "./FHBasket";
import HeaderLoginButton from "./HeaderLoginButton";
import { SearchOutlined } from '@ant-design/icons';
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../model/User";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from 'react-i18next';


function FHHeader(props: any) {
    const { t } = useTranslation();
    const [searchVisible, setSearchVisible] = useState(false);

    return (
        <>
            <Row style={{ width: "100%" }}>
                <Row justify="center" style={{ width: "100%" }}>
                    <Col xs={2} sm={2} md={2} lg={2} xl={1} style={{ textAlign: "left" }}>
                        <LanguageSelector></LanguageSelector>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={1} style={{ textAlign: "left" }}>
                        <Button shape="circle" icon={<SearchOutlined />} onClick={() => {
                            setSearchVisible(!searchVisible)
                        }} />
                    </Col>
                    <Col xs={14} sm={13} md={13} lg={14} xl={14} style={{ textAlign: "center" }} >
                        <Link to={"/"}>
                            <h1 className={"header-text"}> FRUITS HOME</h1>
                        </Link>
                    </Col>

                    <Col xs={2} sm={2} md={2} lg={1} xl={1} style={{ textAlign: "right" }}>
                        <FHBasket></FHBasket>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={1} xl={1} style={{ textAlign: "right" }}>
                        <HeaderLoginButton></HeaderLoginButton>
                    </Col>
                </Row>
                <Row style={{ width: "100%" }} justify={"center"}>
                    <Col xs={20} sm={20} md={18} lg={12} xl={12} style={{ textAlign: "center" }}>
                        {searchVisible && <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ marginRight: "20px" }}
                        />}
                    </Col>
                </Row>
                <Row style={{ width: "100%" }} justify={"center"}>
                    <Col xs={20} sm={20} md={18} lg={12} xl={12} style={{ textAlign: "center" }}>
                        {props.user.IsAdmin &&
                            <Link to={"/edit-content"}>
                                <Button type="primary" shape="round" >{t("add.product.button")}</Button>
                            </Link>
                        }
                    </Col>
                </Row>
                <Divider />
                <Row style={{ width: "100%" }} justify={"center"}>
                    <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                        <Alert
                            banner
                            message={
                                <TextLoop mask>
                                    <div>{t("textloop.text.1")}</div>
                                    <div>{t("textloop.text.2")}</div>
                                    <div>{t("textloop.text.3")}</div>
                                </TextLoop>
                            }
                        />
                    </Col>
                </Row>
            </Row>
        </>);
}

const mapStateToProps = (state: any) => {
    const user = state.user as User;
    return { user };
}

export default connect(mapStateToProps)(FHHeader);