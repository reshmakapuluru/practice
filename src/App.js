import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { store } from './app/Store';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cocktail from './features/Cocktail';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';

function App() {
  return (
    <div className="App">
      
    
    <Provider store={store}>

        <Header></Header>
        <Cocktail></Cocktail>
        <Outlet></Outlet>
    </Provider>
    </div>
  );
}



export default App;
