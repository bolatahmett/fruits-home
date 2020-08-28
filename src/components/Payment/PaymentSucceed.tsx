import React from 'react';
import { Result, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

function PaymentSucceed() {
    const { t } = useTranslation();
    return (
        <Result
            status="success"
            title={t("basket.result.pay.result.title")}
            subTitle={t("basket.result.pay.result.orderno.label") + ": 2017182818828182881"}
            extra={[
                <Link to="/OrderDetail">{t("basket.result.goto.order.detail")}</Link>,
                <Link to="/">{t("homepage")}</Link>,
            ]}
        />
    )
}

export default PaymentSucceed
