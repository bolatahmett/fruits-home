import React, { ReactNode, useState, useEffect } from 'react'
import { Row, Col, Drawer } from 'antd';
import FHContentCard from './FHContentCard';
import { connect } from 'react-redux';
import DetailPage from '../pages/DetailPage';
import FHDrawer from './FHDrawer';
import { ContentCard } from '../model/ContentCard';
import Products from './../dto/Products.json';
import { getAllItems } from '../dto/ServerHelper';

function FHContent(props: any) {

    const [productItems, setProductItems] = useState([] as ContentCard[]);
    useEffect(() => {
        if (productItems.length === 0) {
            debugger;
            getProductItems();
        }

    }, []);

    const getProductItems = async () => {
        const result = await getAllItems() as ContentCard[];
        setProductItems(result);
    };

    const ContentCardItems: ContentCard[] = productItems as unknown as ContentCard[];
    const defaultContent: React.ReactNode = ContentCardItems && ContentCardItems.length > 0 && ContentCardItems.map((item: any, index: number) => {
        if (index % 2 !== 0)
            return;
        let cardItemL = ContentCardItems[index]
        let cardItemR = ContentCardItems[index + 1];
        return <>
            <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={11} lg={8} xl={9} style={{ margin: "1px" }}>
                    <FHContentCard imageUrl={cardItemL.ImageUrl} altInfo={cardItemL.AltInfo} title={cardItemL.Title} description={cardItemL.Description} price={cardItemL.Price} stockStatus={cardItemL.StockStatus} productCode={cardItemL.ProductCode} productType={cardItemL.ProductType}></FHContentCard>
                </Col>
                <Col xs={24} sm={24} md={11} lg={8} xl={9} style={{ margin: "1px" }} >
                    <FHContentCard imageUrl={cardItemR.ImageUrl} altInfo={cardItemR.AltInfo} title={cardItemR.Title} description={cardItemR.Description} price={cardItemR.Price} stockStatus={cardItemR.StockStatus} productCode={cardItemR.ProductCode} productType={cardItemR.ProductType}></FHContentCard>
                </Col>
            </Row>
            <p></p>
        </>
    });

    return <> {
        defaultContent
    } </>
}

const mapStateToProps = (state: any) => {
    const todos = state.todos;
    return { todos };
};

export default connect(mapStateToProps)(FHContent);
