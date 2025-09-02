import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.tsx';
import Eczema101 from './pages/Eczema101.tsx';
import { trackPageView } from './utils/analytics.ts';
import './index.css';

// Component to track page views
function AnalyticsTracker() {
  const location = useLocation();

  React.useEffect(() => {
    // Track page view on route change
    const pageTitle = location.pathname === '/' ? 'Eczema Checker - Homepage' : 'Eczema 101 - Educational Articles';
    trackPageView(location.pathname, pageTitle);
  }, [location]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/eczema-101" element={<Eczema101 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
