import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';

function Demo() {
  return (
    <Center>
    <Link href="../admin/add">
    <Button radius="lg" size="xl">
      Add
    </Button>
    </Link>
    </Center>
  );
}

export default Demo;