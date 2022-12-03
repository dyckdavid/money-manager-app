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
import Yearmonthselect from '../components/tableselectyearmonth'


export default function Listings() {
  return (
    <div>
        
      <title>Dashboard - Money-Manager</title>
      <Nav></Nav>
      <Space h="xl" />
      <Center><h1 className='title'>DASHBOARD</h1></Center>
      <Space h="xl" />
      <Center><h1>Total $100.00</h1></Center>
      <Center><h1>Income: $90.00</h1><Space w="xl"/><h1>Expense: $10.00</h1></Center>

      

    </div>
  )
}
