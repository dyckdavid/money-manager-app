import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';
import { Space } from '@mantine/core';
import Submit from './submit'
import { DatePicker } from '@mantine/dates';

function Demo() {
    return (
      <><TextInput
      style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
            placeholder="Name"
            label="Full name"
            withAsterisk /><Space h="xl" /><DatePicker style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }} placeholder="Pick date" label="Date" withAsterisk /><Space h="xl" /><TextInput
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