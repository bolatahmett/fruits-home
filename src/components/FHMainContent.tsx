import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Divider, Row, Col, Card, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import FHContent from './FHContent';
import {
    CloseOutlined
} from '@ant-design/icons';
import { setProductOnHomePage } from './../redux/actions/actions';
import { isEmpty, isUndefined } from 'lodash';
import OpportunityAndHighTrend from './OpportunityAndHighTrend';

function FHMainContent(props: any) {
    const { t } = useTranslation();
    const [contentDetail, setContentDetail] = useState(undefined as any);
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (!isEmpty(props.query)) {
            setContentDetail(props.query);
            setTitle(t(props.title));
            document.getElementById("FHMainContent")!.scrollIntoView();
        }
    }, [title,props.query]);

    return (
        <>
            <Row id="FHMainContent" justify="center" style={{ minHeight: "900px", marginTop: "40px", marginBottom: "50px" }}>
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
                                cover={<img alt={t("fruits")} src={require(`./../images/fruit.jpeg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ ProductType: "fruit" }); setTitle(t("fruits")); }}
                            >
                                <Meta title={t("fruits")} description="" />
                            </Card>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt={t("vegetable")} src={require(`./../images/vegatabels-mix.jpeg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ ProductType: "vegetable" }); setTitle(t("vegetable")); }}
                            >
                                <Meta title={t("vegetable")} description="" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt={t("header.menu.citrus")} src={require(`./../images/citrus.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ IsCitrus: true }); setTitle(t("header.menu.citrus")); }}
                            >
                                <Meta title={t("header.menu.citrus")} description="" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={require(`./../images/imported.jpg`)} style={{ height: "120px", margin: "auto", objectFit: "contain" }} />}
                                onClick={() => { setContentDetail({ IsExoticFruits: true }); setTitle(t("header.menu.exoticfruits")); }}
                            >
                                <Meta title={t("header.menu.exoticfruits")} description="" />
                            </Card>
                        </Col>
                    </Row>
                    {!isUndefined(contentDetail) && <Divider></Divider>}
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
                            {isUndefined(contentDetail) ? <></> : <FHContent query={contentDetail} span={24}></FHContent>}
                        </Col>
                    </Row>
                    <OpportunityAndHighTrend></OpportunityAndHighTrend>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const query = state.homeProduct.query;
    const title = state.homeProduct.title;
    return { query, title };
};

const mapDispatchToProps = {
    setProductOnHomePage
}

export default connect(mapStateToProps, mapDispatchToProps)(FHMainContent);