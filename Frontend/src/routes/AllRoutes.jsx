import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import AllTask from '../pages/AllTask';
import ImportantTask from '../pages/ImportantTask';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../component/PrivateRoute';

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<PrivateRoute>
        <Home />
      </PrivateRoute>}/>
      <Route path='/all-task' element={<PrivateRoute>
        <AllTask />
      </PrivateRoute>}/>
      <Route path='/important-task' element={<PrivateRoute>
        <ImportantTask />
      </PrivateRoute>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<Login />}/>
      <Route path='/sign-up' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes;