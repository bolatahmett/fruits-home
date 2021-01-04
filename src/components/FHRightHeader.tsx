import React from 'react'
import { Row, Col } from 'antd'
import FHBasket from './FHBasket';
import HeaderLoginButton from './HeaderLoginButton';

const FHRightHeader = (props: any) => {
    return (
        <Row>
            <Col span={10}>
                <FHBasket></FHBasket>
            </Col>
            <Col span={10}>
                <HeaderLoginButton></HeaderLoginButton>
            </Col>
        </Row>
    );
}

export default FHRightHeader;