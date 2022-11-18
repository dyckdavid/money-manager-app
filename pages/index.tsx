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
import Nav from './components/navbar'
import Progress from './components/ringprogress'


export default function Home() {
  return (
    <div>
      
      <title>Money-Manager</title>
      <Nav></Nav>
      <Center>
      <h1 className='title'>Money Managing System</h1>
      </Center>
      
      <Space h="xl" />
      <Progress></Progress>
      
      <Space h="xl" />
      <Center><h1 className='title'>David Dyck</h1></Center>
    </div>
  )
}
