import React from 'react';

// Style
import './Tile.css';

const Tile = ({ percentage, title }) => {
  return (
    <div className="tile">
      <h2>{percentage}</h2>
      <b>{title}</b>
    </div>
  );
};

export default Tile;
