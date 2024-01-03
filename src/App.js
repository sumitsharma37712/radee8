import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

// Styles
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    {/* <div className='float'> </div> */}
    <main className="main" id="main">
      <Header />
      <Outlet />
      <Footer />
    </main>
    </>
  );
};

export default App;
