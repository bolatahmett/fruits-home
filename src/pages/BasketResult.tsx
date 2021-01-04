import React, { useState } from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Button, Row, Col, Steps, Divider, message, Input } from 'antd';
import { Product } from '../model/Product';
import { addToBasket } from './../redux/actions/actions';
import ExtractOfAccount from '../components/ExtractOfAccount';
import { useTranslation } from 'react-i18next';
import CheckoutForm from '../components/Payment/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Typography } from 'antd';

const { Text } = Typography;
const { Step } = Steps;


function BasketResult(props: any) {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    const increaseCurrentStep = () => {
        if (props.user.Name) {
            setCurrent(current + 1)
        }
        else {
            message.warning(t("login.must.message.warning"));
        }
    }

    const increaseProductQuantity = (product: Product, quantity: number = 1) => {
        props.addToBasket({
            ProductCode: product.ProductCode,
            ProductType: product.ProductType,
            Quantity: quantity,
            ImageUrl: product.ImageUrl,
            Price: product.Price
        } as Product);
    }

    const decreaseProductQuantity = (product: Product, quantity: number = -1) => {
        if (props.basket.length > 0) {
            props.addToBasket({
                ProductCode: product.ProductCode,
                ProductType: product.ProductType,
                Quantity: quantity,
                ImageUrl: product.ImageUrl,
                Price: product.Price
            } as Product);
        }
    }

    const getContent = () => {

        let content = <> <p style={{
            fontStyle: "italic", color: "black"
        }}> Ваша корзина пуста</p> </>;
        if (props.basket.length > 0) {
            content = <List
                bordered={true}
                itemLayout="horizontal"
                dataSource={props.basket}
                renderItem={(product: Product) => (
                    <List.Item
                        actions={[
                            <Button type="ghost" shape="circle" disabled={product.Quantity === 0} onClick={() => decreaseProductQuantity(product)}>-</Button>,
                            <Button type="ghost" shape="circle" onClick={() => increaseProductQuantity(product)}>+</Button>
                        ]}>

                        <List.Item.Meta
                            avatar={<Avatar src={require(`./../images/${product.ImageUrl}`)} />}
                            title={product.ProductCode}
                            description={
                                <>
                                    <Input type={"number"} value={product.Quantity}
                                        onChange={(e) => {
                                            const diff = product.Quantity - Number(e.target.value);
                                            decreaseProductQuantity(product, -diff);
                                        }} style={{ marginLeft: "100px", maxWidth: "100px", textAlign: "center" }} />
                                    <Text code>kr</Text>
                                </>
                            }
                        />
                    </List.Item>
                )}
            />
        }

        return content;
    }

    const stripePromise = loadStripe("pk_test_51HG2jBEOfZ2768EMe3kXQcOnpxuTUtPGOL4CBYSDirFttRrIYgI9F3JNsgut0hku3fbaqvAvn1m2qq4Tu6033SZx00vsIvSi2G");

    return (
        <>
            <Row justify={"center"}>
                <Col xs={22} sm={22} md={12} lg={12} xl={12}>
                    <Steps current={current} size="small" labelPlacement={"vertical"}>
                        <Step title={t("basket.result.step.1")} />
                        <Step title={t("basket.result.step.2")} />
                        <Step title={t("basket.result.step.3")} />
                    </Steps>
                </Col>
            </Row>
            <Divider></Divider>
            <Row justify="center" align="middle" className={"basket-result-middle"}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    {
                        current === 0 && <>
                            <Row>
                                <Col span={24}>
                                    {getContent()}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6} offset={18}>
                                    <ExtractOfAccount></ExtractOfAccount>
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        current === 1 && <>
                            {
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            }
                        </>
                    }
                </Col>
            </Row>
            <Divider></Divider>
            <Row justify="center" align={"middle"} className={"basket-result-footer"}>
                <Col xs={11} sm={11} md={8} lg={8} xl={6}>
                    <Button type={"default"} shape="round" size={"large"} onClick={() => { setCurrent(current - 1) }} disabled={current === 0}> {t("basket.result.previous.button")} </Button>

                </Col>
                <Col xs={11} sm={11} md={8} lg={8} xl={6} style={{ textAlignLast: "right" }}>
                    <Button type={"default"} shape="round" size={"large"} onClick={increaseCurrentStep} disabled={current === 3}> {t("basket.result.next.button")} </Button>
                </Col>
            </Row>
        </>
    )
}


const mapStateToProps = (state: any) => {
    const basket = state.basket;
    const user = state.user;
    return { basket, user };
};

export default connect(mapStateToProps, {
    addToBasket
})(BasketResult);
