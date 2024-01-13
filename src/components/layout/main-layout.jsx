import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

//this is clear way to wrtie code , this componnet will import to _app file , thats mean this template layout will show all arross page