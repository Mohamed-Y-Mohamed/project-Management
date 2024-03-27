import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const navigate = useNavigate(); // To programmatically navigate the user after sign out

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsUserSignedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("User signed out");
      navigate('/'); // Optionally redirect to home page after sign out
    }).catch((error) => {
      console.error("Sign out error", error);
    });
  };

  return (
    <header className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1>StreamLine<span>.</span></h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${isNavExpanded ? 'expanded' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>

          <button className="mobile-nav-toggle d-xl-none" onClick={() => setIsNavExpanded(!isNavExpanded)}>
            {isNavExpanded ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          </button>
        </nav>

        {isUserSignedIn ? (
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item" onClick={handleSignOut}>Sign Out</button></li>
            </ul>
          </div>
        ) : (
          <Link className="btn-getstarted" to="/login">Get Started</Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
