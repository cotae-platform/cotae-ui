import RCTable from 'rc-table';
import { TableColumnType, TableRowType } from '@src/types/table';

interface Props {
  columns: TableColumnType[];
  data: TableRowType[];
}

function Table({ columns, data }: Props) {
  return <RCTable columns={columns} data={data} />;
}

export default Table;
