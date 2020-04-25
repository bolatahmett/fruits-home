import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';

export default class FHHeaderMenu extends React.Component<any, any> {

    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render() {
        return (

            <div>
                <Menu onClick={this.handleClick} mode="horizontal">
                    <Menu.Item key="mail">
                        <HomeOutlined />
                        <Link to="/">дома</Link>
                    </Menu.Item>
                    <SubMenu
                        title={<span className="submenu-title-wrapper"> <SettingOutlined />  фрукты </span>}>
                        {/* <Menu.Item key="setting:1" > <Link to="/detail-page/fruits/strawberry">клубника</Link> </Menu.Item>
                        <Menu.Item key="setting:2"> <Link to="/detail-page/fruits/orange">оранжевый</Link> </Menu.Item>
                        <Menu.Item key="setting:3"> <Link to="/detail-page/fruits/grapefruit">грейпфрут</Link> </Menu.Item> */}
                        <Menu.Item key="setting:1" > Экзотические фрукты </Menu.Item>
                        <Menu.Item key="setting:2" > цитрусовый  </Menu.Item>
                        <Menu.Item key="setting:3" > Органические фрукты  </Menu.Item>
                        <Menu.Item key="setting:4" > Жесткие фрукты  </Menu.Item>
                        <Menu.Item key="setting:5" > Мягкие фрукты  </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        title={<span className="submenu-title-wrapper"> <SettingOutlined /> овощной </span>}  >
                        <Menu.Item key="setting:6" > Готовые поставки еды </Menu.Item>
                        <Menu.Item key="setting:7" > Сезонные овощи </Menu.Item>
                        <Menu.Item key="setting:8" > Органические овощи </Menu.Item>
                        <Menu.Item key="setting:9" > Зелень, зелень </Menu.Item>
                        <Menu.Item key="setting:10" > Картофель, лук и чеснок </Menu.Item>
                        <Menu.Item key="setting:11" > Салат Ингредиенты </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>

        )
    }
}
