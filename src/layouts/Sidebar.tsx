import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, ShoppingCartOutlined, UserOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('仪表盘', '/dashboard', <DashboardOutlined />),
  getItem('商品管理', '/product', <ShoppingCartOutlined />, [
    getItem('商品列表', '/product/list'),
    getItem('添加商品', '/product/add'),
    getItem('商品分类', '/product/category'),
  ]),
  getItem('订单管理', '/order', <AppstoreOutlined />, [
    getItem('订单列表', '/order/list'),
    getItem('退款管理', '/order/refund'),
  ]),
  getItem('用户管理', '/user', <UserOutlined />),
  getItem('系统设置', '/settings', <SettingOutlined />),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        {collapsed ? '电商' : '电商后台'}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={handleMenuClick}
        inlineCollapsed={collapsed}
      />
      <div
        className="trigger"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </div>
  );
};

export default Sidebar;
