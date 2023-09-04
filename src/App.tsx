import React from 'react';
import { Routes, Route } from "react-router-dom";
import Editor from './Editor';
import MainDataUpdateProvider from './context/MainDataUpdateContext';
// import Notes from './components/notes/notes';

function App() {
  return (
    <div className="App">
      <MainDataUpdateProvider>
        <Routes>
          <Route path='/' element={<Editor />} />
        </Routes>
      </MainDataUpdateProvider>
    </div>
  );
}

export default App;
