import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio, Dropdown, Menu, Button, Row, Col } from 'antd'
import LanguageSelector from './LanguageSelector';
import { SearchOutlined } from '@ant-design/icons';
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