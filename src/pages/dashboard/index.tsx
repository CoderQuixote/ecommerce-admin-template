import { Card, Col, Row, Statistic, Table, Tag } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, UserOutlined, EyeOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Line, Bar, Pie } from '@ant-design/plots';

const Dashboard: React.FC = () => {
  // 模拟数据
  const overviewData = [
    { title: '总销售额', value: 126560, prefix: '¥', icon: <DollarOutlined />, color: '#1890ff', trend: '+12.5%' },
    { title: '订单数量', value: 8846, icon: <ShoppingCartOutlined />, color: '#52c41a', trend: '+8.3%' },
    { title: '用户数量', value: 5698, icon: <UserOutlined />, color: '#722ed1', trend: '+15.2%' },
    { title: '今日访问', value: 12568, icon: <EyeOutlined />, color: '#faad14', trend: '-3.1%' },
  ];

  const orderColumns = [
    { title: '订单号', dataIndex: 'id', key: 'id', width: 150 },
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
    { id: 'ORD20260308001', user: '张三', amount: 299, status: 'completed' },
    { id: 'ORD20260308002', user: '李四', amount: 599, status: 'shipped' },
    { id: 'ORD20260308003', user: '王五', amount: 199, status: 'paid' },
    { id: 'ORD20260308004', user: '赵六', amount: 899, status: 'pending' },
  ];

  // 销售趋势图表数据
  const salesTrendData = [
    { date: '03-01', sales: 12000 },
    { date: '03-02', sales: 15000 },
    { date: '03-03', sales: 18000 },
    { date: '03-04', sales: 14000 },
    { date: '03-05', sales: 22000 },
    { date: '03-06', sales: 28000 },
    { date: '03-07', sales: 25000 },
    { date: '03-08', sales: 32000 },
  ];

  const salesTrendConfig = {
    data: salesTrendData,
    height: 300,
    xField: 'date',
    yField: 'sales',
    point: { size: 5, shape: 'circle' },
    lineStyle: { lineWidth: 3 },
    label: {
      style: { fill: '#aaa' },
    },
    color: '#1890ff',
  };

  // 订单分布图表数据
  const orderDistributionData = [
    { type: '待支付', value: 120, color: '#faad14' },
    { type: '已支付', value: 280, color: '#52c41a' },
    { type: '已发货', value: 350, color: '#1890ff' },
    { type: '已完成', value: 520, color: '#722ed1' },
    { type: '已退款', value: 30, color: '#ff4d4f' },
  ];

  const orderDistributionConfig = {
    appendPadding: 10,
    data: orderDistributionData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'element-active' }],
    color: ['#faad14', '#52c41a', '#1890ff', '#722ed1', '#ff4d4f'],
  };

  // 商品分类销售数据
  const categorySalesData = [
    { category: '手机', sales: 45000 },
    { category: '电脑', sales: 38000 },
    { category: '平板', sales: 22000 },
    { category: '配件', sales: 15000 },
    { category: '家电', sales: 12000 },
  ];

  const categorySalesConfig = {
    data: categorySalesData,
    height: 300,
    xField: 'category',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: false,
      },
    },
    color: '#52c41a',
  };

  return (
    <div>
      <h1>仪表盘</h1>
      
      {/* 数据统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        {overviewData.map((item, index) => (
          <Col span={6} key={index}>
            <Card>
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.prefix}
                valueStyle={{ color: item.color }}
                suffix={
                  <span style={{ fontSize: 14, color: item.trend.startsWith('+') ? '#52c41a' : '#ff4d4f' }}>
                    {item.trend.startsWith('+') ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    {item.trend}
                  </span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* 销售趋势图 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={16}>
          <Card title="销售趋势">
            <Line {...salesTrendConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="订单分布">
            <Pie {...orderDistributionConfig} />
          </Card>
        </Col>
      </Row>

      {/* 商品分类销售和最新订单 */}
      <Row gutter={16}>
        <Col span={12}>
          <Card title="商品分类销售">
            <Bar {...categorySalesConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="最新订单">
            <Table 
              columns={orderColumns} 
              dataSource={orderData} 
              rowKey="id" 
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
