import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Center } from '@mantine/core';
import Form from './formone'


export default function Adding() {
  return (
    <div>
        
      <title>Listings - Money-Manager</title>
      <Center><h1 className='title'>Add</h1></Center>

      <Form></Form>

    </div>
  )
}
