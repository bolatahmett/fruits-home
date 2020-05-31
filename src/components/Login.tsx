import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/actions';
import { User } from '../Model/User';
import { useHistory } from 'react-router-dom'

function Login(props: any) {

    let history = useHistory();
    const onFinish = (values: any) => {
        if (values.password === "123" && values.username === "ahmet") {
            props.loginUser({
                Id: "1",
                Name: values.username,
            } as unknown as User);
            history.push("/");

            message.success("Giriş doğrulandı.");
        } else if (values.password === "onur" && values.username === "onur") {
            props.loginUser({
                Id: "2",
                Name: values.username,
                IsAdmin: true
            } as unknown as User);
            history.push("/");

            message.success("Giriş doğrulandı.");
        } else {
            message.warning("Üyelik bilgileri hatalı!");
            return false;
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{ float: "left" }}>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button"> Log in </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    )
}


const mapStateToProps = (state: any) => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps, {
    loginUser
})(Login);
