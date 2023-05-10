import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ShowListStyles.css"

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='overlay2'>
      <h1>CineList</h1>
      <div className="show-list">
        {shows.map(show => (
          <div className="show-item" key={show.show.id}>
            <h2>{show.show.name}</h2>
            <img src={show.show.image?.medium} alt={show.show.name} />
            <p>Type: {show.show.type}</p>
            <p>Language: {show.show.language}</p>
            
            <Link to={`/summary/${show.show.id}`}>
              <button className="summary-button">View Summary</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
