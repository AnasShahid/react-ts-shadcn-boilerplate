import { Input as AntInput } from 'antd';
import { InputProps as AntInputProps } from 'antd/lib/input';
import React from 'react';

export type InputProps = AntInputProps;

export const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};

export const TextArea: React.FC<InputProps> = (props) => {
  return <AntInput.TextArea {...props} />;
};

export const Password: React.FC<InputProps> = (props) => {
  return <AntInput.Password {...props} />;
};
