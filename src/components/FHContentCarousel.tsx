import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { ContentCard } from "../model/ContentCard";
import "./content-carousel.css";
import FHContentCard from "./FHContentCard";

export default function FHContentCarousel(props: any) {

    const [dimensions, setDimensions] = useState({
        width:  800,
        height: 182
      });

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
    },[]);

    const updateDimensions = () => {
        if(window.innerWidth < 500) {
          setDimensions({ width: 450, height: 102 });
        } else {
          let update_width  = window.innerWidth-100;
          let update_height = Math.round(update_width/4.4);
          setDimensions({ width: update_width, height: update_height });
        }
      }

    const contentCarousel = props.items && props.items.length > 0 && props.items.map((item: ContentCard, index: number) => {

        const firstItem = props.items[index];
        const secondItem = props.items.length > index + 1 ? props.items[index + 1] : props.items[props.items.length - index + 1];
        const thirdItem = props.items.length > index + 2 ? props.items[index + 2] : props.items[props.items.length - index + 2];

        return <div className={index === 0 ? "item active" : "item"} style={{ height: "100%", justifyContent: "center", contain: "fit" }} >
            <Row justify="center">
                <Col>
                    <Row justify="center" gutter={[4, 4]}>
                        <Col span={8}>
                            {firstItem && <FHContentCard imageUrl={firstItem.ImageUrl} altInfo={firstItem.AltInfo} title={firstItem.Title} description={firstItem.Description} price={firstItem.Price} stockStatus={firstItem.StockStatus} productCode={firstItem.ProductCode} productType={firstItem.ProductType}></FHContentCard>}
                        </Col>
                        <Col span={8}>
                            {secondItem && <FHContentCard imageUrl={secondItem.ImageUrl} altInfo={secondItem.AltInfo} title={secondItem.Title} description={secondItem.Description} price={secondItem.Price} stockStatus={secondItem.StockStatus} productCode={secondItem.ProductCode} productType={secondItem.ProductType}></FHContentCard>}
                        </Col>
                        <Col span={8}>
                            {thirdItem && <FHContentCard imageUrl={thirdItem.ImageUrl} altInfo={thirdItem.AltInfo} title={thirdItem.Title} description={thirdItem.Description} price={thirdItem.Price} stockStatus={thirdItem.StockStatus} productCode={thirdItem.ProductCode} productType={thirdItem.ProductType}></FHContentCard>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    });

    const contentCarouselMobile = props.items && props.items.length > 0 && props.items.map((item: ContentCard, index: number) => {

        const firstItem = props.items[index];

        return <div className={index === 0 ? "item active" : "item"} style={{ height: "100%", justifyContent: "center", contain: "fit" }} >
            <Row justify="center">
                <Col>
                    <Row justify="center">
                        <Col span={24}>
                            {firstItem && <FHContentCard imageUrl={firstItem.ImageUrl} altInfo={firstItem.AltInfo} title={firstItem.Title} description={firstItem.Description} price={firstItem.Price} stockStatus={firstItem.StockStatus} productCode={firstItem.ProductCode} productType={firstItem.ProductType}></FHContentCard>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    });

    return (<>
        <div id={"carousel" + props.id} className="carousel slide" data-ride="carousel" data-type="multi" data-interval="1000000">
            <div className="carousel-inner">
                { dimensions.width > 600 ? contentCarousel : contentCarouselMobile}
            </div>

            <div className="left carousel-control">
                <a href={"#carousel" + props.id} role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
            </div>
            <div className="right carousel-control">
                <a href={"#carousel" + props.id} role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </>);

}
