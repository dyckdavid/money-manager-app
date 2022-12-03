import { NativeSelect } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { Space } from '@mantine/core';


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
      description="Select Month"
      variant="filled"
      radius="lg"
      size="lg"
      withAsterisk
    /><Space w="xl" /><NativeSelect
    className={classes.container}
      data={['2022', '2021', '2020', '2019']}
      description="Select Year"
      variant="filled"
      radius="lg"
      size="lg"
      withAsterisk
    /></>
  );
}

export default Yearmonthselect;