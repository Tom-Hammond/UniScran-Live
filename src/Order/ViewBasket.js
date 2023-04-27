import React, { useState } from 'react';

const ViewBasket = (item, myBasket) => {
  const [name] = useState([item.item.item_name]);
  const [price] = useState([item.item.item_price]);
  const [quantity, setQuantity] = useState();
 
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
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
            SSS
          </td>
          <td>
            <button>Update</button>
            <button>Remove</button>
          </td>
        </tr>
      </tbody>    
    </table>
  );
};

export default ViewBasket;



