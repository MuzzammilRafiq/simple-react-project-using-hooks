import './App.css';
import React from 'react';
import Header from './Components/Header';
import SampleInfo from './Components/SampleInfo';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <SampleInfo/>
      </div>
    </div>
  );
}

export default App;
