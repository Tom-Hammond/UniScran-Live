import React, { useState } from 'react';
import './ManageMenu.css';

const AddItemForm = ({ addItem }) => {///Set the inputs for
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, price, description, image });
    setName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-items-form">
       <label htmlFor="Name"> Name:</label>
       <input className="item-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
       <label htmlFor="Price"> Price:</label>
       <input className="item-input"
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
       <label htmlFor="Description"> Description:</label>
       <input className="item-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></input>
       <label htmlFor="Image"> Image:</label>
       <input className="item-input"
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" className="add-item-button">Add Menu Item</button>
    </form>
  );
};

export default AddItemForm;

