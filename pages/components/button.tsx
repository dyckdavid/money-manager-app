import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';

function Demo() {
  return (
    <Center>
    <Link href="/listing">
    <Button radius="md" size="md">
      Listing
    </Button>
    </Link>
    </Center>
  );
}

export default Demo;