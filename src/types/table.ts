import { FC } from 'react';

export type TableColumnType = {
  title: string;
  dataIndex: string;
  key: string;
  width: string | number;
  render?: FC;
  className?: string;
  align?: 'left' | 'center' | 'right';
  ellipsis?: boolean;
};

export type TableRowType = {
  [key: string]: string;
};
