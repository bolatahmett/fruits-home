import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import FHShopPopup from './FHShopPopup';

const { Text } = Typography;

interface FHContentCardProps {
    imageUrl: string;
    altInfo: string;
    title: string;
    description: string;
    price: string;
    stockStatus: string;
}

interface FHContentCardState {
    popupVisible: boolean;
}

export default class FHContentCard extends React.Component<FHContentCardProps, FHContentCardState> {

    constructor(props: any) {
        super(props);
        this.state = { popupVisible: true };

        this.handleAddBasket = this.handleAddBasket.bind(this);
    }

    handleAddBasket(): void {
        this.setState({
            popupVisible: true
        });
    }

    render(): React.ReactNode {
        if (this.state.popupVisible) {
            console.log("state set");
        }
        return (
            <>
                <Card
                    cover={
                        <img
                            alt={this.props.altInfo}
                            src={require(`./../images/${this.props.imageUrl}`)}
                            className={"card-image"}
                        />
                    }
                    actions={[
                        <>
                            <InfoCircleOutlined key="info" />
                            <br></br>
                            <Text type={"warning"} className={"content-card-text"}>
                                подробно</Text>
                        </>
                        ,
                        <>
                            <img onClick={this.handleAddBasket} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJ0lEQVRIidXUzypEcRjG8Y8RUSw0F0BK2Sq5BjPKym1YTpZjiWtQNtzBLC3s3cBkpRkLyRJDYSzOK6dxZuYMh/jW26n39/ye5/evwx+jG5WbUnxfU5OPCl4UeE4FPKDcRzdsB8uYHhTUCIPaFwIm0EQ7gjKphsElxkcM2I6xZoRlMoaLEFajt5My7q16aGZxHb3Nfubv1ELYSPWyQuqp8f3onQ0zhznc4wWLfULS5gvoSF7iap4AkqfaxUFPfzcqzUloj/Oaw0pMusXUAN2aZOUdzI8SAOf6X25v7Y1qXsZNDuOO5IgG7TKTwzA4lTzdQpnBI56wVLQ5TOJO/vNPV2625LuDLwf8OBu4kvwZKwXoPtH2se3Wd3SlrOZvUJGsroX1AnT/mDcWLISsf1YYZAAAAABJRU5ErkJggg==" />
                            <br></br>
                            <Text type={"warning"} className={"content-card-text"}>Добавить в корзину</Text>
                        </>
                    ]}
                >
                    <Meta
                        title={this.props.title}
                        description={this.props.description}
                    />
                    <p></p>
                    <p></p>
                    <div className="additional">
                        <p className={"content-card-text"}><Text code>цена:</Text> <span className="quantity">{this.props.price}</span></p>
                        <p className={"content-card-text"}><Text code>Состояние на складе:</Text> <span className="quantity">{this.props.stockStatus}</span></p>
                    </div>
                </Card>
                <FHShopPopup visible={this.state.popupVisible} />
            </>
        )
    }
}
