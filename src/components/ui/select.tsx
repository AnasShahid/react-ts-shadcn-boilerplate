import { Select as AntSelect } from 'antd';
import { SelectProps as AntSelectProps } from 'antd/lib/select';
import React from 'react';

export type SelectProps = AntSelectProps;

export const Select: React.FC<SelectProps> = (props) => {
  return <AntSelect {...props} />;
};

Select.defaultProps = {
  style: { width: '100%' },
};
