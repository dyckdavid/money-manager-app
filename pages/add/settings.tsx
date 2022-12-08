import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { ServerStyles, createStylesServer } from '@mantine/next';
import { Center } from '@mantine/core';
import { Space } from '@mantine/core';
import Nav from '../components/navbar'
import { createStyles } from '@mantine/core';
import { Button } from '@mantine/core';







export default function Settings() {
  
  return (
    <div>
      
      <title>Money-Manager</title>
      <Nav></Nav>
      <Space h="xl" />
      <Center><h1 className='title'>SETTINGS</h1></Center>
      <Center><Link href="/add"><Button>ADD</Button></Link></Center>

    </div>
  )
}
