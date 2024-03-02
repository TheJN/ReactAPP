import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Footer from './Footer'; // Import the Footer component

import './style.css'; // Import CSS file


function App() {

  return (
    <div className=''>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center vh-100 ">
        <Form /> {/* Render the Form component */}
      </div>
        <Footer /> {/* Render the Footer component */}
    </div>
  );

}

export default App;
