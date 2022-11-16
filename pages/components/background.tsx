import { Image } from '@mantine/core';
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
      width: 460,
    },
  },
}));



function Imagedemo() {
    const { classes } = useStyles();
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className={classes.container}>
      <Image
        radius="xl"
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        alt="Random unsplash image"
      />
    </div>
  );
}

export default Imagedemo;