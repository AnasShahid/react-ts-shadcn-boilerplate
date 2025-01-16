import { Switch as AntSwitch } from 'antd';
import { SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import React from 'react';

export type SwitchProps = AntSwitchProps;

export const Switch: React.FC<SwitchProps> = (props) => {
  return <AntSwitch {...props} />;
};
