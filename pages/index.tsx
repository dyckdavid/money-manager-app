import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <title>Money-Manager</title>
      <h1 className='title'>Money Managing System</h1>
      <a href='/listing'><button className='treedots'>Listings</button></a>
    </div>
  )
}
