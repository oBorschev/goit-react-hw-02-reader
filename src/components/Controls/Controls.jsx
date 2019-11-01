import React from 'react';

const Controls = ({
  onPrevPublication,
  onNextPublication,
  stateBtnNext,
  stateBtnPrev,
}) => (
  <section className="controls">
    <button
      type="button"
      className="button"
      onClick={onPrevPublication}
      disabled={stateBtnPrev}
    >
      Назад
    </button>
    <button
      type="button"
      className="button"
      onClick={onNextPublication}
      disabled={stateBtnNext}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
