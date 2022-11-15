import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          InputWrapper: {
            defaultProps: {
              inputWrapperOrder: ['label', 'error', 'input', 'description'],
            },
          },

          Input: {
            defaultProps: {
              variant: 'filled',
            },
          },
        },
      }}
    >
      <TextInput
        label="Name"
        placeholder="Name"
        description="Add your Name"
      />
      <NumberInput
        mt="xl"
        label="Age"
        placeholder="Age"
        description="Add your Age"
      />
      <MultiSelect
        mt="xl"
        data={['Apple', 'Android']}
        label="Select "
        placeholder="Select"
        description="Select"
      />
    </MantineProvider>
  );
}

export default Demo;