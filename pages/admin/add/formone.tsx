import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';

function Demo() {
    return (
      <><TextInput
            placeholder="Your name"
            label="Full name"
            withAsterisk /><TextInput
                placeholder="Income"
                label="Full Income"
                withAsterisk /></>
      
    );
  }

export default Demo;