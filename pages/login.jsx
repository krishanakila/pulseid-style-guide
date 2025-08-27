import { useState, useEffect } from 'react';
import { Card, Form, Input, Button, Typography, Checkbox, Divider, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;

export default function LoginPage() {
  const { login, user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  const onFinish = ({ username, password }) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!login(username, password)) {
        message.error('Invalid username or password');
      }
    }, 250);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 16,
        background:
          'radial-gradient(80% 60% at 50% 0%, rgba(22,119,255,0.18) 0%, rgba(11,18,32,1) 60%), #0b1220',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: 420,
          borderRadius: 16,
          border: '1px solid rgba(148,163,184,.2)',
          boxShadow: '0 10px 30px rgba(0,0,0,.35)',
          background:
            'linear-gradient(180deg, rgba(15,23,42,.85), rgba(15,23,42,.85))',
          backdropFilter: 'blur(6px)',
        }}
        bodyStyle={{ padding: 28 }}
      >
        {/* Brand / Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          {/* Put /public/logo.png to show your logo */}
          <Image
            src="/logo-w.svg"
            alt="Logo"
            width={120}
            height={40}
            style={{ objectFit: 'contain' }}
            onError={() => { /* ignore if logo missing */ }}
          />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <Title level={3} style={{ color: '#fff', marginBottom: 4 }}>
            SIGN IN
          </Title>
          <p style={{color:"#FFA653;"}}>Use <i>admin / admin</i> to access the dashboard</p>
        </div>

        <Divider style={{ margin: '16px 0', borderColor: 'rgba(148,163,184,.15)' }} />

        <Form
          name="login"
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label={<Text style={{ color: '#cbd5e1' }}>Username</Text>}
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input
              size="large"
              placeholder="Enter username"
              prefix={<UserOutlined style={{ color: '#94a3b8' }} />}
              autoFocus
              allowClear
            />
          </Form.Item>

          <Form.Item
            label={<Text style={{ color: '#cbd5e1' }}>Password</Text>}
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              size="large"
              placeholder="Enter password"
              prefix={<LockOutlined style={{ color: '#94a3b8' }} />}
              onPressEnter={() => document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
            />
          </Form.Item>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: '#cbd5e1' }}>Remember me</Checkbox>
            </Form.Item>
            <a style={{ color: '#93c5fd' }} onClick={(e) => e.preventDefault()}>
              Forgot password?
            </a>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className='primary-btn'
            loading={loading}
            style={{ fontWeight: 600 }}
          >
            Sign in
          </Button>
        </Form>

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Text type="secondary" style={{ color: '#d1c4b7' }}>By signing in you agree to our terms & privacy.</Text>
        </div>
      </Card>
    </div>
  );
}
