import { Layout, Menu, Button } from 'antd';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navigationConfig } from '@/config/navigation';
import { LanguageSwitcher } from './language-switcher';
import { SettingsMenu } from './settings-menu';

const { Header: AntHeader } = Layout;

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = navigationConfig.mainNav.map(item => ({
    key: item.href,
    label: t(`common.navigation.${item.title.toLowerCase()}`),
    onClick: () => navigate(item.href),
  }));

  return (
    <AntHeader style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 24px',
      background: '#fff',
    }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontSize: '18px', 
          fontWeight: 600,
          marginRight: 48,
          color: '#000',
        }}>
          {t('common.appName')}
        </Link>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ 
            flex: 1,
            border: 'none',
            background: 'transparent',
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Link to={navigationConfig.authNav.href}>
          <Button type="link">
            {t(`common.navigation.${navigationConfig.authNav.title.toLowerCase()}`)}
          </Button>
        </Link>
        <Link to={navigationConfig.signupNav.href}>
          <Button type="primary">
            {t(`common.navigation.${navigationConfig.signupNav.title.toLowerCase()}`)}
          </Button>
        </Link>
        <SettingsMenu />
      </div>
    </AntHeader>
  );
};
