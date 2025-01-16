import { Switch, Space } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import React from 'react';
import { useTheme } from '../../hooks/use-theme';
import { useTranslation } from 'react-i18next';

export const ThemeToggle: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Space>
      <span>{t('common.navigation.theme')}</span>
      <Switch
        checked={theme === 'dark'}
        onChange={handleToggle}
        checkedChildren={<BulbFilled />}
        unCheckedChildren={<BulbOutlined />}
      />
    </Space>
  );
};
