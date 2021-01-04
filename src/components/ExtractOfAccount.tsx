import React from 'react'
import { addToBasket } from './../redux/actions/actions';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { Product } from '../model/Product';
import { useTranslation } from 'react-i18next';
const { Text } = Typography;

const ExtractOfAccount = (props: any) => {
    const { t } = useTranslation();
    const totalPrice = props.basket && (props.basket as Array<Product>)
        .reduce((sum: number, current: Product) => sum + Number(current.Price) * Number(current.Quantity), 0);
    return (
        <>
            {props.basket && props.basket.length > 0 &&
                <p>
                    <Text type="danger">{t("total.amount")} : <span>{totalPrice} {t("currency")}</span></Text>
                </p>
            }
        </>
    )
}

const mapStateToProps = (state: any) => {
    debugger;
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps, {
    addToBasket
})(ExtractOfAccount);