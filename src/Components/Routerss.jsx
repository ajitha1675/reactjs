import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionBasedComp from './FunctionBasedComp';
import CounterApp from './CounterApp';
import App from '../App'; 
import Navbar from './Navbar';
import Home from './Home';

const Routerss = () => {
  return (
  <div>
    <Navbar/>
  <div className='w-full  '>
  <Routes>
    <Route path="/" element={<Home />} />
     
    <Route path="function" element={<FunctionBasedComp/>}/>
    <Route path="counter" Component={<CounterApp/>}/>
  </Routes>
  <Routes>

    <Route path="*" element={<h1>Page Not Found 404</h1>} />
  </Routes>
  </div>
  </div>
  )
}

export default Routerss;