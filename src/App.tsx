import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;