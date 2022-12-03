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
      <Center><h3>Total $253.00</h3></Center>
      <Center><h3>Income: $233.00</h3><Space w="xl"/><h3>Expense: $20.00</h3></Center>

      

    </div>
  )
}
