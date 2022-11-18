import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Tabledemo from '../components/table'
import { Center } from '@mantine/core';
import Add from '../components/buttonadd'
import Homebutton from '../components/homebutton'
import { Space } from '@mantine/core';
import Nav from '../components/navbar'


export default function Listings() {
  return (
    <div>
        
      <title>Listings - Money-Manager</title>
      <Nav></Nav>
      <Space h="xl" />
      
      <Center><h1 className='title'>Listings</h1></Center>

      <Tabledemo></Tabledemo>
      <Space h="xl" />
      <Add></Add>

    </div>
  )
}
