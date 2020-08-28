import React from 'react';
import { Result, Button } from 'antd';
import { useTranslation } from 'react-i18next';

function PaymentError(props: { message: string }) {
    const { t } = useTranslation();
    const content = props.message === "" ? <></> :
        <Result
            status="error"
            subTitle={props.message}
        />;
    return (
        content
    )
}

export default PaymentError;
