import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>WebShop</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">

        {children}
        
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout;