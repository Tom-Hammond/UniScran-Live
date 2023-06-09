import React, { useState } from 'react';

const ViewMenus = ({ item, setMyBasket, myBasket}) => {
  const name = useState(item.item_name);
  const price = useState(item.item_price);
  const description = useState(item.description);
  const [image] = useState(item.image);


  function addToBasket() { 
    setMyBasket([...myBasket, item]);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {name}
          </td>
          <td>
            {price}
          </td>
          <td>
            {description}
          </td>
          <td>
          <img src={image} className='menu-image' />            
          </td>
          <td>
            <button type="submit" className="save-button" onClick={addToBasket}>
            Add to basket
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewMenus;
