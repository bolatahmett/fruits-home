import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio } from 'antd'

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const [lang, setLang] = useState("TR");

    const changeLanguage = (value: any) => {
        i18n.changeLanguage(value)
        setLang(value);
    }

    const selectedStyle = { backgroundColor: "aliceblue" };

    return (

        <>
            <a onClick={() => { changeLanguage("TR") }} style={lang === "TR" ? selectedStyle : undefined}>TR</a>
            <span>-</span>
            <a onClick={() => { changeLanguage("RU") }} style={lang === "RU" ? selectedStyle : undefined}  >RU</a>
            {/* <span>-</span>
            <a onClick={() => { changeLanguage("EN") }} style={lang === "EN" ? selectedStyle : undefined} >EN</a> */}
        </>
    )
}

export default LanguageSelector