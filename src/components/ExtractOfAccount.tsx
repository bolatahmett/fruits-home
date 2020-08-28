import React from 'react'
import { addToBasket } from './../redux/actions/actions';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { Product } from '../model/Product';
const { Text } = Typography;

class ExtractOfAccount extends React.Component<any, any> {
    render() {

        const totalPrice = this.props.basket && (this.props.basket as Array<Product>)
            .reduce((sum: number, current: Product) => sum + Number(current.Price) * Number(current.Quantity), 0);
        return (
            <>
                {this.props.basket && this.props.basket.length > 0 &&
                    <p>
                        <Text type="danger">Общая сумма : <span>{totalPrice} рубль</span></Text>
                    </p>
                }
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    debugger;
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps, {
    addToBasket
})(ExtractOfAccount);