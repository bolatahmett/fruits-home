import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd';
import FHContentCard from './FHContentCard';
import { connect } from 'react-redux';
import { ContentCard } from '../model/ContentCard';
import { getAllItems, getItem } from '../dto/ServerHelper';

function FHContent(props: any) {

    const [productItems, setProductItems] = useState([] as ContentCard[]);
    const [spinTip, setSpinTip] = useState("Loading...");

    useEffect(() => {
        debugger;

        getProductItems();

    }, [props.query]);

    const getProductItems = async () => {
        setSpinTip("Loading...");
        const result = await getItem(props.query) as ContentCard[];
        setProductItems(result);
        setSpinTip("");
    };

    const ContentCardItems: ContentCard[] = productItems as unknown as ContentCard[];
    const defaultContent: React.ReactNode = ContentCardItems && ContentCardItems.length > 0 && ContentCardItems.map((item: any, index: number) => {
        return (
            <Row className={"fhcontent"}>
                < Col xs={24} sm={24} md={18} lg={18} xl={18} >
                    <FHContentCard imageUrl={item.ImageUrl} altInfo={item.AltInfo} title={item.Title} description={item.Description} price={item.Price} stockStatus={item.StockStatus} productCode={item.ProductCode} productType={item.ProductType}></FHContentCard>
                </Col>
            </Row>
        )
    });

    return <>
        <Spin spinning={spinTip !== ""} tip={spinTip} size={"large"}> {
            defaultContent
        } </Spin>
    </>
}

const mapStateToProps = (state: any) => {
    const todos = state.todos;
    return { todos };
};

export default connect(mapStateToProps)(FHContent);
