import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div>
      <h2>Here's your Soda!</h2>
      <img src="https://example.com/soda.png" alt="Soda" />
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Soda;
