import React from 'react';
import styles from './Controls.module.css';

const Controls = ({
  onTogglePublication,
  indexOfPage,
  lengthOfPublications,
}) => {
  const desadledPrev = indexOfPage === 1 ? true : false;
  const desadledNext = indexOfPage === lengthOfPublications ? true : false;
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        name="previous"
        onClick={onTogglePublication}
        disabled={desadledPrev}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        name="next"
        onClick={onTogglePublication}
        disabled={desadledNext}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;

{
  /* <section className="controls">
    {indexOfPage === 1 ? (
      <button
        type="button"
        className="button"
        name="previous"
        onClick={onTogglePublication}
        disabled={true}
      >
        Назад
      </button>
    ) : (
      <button
        type="button"
        className="button"
        name="previous"
        onClick={onTogglePublication}
      >
        Назад
      </button>
    )}
    {indexOfPage === lengthOfPublications ? (
      <button
        type="button"
        className="button"
        name="next"
        onClick={onTogglePublication}
        disabled={true}
      >
        Вперед
      </button>
    ) : (
      <button
        type="button"
        className="button"
        name="next"
        onClick={onTogglePublication}
      >
        Вперед
      </button>
    )}
  </section> */
}
