import React, { Component } from 'react'
import { connect } from 'react-redux';
import FHCarousel from './FHCarousel';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Divider, Space, Row, Col, Carousel } from 'antd';

export const FHMainContent = () => {
    const { t } = useTranslation();


    return (
        <>
            <Row justify="center" style={{ width: "100%" }}>
                <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                    <Row>
                        <Col>
                            <Link to="/OrderDetail">{t("basket.result.goto.order.detail")}</Link>
                        </Col>
                    </Row>
                    <FHCarousel></FHCarousel>
                    <Divider></Divider>
                    <Row>
                        <Col>
                            <Link to="/OrderDetail">{t("basket.result.goto.order.detail")}</Link>
                        </Col>
                    </Row>
                    <FHCarousel></FHCarousel>
                    <Divider></Divider>
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
