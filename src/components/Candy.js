import React from 'react';
import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <h2>Mmm... Candy!</h2>
      <img src="https://example.com/candy.png" alt="Candy" />
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Candy;
