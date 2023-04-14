import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import Header from '../components/Header';
import Main from '../components/Main';
import Basket from '../components/Basket';

function SparMenu() {

    return (
      <div className='App'>
        <Header></Header>
        <div className='row'>
        <Main></Main>
        <Basket></Basket>
        </div>
        
      </div>
    
    
    
    
      // <div className="home-screen-container">
    // <h1 className="home-Title">Spar Menu</h1>
    // <div className="button-container">
    //    <button className="button" onClick={() => console.log('Basket clicked')}>
    //     Basket
    //   </button>
    //     </div>
    // </div>
    )
}

export default SparMenu;