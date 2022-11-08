import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Nav from "../components/nav.js"


export default function Listings() {
  return (
    <div>
        <Nav></Nav>
      <title>Listings - Money-Manager</title>
      <h1 className='title'>Listings</h1>
      <p className='treedots'>...</p>

      <table>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Income</th>
    <th>Expense</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>08/11/2022</td>
    <td>iCloud Payment</td>
    <td>$0.00</td>
    <td>$49.00</td>
    <td>Edit/Delete</td>
  </tr>
  <tr>
    <td>08/11/2022</td>
    <td>Web Development</td>
    <td>$500.00</td>
    <td>$0.00</td>
    <td>Edit/Delete</td>
  </tr>
  <tr></tr>
  </table>
    </div>
  )
}
