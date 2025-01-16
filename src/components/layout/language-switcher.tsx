import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      defaultValue={i18n.language}
      onChange={handleLanguageChange}
      options={[
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
      ]}
      prefix={<GlobalOutlined />}
      style={{ width: 120 }}
    />
  );
};
