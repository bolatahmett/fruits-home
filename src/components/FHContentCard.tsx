import React from 'react'
import { Card, Button, message, Row, Col } from 'antd'
import Meta from 'antd/lib/card/Meta';
import { Typography } from 'antd';
import FHShopPopup from './FHShopPopup';
import { addTodo, openDrawer, addToBasket } from './../redux/actions/actions';
import { connect } from 'react-redux';

import { Product } from '../Model/Product';

const { Text } = Typography;

interface FHContentCardProps {
    imageUrl: string;
    altInfo: string;
    title: string;
    description: string;
    price: string;
    stockStatus: string;
    addTodo: any;
    openDrawer: any;
    addToBasket: any;
    productType: string;
    productCode: string;
}

interface FHContentCardState {
    popupVisible: boolean;
    productQuantity: number;
}

class FHContentCard extends React.Component<FHContentCardProps, FHContentCardState> {

    constructor(props: any) {
        super(props);
        this.state = { popupVisible: false, productQuantity: 1 };

        this.handleAddBasket = this.handleAddBasket.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    handleAddBasket(): void {
        this.props.addToBasket({
            ProductCode: this.props.productCode,
            ProductType: this.props.productType,
            Quantity: this.state.productQuantity,
            ImageUrl: this.props.imageUrl
        } as Product);
        message.success(this.state.productQuantity + ' килограмм ' + this.props.productCode + ' Добавлено в корзину');
    }

    showDetail(): void {
        // dispatches actions to add todo
        this.props.openDrawer(true);
    }

    decreaseQuantity(): void {
        if (this.state.productQuantity === 0) return;
        this.setState({
            productQuantity: this.state.productQuantity - 1,
            popupVisible: false
        });
    }

    increaseQuantity(): void {
        this.setState({
            productQuantity: this.state.productQuantity + 1,
            popupVisible: false
        });
    }

    render(): React.ReactNode {
        if (this.state.popupVisible) {
            console.log("state set");
        }
        return (
            <>
                <Card

                    actions={[
                        // <>
                        //     <Link to={`/detail-page/${this.props.productType}/${this.props.productCode}`}> <InfoCircleOutlined key="info" /> </Link>
                        //     {/* <InfoCircleOutlined key="info" onClick={this.showDetail} /> */}
                        //     <br></br>
                        //     {/* Detay */}
                        //     <Text type={"warning"} className={"content-card-text"}>подробно </Text>
                        // </>,
                        <>
                            <img onClick={this.handleAddBasket} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJ0lEQVRIidXUzypEcRjG8Y8RUSw0F0BK2Sq5BjPKym1YTpZjiWtQNtzBLC3s3cBkpRkLyRJDYSzOK6dxZuYMh/jW26n39/ye5/evwx+jG5WbUnxfU5OPCl4UeE4FPKDcRzdsB8uYHhTUCIPaFwIm0EQ7gjKphsElxkcM2I6xZoRlMoaLEFajt5My7q16aGZxHb3Nfubv1ELYSPWyQuqp8f3onQ0zhznc4wWLfULS5gvoSF7iap4AkqfaxUFPfzcqzUloj/Oaw0pMusXUAN2aZOUdzI8SAOf6X25v7Y1qXsZNDuOO5IgG7TKTwzA4lTzdQpnBI56wVLQ5TOJO/vNPV2625LuDLwf8OBu4kvwZKwXoPtH2se3Wd3SlrOZvUJGsroX1AnT/mDcWLISsf1YYZAAAAABJRU5ErkJggg==" />
                            <br></br>
                            <Text type={"warning"} className={"content-card-text"}>Добавить в корзину</Text>
                        </>
                    ]}


                >

                    <Row>
                        <Col span={12}>
                            <Meta style={{ width: "100%", textAlign: "center" }}
                                avatar={
                                    <img
                                        alt={this.props.altInfo}
                                        src={require(`./../images/${this.props.imageUrl}`)}
                                        className={"card-image"}
                                    />
                                }
                            />
                        </Col>
                        <Col span={12}>
                            <Meta
                                title={this.props.title}
                                description={this.props.description}
                            />
                            <p></p>
                            <p></p>
                            <div className="additional">
                                <p className={"content-card-text"}><Text code>цена:</Text> <span className="quantity">{this.props.price}</span></p>
                                <p className={"content-card-text"}><Text code>Состояние на складе:</Text> <span className="quantity">{this.props.stockStatus}</span></p>
                                <p style={{ textAlign: "center" }}>
                                    <Button type="ghost" shape="circle" onClick={this.decreaseQuantity}>-</Button>
                                    <Text> {this.state.productQuantity} кг </Text>
                                    <Button type="ghost" shape="circle" onClick={this.increaseQuantity}>+</Button>
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Card>



                <FHShopPopup visible={this.state.popupVisible} />
            </>
        )
    }
}

export default connect(
    null,
    {
        addTodo,
        openDrawer,
        addToBasket
    }
)(FHContentCard)
