import logo from './logo.svg';
import './App.css';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter';
import Todolist from './features/counter/Todolist';
function App() {
  return (
    <Provider store={store}>
    <div className="mybox">
        <h1>Welcome to react redux toolkit</h1>
        <Counter></Counter>
        <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
