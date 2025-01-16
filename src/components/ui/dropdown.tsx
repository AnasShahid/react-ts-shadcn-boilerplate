import { Dropdown as AntDropdown } from 'antd';
import { DropdownProps as AntDropdownProps } from 'antd/lib/dropdown';
import React from 'react';

export interface DropdownProps extends AntDropdownProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children, ...props }) => {
  return <AntDropdown {...props}>{children}</AntDropdown>;
};
