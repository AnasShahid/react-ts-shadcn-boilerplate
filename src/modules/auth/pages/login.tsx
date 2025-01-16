import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

export function LoginPage() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmit = async (values: unknown) => {
    // TODO: Implement login logic
    console.log('Login:', values);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Card style={{ width: '100%', maxWidth: 400 }}>
        <Title level={3} style={{ marginBottom: 8 }}>
          {t('auth.login.title')}
        </Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
          {t('auth.login.description', 'Enter your credentials to access your account')}
        </Text>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label={t('auth.login.email')}
            name="email"
            rules={[
              { required: true, message: t('auth.login.emailRequired') },
              { type: 'email', message: t('auth.login.emailInvalid') },
            ]}
          >
            <Input placeholder={t('auth.login.emailPlaceholder')} />
          </Form.Item>

          <Form.Item
            label={t('auth.login.password')}
            name="password"
            rules={[{ required: true, message: t('auth.login.passwordRequired') }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item style={{ marginBottom: 12 }}>
            <Button type="primary" htmlType="submit" block>
              {t('auth.login.submit')}
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Text type="secondary">
              {t('auth.login.noAccount')}{' '}
              <Link to="/auth/signup" style={{ color: '#1677ff' }}>
                {t('auth.login.signUp')}
              </Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
}
