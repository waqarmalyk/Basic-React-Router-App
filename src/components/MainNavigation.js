import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">All Places</Link>
            <Link to="/single-place"> Add Place</Link>
            <Link to="/favorite-place">Favorite Place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
