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
        return (
            < Col xs={24} sm={24} md={11} lg={6} xl={6} >
                <FHContentCard imageUrl={item.ImageUrl} altInfo={item.AltInfo} title={item.Title} description={item.Description} price={item.Price} stockStatus={item.StockStatus} productCode={item.ProductCode} productType={item.ProductType}></FHContentCard>
            </Col>
        )
    });

    return <>
        <Spin spinning={spinTip !== ""} tip={spinTip} size={"large"}> {
            <Row className={"fhcontent"}>
                {defaultContent}
            </Row>

        } </Spin>
    </>
}

const mapStateToProps = (state: any) => {
    const todos = state.todos;
    return { todos };
};

export default connect(mapStateToProps)(FHContent);
