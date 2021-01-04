import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown, Menu } from 'antd'

const LanguageSelector = () => {
    const { i18n } = useTranslation()

    const [lang, setLang] = useState("tr");

    const changeLanguage = (value: any) => {
        debugger;
        i18n.changeLanguage(value.key)
        setLang(value.key);
    }

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