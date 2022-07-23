import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import User from './pages/User'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} exact />
        {/* <Route path='' */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
