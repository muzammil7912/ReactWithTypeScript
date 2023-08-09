// Import required modules and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'; // Make sure the file name and path are correct
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import reportWebVitals from './reportWebVitals'; // Check the file name and path


const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
       <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Call the reportWebVitals function to report web vitals metrics
reportWebVitals(); // Make sure this line is correctly importing the function from the file
