/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import { ReactNode, children } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  );
}
