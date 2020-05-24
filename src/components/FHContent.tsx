import React, { ReactNode } from 'react'
import { Row, Col, Drawer } from 'antd';
import FHContentCard from './FHContentCard';
import { connect } from 'react-redux';
import DetailPage from '../pages/DetailPage';
import FHDrawer from './FHDrawer';
import { ContentCard } from '../Model/ContentCard';
import Products from './../Dto/Products.json';


interface FHContentState {
    page: ReactNode
}

class FHContent extends React.Component<any, FHContentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            page: <></>
        }
    }

    render(): React.ReactNode {
        const ContentCardItems: ContentCard[][] = Products;
        const defaultContent: React.ReactNode = [0, 1, 2, 3, 4, 5, 6].map((index: any) => {
            let cardItemL = ContentCardItems[0][index];
            let cardItemR = ContentCardItems[1][index];
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

        return <>
            {
                defaultContent
            }
        </>
    }
}

const mapStateToProps = (state: any) => {
    const todos = state.todos;
    return { todos };
};

export default connect(mapStateToProps)(FHContent);
