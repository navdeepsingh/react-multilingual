import React from 'react';
// Import context and provider
import { MyContext } from './Context';
import './App.css';

function App() {
  return (
    <MyContext.Consumer>
      {context => (
        <div className="App">
          {context.state.language}
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default App;
