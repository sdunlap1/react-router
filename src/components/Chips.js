import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div>
      <h2>Enjoy your Chips!</h2>
      <img src="/pics/chips.gif" alt="Chips" />
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Chips;
