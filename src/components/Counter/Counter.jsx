import React from 'react';

const Counter = ({ currentIndex, lengthOfPublications }) => (
  <p className="counter">
    {currentIndex}/{lengthOfPublications}
  </p>
);
export default Counter;
