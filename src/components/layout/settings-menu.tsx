import { Menu, Dropdown, Button, theme } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export const SettingsMenu: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  const handleVisibleChange = (flag: boolean) => {
    if (!flag) {
      // Only allow closing if not interacting with language or theme
      const activeElement = document.activeElement;
      if (activeElement?.closest('.ant-select, .ant-switch')) {
        return;
      }
    }
    setOpen(flag);
  };

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
            setOpen(false);
          },
        },
        {
          key: 'logout',
          label: t('common.navigation.logout'),
          onClick: () => {
            /* Handle logout */
            setOpen(false);
          },
        },
      ]}
      onClick={(e) => {
        // Prevent menu from closing when clicking language switcher or theme toggle
        if (e.key === 'language' || e.key === 'theme') {
          e.domEvent.preventDefault();
          e.domEvent.stopPropagation();
        }
      }}
    />
  );

  return (
    <Dropdown
      overlay={menu}
      placement="bottomRight"
      trigger={['click']}
      open={open}
      onOpenChange={handleVisibleChange}
    >
      <Button type="text" icon={<SettingOutlined style={{ color: token.colorText }} />} />
    </Dropdown>
  );
};
