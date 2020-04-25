import React, { Component } from 'react'
import { Popover, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

class FHBasket extends React.Component<any, any> {

    render() {

        let content = this.props.basket.map((product: any) => {
            return (
                <>
                    <div>
                        <p>{product.quantity} килограмм  {product.productCode}</p>
                    </div>
                </>
            );
        });

        return (
            <Popover
                content={content}
                title="корзина">
                <Badge count={this.props.basket.length}>
                    <ShoppingCartOutlined style={{ fontSize: '22px', color: '#08c' }} />
                </Badge>
            </Popover>
        )
    }
}


const mapStateToProps = (state: any) => {
    debugger;
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps)(FHBasket);
