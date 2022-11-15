import { Button } from '@mantine/core';
import Link from 'next/link'

function Demo() {
  return (
    <Link href="/listing">
    <Button radius="md" size="md">
      Listing
    </Button>
    </Link>
  );
}

export default Demo;