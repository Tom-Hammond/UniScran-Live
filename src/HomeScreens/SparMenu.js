import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

function SparMenu(props) {

    return (
    <div className="home-screen-container">
    <h1 className="home-Title">Spar Menu</h1>
    <div className="button-container">
       <button className="button" onClick={() => console.log('Basket clicked')}>
        Basket
      </button>
        </div>
    </div>
    )
}

export default SparMenu;