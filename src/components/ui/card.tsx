import { Card as AntCard } from 'antd';
import { CardProps as AntCardProps } from 'antd/lib/card';
import React from 'react';

export interface CardProps extends AntCardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <AntCard {...props}>{children}</AntCard>;
};

Card.defaultProps = {
  bordered: true,
};
