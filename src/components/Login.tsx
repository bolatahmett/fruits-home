import React from 'react'
import './../i18n'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/actions';
import { User } from '../model/User';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getUser } from './../dto/ServerHelper';

export function Login(props: any) {

    const { t } = useTranslation()
    let history = useHistory();
    const onFinish = (values: any) => {

        getUser({
            Nickname: values.username,
            Password: values.password
        }).then((result: any) => {
            if (result !== undefined) {
                props.loginUser({
                    Id: "1",
                    Name: values.username,
                    IsAdmin: true
                } as unknown as User);
                message.success(t("login.message.success"));
                history.push("/");
            } else {
                message.warning(t("login.message.warning"));
                return false;
            }
        }).catch((error: any) => {
            message.warning(t("login.message.warning"));
            return false;
        });

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
                rules={[{ required: true, message: t('username.message') }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t('username.placeholder')} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: t('password.message') }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder={t('password.placeholder')}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{ float: "left" }}>{t('remember.checkbox')}</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                    {t('forgotpassword.a')} </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" name="login_button" className="login-form-button"> {t("login.label")} </Button>
                {t("or.label")} <a href="/">{t("register.label")}</a>
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
