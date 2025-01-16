import { Switch, Space } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import React from 'react';
import { useTheme } from '../../hooks/use-theme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Space>
      <span>Theme</span>
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        checkedChildren={<BulbFilled />}
        unCheckedChildren={<BulbOutlined />}
      />
    </Space>
  );
};
