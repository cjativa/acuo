import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NavigationBar } from './components/navigationBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
