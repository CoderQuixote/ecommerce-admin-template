import { Table, Tag, Space, Button, Card, Avatar } from 'antd';

const UserList: React.FC = () => {
  const columns = [
    { 
      title: '用户', 
      dataIndex: 'username', 
      key: 'username',
      render: (username: string, record: any) => (
        <Space>
          <Avatar src={record.avatar}>{username[0]}</Avatar>
          <span>{username}</span>
        </Space>
      )
    },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: number) => (
        <Tag color={status === 1 ? 'green' : 'red'}>
          {status === 1 ? '正常' : '禁用'}
        </Tag>
      )
    },
    { title: '注册时间', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small" danger>禁用</Button>
        </Space>
      ),
    },
  ];

  const data = [
    { id: 1, username: '张三', avatar: '', phone: '138****1234', email: 'zhang***@qq.com', status: 1, createdAt: '2026-01-15' },
    { id: 2, username: '李四', avatar: '', phone: '139****5678', email: 'li***@163.com', status: 1, createdAt: '2026-02-10' },
    { id: 3, username: '王五', avatar: '', phone: '136****9012', email: 'wang***@gmail.com', status: 0, createdAt: '2026-02-20' },
  ];

  return (
    <Card title="用户列表">
      <Table columns={columns} dataSource={data} rowKey="id" />
    </Card>
  );
};

export default UserList;
