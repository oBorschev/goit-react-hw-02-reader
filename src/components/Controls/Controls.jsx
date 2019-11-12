import React from 'react';

const Controls = ({
  onTogglePublication,
  indexOfPage,
  lengthOfPublications,
}) => (
  <section className="controls">
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
  </section>
);

export default Controls;
