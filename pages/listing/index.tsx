import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Tabledemo from '../components/table'
import { Center } from '@mantine/core';
import Add from '../components/buttonadd'
import Homebutton from '../components/homebutton'
import { Space } from '@mantine/core';
import Yearmonthselect from '../components/tableselectyearmonth'


export default function Listings() {
  return (
    <div>
        
      <title>Manager  Money-Manager</title>
      
      <Space h="xl" />
      <Center><h1 className='title'>Manager</h1></Center>
      <Center><Yearmonthselect></Yearmonthselect></Center>
      <Space h="xl" />

      <Tabledemo></Tabledemo>
      <Space h="xl" />
      <Add></Add>
      <Space h="xl" />

    </div>
  )
}
