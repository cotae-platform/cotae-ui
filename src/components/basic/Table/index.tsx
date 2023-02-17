import RCTable from 'rc-table';
import { TableColumns, TableRows } from '@src/types/table';

interface Props {
  columns: TableColumns[];
  data: TableRows[];
}

function Table({ columns, data }: Props) {
  return (
    <RCTable columns={columns} data={data} style={{ border: '1px solid black', padding: '20px' }} />
  );
}

export default Table;
