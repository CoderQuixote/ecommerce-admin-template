import { Card, Col, Row, Statistic, Table, Tag } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';

const Dashboard: React.FC = () => {
  // 模拟数据
  const overviewData = [
    { title: '总销售额', value: 126560, prefix: '¥', icon: <DollarOutlined />, color: '#1890ff' },
    { title: '订单数量', value: 8846, icon: <ShoppingCartOutlined />, color: '#52c41a' },
    { title: '用户数量', value: 5698, icon: <UserOutlined />, color: '#722ed1' },
    { title: '今日访问', value: 12568, icon: <EyeOutlined />, color: '#faad14' },
  ];

  const orderColumns = [
    { title: '订单号', dataIndex: 'id', key: 'id' },
    { title: '用户', dataIndex: 'user', key: 'user' },
    { title: '金额', dataIndex: 'amount', key: 'amount', render: (v: number) => `¥${v}` },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => {
        const colorMap: Record<string, string> = {
          'pending': 'orange',
          'paid': 'green',
          'shipped': 'blue',
          'completed': 'purple',
        };
        return <Tag color={colorMap[status]}>{status}</Tag>;
      }
    },
  ];

  const orderData = [
    { id: 'ORD001', user: '张三', amount: 299, status: 'completed' },
    { id: 'ORD002', user: '李四', amount: 599, status: 'shipped' },
    { id: 'ORD003', user: '王五', amount: 199, status: 'paid' },
    { id: 'ORD004', user: '赵六', amount: 899, status: 'pending' },
  ];

  return (
    <div>
      <h1>仪表盘</h1>
      <Row gutter={16} style={{ marginBottom: 24 }}>
        {overviewData.map((item, index) => (
          <Col span={6} key={index}>
            <Card>
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.prefix}
                valueStyle={{ color: item.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card title="最新订单">
        <Table columns={orderColumns} dataSource={orderData} rowKey="id" pagination={false} />
      </Card>
    </div>
  );
};

export default Dashboard;
