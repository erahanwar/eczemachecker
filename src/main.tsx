import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Eczema101 from './pages/Eczema101';
import POEMAssessmentPage from './pages/POEMAssessment';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/eczema-101" element={<Eczema101 />} />
        <Route path="/poem-assessment" element={<POEMAssessmentPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
