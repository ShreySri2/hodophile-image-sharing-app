import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import User from './pages/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        {/* <Route path='/do' element={<UserLayout/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
