import { Table, Tag, Space, Button, Input, Select, Card } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const ProductList: React.FC = () => {
  const columns = [
    { title: '商品 ID', dataIndex: 'id', key: 'id', width: 100 },
    { 
      title: '商品图片', 
      dataIndex: 'image', 
      key: 'image',
      width: 100,
      render: (img: string) => <img src={img} alt="product" style={{ width: 50, height: 50, objectFit: 'cover' }} />
    },
    { title: '商品名称', dataIndex: 'name', key: 'name' },
    { title: '分类', dataIndex: 'category', key: 'category' },
    { 
      title: '价格', 
      dataIndex: 'price', 
      key: 'price',
      render: (v: number) => `¥${v}`
    },
    { title: '库存', dataIndex: 'stock', key: 'stock' },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: number) => (
        <Tag color={status === 1 ? 'green' : 'red'}>
          {status === 1 ? '上架' : '下架'}
        </Tag>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small" danger>下架</Button>
        </Space>
      ),
    },
  ];

  const data = [
    { id: 1, image: 'https://via.placeholder.com/50', name: 'iPhone 15 Pro', category: '手机', price: 7999, stock: 100, status: 1 },
    { id: 2, image: 'https://via.placeholder.com/50', name: 'MacBook Pro 14"', category: '电脑', price: 14999, stock: 50, status: 1 },
    { id: 3, image: 'https://via.placeholder.com/50', name: 'AirPods Pro', category: '配件', price: 1899, stock: 200, status: 1 },
    { id: 4, image: 'https://via.placeholder.com/50', name: 'iPad Air', category: '平板', price: 4799, stock: 0, status: 0 },
  ];

  return (
    <div>
      <Card>
        <Space style={{ marginBottom: 16 }}>
          <Input placeholder="搜索商品" prefix={<SearchOutlined />} style={{ width: 200 }} />
          <Select placeholder="商品分类" style={{ width: 150 }}>
            <Option value="all">全部分类</Option>
            <Option value="phone">手机</Option>
            <Option value="computer">电脑</Option>
            <Option value="accessory">配件</Option>
          </Select>
          <Select placeholder="状态" style={{ width: 120 }}>
            <Option value="all">全部</Option>
            <Option value="1">上架</Option>
            <Option value="0">下架</Option>
          </Select>
          <Button type="primary" icon={<PlusOutlined />}>添加商品</Button>
        </Space>

        <Table columns={columns} dataSource={data} rowKey="id" />
      </Card>
    </div>
  );
};

export default ProductList;
