// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/PoojaList/PoojaList';
import Products from './Pages/Products/Products';
// import NoPage from './pages/NoPage';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
