import Row from '@src/components/basic/grid/Row';
import Table from '@src/components/basic/Table';
import { TableColumns, TableRows } from '@src/types/table';
import { Padding, Title } from './style';

function TableExample() {
  const columns: TableColumns[] = [
    {
      title: 'No.',
      dataIndex: 'number',
      key: 'number',
      width: 100,
      align: 'center',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 500,
      align: 'center',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      width: 50,
      align: 'center',
    },
    {
      title: 'Correct %',
      dataIndex: 'correctRate',
      key: 'correctRate',
      width: 50,
      align: 'center',
    },
  ];

  const data: TableRows[] = [
    { number: '0', title: 'A+B', level: '1', correctRate: '43.98%' },
    { number: '1', title: 'A-B', level: '1', correctRate: '43.98%' },
    { number: '2', title: 'AxB', level: '1', correctRate: '43.98%' },
    { number: '3', title: 'AxB 2', level: '1', correctRate: '43.98%' },
    { number: '4', title: 'A/B', level: '1', correctRate: '43.98%' },
    { number: '5', title: 'A/B 2', level: '1', correctRate: '43.98%' },
  ];

  return (
    <>
      <Padding>
        <Title bold>Table</Title>
      </Padding>
      <Row>
        <Padding>
          <Table columns={columns} data={data} />
        </Padding>
      </Row>
    </>
  );
}

export default TableExample;
