import React from 'react';

// Style
import './Card.css';

const Card = ({ slogan, title,bold, description, link }) => {
  return (
    <article className="card">
      <h5>{title}</h5>
      <small className="text-green">{slogan}</small>
      <h6>{bold}</h6>
      <p>{description}</p>
      <a href={link} className="card-button">
        Learn More
      </a>
    </article>
  );
};

export default Card;
