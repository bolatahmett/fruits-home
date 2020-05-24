import React, { Component } from 'react'
import Login from '../components/Login'
import { Col, Row } from 'antd'

export default class LoginPage extends Component {
    render() {
        return (
            <Row justify={"center"}>
                <Col xs={22} sm={22} md={12} lg={8} xl={8}>
                    <Login></Login>
                </Col>
            </Row>
        )
    }
}
