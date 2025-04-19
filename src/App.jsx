import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.css';
import Header from './components/Header.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import BookingForm from './components/BookingForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <About />
      <Products />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
