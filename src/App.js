import React from 'react';
import './App.css';
// importing HashRouter
import { HashRouter } from 'react-router-dom';
// importing main page
import MainPage from './Containers/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MainPage />
      </HashRouter>
    </div>
  );
}

export default App;
