/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <Image src="/ChitChat.png" width={300} height={200} alt="profile"/>
        <h1 className={styles['title-homepage']}>Welcome rizky</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque accusantium dolorum? Fugit excepturi dolore culpa incidunt, veritatis ullam, mollitia ipsam, modi nostrum voluptates animi laboriosam veniam dolor eaque repudiandae.</p>
      </Layout>
  );
}
