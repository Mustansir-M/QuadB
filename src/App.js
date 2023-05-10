import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ShowList/>}/>
        <Route path="/summary/:id" element={<ShowSummary />} />
        {/* <Route path="/booking" element={<BookingForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
