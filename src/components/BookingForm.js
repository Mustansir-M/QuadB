
import React, { useState } from 'react';
import './BookingFormStyles.css';

function BookingForm({ movieName }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save user details to local storage or session storage
    localStorage.setItem('name', name);
    localStorage.setItem('number', number);

    

    // Reset the form fields
    setName('');
    setNumber('');
  };

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-title">Booking Form</h2>
      <p className="booking-form-movie">Movie: {movieName}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="number" className="form-label">Phone:</label>
          <input type="number" id="number" value={number} onChange={handleNumberChange} required className="form-input" />
        </div>
        <button type="submit" className="form-button">Book Ticket</button>
      </form>
    </div>
  );
}

export default BookingForm;
























