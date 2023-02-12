import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GitHub from '../icons/github.png';
import LinkedIn from '../icons/linkedin-full.png';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    // if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
