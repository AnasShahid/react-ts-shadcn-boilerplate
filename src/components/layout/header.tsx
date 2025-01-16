import { Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from './language-switcher';
import { SettingsMenu } from './settings-menu';

const { Header: AntHeader } = Layout;

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'home',
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      onClick: () => navigate('/dashboard'),
    },
  ];

  return (
    <AntHeader style={{ display: 'flex', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ flex: 1 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{ background: 'transparent' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <LanguageSwitcher />
        <SettingsMenu />
      </div>
    </AntHeader>
  );
};
