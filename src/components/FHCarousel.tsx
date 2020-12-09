import React from 'react'
import { Row, Col } from 'antd'

export default function FHCarousel() {

    const carosuelItems = [{
        Alt: "fruits-mix",
        Src: require("./../images/vegetablesmix.jpg")
    },
    {
        Alt: "tomatoes",
        Src: require("./../images/fruitsvegetablesmix.jpg")
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
        Src: require("./../images/vegetablesmix2.jpg")
    }];

    const content = carosuelItems.map((value, index) => {
        return <div className={index === 0 ? "item active" : "item"} style={{ height: "100%", justifyContent: "center", contain: "fit" }} >
            <img
                alt={value.Alt}
                src={value.Src}
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
            />
        </div>
    });

    return (
        <Row className={"fhcarousel"}>
            <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                <div id="myCarousel" style={{ height: "500px", borderRadius: "20px" }} className="carousel slide" data-ride="carousel">
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev" style={{ backgroundImage: "none" }}>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <div className="carousel-inner" style={{ border: "groove", borderRadius: "20px", height: "100%" }}>
                        {content}
                    </div>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next" style={{ backgroundImage: "none" }}>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Col>
        </Row>
    )
}

