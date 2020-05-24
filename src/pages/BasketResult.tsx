import React from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Button, Row, Col, Steps, Result, Divider } from 'antd';
import { Product } from '../Model/Product';
import { Typography } from 'antd';
import { addToBasket } from './../redux/actions/actions';
import ExtractOfAccount from '../components/ExtractOfAccount';
const { Text } = Typography;
const { Step } = Steps;


class BasketResult extends React.Component<any, any> {
    state = { current: 1 };
    constructor(props: any) {
        super(props);

        this.decreaseCurrent = this.decreaseCurrent.bind(this);
        this.increaseCurrent = this.increaseCurrent.bind(this);
        this.increaseProductQuantity = this.increaseProductQuantity.bind(this);
        this.decreaseProductQuantity = this.decreaseProductQuantity.bind(this);
    }

    decreaseCurrent() {
        this.setState({
            current: this.state.current - 1
        });
    }

    increaseCurrent() {
        debugger;
        if (this.props.user.Name) {
            this.setState({
                current: this.state.current + 1
            })
        } else {
            // history.pushState(null, '/login')
        }
    }

    increaseProductQuantity(product: Product) {
        this.props.addToBasket({
            ProductCode: product.ProductCode,
            ProductType: product.ProductType,
            Quantity: 1,
            ImageUrl: product.ImageUrl
        } as Product);
    }

    decreaseProductQuantity(product: Product) {
        if (this.props.basket.length > 0) {
            this.props.addToBasket({
                ProductCode: product.ProductCode,
                ProductType: product.ProductType,
                Quantity: -1,
                ImageUrl: product.ImageUrl
            } as Product);
        }
    }

    render() {

        let content = <> <p style={{
            fontStyle: "italic", color: "black"
        }}> Ваша корзина пуста</p> </>;
        if (this.props.basket.length > 0) {
            content = <List
                bordered={true}
                itemLayout="horizontal"
                dataSource={this.props.basket}
                renderItem={(product: Product) => (
                    <List.Item
                        actions={[
                            <Button type="ghost" shape="circle" onClick={() => this.decreaseProductQuantity(product)}>-</Button>,
                            <Button type="ghost" shape="circle" onClick={() => this.increaseProductQuantity(product)}>+</Button>
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

        const totalQuantity = 1000;

        return (
            <>
                <Row justify={"center"}>
                    <Col xs={22} sm={22} md={12} lg={12} xl={12}>
                        <Steps current={this.state.current} size="small" labelPlacement={"vertical"}>
                            <Step title="Просмотр корзины" />
                            <Step title="оплата" />
                            <Step title="завершение" />
                        </Steps>
                    </Col>
                </Row>
                <Divider></Divider>
                <Row justify="center" align="middle">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>

                        {
                            this.state.current === 1 && <>
                                {content}
                                <ExtractOfAccount></ExtractOfAccount>
                            </>
                        }

                        {
                            this.state.current === 2 && <>
                                <p style={{
                                    fontStyle: "italic", color: "black"
                                }}>Отправка денег на iban: 1234567890</p>
                            </>
                        }

                        {
                            this.state.current === 3 && <>
                                <Result
                                    status="success"
                                    title="Ваш заказ был получен."
                                    subTitle="Номер заказа: 2017182818828182881"
                                    extra={[
                                        <Button type="primary" key="console">
                                            Перейти к заказу </Button>,
                                        <Button key="buy">дома</Button>,
                                    ]}
                                />
                            </>
                        }
                    </Col>
                </Row>
                <Divider></Divider>
                <Row justify="center" align={"middle"}>
                    <Col xs={11} sm={11} md={8} lg={8} xl={6}>
                        <Button type={"default"} shape="round" size={"large"} onClick={this.decreaseCurrent} disabled={this.state.current === 0}> назад  </Button>

                    </Col>
                    <Col xs={11} sm={11} md={8} lg={8} xl={6} style={{ textAlignLast: "right" }}>
                        <Button type={"default"} shape="round" size={"large"} onClick={this.increaseCurrent} disabled={this.state.current === 3}> вперед </Button>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    const basket = state.basket;
    const user = state.user;
    return { basket, user };
};

export default connect(mapStateToProps, {
    addToBasket
})(BasketResult);
