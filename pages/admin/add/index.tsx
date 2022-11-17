import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Center } from '@mantine/core';
import Form from './formone'
import Homebutton from '../../components/homebutton'
import { Space } from '@mantine/core';

export default function Adding() {
  return (
    <div>
        
      <title>Listings - Money-Manager</title>
      <Space h="xl" />
      <Center>
        <Homebutton></Homebutton>
      </Center>
      <Center><h1 className='title'>ADD</h1></Center>

      <Form></Form>

    </div>
  )
}
