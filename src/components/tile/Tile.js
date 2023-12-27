import React from 'react';

// Style
import './Tile.css';

const Tile = ({ percentage, title, smallcont }) => {
  return (
    <div className="tile">
      <h2 style={{display:"flex"}}>{percentage} <span style={{fontSize:"10px"}}>  * </span></h2>
      <small >{title}</small>
      <p >{smallcont}</p>
    </div>
  );
};

export default Tile;
