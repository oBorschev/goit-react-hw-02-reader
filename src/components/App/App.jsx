import React from 'react';
import Reader from '../Reader/Reader';
import items from '../../data-json/publications.json';

const App = () => (
  <div className="App">
    <Reader items={items} />
  </div>
);
export default App;
