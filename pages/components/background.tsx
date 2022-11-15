import { Image } from '@mantine/core';

function Imagedemo() {
  return (
    <div style={{ width: 650, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="xl"
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        alt="Random unsplash image"
      />
    </div>
  );
}

export default Imagedemo;