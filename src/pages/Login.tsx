import { Form, Input, Button, Card, message, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = async (values: any) => {
    console.log('Login:', values);
    // 模拟登录
    if (values.username === 'admin' && values.password === '123456') {
      message.success('登录成功！');
      navigate('/dashboard');
    } else {
      message.error('用户名或密码错误（admin/123456）');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card" title="电商后台管理系统">
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="用户名 (admin)" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码 (123456)"
            />
          </Form.Item>

          <Form.Item>
            <div className="login-options">
              <Checkbox>记住密码</Checkbox>
              <a href="#">忘记密码？</a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
