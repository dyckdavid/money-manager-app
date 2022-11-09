import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { ServerStyles, createStylesServer } from '@mantine/next';
import Nav from "./components/nav.js"
import Button from "./components/button"


export default function Home() {
  return (
    <div>
      
      <title>Money-Manager</title>
      <h1 className='title'>Money Managing System</h1>
      
      <Button></Button>
    </div>
  )
}
