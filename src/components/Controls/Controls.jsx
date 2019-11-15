import React from 'react';
import styles from './Controls.module.css';

const Controls = ({
  onTogglePublication,
  indexOfPage,
  lengthOfPublications,
}) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        name="previous"
        onClick={onTogglePublication}
        disabled={indexOfPage === 1}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        name="next"
        onClick={onTogglePublication}
        disabled={indexOfPage === lengthOfPublications}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
