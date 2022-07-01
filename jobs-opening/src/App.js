import React,{useState} from 'react';
import './App.css';
import { Details } from './Components/Details';
import { List } from './Components/List';

function App() {
const [view, setView] = useState(false);
  return (
    <div className="App">
      { !view? <List /> :
            <Details />   
      } 
    </div>
  );
}

export default App;
 

