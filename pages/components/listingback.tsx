import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';

function Listingback() {
  return (
    <Center>
    <Link href="../listing">
    <Button radius="lg" size="md">
      Back
    </Button>
    </Link>
    </Center>
  );
}

export default Listingback;