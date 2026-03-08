import { Card, Form, Input, Button, Switch, message, Divider } from 'antd';

const Settings: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Settings:', values);
    message.success('设置保存成功！');
  };

  return (
    <div>
      <Card title="系统设置">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="网站名称" name="siteName" initialValue="电商后台管理系统">
            <Input />
          </Form.Item>

          <Form.Item label="客服邮箱" name="supportEmail" initialValue="support@example.com">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="客服电话" name="supportPhone" initialValue="400-123-4567">
            <Input />
          </Form.Item>

          <Divider />

          <Form.Item label="新用户注册" name="allowRegister" valuePropName="checked" initialValue={true}>
            <Switch />
          </Form.Item>

          <Form.Item label="订单自动确认" name="autoConfirmOrder" valuePropName="checked" initialValue={false}>
            <Switch />
          </Form.Item>

          <Form.Item label="库存预警" name="stockWarning" valuePropName="checked" initialValue={true}>
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Settings;
