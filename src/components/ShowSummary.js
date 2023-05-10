
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShowSummaryStyles.css';
import BookingForm from './BookingForm';

function ShowSummary() {
  const { id } = useParams();
  const [summary, setSummary] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [movieName, setMovieName] = useState('');

  useEffect(() => {
    // Fetch show summary and movie name from the API
    Promise.all([
      fetch(`https://api.tvmaze.com/shows/${id}`).then(response => response.json()),
      fetch(`https://api.tvmaze.com/shows/${id}`).then(response => response.json())
    ])
      .then(([summaryData, movieData]) => {
        // Remove <p> tags from the summary
        const parser = new DOMParser();
        const parsedSummary = parser.parseFromString(summaryData.summary, 'text/html');
        const summaryWithoutPTags = parsedSummary.body.textContent;
        setSummary(summaryWithoutPTags);
        setMovieName(movieData.name);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleBookTicket = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="show-summary-container">
      <h1 className="show-summary-title">Summary</h1>
      <div className="show-summary-content">{summary}</div>

      {showBookingForm ? (
        <BookingForm movieName={movieName} />
      ) : (
        <button className="booking-button" onClick={handleBookTicket}>
          Book Movie Ticket
        </button>
      )}
    </div>
    
  );
}

export default ShowSummary;


























