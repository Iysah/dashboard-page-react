import React from 'react';
import './App.css';

import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

const Div = styled.div`
  
`

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
