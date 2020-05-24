import React from 'react'
import { addToBasket } from './../redux/actions/actions';
import { connect } from 'react-redux';
import { Typography } from 'antd';
const { Text } = Typography;

class ExtractOfAccount extends React.Component<any, any> {
    render() {
        return (
            <>
                {this.props.basket && this.props.basket.length > 0 && <p> <Text code> Общая сумма </Text> <span>{1000} ruble</span></p>}
            </>
        )
    }
}
export default connect(null, {
    addToBasket
})(ExtractOfAccount);