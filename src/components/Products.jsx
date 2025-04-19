import React from 'react';
import '../styles.css';
import ice1 from '../assets/ice1.jpg';
import ice2 from '../assets/ice2.jpg';
import ice3 from '../assets/ice3.jpg';
import ice4 from '../assets/ice4.jpg';

const products = [
  { name: 'Strawberry Chill', image: ice1 },
  { name: 'Kala Khatta', image: ice2 },
  { name: 'Pineapple Punch', image: ice3 },
  { name: 'kachha Aam', image: ice4 },
];

const Products = () => {
  return (
    <section id="products" className="products">
      <h2>Our Flavors</h2>
      <div className="product-grid">
        {products.map((p, idx) => (
          <div className="product-card" key={idx}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
