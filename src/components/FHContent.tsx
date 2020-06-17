import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd';
import FHContentCard from './FHContentCard';
import { connect } from 'react-redux';
import { ContentCard } from '../model/ContentCard';
import { getAllItems } from '../dto/ServerHelper';

function FHContent(props: any) {

    const [productItems, setProductItems] = useState([] as ContentCard[]);
    const [spinTip, setSpinTip] = useState("Loading...");

    useEffect(() => {
        if (productItems && productItems.length === 0) {
            getProductItems();
        }
    }, [productItems]);

    const getProductItems = async () => {
        const result = await getAllItems() as ContentCard[];
        setProductItems(result);
        setSpinTip("");
    };

    const ContentCardItems: ContentCard[] = productItems as unknown as ContentCard[];
    const defaultContent: React.ReactNode = ContentCardItems && ContentCardItems.length > 0 && ContentCardItems.map((item: any, index: number) => {
        if (index % 2 !== 0)
            return <></>;
        let cardItemL = ContentCardItems[index]
        let cardItemR = ContentCardItems[index + 1];

        if (cardItemR === undefined) {
            return (<>
                <Row className={"fhcontent"}>
                    <Col xs={24} sm={24} md={11} lg={8} xl={9}>
                        <FHContentCard imageUrl={cardItemL.ImageUrl} altInfo={cardItemL.AltInfo} title={cardItemL.Title} description={cardItemL.Description} price={cardItemL.Price} stockStatus={cardItemL.StockStatus} productCode={cardItemL.ProductCode} productType={cardItemL.ProductType}></FHContentCard>
                    </Col>
                </Row>
                <p></p>
            </>)
        }
        return (<>
            <Row className={"fhcontent"}>
                <Col xs={24} sm={24} md={11} lg={8} xl={9}>
                    <FHContentCard imageUrl={cardItemL.ImageUrl} altInfo={cardItemL.AltInfo} title={cardItemL.Title} description={cardItemL.Description} price={cardItemL.Price} stockStatus={cardItemL.StockStatus} productCode={cardItemL.ProductCode} productType={cardItemL.ProductType}></FHContentCard>
                </Col>
                <Col xs={24} sm={24} md={11} lg={8} xl={9}>
                    <FHContentCard imageUrl={cardItemR.ImageUrl} altInfo={cardItemR.AltInfo} title={cardItemR.Title} description={cardItemR.Description} price={cardItemR.Price} stockStatus={cardItemR.StockStatus} productCode={cardItemR.ProductCode} productType={cardItemR.ProductType}></FHContentCard>
                </Col>
            </Row>
            <p></p>
        </>)
    });

    return <>

        <Spin spinning={spinTip !== ""} tip={spinTip} size={"large"}>
            {
                defaultContent
            } </Spin> </>
}

const mapStateToProps = (state: any) => {
    const todos = state.todos;
    return { todos };
};

export default connect(mapStateToProps)(FHContent);
