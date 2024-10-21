import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use Routes instead of Switch
import './index.css';
import App from './App';  // Import PdfGenerator (renamed to App) properly
import UserInput from './UserInput';  // Your form page
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<UserInput />} />  {/* Route for the input form page */}
        <Route path="/generate-pdf" element={<App />} />  {/* Route for the PDF generation page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// For reporting web vitals
reportWebVitals();
