import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Center } from '@mantine/core';
import Form from './formone'
import Homebutton from '../../components/homebutton'
import { Space } from '@mantine/core';
import Listingback from '../../components/listingback';
import Nav from '../../components/navbar'

export default function Adding() {
  return (
    <div>
        
      <title>Listings - Money-Manager</title>
      <Nav></Nav>
      <Space h="xl" />
      
        <Listingback></Listingback>
        <Space w="md" />
        
      
      <Center><h1 className='title'>ADD LISTING</h1></Center>

      <Form></Form>

    </div>
  )
}
