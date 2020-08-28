/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Typography, Space } from 'antd';
import { stringify } from 'querystring';

const { Text } = Typography;

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function CardSection() {
    return (
        <>
            <Space direction="vertical" style={{ minWidth: "400px" }}>
                <Text type="warning" > Card Details</Text>
                <CardElement options={CARD_ELEMENT_OPTIONS} />
            </Space>
        </>
    );
};

export default CardSection;