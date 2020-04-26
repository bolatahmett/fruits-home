import React from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Button, Row, Col, Steps, Result, Divider } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { Product } from '../Model/Product';
import { Typography } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
const { Text } = Typography;
const { Step } = Steps;


class BasketResult extends React.Component<any, any> {
    state = { current: 1 };
    constructor(props: any) {
        super(props);

        this.decreaseCurrent = this.decreaseCurrent.bind(this);
        this.increaseCurrent = this.increaseCurrent.bind(this);
    }

    decreaseCurrent() {
        this.setState({
            current: this.state.current - 1
        })
    }

    increaseCurrent() {
        this.setState({
            current: this.state.current + 1
        })
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
                    <List.Item>
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
                    <Col xs={11} sm={11} md={8} lg={8} xl={6}>


                        {
                            this.state.current === 1 && <>
                                {content}
                                {this.props.basket.length > 0 && <p> <Text code> Общая сумма </Text> <span>{totalQuantity} ruble</span></p>}
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
    debugger;
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps)(BasketResult);
