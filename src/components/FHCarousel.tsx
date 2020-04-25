import React from 'react'
import { Carousel, Row, Col } from 'antd'

export default class FHCarousel extends React.Component<any, any> {
    render() {
        return (
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
                                src={require("./../images/tomatoes.jpeg")}

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
                        <div style={{ contain: " content" }}>
                            <img
                                alt="example"
                                src={require("./../images/grapefruit.jpg")}
                            />
                        </div>

                    </Carousel>
                </Col>
            </Row>
        )
    }
}

