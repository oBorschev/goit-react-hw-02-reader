import React from 'react';

const Publication = ({ publicationTitle, publicationText }) => (
  <article className="publication">
    <h2>{publicationTitle}</h2>
    <p>{publicationText}</p>
  </article>
);

export default Publication;
