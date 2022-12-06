import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { ServerStyles, createStylesServer } from '@mantine/next';
import Button from './components/button'
import { Center } from '@mantine/core';
import Imagedemo from './components/background'
import { Space } from '@mantine/core';
import Homebutton from './components/homebutton'
import Progress from './components/ringprogress'
import Yearselect from './components/homeselectyear'
import { createStyles } from '@mantine/core';
import Nav from './components/navbar';






export default function Home() {
  
  return (
    <div>
      
      <title>Money-Manager</title>
      <Nav></Nav>
      <Center>
      <h1 className='title'>Money Managing APP</h1>
      </Center>
      
      
      <Space h="xl" />
      <Center><h1 className='title'>Welcome (username)</h1></Center>
    </div>
  )
}
