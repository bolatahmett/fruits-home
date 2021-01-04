import React from 'react'
import RegistrationForm from '../components/UserRegister'
import { Col, Row } from 'antd'

function LoginPage(props: any) {
    return (
        <Row justify={"center"}>
            <Col xs={22} sm={22} md={12} lg={8} xl={8}>
                <RegistrationForm></RegistrationForm>
            </Col>
        </Row>
    )
}

export default LoginPage;

