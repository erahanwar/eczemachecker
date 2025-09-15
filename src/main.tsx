import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import POEMAssessment from './pages/POEMAssessment.tsx';
import Eczema101 from './pages/Eczema101.tsx';
import About from './pages/About.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poem-assessment" element={<POEMAssessment />} />
        <Route path="/eczema-101" element={<Eczema101 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
