import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import Products from '../components/Products';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <About />
      <Products />
      <BookingForm />
      <Footer />
    </div>
  );
}
