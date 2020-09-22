import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio, Dropdown, Menu, Button } from 'antd'
import LanguageSelector from './LanguageSelector';
import { SearchOutlined } from '@ant-design/icons';

const FHLeftHeader = (props: any) => {
    return (
        <Menu mode={"horizontal"} inlineIndent={0}>
            <Menu.Item key="language">
                <LanguageSelector></LanguageSelector>
            </Menu.Item>
            <Menu.Item key="search" onClick={() => {
                props.setSearchVisible(!props.searchVisible);
            }}>

                <a href="#">
                    <img src={require("./../images/search.png")} />
                </a>
            </Menu.Item>

        </Menu>
    );
}

export default FHLeftHeader;