import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection';
import { apiCall } from '../../dto/ServerHelper';
import PaymentSucceed from './PaymentSucceed';
import PaymentError from './PaymentError';
import { Button, Form, Row, Col } from 'antd';
import { connect } from 'react-redux';
import ExtractOfAccount from '../ExtractOfAccount';
import { Product } from '../../model/Product';
import { User } from '../../model/User';
import { Route } from 'react-router-dom';

function CheckoutForm(props: any) {
    const stripe = useStripe();
    const elements = useElements();
    const [operationState, setOperationState] = useState(0);
    const [paymentError, setPaymentError] = useState("")
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const handleSubmit = async (event: any) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        // event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const products = props.basket && (props.basket as Array<Product>)

        const paymentIntentResult = await apiCall("http://localhost:4242/create-payment-intent", { Products: products });
        debugger;
        const result = await stripe.confirmCardPayment(paymentIntentResult.clientSecret, {
            receipt_email: (props.user as User).Email,
            payment_method: {
                card: elements.getElement(CardElement)!,
                billing_details: {
                    name: 'Ahmet BOLAT',
                }
            }
        });

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
            setPaymentError(result.error.message!);
        } else {
            // The payment has been processed!
            if (result!.paymentIntent!.status === 'succeeded') {
                setOperationState(1);
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    };

    let content = <></>;
    if (operationState === 0) {
        content = <>
            <Form
                {...formItemLayout}
                form={form}
                onFinish={handleSubmit}
            >
                <Row gutter={[48, 48]}>
                    <Col span={24}>
                        <Form.Item>
                            <ExtractOfAccount></ExtractOfAccount>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[48, 48]}>
                    <Col span={24}>
                        <Form.Item>
                            <CardSection />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[48, 48]}>
                    <Col span={6} offset={18}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={!stripe}>Confirm order</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <PaymentError message={paymentError}></PaymentError>
        </>;
    } else if (operationState === 1) {
        content = <PaymentSucceed></PaymentSucceed>;
    }

    return (
        <>
            {content}
        </>
    );
}

const mapStateToProps = (state: any) => {
    const basket = state.basket;
    const user = state.user;
    return { basket, user };
};

export default connect(mapStateToProps)(CheckoutForm);