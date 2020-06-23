import React from 'react'
import { Button, Popover, Avatar } from 'antd'
import {
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { exitUser } from './../redux/actions/actions';
import { useTranslation } from 'react-i18next';

function HeaderLoginButton(props: any) {

    const { t } = useTranslation();
    const exitUser = () => {
        props.exitUser();
    }

    const content = !props.user || !props.user.Name ? <>
        <div>
            <p>
                <Link to={`/login`}>
                    <Button className="login" type="link" > {t("header.login.button")}</Button>
                </Link>
            </p>
            <p>
                <Link to={`/register`}>
                    <Button className="login" type="link">{t("header.signup.button")}</Button>
                </Link>
            </p>
        </div>
    </> :
        <>
            <div>
                <p>
                    <Button className="login" type="link">{t("header.orders.button")}</Button>
                </p>
                <p>
                    <Button className="login" type="link">{t("header.details.button")}</Button>
                </p>
                <p>
                    <Button className="login" type="link">{t("header.messages.button")}</Button>
                </p>
                <p>
                    <Button className="login" type="link" onClick={exitUser}>{t("header.exit.button")}</Button>
                </p>
            </div>
        </>;
    return (

        <>
            <Popover placement="bottom" content={content} trigger="hover">
                {props.user.Name ? <Avatar style={{ backgroundColor: "green", verticalAlign: 'middle' }} size="default" >
                    {props.user.Name}
                </Avatar> :
                    <Avatar style={{ verticalAlign: 'middle' }} size="small" icon={<UserOutlined />} />
                }
            </Popover>
        </>
    )

}

const mapStateToProps = (state: any) => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps, {
    exitUser
})(HeaderLoginButton);
