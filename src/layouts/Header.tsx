import { Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const items = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  return (
    <div className="header">
      <div className="header-left">
        <h2>电商后台管理系统</h2>
      </div>
      <div className="header-right">
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} />
            <span>管理员</span>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
