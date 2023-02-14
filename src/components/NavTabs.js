import React from 'react';
import '../styles.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      {/*TODO: in future, add this collapasable nav bar  */}
      {/* <div class="collapse " id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
      <ul
        className="nav nav-tabs navbar px-3 sticky-top justify-content-start"
        id="navbar"
      >
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            id="about"
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            id="portfolio"
            className={
              currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            id="contact"
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
