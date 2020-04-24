import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';


const { SubMenu } = Menu;

export default class FHMenu extends React.Component {

    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ minWidth: 120 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.ItemGroup key="products" title={
                    <span>
                        <span>продукты</span>
                    </span>
                }>
                    <SubMenu key="fruits" title="фрукты">
                        <Menu.Item key="1">клубника</Menu.Item>
                        <Menu.Item key="2">оранжевый</Menu.Item>
                        <Menu.Item key="3">грейпфрут</Menu.Item>
                    </SubMenu>
                    <SubMenu key="vegetables" title="овощной">
                        <Menu.Item key="8">
                            помидоры</Menu.Item>
                    </SubMenu>
                </Menu.ItemGroup>

            </Menu>
        );
    }
}
