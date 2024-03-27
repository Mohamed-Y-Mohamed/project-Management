import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is included
import "./navbar.css";
function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Toggle for the navbar collapse
  const toggleNav = () => setIsNavExpanded(!isNavExpanded);

  // Toggle for the notifications dropdown
  const toggleNotificationsDropdown = () => setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);

  // Toggle for the user dropdown
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavExpanded ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarSupportedContent">
          <a className="navbar-brand" href="#">
            Brand
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className={`dropdown ${isNotificationsDropdownOpen ? 'show' : ''}`}>
            <a
              className="link-secondary me-3 dropdown-toggle"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleNotificationsDropdown();
              }}
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded={isNotificationsDropdownOpen ? 'true' : 'false'}
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul className={`dropdown-menu ${isNotificationsDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Some news</a></li>
              <li><a className="dropdown-item" href="#">Another news</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div className={`dropdown ${isUserDropdownOpen ? 'show' : ''}`} style={{paddingRight:"20%"}}>
            <a
              className="dropdown-toggle d-flex align-items-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleUserDropdown();
              }}
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded={isUserDropdownOpen ? 'true' : 'false'}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="User"
                loading="lazy"
              />
            </a>
            <ul className={`dropdown-menu dropdown-menu-end ${isUserDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuAvatar" >
              <li><a className="dropdown-item" href="#">My profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
