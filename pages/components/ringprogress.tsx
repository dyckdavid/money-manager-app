import { RingProgress, Text, Group } from '@mantine/core';



const elements = [
  { position: 1, year: 2022, mass: 12.011, symbol: '00.00', name: 'iCloud' },
  
];



function ringprogress() {
  const rows = elements.map((element) => (
    
    <p key={element.name}>
      <td>{element.name}</td>
    </p>
  ));
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
          { value: 15, color: 'red', tooltip: <p>{rows}</p> },
          { value: 50, color: 'orange', tooltip: 'Apple' },
          { value: 29, color: 'blue', tooltip: 'Other' },
        ]}
      />
    </Group>
  );
}

export default ringprogress;