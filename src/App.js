import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('Ascending');

  const changeAscendingHandler = useCallback(() => {
    setListTitle('Ascending');
  }, []);
  const changeDescendingHandler = useCallback(() => {
    setListTitle('Descending');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeAscendingHandler}>Ascending</Button>
      <Button onClick={changeDescendingHandler}>Descending</Button>
    </div>
  );
}

export default App;
