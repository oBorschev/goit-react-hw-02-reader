import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ currentIndex, lengthOfPublications }) => (
  <p className={styles.counter}>
    {currentIndex}/{lengthOfPublications}
  </p>
);
export default Counter;
