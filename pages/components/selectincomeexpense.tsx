import { NativeSelect } from '@mantine/core';
import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    container: {
      height: 100,
      width: 350,
  
      
    },
  }));

function select() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { classes } = useStyles();

  return (
    <NativeSelect
    className={classes.container}
      data={['Income', 'Expense']}
      description=" Select Income or Expense"
      variant="filled"
      radius="lg"
      size="lg"
      withAsterisk
    />
  );
}

export default select;