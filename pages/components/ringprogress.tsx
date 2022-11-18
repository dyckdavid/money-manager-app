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
          { value: 40, color: 'cyan', tooltip: 'iCloud – 40 Gb' },
          { value: 25, color: 'orange', tooltip: 'Apple – 25 Gb' },
          { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
        ]}
      />
    </Group>
  );
}