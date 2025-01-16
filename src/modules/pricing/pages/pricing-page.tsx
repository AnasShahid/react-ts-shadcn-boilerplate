import { useTranslation } from 'react-i18next';
import { Typography, Space } from 'antd';
import { PricingCard } from '../components/pricing-card';
import { pricingPlans } from '../config/pricing-plans.config';

const { Title, Paragraph } = Typography;

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title level={1} style={{ marginBottom: 16 }}>
          {t('pricing.title')}
        </Title>
        <Paragraph style={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.45)' }}>
          {t('pricing.subtitle')}
        </Paragraph>
      </div>
      <Space size="large" wrap style={{ display: 'flex', justifyContent: 'center' }}>
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </Space>
    </div>
  );
}
