import { Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import React from 'react';

function FHMenu(props: any) {
   
    return (
      
        <Menu
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={false}
          onClick={props.menuClick}
          style={{minHeight:"400px", borderRadius: "10px"}}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Ürünler
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Siparişler
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            Raporlar
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
            Kullanıcılar
          </Menu.Item>
        </Menu>
    );
}

export default FHMenu;