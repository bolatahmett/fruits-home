import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import FHCarousel from './FHCarousel';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Divider, Space, Row, Col, Carousel, Card, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import FHContent from './FHContent';
import {
    CloseOutlined
} from '@ant-design/icons';

export const FHMainContent = () => {
    const { t } = useTranslation();
    const [contentDetail, setContentDetail] = useState(undefined as any);
    const [title, setTitle] = useState("");
    return (
        <>
            <Row justify="center" style={{ minHeight: "900px" }}>
                <Col xs={24} sm={24} md={20} lg={16} xl={16}>
                    <Row>
                        <Col>
                            <h2 className={"main-page-text"}>
                                Ürünler
                            </h2>
                        </Col>
                    </Row>
                    <Row gutter={[4, 4]}>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>

                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/fruit.jpeg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ ProductType: "fruit" }); setTitle(t("fruits")); }}
                            >
                                <Meta title={t("fruits")} description="taze misss :)" />
                            </Card>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/vegatabels-mix.jpeg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ ProductType: "vegetable" }); setTitle(t("vegetable")); }}
                            >
                                <Meta title={t("vegetable")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/citrus.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ IsCitrus: true }); setTitle(t("header.menu.citrus")); }}
                            >
                                <Meta title={t("header.menu.citrus")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/imported.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ IsExoticFruits: true }); setTitle(t("header.menu.exoticfruits")); }}
                            >
                                <Meta title={t("header.menu.exoticfruits")} description="taze misss :)" />
                            </Card>
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row >

                        <Col span={16}>
                            <h3 style={{ textAlign: "center" }}>
                                {title !== "" && title}
                            </h3>
                        </Col>
                        <Col span={2}>
                            {title !== "" && <Button danger shape="circle" size="small" onClick={() => { setContentDetail(undefined); setTitle(t("")); }}><CloseOutlined /></Button>}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            {contentDetail === undefined ? <></> : <FHContent query={contentDetail}></FHContent>}
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row>
                        <Col>
                            <h2 className={"main-page-text"}>
                                Fırsatlar
                            </h2>
                        </Col>
                    </Row>
                    <Row gutter={[4, 4]}>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("fruits")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("vegetable")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("header.menu.citrus")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("header.menu.exoticfruits")} description="taze misss :)" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className={"main-page-text"}>
                                Çok Satanlar
                            </h2>
                        </Col>
                    </Row>
                    <Row gutter={[4, 4]}>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("fruits")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("vegetable")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("header.menu.citrus")} description="taze misss :)" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/no_image_available.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                            >
                                <Meta title={t("header.menu.exoticfruits")} description="taze misss :)" />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FHMainContent)
