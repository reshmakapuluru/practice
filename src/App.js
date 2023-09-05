import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Outlet,Link} from 'react-router-dom'; 
function App() {
  return (
    <div className="mybox">
        <h1>Welcome to Edupoly ReactJS training</h1>
        <Link to="/Form">My Form</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/Todolist">Todolist</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/Countries">Countries</Link>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
