import React from 'react'
import { Carousel, Row, Col } from 'antd'
import { stringify } from 'querystring';

export default function FHCarousel() {

    const carosuelItems = [{
        Alt: "fruits-mix",
        Src: require("./../images/fruits-mix.jpeg")
    },
    {
        Alt: "tomatoes",
        Src: require("./../images/tomatoes.jpeg")
    },
    {
        Alt: "vegatabels-mix",
        Src: require("./../images/vegatabels-mix.jpeg")
    },
    {
        Alt: "fruitandvegatable",
        Src: require("./../images/fruitandvegatable.jpeg")
    },
    {
        Alt: "grapefruit",
        Src: require("./../images/grapefruit.jpg")
    }];

    const content = carosuelItems.map((value) => {
        return <div>
            <img
                alt={value.Alt}
                src={value.Src}
            />
        </div>
    });

    return (
        <Row className={"fhcarousel"}>
            <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                <Carousel autoplay dots={{ className: "dots-button" }}>
                    {content}
                </Carousel>
            </Col>
        </Row>
    )

}

