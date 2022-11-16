import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';
import { Space } from '@mantine/core';
import Submit from './submit'

function Demo() {
    return (
      <><TextInput
      style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
            placeholder="Date"
            label="Enter Date"
            withAsterisk /><Space h="xl" /><TextInput
            style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
                placeholder="Income"
                label="Full Income"
                withAsterisk /><Space h="xl" /><TextInput
                style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
                placeholder="Expense"
                label="Full Expense"
                withAsterisk /><Space h="xl" /><Submit></Submit></>
      
    );
  }

export default Demo;