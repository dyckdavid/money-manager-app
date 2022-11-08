import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Nav from "../components/nav.js"


export default function Home() {
  return (
    <div>
        <Nav></Nav>
      <title>Money-Manager</title>
      <h1 className='title'>Listings</h1>
      <p className='treedots'>...</p>
    </div>
  )
}
