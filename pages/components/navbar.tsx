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
    <><>
      <div className='nav__bar__div'>


        <Center>
          <Link href="/">
            <Button radius="xs" size="sm" color="gray" compact className={classes.container}>
              Home
            </Button>
          </Link>
          <Link href="/listing">
            <Button radius="xs" size="sm" color="gray" compact className={classes.container}>
              Manager
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button radius="xs" size="sm" color="gray" compact className={classes.container}>
              Dashboard
            </Button>
          </Link>

        </Center></div>
    </><style jsx>{`

        .nav__bar__div {
          background-color: grey;
          border-bottom: 2px solid black;
          padding-bottom: 10px;
        }
      `}</style></>
  );
}

export default Demo;