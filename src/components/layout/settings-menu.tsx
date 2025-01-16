import { Menu, Dropdown, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export const SettingsMenu: React.FC = () => {
  const { t } = useTranslation();

  const menu = (
    <Menu
      items={[
        {
          key: 'language',
          label: <LanguageSwitcher />,
        },
        {
          key: 'theme',
          label: <ThemeToggle />,
        },
        {
          key: 'profile',
          label: t('common.navigation.profile'),
          onClick: () => {
            /* Handle profile settings */
          },
        },
        {
          key: 'logout',
          label: t('common.navigation.logout'),
          onClick: () => {
            /* Handle logout */
          },
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <Button type="text" icon={<SettingOutlined style={{ color: 'white' }} />} />
    </Dropdown>
  );
};
