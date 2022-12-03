import { Table } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { Space } from '@mantine/core';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/clientApp';
import { Center } from '@mantine/core';
import { Loader } from '@mantine/core';


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
        width: 350,
        marginLeft: 'auto',
        marginRight: 5,
      },
    },
  }));


const elements = [
    { position: 1, mass: 12.011, symbol: '00.00', name: 'iCloud' },
    { position: 2, mass: 14.007, symbol: '10.00', name: 'Web Development' },
    { position: 3, mass: 88.906, symbol: '12.45', name: 'MacBook Pro M1 Max' },
    { position: 4, mass: 137.33, symbol: '08.76', name: 'iPhone 14 Pro' },
    { position: 5, mass: 140.12, symbol: '13.55', name: 'Air Pods Pro (2)' },
  ];

function Tabledemo() {
    const { classes } = useStyles();
    const [data, setData] = useState<DocumentData>([]);

    useEffect(() => {
        getDocs(collection(db, "users")).then((querySnapshot) => {
            const items = querySnapshot.docs.map((doc) => doc.data());
            setData(items);
        });
    }, []);

    if (data.length === 0) {
        return <Center><Loader size={150} /></Center>;
    }

    return (<Table style={{ marginLeft: 'auto', marginRight: 'auto' }} className={classes.container} striped highlightOnHover withBorder>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Income</th>
          <th>Expense</th>
        </tr>
      </thead>
        <tbody>
            {data.map((item: DocumentData) => (
                <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.description}</th>
                <th>{item.income}</th>
                <th>{item.expense}</th>
                </tr>
            ))}
        </tbody>
    </Table>
  );
}

export default Tabledemo;

