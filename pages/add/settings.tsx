import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { ServerStyles, createStylesServer } from '@mantine/next';
import { Center } from '@mantine/core';
import { Space } from '@mantine/core';
import Nav from '../components/navbar'
import { createStyles } from '@mantine/core';






export default function Settings() {
  
  return (
    <div>
      
      <title>Money-Manager</title>
      <Nav></Nav>
      <Space h="xl" />
    </div>
  )
}