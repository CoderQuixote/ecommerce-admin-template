import { Form, Input, InputNumber, Button, Card, Select, Upload, message, Space } from 'antd';
import { UploadOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

const ProductAdd: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Product:', values);
    message.success('商品添加成功！');
    navigate('/product/list');
  };

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('请检查必填项');
  };

  return (
    <Card title="添加商品">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        style={{ maxWidth: 800 }}
      >
        <Form.Item
          label="商品名称"
          name="name"
          rules={[{ required: true, message: '请输入商品名称' }]}
        >
          <Input placeholder="例如：iPhone 15 Pro" />
        </Form.Item>

        <Form.Item
          label="商品分类"
          name="category"
          rules={[{ required: true, message: '请选择商品分类' }]}
        >
          <Select placeholder="请选择分类">
            <Option value="phone">手机</Option>
            <Option value="computer">电脑</Option>
            <Option value="tablet">平板</Option>
            <Option value="accessory">配件</Option>
            <Option value="appliance">家电</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="商品价格"
          name="price"
          rules={[{ required: true, message: '请输入商品价格' }]}
        >
          <InputNumber 
            prefix="¥" 
            min={0} 
            precision={2} 
            style={{ width: '100%' }}
            placeholder="0.00"
          />
        </Form.Item>

        <Form.Item
          label="库存数量"
          name="stock"
          rules={[{ required: true, message: '请输入库存数量' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} placeholder="0" />
        </Form.Item>

        <Form.Item
          label="商品描述"
          name="description"
          rules={[{ required: true, message: '请输入商品描述' }]}
        >
          <TextArea rows={4} placeholder="商品详细描述..." />
        </Form.Item>

        <Form.Item
          label="商品图片"
          name="images"
          rules={[{ required: true, message: '请上传商品图片' }]}
        >
          <Upload listType="picture-card" maxCount={5}>
            <button style={{ border: 0, background: 'none' }} type="button">
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>上传图片</div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="商品规格"
          name="specs"
        >
          <Form.List name="specs">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item {...restField} name={[name, 'name']} style={{ width: 200 }}>
                      <Input placeholder="规格名 (如：颜色)" />
                    </Form.Item>
                    <Form.Item {...restField} name={[name, 'value']} style={{ width: 200 }}>
                      <Input placeholder="规格值 (如：黑色)" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    添加规格
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              保存商品
            </Button>
            <Button onClick={() => navigate('/product/list')}>
              取消
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductAdd;
