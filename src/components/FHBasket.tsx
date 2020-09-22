import React, { useState } from 'react'
import { Popover, Badge, List, Avatar, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Product } from '../model/Product';
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";
import ExtractOfAccount from './ExtractOfAccount';

export function FHBasket(props: any) {

    const { t } = useTranslation()
    const [hovered, setHoverd] = useState(false);

    const hide = () => {
        setHoverd(false);
    };

    const handleHoverChange = (visible: any) => {
        setHoverd(visible);
    };

    const getContent = (): any => {
        let contentDetail = <>{t("basket.empty.label")}</>;
        if (props.basket.length > 0) {
            contentDetail = <List
                itemLayout="horizontal"
                dataSource={props.basket}
                renderItem={(product: Product) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={require(`./../images/${product.ImageUrl}`)} />}
                            title={`${product.ProductCode} - ${product.Price} ${"рубль"}`}
                            description={product.Quantity.toString() + t("typeofweight")}
                        />
                    </List.Item>
                )}
            />
        }
        const buttonDisabled = props.basket.length === 0;

        const content = <>
            {contentDetail}
            <br></br>
            <br></br>
            <br></br>
            <ExtractOfAccount></ExtractOfAccount>
            <Link to={`/basket-result`}>
                <Button disabled={buttonDisabled} className={"button-basket"}
                    onClick={hide}
                >{t("basket.complete.button")}</Button>
            </Link>

        </>;

        return content;
    }

    return (
        <Popover
            content={getContent()}
            trigger="hover"
            visible={hovered}
            onVisibleChange={handleHoverChange}
            title={t("basket.label")}
            placement="leftBottom"
        >
            <Badge count={props.basket.length}>
                {/* <ShoppingCartOutlined /> */}
                <a href="#">
                    <img src={require("./../images/shopping-cart.png")} />
                </a>
            </Badge>
        </Popover>
    )

}

const mapStateToProps = (state: any) => {
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps)(FHBasket);
