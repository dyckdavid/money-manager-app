import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { Space } from '@mantine/core';
import { Container } from '@mantine/core';
import { useState } from 'react';
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
    const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  return (
    <><>
      <div className='nav__bar__div'>


        <Center>
          <Link href="/">
            <Button variant="light" radius="xs" size="sm" color="gray" compact className={classes.container}>
              Home
            </Button>
          </Link>
          <Link href="/listing">
            <Button variant="light" radius="xs" size="sm" color="gray" compact className={classes.container}>
              Manager
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="light" radius="xs" size="sm" color="gray" compact className={classes.container}>
              Dashboard
            </Button>
          </Link>

        </Center>
        </div>
    </><style jsx>{`

        .nav__bar__div {
          background-color: #696969;
          border-bottom: 3px solid black;
          padding-bottom: 10px;
        }
      `}</style></>
  );
}

export default Demo;
