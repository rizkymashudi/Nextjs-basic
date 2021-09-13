/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
          <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
    
  );
}
