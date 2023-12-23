import React from 'react';

// Style
import './Card.css';

const Card = ({ slogan, title, description, link }) => {
  return (
    <article className="card">
      <small className="text-green">{slogan}</small>
      <h5>{title}</h5>
      <p>{description}</p>
      <a href={link} className="card-button">
        Learn More
      </a>
    </article>
  );
};

export default Card;
