import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     <Layout>
       <div>
         <h1>Products</h1>
         <ul>
           <li>Product one</li>
           <li>Product one</li>
           <li>Product one</li>
           <li>Product one</li>
         </ul>
       </div>
     </Layout>
  )
}
