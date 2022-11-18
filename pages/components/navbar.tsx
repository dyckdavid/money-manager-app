import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { Space } from '@mantine/core';
import { Container } from '@mantine/core';

import Burger from './navburger'
import { redirect } from 'next/dist/server/api-utils';

const useStyles = createStyles((theme) => ({
    container: {
      height: 35,
      width: 90,
      marginTop: 10,
      marginLeft: 5,
      
  
      // Media query with value from theme
      [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
          
        
      },
  
      // Static media query
      '@media (max-width: 800px)': {
        
      },
    },
  }));
  

function Demo() {
    const { classes } = useStyles();
  return (
    <>
    
    <Center>
        <Link href="/">
    <Button radius="sm" size="xs" color="gray" className={classes.container}>
      Home
    </Button>
    </Link>
    <Link href="/listing">
    <Button radius="sm" size="xs" color="gray" className={classes.container}>
      Listings
    </Button>
    </Link>
    <Link href="/admin/add">
    <Button radius="sm" size="xs" color="gray" className={classes.container}>
      Add
    </Button>
    </Link>
    </Center>
    </>
  );
}

export default Demo;