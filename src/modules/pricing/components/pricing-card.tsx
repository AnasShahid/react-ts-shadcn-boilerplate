import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Card, Button, Typography, List } from 'antd';
import { PricingPlan } from '../types/pricing-plan';

const { Title, Text } = Typography;

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      style={{
        width: 300,
        borderColor: plan.highlighted ? '#1677ff' : undefined,
        boxShadow: plan.highlighted ? '0 2px 8px rgba(0, 0, 0, 0.15)' : undefined,
      }}
    >
      <Title level={4} style={{ marginBottom: 8 }}>
        {t(`pricing.plans.${plan.id}.name`)}
      </Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
        {t(`pricing.plans.${plan.id}.description`)}
      </Text>

      <div style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0, display: 'inline' }}>
          ${plan.price}
        </Title>
        <Text type="secondary" style={{ marginLeft: 4 }}>
          /{t(`pricing.billingPeriod.${plan.billingPeriod}`)}
        </Text>
      </div>

      <List
        size="small"
        dataSource={plan.features}
        style={{ marginBottom: 24 }}
        renderItem={(feature) => (
          <List.Item style={{ padding: '8px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {feature.included ? (
                <CheckOutlined style={{ color: '#52c41a' }} />
              ) : (
                <CloseOutlined style={{ color: '#00000040' }} />
              )}
              <Text>
                {feature.name}
                {feature.limit && (
                  <Text type="secondary" style={{ marginLeft: 4 }}>
                    ({feature.limit})
                  </Text>
                )}
              </Text>
            </div>
          </List.Item>
        )}
      />

      <Button type={plan.highlighted ? 'primary' : 'default'} block>
        {t('pricing.getStarted')}
      </Button>
    </Card>
  );
}
