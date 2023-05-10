import React from 'react'
import "./HomeStyles.css"
import ShowList from './ShowList'
import { Link, useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/list');
  };

    
    return (
        
        <div className="overlay">
            <div className="home">
                <h1 className="primary-title">Movie Hub!®</h1>
                <button className="primary-button" onClick={handleClick}>
                    All movies &#129094;
                </button>
            </div>
            
        </div>
        
    )
}

export default Home