import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd';
import FHContentCard from './FHContentCard';
import { connect } from 'react-redux';
import { ContentCard } from '../model/ContentCard';
import { getItem } from '../dto/ServerHelper';
import FHContentCarousel from './FHContentCarousel';
import uuidv4 from 'uuid'

function FHContent(props: any) {

    const [productItems, setProductItems] = useState([] as ContentCard[]);
    const [spinTip, setSpinTip] = useState("Loading...");

    useEffect(() => {
        getProductItems();
    }, [props.query]);

    const getProductItems = async () => {
        setSpinTip("Loading...");
        const result = await getItem(props.query) as ContentCard[];
        setProductItems(result);
        setSpinTip("");
    };

    const ContentCardItems: ContentCard[] = productItems as unknown as ContentCard[];
    let defaultContent: React.ReactNode = <></>;
    if (props.type === "carousel") {
        defaultContent = <FHContentCarousel items={ContentCardItems} id={uuidv4.v4()}></FHContentCarousel>;
    } else {
        defaultContent = ContentCardItems && ContentCardItems.length > 0 && ContentCardItems.map((item: any, index: number) => {
            return (
                <Row className={"fhcontent"}>
                    <Col xs={24} sm={24} md={props.span} lg={props.span} xl={props.span} >
                        <FHContentCard imageUrl={item.ImageUrl} altInfo={item.AltInfo} title={item.Title} description={item.Description} price={item.Price} stockStatus={item.StockStatus} productCode={item.ProductCode} productType={item.ProductType}></FHContentCard>
                    </Col>
                </Row>
            )
        });
    }

    return <>
        <Row justify="center" style={{ marginTop: "40px", marginBottom: "20px" }}>
            <Col>
                <Spin spinning={spinTip !== ""} tip={spinTip} size={"large"}> {
                    defaultContent
                } </Spin>
            </Col>
        </Row>

    </>
}

const mapStateToProps = (state: any) => {
    const todos = state.todos;
    return { todos };
};

export default connect(mapStateToProps)(FHContent);
