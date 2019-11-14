import React from 'react';
import styles from './Publictions.module.css';

const Publication = ({ publicationTitle, publicationText }) => (
  <article className={styles.publication}>
    <h2>{publicationTitle}</h2>
    <p>{publicationText}</p>
  </article>
);

export default Publication;
