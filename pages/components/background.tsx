import { Image } from '@mantine/core';
import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    width: 350,
    
    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
        width: 580,
        raduis: 10000,
        
      
    },

    // Static media query
    '@media (max-width: 800px)': {
      width: 400,
    },
  },
}));



function Imagedemo() {
    const { classes } = useStyles();
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className={classes.container}>
      <Image
        radius="sm"
        src="https://thewebappmarket.com/wp-content/uploads/2021/07/Money-View-Money-Manager-App-Logo.png"
        alt="Logo"
      />
      
    </div>
  );
}

export default Imagedemo;