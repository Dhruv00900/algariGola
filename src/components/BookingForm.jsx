import React, { useState } from 'react';
import '../styles.css';

const BookingForm = () => {
  const [form, setForm] = useState({ name: '', flavor: '', quantity: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Order placed: ${form.quantity} ${form.flavor} for ${form.name}`);
  };

  return (
    <section id="booking" className="booking">
      <h2>Book Your Gola</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="flavor" placeholder="Favorite Flavor" onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default BookingForm;
