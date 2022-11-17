import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';
import { Space } from '@mantine/core';
import Submit from './submit'
import { DatePicker } from '@mantine/dates';

function Demo() {
    return (
      <><TextInput
      style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
            placeholder="Decription"
            label="Full Description"
            withAsterisk /><Space h="xl" /><DatePicker style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }} placeholder="Pick date" label="Date" withAsterisk /><Space h="xl" /><NumberInput
            style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
                placeholder="Income"
                defaultValue={10}
                label="Full Income"
                withAsterisk /><Space h="xl" /><NumberInput
                style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}
                placeholder="Expense"
                defaultValue={0}
                label="Full Expense"
                withAsterisk /><Space h="xl" /><Submit></Submit></>
      
    );
  }

export default Demo;