import React from 'react';
import { Routes, Route } from "react-router-dom";
import Editor from './Editor';
// import Notes from './components/notes/notes';

function App() {
  return (
    <div className="App">
   <Routes>
   <Route path='/' element={<Editor />} />
   </Routes>
    </div>
  );
}

export default App;
