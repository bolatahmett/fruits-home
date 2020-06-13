import React from 'react'
import { Popover, Badge, List, Avatar, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Product } from '../model/Product';

import {
    Link
} from "react-router-dom";
import { Typography } from 'antd';
import ExtractOfAccount from './ExtractOfAccount';
const { Text } = Typography;

class FHBasket extends React.Component<any, any> {
    state = {
        clicked: false,
        hovered: false,
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    };

    handleHoverChange = (visible: any) => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = (visible: any) => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };
    render() {

        let contentDetail = <>Ваша корзина пуста</>;
        if (this.props.basket.length > 0) {
            contentDetail = <List
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
        const buttonDisabled = this.props.basket.length === 0;
        const totalQuantity = 1000;

        const content = <>
            {contentDetail}
            <br></br>
            <br></br>
            <br></br>
            <ExtractOfAccount></ExtractOfAccount>
            <Link to={`/basket-result`}>
                <Button disabled={buttonDisabled}
                    style={{ border: "2px", borderRadius: "8px", backgroundColor: "antiquewhite", fontSize: "x-small" }}
                    onClick={this.hide}
                >Завершить действие</Button>
            </Link>

        </>;


        return (
            <Popover
                content={content}
                trigger="hover"
                visible={this.state.hovered}
                onVisibleChange={this.handleHoverChange}
                title="корзина"
                placement="leftBottom"
            >
                <Badge count={this.props.basket.length}>
                    <Button shape="circle" icon={<ShoppingCartOutlined />} />
                </Badge>
            </Popover>
        )
    }
}

const mapStateToProps = (state: any) => {
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps)(FHBasket);
