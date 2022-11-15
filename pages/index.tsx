import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { ServerStyles, createStylesServer } from '@mantine/next';
import Button from './components/button'
import { Center } from '@mantine/core';



export default function Home() {
  return (
    <div>
      
      <title>Money-Manager</title>
      <Center>
      <h1 className='title'>Money Managing System</h1>
      </Center>
      
      <Button></Button>
    </div>
  )
}
