import { Table } from '@mantine/core';

const elements = [
    { position: 1, mass: 12.011, symbol: '00.00', name: 'iCloud' },
    { position: 2, mass: 14.007, symbol: '10.00', name: 'Web Development' },
    { position: 3, mass: 88.906, symbol: '12.45', name: 'MacBook Pro M1 Max' },
    { position: 4, mass: 137.33, symbol: '08.76', name: 'iPhone 14 Pro Max' },
    { position: 5, mass: 140.12, symbol: '13.55', name: 'Air Pods Pro (2)' },
  ];

function Tabledemo() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Income</th>
          <th>Expense</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default Tabledemo;