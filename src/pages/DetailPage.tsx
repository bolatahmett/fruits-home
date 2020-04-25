import React from 'react'
import { Row, Col } from 'antd';
import FHContentCard from '../components/FHContentCard';

interface DetailPageProps {
    typeOfContent: string;
    typeOfSubContent: string;
}


export default class DetailPage extends React.Component<DetailPageProps, any> {
    render() {
        return (
            <>
                <div style={{ height: "100vh" }}>

                    <Row justify="center" align="middle" style={{ height: "50%" }}>
                        <Col xs={12} sm={12} md={12} lg={8} xl={6} style={{ backgroundColor: "antiquewhite", backgroundImage: `url(${require("./../images/grapefruit.jpg")})`, backgroundSize: "cover", height: "-webkit-fill-available", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" }}>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={6} style={{ backgroundColor: "antiquewhite", height: "-webkit-fill-available" }}>

                            {/* {this.props.typeOfContent}
                            {this.props.typeOfSubContent} */}
                        </Col>
                    </Row>
                    <Row justify="center" align="middle" style={{ height: "30%" }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={6} style={{ backgroundColor: "antiquewhite", height: "-webkit-fill-available" }}>
                            {this.props.typeOfContent}
                            {this.props.typeOfSubContent}
                        </Col>
                    </Row>
                    <Row justify="center" align="middle" style={{ height: "20%" }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={6} style={{ backgroundColor: "antiquewhite", height: "-webkit-fill-available" }}>
                            {this.props.typeOfContent}
                            {this.props.typeOfSubContent}
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
