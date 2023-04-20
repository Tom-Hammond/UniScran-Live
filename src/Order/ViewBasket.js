import React, { useState } from 'react';

const ViewBasket = ({}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState();
  
  return (
    <form onSubmit={''} className="view-basket">
      <h1>Basket:</h1>
      <button>Checkout</button>
       <label htmlFor="Name"> name: </label>
       <input className="item-input"
        type="text"
        placeholder="Name"
    
      />
       <label htmlFor="Price"> Price: {price}</label>
       <input className="item-input"
        type="number"
        step="0.01"
        placeholder="Price"
      />
       <label htmlFor="Description"> Quantity:</label>
       <input className="item-input"
        placeholder="Description"

      ></input>
 
      <button type="submit" className="remove-item-button" onClick={''}>Remove</button>
      <button type="submit" className="update-quantiy-button">Update</button>

 
    </form>
  );
};

export default ViewBasket;

