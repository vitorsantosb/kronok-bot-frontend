import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '@/pages/home/Home.jsx';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route index exact path={"/"} element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;