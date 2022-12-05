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
import Yearselect from '../components/homeselectyear';
import Progress from '../../pages/components/ringprogress'


export default function Listings() {
  return (
    <div>
        
      <title>Dashboard - Money-Manager</title>
      <Nav></Nav>
      <Space h="xl" />
      <Center><h1 className='title'>DASHBOARD</h1></Center>
      <Center><Yearselect></Yearselect></Center>
      <Space h="xl" />
      <Center><div className='container'>
      <Center><h2 className='total'>Total $253.00</h2></Center>
      <Center><h3 className='income'>Income: $233.00</h3><Space w="xl"/><h3 className='expense'>Expense: $20.00</h3></Center></div></Center>


      <Space h="xl" />
      <Space h="xl" />
      <Progress></Progress>
      
      <style jsx>{`

        .total {
          color: white;
        }
        .container {
            border-radius: 20px;
            border: 3px solid black;
            width: 80%;
            height: 170px;
            background-color: #696969;
        }
        .income {
            color: #006400;
            font-size: 30px;
        }
        .expense {
            color: red;
            font-size: 30px;
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  )
}
