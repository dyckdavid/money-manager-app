import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Nav from "./components/nav.js"

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <title>Money-Manager</title>
      <h1 className='title'>Money Managing System</h1>
      <p className='treedots'>Listing</p>
      <Link href='/listing' className='button__one'><button>Listings</button></Link>
    </div>
  )
}
