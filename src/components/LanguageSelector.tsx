import React from 'react'
import { useTranslation } from 'react-i18next'
import { Radio } from 'antd'

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event: any) => {
        i18n.changeLanguage(event.target.value)
    }

    const radioStyle = {
        display: 'block',
        height: '20px',
        lineHeight: '20px',
    };

    return (
        <Radio.Group onChange={changeLanguage}>
            <Radio.Button style={radioStyle} value={"tr"}>TR</Radio.Button >
            <Radio.Button style={radioStyle} value={"ru"}>RU</Radio.Button >
            <Radio.Button style={radioStyle} value={"en"}>EN</Radio.Button >
        </Radio.Group>
    )
}

export default LanguageSelector