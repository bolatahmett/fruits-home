import { PageHeader, Tabs, Button, Statistic, Descriptions, Card, Row, Col } from 'antd';
import React from 'react';
import Meta from 'antd/lib/card/Meta';

const { TabPane } = Tabs;

export default class FHTitle extends React.Component {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <>
                <Row>
                    <Col span={24}>

                        <Row>
                            <Col span={4}>
                                test
                            </Col>
                        </Row>
                        <Row >
                            <Col >

                            </Col>
                        </Row>


                    </Col>

                </Row>




                {/* <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card> */}


            </>
        );
    }
}