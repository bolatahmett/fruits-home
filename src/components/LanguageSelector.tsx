import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const [lang, setLang] = useState("ru");

    const changeLanguage = (value: any) => {
        debugger;
        i18n.changeLanguage(value.key)
        setLang(value.key);
    }

    const selectedStyle = { backgroundColor: "aliceblue" };
    const menu = (
        <Menu>
            <Menu.Item key="tr" onClick={e => changeLanguage(e)}>
                <a href="#">
                    <img src={require("./../images/flags/tr.png")} />
                </a>
            </Menu.Item>
            <Menu.Item key="ru" onClick={e => changeLanguage(e)}>
                <a href="#">
                    <img src={require("./../images/flags/ru.png")} />
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">  <img src={require(`./../images/flags/${lang}.png`)} />
                </a>
            </Dropdown>
        </>
    )
}

export default LanguageSelector