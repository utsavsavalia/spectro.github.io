import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const ProductInputForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [startNumber, setStartNumber] = useState('');
  const [endNumber, setEndNumber] = useState('');

  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!productName || !description || !batchNumber || !startNumber || !endNumber) {
      alert('Please fill in all fields');
      return;
    }

    // Navigate to the PDF page with the data
    navigate('/generate-pdf', {
      state: {
        productName,
        description,
        batchNumber,
        startNumber: parseInt(startNumber),
        endNumber: parseInt(endNumber),
      },
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Product Information</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>
          Product Name:
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px', width: '100%' }} 
            required 
          />
        </label>
        <label>
          Description:
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px', width: '100%' }} 
            required 
          />
        </label>
        <label>
          Batch Number:
          <input 
            type="text" 
            value={batchNumber} 
            onChange={(e) => setBatchNumber(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px', width: '100%' }} 
            required 
          />
        </label>
        <label>
          Start Number:
          <input 
            type="number" 
            value={startNumber} 
            onChange={(e) => setStartNumber(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px', width: '100%' }} 
            required 
          />
        </label>
        <label>
          End Number:
          <input 
            type="number" 
            value={endNumber} 
            onChange={(e) => setEndNumber(e.target.value)} 
            style={{ padding: '8px', marginBottom: '10px', width: '100%' }} 
            required 
          />
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductInputForm;
