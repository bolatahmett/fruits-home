import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Menu, Row, Col, Breadcrumb } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { HomeOutlined, SettingOutlined, InfoCircleOutlined, SendOutlined, DownCircleOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";

export default function FHHeaderMenu(props: any) {

    const { t } = useTranslation();

    const handleClick = (e: any) => {
        console.log('click ', e);
    };

    return (
        <Row className={"fhheadermenu"}>
            <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                <Menu onClick={handleClick} mode="horizontal">
                    <Menu.Item key="mail">
                        <HomeOutlined />
                        <Link to="/">{t("homepage")}</Link>
                    </Menu.Item>
                    <SubMenu
                        title={<span className="submenu-title-wrapper"> <DownCircleOutlined /> {t("fruits")} </span>}>
                        <Menu.Item key="setting:2" > {t("header.menu.citrus")}  </Menu.Item>
                        <Menu.Item key="setting:1" > {t("header.menu.exoticfruits")} </Menu.Item>
                        <Menu.Item key="setting:3" > {t("header.menu.organic")}  </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        title={<span className="submenu-title-wrapper"> <DownCircleOutlined /> {t("vegetable")} </span>}  >
                        <Menu.Item key="setting:7" > {t("header.menu.seasonalvegetables")} </Menu.Item>
                        <Menu.Item key="setting:8" > {t("header.menu.organic")} </Menu.Item>
                        <Menu.Item key="setting:9" > {t("header.menu.greens")} </Menu.Item>
                        <Menu.Item key="setting:10" > {t("header.menu.potatoesonionsandgarlic")} </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="aboutus">
                        <InfoCircleOutlined />
                        <Link to="/">{t("aboutus")}</Link>
                    </Menu.Item>
                </Menu>
                <Breadcrumb>
                    <Breadcrumb.Item>{t("homepage")}</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">{t("fruits")}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">{t("header.menu.citrus")}</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>

    )

}
