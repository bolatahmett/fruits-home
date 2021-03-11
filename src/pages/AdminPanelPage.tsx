import React, { useState } from 'react'
import { Button, Col, Row, Statistic, Timeline } from 'antd'
import { User } from '../model/User';
import { connect } from 'react-redux';
import FHMenu from '../components/AdminPanel/FHMenu';
import { EditContent } from './EditContent';

function AdminPanelPage(props: any) {
   
    const [menuKey,setMenuKey] = useState("2");

    const menuClick = ({ item, key, keyPath, domEvent }: any) => {
        setMenuKey(key);
    }

    return (
        <Row justify={"center"}>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <Row>
                    <Col span={6}>
                        <FHMenu menuClick={menuClick}></FHMenu>
                    </Col>
                    <Col span={18}>
                    { menuKey === "2" ? <EditContent></EditContent> : <>
                    {menuKey === "5" && <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            <Button style={{ marginTop: 16 }} type="primary">
                                Recharge
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} loading />
                        </Col>
                    </Row>}
                    {menuKey === "3" && <Timeline pending="Kurye Yolda">
                        <Timeline.Item>Sipariş Alındı 2021-02-14</Timeline.Item>
                        <Timeline.Item>Paket Hazırlandı 2021-02-14</Timeline.Item>
                    </Timeline>}
                </>}

                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state: any) => {
    const user = state.user as User;
    return { user };
}

export default connect(mapStateToProps)(AdminPanelPage);
 

