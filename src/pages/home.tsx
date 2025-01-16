import { Button, Typography, Card, Row, Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CodeOutlined, LayoutOutlined, BulbOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CodeOutlined style={{ fontSize: '24px', color: '#1677ff' }} />,
      title: t('home.features.typescript'),
      description: 'Type-safe development with TypeScript',
    },
    {
      icon: <LayoutOutlined style={{ fontSize: '24px', color: '#1677ff' }} />,
      title: t('home.features.components'),
      description: 'Beautiful and accessible components',
    },
    {
      icon: <BulbOutlined style={{ fontSize: '24px', color: '#1677ff' }} />,
      title: t('home.features.themes'),
      description: 'Switch between light and dark modes',
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '24px', color: '#1677ff' }} />,
      title: t('home.features.i18n'),
      description: 'Multi-language support',
    },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <Title style={{ fontSize: 48, marginBottom: 16 }}>{t('home.title')}</Title>
        <Paragraph style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.45)', marginBottom: 32 }}>
          {t('home.subtitle')}
        </Paragraph>
        <Space size="middle">
          <Link to="/auth/signup">
            <Button type="primary" size="large">
              {t('home.getStarted')}
            </Button>
          </Link>
          <Button size="large">{t('home.learnMore')}</Button>
        </Space>
      </div>

      <div style={{ marginBottom: 64 }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
          {t('home.features.title')}
        </Title>
        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                style={{ height: '100%' }}
                bodyStyle={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 24,
                }}
              >
                <div style={{ marginBottom: 16 }}>{feature.icon}</div>
                <Title level={4} style={{ marginBottom: 8 }}>
                  {feature.title}
                </Title>
                <Paragraph type="secondary">{feature.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
