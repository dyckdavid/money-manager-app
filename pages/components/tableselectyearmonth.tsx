import { NativeSelect } from '@mantine/core';
import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    container: {
      height: 100,
      width: 350,
  
      
    },
  }));

function Yearmonthselect() {
    const { classes } = useStyles();

  return (
    <><NativeSelect
    className={classes.container}
      data={['November', 'October', 'September', 'August', 'July', 'June', 'May', 'April', 'March' , 'Febuary', 'January']}
      description="Month"
      variant="filled"
      radius="lg"
      size="xl"
      withAsterisk
    /><NativeSelect
    className={classes.container}
      data={['2022', '2021', '2020', '2019']}
      description="Year"
      variant="filled"
      radius="lg"
      size="xl"
      withAsterisk
    /></>
  );
}

export default Yearmonthselect;