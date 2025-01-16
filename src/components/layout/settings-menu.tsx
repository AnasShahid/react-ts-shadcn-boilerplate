import { Menu, Dropdown, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { ThemeToggle } from './theme-toggle';

export const SettingsMenu: React.FC = () => {
  const menu = (
    <Menu
      items={[
        {
          key: 'theme',
          label: <ThemeToggle />,
        },
        {
          key: 'profile',
          label: 'Profile Settings',
          onClick: () => {
            /* Handle profile settings */
          },
        },
        {
          key: 'logout',
          label: 'Logout',
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
