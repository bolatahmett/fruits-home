import React, { useState } from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Button, Row, Col, Steps, Result, Divider, message } from 'antd';
import { Product } from '../model/Product';
import { addToBasket } from './../redux/actions/actions';
import ExtractOfAccount from '../components/ExtractOfAccount';
import { useTranslation } from 'react-i18next';
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

    const increaseProductQuantity = (product: Product) => {
        props.addToBasket({
            ProductCode: product.ProductCode,
            ProductType: product.ProductType,
            Quantity: 1,
            ImageUrl: product.ImageUrl
        } as Product);
    }

    const decreaseProductQuantity = (product: Product) => {
        if (props.basket.length > 0) {
            props.addToBasket({
                ProductCode: product.ProductCode,
                ProductType: product.ProductType,
                Quantity: -1,
                ImageUrl: product.ImageUrl
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
                            <Button type="ghost" shape="circle" onClick={() => decreaseProductQuantity(product)}>-</Button>,
                            <Button type="ghost" shape="circle" onClick={() => increaseProductQuantity(product)}>+</Button>
                        ]}>

                        <List.Item.Meta
                            avatar={<Avatar src={require(`./../images/${product.ImageUrl}`)} />}
                            title={product.ProductCode}
                            description={product.Quantity + "кг"}
                        />
                    </List.Item>
                )}
            />
        }

        return content;
    }

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
                            {getContent()}
                            <ExtractOfAccount></ExtractOfAccount>
                        </>
                    }
                    {
                        current === 1 && <>
                            <p style={{
                                fontStyle: "italic", color: "black"
                            }}> {t("basket.result.pay.info")} {": TR12 10 0000 0000 0000 4874"} </p>
                        </>
                    }
                    {
                        current === 2 && <>
                            <Result
                                status="success"
                                title={t("basket.result.pay.result.title")}
                                subTitle={t("basket.result.pay.result.orderno.label") + ": 2017182818828182881"}
                                extra={[
                                    <Button type="primary" key="console"> {t("basket.result.goto.order.detail")}</Button>,
                                    <Button key="buy">{t("homepage")}</Button>
                                ]}
                            />
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
