import { Button } from '@mantine/core';
import Link from 'next/link'
import { Center } from '@mantine/core';
import { Space } from '@mantine/core';



function Home() {
  return (
    <Center>
        <Space h="xl" />
    <Link href="/">
    <Button radius="lg" size="md">
      Home
    </Button>
    </Link>
    </Center>
  );
}

export default Home;