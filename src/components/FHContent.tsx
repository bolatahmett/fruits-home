import React, { ReactNode } from 'react'
import { Row, Col, Drawer } from 'antd';
import FHContentCard from './FHContentCard';
import { connect } from 'react-redux';
import DetailPage from '../pages/DetailPage';
import FHDrawer from './FHDrawer';



interface ContentCard {
    ImageUrl: string;
    AltInfo: string;
    Title: string;
    Description: string;
    Price: string;
    StockStatus: string;
    ProductType: string;
    ProductCode: string;
}

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
        const ContentCardItems: ContentCard[][] = [[{
            ImageUrl: "tomatoes.jpeg",
            AltInfo: "tomatoes",
            Title: "помидоры",
            Description: "подробное объяснение",
            Price: "20рубль",
            StockStatus: "В наличии",
            ProductType: "vegetable",
            ProductCode: "tomatoes"
        } as ContentCard, {
            ImageUrl: "orange.jpg",
            AltInfo: "example",
            Title: "оранжевый",
            Description: "подробное объяснение",
            Price: "20рубль",
            StockStatus: "В наличии",
            ProductType: "fruit",
            ProductCode: "orange"
        } as ContentCard, {
            ImageUrl: "potato.jpg",
            AltInfo: "potato",
            Title: "картофель",
            Description: "подробное объяснение",
            Price: "26рубль",
            StockStatus: "В наличии",
            ProductType: "fruit",
            ProductCode: "potato"
        } as ContentCard, {
            ImageUrl: "onion.jpg",
            AltInfo: "onion",
            Title: "лук",
            Description: "подробное объяснение",
            Price: "26рубль",
            StockStatus: "В наличии",
            ProductType: "fruit",
            ProductCode: "onion"
        } as ContentCard, {
            ImageUrl: "garlic.jpg",
            AltInfo: "garlic",
            Title: "чеснок",
            Description: "подробное объяснение",
            Price: "26рубль",
            StockStatus: "В наличии",
            ProductType: "fruit",
            ProductCode: "garlic"
        } as ContentCard]

            , [{
                ImageUrl: "grapefruit.jpg",
                AltInfo: "example",
                Title: "помидоры",
                Description: "подробное объяснение",
                Price: "20рубль",
                StockStatus: "В наличии",
                ProductType: "fruit",
                ProductCode: "grapefruit"
            } as ContentCard, {
                ImageUrl: "strawberry.jpg",
                AltInfo: "example",
                Title: "оранжевый",
                Description: "подробное объяснение",
                Price: "20рубль",
                StockStatus: "В наличии",
                ProductType: "fruit",
                ProductCode: "strawberry"
            } as ContentCard, {
                ImageUrl: "pepper.jpg",
                AltInfo: "pepper",
                Title: "перец",
                Description: "подробное объяснение",
                Price: "26рубль",
                StockStatus: "В наличии",
                ProductType: "fruit",
                ProductCode: "pepper"
            } as ContentCard, {
                ImageUrl: "cucumber.jpeg",
                AltInfo: "cucumber",
                Title: "огурец",
                Description: "подробное объяснение",
                Price: "26рубль",
                StockStatus: "В наличии",
                ProductType: "fruit",
                ProductCode: "cucumber"
            } as ContentCard, {
                ImageUrl: "eggplant.jpg",
                AltInfo: "eggplant",
                Title: "баклажан",
                Description: "подробное объяснение",
                Price: "26рубль",
                StockStatus: "В наличии",
                ProductType: "fruit",
                ProductCode: "eggplant"
            } as ContentCard]];

        const defaultContent: React.ReactNode = [0, 1, 2, 3, 4].map((index: any) => {
            debugger;
            let cardItemL = ContentCardItems[0][index];
            let cardItemR = ContentCardItems[1][index];
            return <>
                <Row justify="center" align="middle">
                    <Col xs={11} sm={11} md={8} lg={8} xl={6} style={{ margin: "1px" }}>
                        <FHContentCard imageUrl={cardItemL.ImageUrl} altInfo={cardItemL.AltInfo} title={cardItemL.Title} description={cardItemL.Description} price={cardItemL.Price} stockStatus={cardItemL.StockStatus} productCode={cardItemL.ProductCode} productType={cardItemL.ProductType}></FHContentCard>
                    </Col>
                    <Col xs={11} sm={11} md={8} lg={8} xl={6} style={{ margin: "1px" }} >
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
