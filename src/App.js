import logo from './logo.svg';
import './App.css';
import {Outlet,Link} from 'react-router-dom';
function App() {
  return (
    <div className="mybox">
       <Link to="/Homepage">Home</Link>
       &nbsp;&nbsp;&nbsp;
       <Link to="/Aboutus">Aboutus</Link>
       <Outlet></Outlet>
    </div>
  );
}

export default App;
