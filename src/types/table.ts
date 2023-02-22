import { FC } from 'react';

export type TableColumns = {
  title: string;
  dataIndex: string;
  key: string;
  width: string | number;
  render?: FC;
  className?: string;
  align?: 'left' | 'center' | 'right';
  ellipsis?: boolean;
};

export type TableRows = {
  [key: string]: string;
};
