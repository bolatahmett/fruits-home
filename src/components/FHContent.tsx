import React, { ReactNode } from 'react'
import { Row, Col } from 'antd';
import FHContentCard from './FHContentCard';


interface ContentCard {
    ImageUrl: string;
    AltInfo: string;
    Title: string;
    Description: string;
    Price: string;
    StockStatus: string;
}

interface FHContentState {
    page: ReactNode
}


export default class FHContent extends React.Component<any, FHContentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            page: <></>
        }
    }

    componentDidMount() {
        const contentCardItems: ContentCard[][] = [[{
            ImageUrl: "domates.jpeg",
            AltInfo: "example",
            Title: "помидоры",
            Description: "подробное объяснение",
            Price: "20рубль",
            StockStatus: "В наличии"
        } as ContentCard, {
            ImageUrl: "portakal.jpg",
            AltInfo: "example",
            Title: "оранжевый",
            Description: "подробное объяснение",
            Price: "20рубль",
            StockStatus: "В наличии"
        } as ContentCard], [{
            ImageUrl: "domates.jpeg",
            AltInfo: "example",
            Title: "помидоры",
            Description: "подробное объяснение",
            Price: "20рубль",
            StockStatus: "В наличии"
        } as ContentCard, {
            ImageUrl: "portakal.jpg",
            AltInfo: "example",
            Title: "оранжевый",
            Description: "подробное объяснение",
            Price: "20рубль",
            StockStatus: "В наличии"
        } as ContentCard]];

        const defaultContent: React.ReactNode = contentCardItems.map((cardItem: any) => {
            return <>
                <Row justify="center" align="middle">
                    <Col xs={11} sm={11} md={8} lg={8} xl={6} style={{ margin: "1px" }}>
                        <FHContentCard imageUrl={cardItem[0].ImageUrl} altInfo={cardItem[0].AltInfo} title={cardItem[0].Title} description={cardItem[0].Description} price={cardItem[0].Price} stockStatus={cardItem[0].StockStatus}></FHContentCard>
                    </Col>
                    <Col xs={11} sm={11} md={8} lg={8} xl={6} style={{ margin: "1px" }} >
                        <FHContentCard imageUrl={cardItem[1].ImageUrl} altInfo={cardItem[1].AltInfo} title={cardItem[1].Title} description={cardItem[1].Description} price={cardItem[1].Price} stockStatus={cardItem[1].StockStatus}></FHContentCard>
                    </Col>
                </Row>
                <p></p>
            </>
        })

        this.setState({
            page: defaultContent
        });
    }

    render(): React.ReactNode {

        return (
            <>
                {this.state.page}

            </>
        );
    }
}
