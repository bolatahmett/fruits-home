import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio, Dropdown, Menu, Button, Row, Col } from 'antd'
import LanguageSelector from './LanguageSelector';
import { SearchOutlined } from '@ant-design/icons';

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