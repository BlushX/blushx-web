import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">Welcome to BlushX </h1>
    <div>
      <Link to="library">
        <button className="btn btn-lg btn-primary"> Visit</button>
      </Link>
    </div>
  </div>
);

export default HomePage;