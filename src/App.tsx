import { createColumnHelper } from '@tanstack/react-table';
import { useEffect, useMemo, useRef } from 'react';

import { Person } from './models';
import { useTable, useProvider } from './hooks';

const App = () => {
  const columnHelper = createColumnHelper<Person>();
  const { actions, state } = useProvider();

  const firtsLoad = useRef(true);

  useEffect(() => {
    if (firtsLoad.current) {
      firtsLoad.current = false;

      return;
    }

    actions.getPeople();
  }, []);

  const { data, columns } = useMemo(() => {
    return {
      columns: [
        columnHelper.accessor('firstName', {
          cell: (info) => info.getValue(),
          footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
          id: 'lastName',
          cell: (info) => <i>{info.getValue()}</i>,
          header: () => <span>Last Name</span>,
          footer: (info) => info.column.id,
        }),
        columnHelper.accessor('age', {
          header: () => 'Age',
          cell: (info) => info.renderValue(),
          footer: (info) => info.column.id,
        }),
        columnHelper.accessor('status', {
          header: 'Status',
          footer: (info) => info.column.id,
        }),
      ],
      data: state.peopleList,
    };
  }, [state.peopleList]);

  const [Table] = useTable(data, columns);

  return (
    <div>
      <h1>Tanstack Table - TypeScript</h1>
      <Table />
    </div>
  );
};

export default App;
