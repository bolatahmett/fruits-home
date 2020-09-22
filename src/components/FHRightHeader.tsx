import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio, Dropdown, Menu, Button } from 'antd'
import LanguageSelector from './LanguageSelector';
import { SearchOutlined } from '@ant-design/icons';
import FHBasket from './FHBasket';
import HeaderLoginButton from './HeaderLoginButton';

const FHRightHeader = (props: any) => {
    return (
        <Menu mode={"horizontal"} inlineIndent={0}>
            <Menu.Item key="basket">
                <FHBasket></FHBasket>
            </Menu.Item>
            <Menu.Item key="loginbutton" >
                <HeaderLoginButton></HeaderLoginButton>
            </Menu.Item>
        </Menu>
    );
}

export default FHRightHeader;