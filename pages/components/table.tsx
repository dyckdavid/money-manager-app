import { Table } from '@mantine/core';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    container: {
      height: 100,
      width: 350,
  
      // Media query with value from theme
      [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
          width: 1000,
        
      },
  
      // Static media query
      '@media (max-width: 800px)': {
        width: 420,
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      // Static media query iphone 13 mini
      '@media (max-width: 600px)': {
        width: 400,
        marginLeft: 'auto',
        marginRight: 2,
      },
    },
  }));
  

const elements = [
    { position: 1, mass: 12.011, symbol: '00.00', name: 'iCloud' },
    { position: 2, mass: 14.007, symbol: '10.00', name: 'Web Development' },
    { position: 3, mass: 88.906, symbol: '12.45', name: 'MacBook Pro M1 Max' },
    { position: 4, mass: 137.33, symbol: '08.76', name: 'iPhone 14 Pro Max' },
    { position: 5, mass: 140.12, symbol: '13.55', name: 'Air Pods Pro (2)' },
  ];

function Tabledemo() {
    const { classes } = useStyles();
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table style={{ marginLeft: 'auto', marginRight: 'auto' }} className={classes.container} striped highlightOnHover withBorder>
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