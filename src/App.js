
import React from 'react'
import NavBar from './Compoents/NavBar/NavBar'
import "./App.css";
import {originals,action} from './urls'
import Bannner from './Compoents/Banner/Bannner';
import RowPost from './Compoents/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>  
      <Bannner/>
      <RowPost title="Netflix Originals" url={originals}/>
      <RowPost title="Action Movies" isSmall url={action}/>
    </div>
  );
}

export default App;
