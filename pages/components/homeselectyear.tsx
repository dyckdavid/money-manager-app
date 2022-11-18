import { NativeSelect } from '@mantine/core';
import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    container: {
      height: 100,
      width: 350,
  
      
    },
  }));

function Yearselect() {
    const { classes } = useStyles();

  return (
    <NativeSelect
    className={classes.container}
      data={['2019', '2020', '2021', '2022']}
      description="Year"
      variant="filled"
      radius="lg"
      size="xl"
      withAsterisk
    />
  );
}

export default Yearselect;