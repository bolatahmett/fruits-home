import React from 'react';
import { Result } from 'antd';

function PaymentError(props: { message: string }) {
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
