import React, { useState } from "react";
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
import { connect } from 'react-redux';
import { setProductOnHomePage } from './../redux/actions/actions';
import { debug } from "console";

function FHHeaderMenu(props: any) {

    const { t } = useTranslation();
    const [breadcrumbItems, setbreadcrumbItems] = useState(["homepage"])

    const handleClick = (e: any) => {
        setbreadcrumbItems(e.keyPath.reverse());
        let query = {};
        switch (e.key) {
            case "fruits":
                query = {
                    ProductType: "fruit"
                };
                break;
            case "vegetable":
                query = {
                    ProductType: "vegetable"
                };
                break;
            case "citrus":
                query = {
                    IsCitrus: true,
                    ProductType: "fruit"
                };
                break;
            case "exoticfruits":
                query = {
                    IsExoticFruits: true,
                    ProductType: "fruit"
                };
                break;
            case "organic_fruits":
                query = {
                    IsOrganic: true,
                    ProductType: "fruit"
                };
                break;
            case "seasonalvegetables":
                query = {
                    ProductType: "vegetable",
                    IsSeasonalVegetables: true
                };
                break;
            case "organic_vegetable":
                query = {
                    ProductType: "vegetable",
                    IsOrganic: true
                };
                break;
            case "greens":
                query = {
                    ProductType: "vegetable",
                    IsGreens: true
                };
                break;
            default:
                break;
        }

        props.setProductOnHomePage(query);
    };

    const getbreadcrumbItems = () => {
        return breadcrumbItems.map((item: any) => {
            return <Breadcrumb.Item>{t(item)}</Breadcrumb.Item>
        });
    }

    return (
        <Row className={"fhheadermenu"}>
            <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                <Menu onClick={handleClick} mode="horizontal">
                    <Menu.Item key="homepage">
                        <HomeOutlined />
                        <Link to="/">{t("homepage")}</Link>
                    </Menu.Item>
                    <SubMenu
                        key="fruits"
                        title={<span className="submenu-title-wrapper"> <DownCircleOutlined /> {t("fruits")} </span>}>
                        <Menu.Item key="citrus" > <Link to="/">{t("header.menu.citrus")}</Link> </Menu.Item>
                        <Menu.Item key="exoticfruits" > <Link to="/">{t("header.menu.exoticfruits")}</Link> </Menu.Item>
                        <Menu.Item key="organic_fruits" > <Link to="/">{t("header.menu.organic")} </Link> </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="vegetable" title={<span className="submenu-title-wrapper"> <DownCircleOutlined /> {t("vegetable")} </span>}  >
                        <Menu.Item key="seasonalvegetables" > <Link to="/">{t("header.menu.seasonalvegetables")}</Link> </Menu.Item>
                        <Menu.Item key="organic_vegetable" > <Link to="/">{t("header.menu.organic")}</Link> </Menu.Item>
                        <Menu.Item key="greens" > <Link to="/">{t("header.menu.greens")}</Link> </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="aboutus">
                        <InfoCircleOutlined />
                        <Link to="/">{t("aboutus")}</Link>
                    </Menu.Item>
                </Menu>
                <Breadcrumb>
                    {getbreadcrumbItems()}
                </Breadcrumb>
            </Col>
        </Row>

    )

}

export default connect(null, {
    setProductOnHomePage
})(FHHeaderMenu)