import { Divider, Row, Col } from 'antd'
import React from 'react'
import FHContent from './FHContent'

const OpportunityAndHighTrend = (props: any) => (
    <>
        <Divider style={{ marginTop: "100px" }}></Divider>
        <Row>
            <Col>
                <h4 className={"main-page-text"}>
                    Fırsatlar
                </h4>
            </Col>
        </Row>
        {/* <FHContent query={{ IsOpportunity: true }} span={6} type="carousel"></FHContent> */}
        <FHContent query={{ ProductType: "fruit" }} span={12} type="carousel"></FHContent>
        <Row style={{ marginTop: "50px" }}>
            <Col>
                <h4 className={"main-page-text"}>
                    Çok Satanlar
                        </h4>
            </Col>
        </Row>
        {/* <FHContent query={{ IsOpportunity: true }} span={6} type="carousel"></FHContent> */}
        <FHContent query={{ProductType: "vegetable"}} span={12} type="carousel"></FHContent>
    </>
);

export default React.memo(OpportunityAndHighTrend);