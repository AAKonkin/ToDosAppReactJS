import React from 'react';
import './App.css';
import AddItemContainer from './components/AddItem/AddItemContainer.js';

const App = () => {
  // JSX App component
  //-----------------//
  //
  return(
    <div className='App'>
      <div className='container'>
        <h1>TODO List Experience Project (React)</h1>
        <AddItemContainer />
    </div>
    </div>
  )
}

export default App;