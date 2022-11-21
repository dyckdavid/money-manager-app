import { RingProgress, Text, Group } from '@mantine/core';

export default function ringprogress() {
  return (
    <Group position="center">
      <RingProgress
        size={250}
        thickness={16}
        label={
          <Text size="xl" align="center" px="xs" sx={{ pointerEvents: 'none' }}>
            2022
          </Text>
        }
        sections={[
          { value: 15, color: 'cyan', tooltip: 'iCloud' },
          { value: 50, color: 'orange', tooltip: 'Apple' },
          { value: 29, color: 'grape', tooltip: 'Other' },
        ]}
      />
    </Group>
  );
}