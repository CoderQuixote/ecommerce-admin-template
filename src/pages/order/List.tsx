import { Table, Tag, Space, Button, Card, Descriptions, Modal, message } from 'antd';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const OrderList: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 导出 Excel 功能
  const handleExport = () => {
    const exportData = data.map((item: any) => ({
      'Order ID': item.id,
      'User': item.username,
      'Phone': item.phone,
      'Products': item.products.join(','),
      'Amount': item.amount,
      'Status': item.status,
      'Created At': item.createdAt,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '订单列表');
    
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, `订单列表_${new Date().toISOString().split('T')[0]}.xlsx`);
    
    message.success('导出成功！');
  };

  const columns = [
    { title: '订单号', dataIndex: 'id', key: 'id', width: 150 },
    { title: '用户', dataIndex: 'username', key: 'username' },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
    { 
      title: '商品', 
      dataIndex: 'products', 
      key: 'products',
      render: (products: string[]) => products.join('、')
    },
    { 
      title: '金额', 
      dataIndex: 'amount', 
      key: 'amount',
      render: (v: number) => `¥${v}`
    },
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
          'refunded': 'red',
        };
        return <Tag color={colorMap[status]}>{statusMap[status]}</Tag>;
      }
    },
    { title: '下单时间', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="small">
          <Button 
            type="link" 
            size="small" 
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedOrder(record);
              setIsModalVisible(true);
            }}
          >
            详情
          </Button>
          {record.status === 'paid' && <Button type="link" size="small">发货</Button>}
        </Space>
      ),
    },
  ];

  const statusMap: Record<string, string> = {
    'pending': '待支付',
    'paid': '已支付',
    'shipped': '已发货',
    'completed': '已完成',
    'refunded': '已退款',
  };

  const data = [
    { id: 'ORD20260308001', username: '张三', phone: '138****1234', products: ['iPhone 15 Pro', 'AirPods Pro'], amount: 9898, status: 'completed', createdAt: '2026-03-08 10:30' },
    { id: 'ORD20260308002', username: '李四', phone: '139****5678', products: ['MacBook Pro 14"'], amount: 14999, status: 'shipped', createdAt: '2026-03-08 11:20' },
    { id: 'ORD20260308003', username: '王五', phone: '136****9012', products: ['iPad Air'], amount: 4799, status: 'paid', createdAt: '2026-03-08 12:15' },
    { id: 'ORD20260308004', username: '赵六', phone: '137****3456', products: ['iPhone 15'], amount: 5999, status: 'pending', createdAt: '2026-03-08 13:00' },
  ];

  return (
    <div>
      <Card 
        title="订单列表"
        extra={
          <Button 
            type="primary" 
            icon={<DownloadOutlined />} 
            onClick={handleExport}
          >
            导出 Excel
          </Button>
        }
      >
        <Table columns={columns} dataSource={data} rowKey="id" />
      </Card>

      <Modal
        title="订单详情"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        {selectedOrder && (
          <Descriptions column={2} bordered>
            <Descriptions.Item label="订单号">{selectedOrder.id}</Descriptions.Item>
            <Descriptions.Item label="下单时间">{selectedOrder.createdAt}</Descriptions.Item>
            <Descriptions.Item label="用户">{selectedOrder.username}</Descriptions.Item>
            <Descriptions.Item label="手机号">{selectedOrder.phone}</Descriptions.Item>
            <Descriptions.Item label="订单金额">¥{selectedOrder.amount}</Descriptions.Item>
            <Descriptions.Item label="订单状态">{statusMap[selectedOrder.status]}</Descriptions.Item>
            <Descriptions.Item label="商品列表" span={2}>{selectedOrder.products.join('、')}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default OrderList;
