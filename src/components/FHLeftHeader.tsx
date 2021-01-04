import React from 'react'
import { Row, Col } from 'antd'
import LanguageSelector from './LanguageSelector';

const FHLeftHeader = (props: any) => {
    return (
        <Row>
            <Col span={10}>
                <LanguageSelector></LanguageSelector>
            </Col>
            <Col span={10}>
                <a href="#" onClick={() => {
                    props.setSearchVisible(!props.searchVisible);
                }}>
                    <img src={require("./../images/search.png")} />
                </a>
            </Col>
        </Row>
    );
}

export default FHLeftHeader;