import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';

function Demo() {
  return (
    <Center>
    <Link href="/listing">
    <Button radius="lg" size="xl">
      Listings
    </Button>
    </Link>
    </Center>
  );
}

export default Demo;