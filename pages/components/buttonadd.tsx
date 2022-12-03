import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';

function Demo() {
  return (
    <Center>
    <Link href="/add">
    <Button radius="md" size="xl" compact>
      ADD LISTING
    </Button>
    </Link>
    </Center>
  );
}

export default Demo;