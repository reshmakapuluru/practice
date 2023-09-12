import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Outlet,Link} from 'react-router-dom'
import NavBar from './NavBar';
import Meal from './Meal';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        {/* <Meal></Meal> */}
        <Link to="/Meal">Meal</Link>
        <Outlet></Outlet>
    </div>
  )
}
export default App;