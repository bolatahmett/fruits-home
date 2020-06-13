import React, { Component } from 'react'
import { Button, Popover, Divider, Avatar } from 'antd'
import {
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { exitUser } from './../redux/actions/actions';
import { User } from '../model/User';

function HeaderLoginButton(props: any) {

    const exitUser = () => {
        props.exitUser();
    }

    const content = !props.user || !props.user.Name ? <>
        <div>
            <p>
                <Link to={`/login`}>
                    {/* Giriş yap */}
                    <Button className="login" type="link" >Войти</Button>
                </Link>
            </p>
            <p>
                {/* Üye Ol */}
                <Button className="login" type="link">Стать участником</Button>
            </p>
        </div>
    </> :
        <>
            <div>
                <p>
                    {/* Siparişlerim */}
                    <Button className="login" type="link">Мои заказы</Button>
                </p>
                <p>
                    {/* Detaylarım */}
                    <Button className="login" type="link"> Мои данные</Button>
                </p>
                <p>
                    {/* Mesajlarım */}
                    <Button className="login" type="link">Мои сообщения</Button>
                </p>
                <p>
                    {/* Exit */}
                    <Button className="login" type="link" onClick={exitUser}>Выход</Button>
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
